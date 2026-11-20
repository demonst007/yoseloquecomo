/**
 * Module entry. Runs after the legacy classic scripts (modules are deferred),
 * replaces the claude.ai runtime with our platform layer and adds the new features.
 */
import './ui/auth-gate.css';
import { installClaudeShim } from './platform/index.js';
import { mountAuthGate } from './ui/auth-gate.js';
import { installAccountMenu } from './ui/account-menu.js';
import { installNativeShell } from './features/native-shell.js';
import { installReminders } from './features/reminders.js';
import { installPush } from './features/push.js';
import { installFoodScan } from './features/barcode/food-scan.js';

installClaudeShim();
installNativeShell();

// The parity e2e tests compare against the original app, so they turn off
// features that intentionally change what is rendered.
if (!window.__PARITY__) {
  installAccountMenu();
  installFoodScan();
}

installReminders();
mountAuthGate();
installPush();
