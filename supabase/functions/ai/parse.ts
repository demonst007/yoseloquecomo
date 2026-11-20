// Robust extraction of a JSON object from model text output.
// Handles: plain JSON, ```json fenced blocks, and JSON surrounded by prose.

export type JsonObject = Record<string, unknown>;

function tryParseObject(text: string): JsonObject | null {
  try {
    const value = JSON.parse(text);
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      return value as JsonObject;
    }
  } catch {
    // not valid JSON
  }
  return null;
}

/**
 * Returns the index of the "}" that closes the "{" at `start`, skipping braces
 * inside JSON strings. Returns -1 if it is never closed.
 */
function findMatchingBrace(text: string, start: number): number {
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = start; i < text.length; i++) {
    const ch = text[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') inString = true;
    else if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

export function extractJsonObject(raw: string): JsonObject | null {
  let text = raw.trim().replace(/^﻿/, "");
  if (!text) return null;

  const direct = tryParseObject(text);
  if (direct) return direct;

  // Strip Markdown code fences (```json ... ```), even if the closing fence is missing.
  const fence = text.match(/```[a-zA-Z]*\s*([\s\S]*?)(?:```|$)/);
  if (fence && fence[1].trim()) {
    text = fence[1].trim();
    const fenced = tryParseObject(text);
    if (fenced) return fenced;
  }

  // Find the outermost balanced {...} that parses (bounded number of attempts).
  let attempts = 0;
  for (
    let start = text.indexOf("{");
    start !== -1 && attempts < 50;
    start = text.indexOf("{", start + 1), attempts++
  ) {
    const end = findMatchingBrace(text, start);
    if (end === -1) continue; // e.g. a stray "{" in prose before the JSON
    const candidate = tryParseObject(text.slice(start, end + 1));
    if (candidate) return candidate;
  }

  // Last resort: first "{" to last "}".
  const first = text.indexOf("{");
  const last = text.lastIndexOf("}");
  if (first !== -1 && last > first) {
    return tryParseObject(text.slice(first, last + 1));
  }
  return null;
}
