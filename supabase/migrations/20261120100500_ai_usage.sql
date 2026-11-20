-- ai_usage: one row per Claude API call made by the "ai" edge function.
-- Used for the per-user daily quota and cost tracking.
-- Users can only read their own rows; inserts are done by the edge function
-- with the service role (which bypasses RLS). No insert/update/delete policy
-- exists for regular users on purpose.

create table if not exists public.ai_usage (
  id            bigserial primary key,
  user_id       uuid not null references auth.users (id) on delete cascade,
  created_at    timestamptz not null default now(),
  feature       text,
  tier          text,
  model         text,
  input_tokens  int not null default 0,
  output_tokens int not null default 0
);

comment on table public.ai_usage is 'Claude API usage log per user (written by the ai edge function).';

-- Quota query: count rows for a user since the start of the UTC day.
create index if not exists ai_usage_user_created_at_idx
  on public.ai_usage (user_id, created_at desc);

alter table public.ai_usage enable row level security;

drop policy if exists "ai_usage_select_own" on public.ai_usage;
create policy "ai_usage_select_own" on public.ai_usage
  for select to authenticated
  using (user_id = (select auth.uid()));

revoke all on table public.ai_usage from anon;
revoke all on table public.ai_usage from authenticated;
grant select on table public.ai_usage to authenticated;
revoke all on sequence public.ai_usage_id_seq from anon, authenticated;
