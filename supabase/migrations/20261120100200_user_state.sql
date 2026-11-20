-- user_state: the app's whole state object `S` as a JSON blob per user.
-- client_ts is the client's timestamp (ms since epoch) of the last change; the
-- frontend uses it, together with its merge logic, to resolve conflicts.

create table if not exists public.user_state (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  client_ts  bigint not null default 0,
  updated_at timestamptz not null default now(),
  -- Abuse guard: ~10 MB of jsonb per user (localStorage itself caps at ~5 MB).
  -- Photos must go to Storage, never inside this blob.
  constraint user_state_data_is_object check (jsonb_typeof(data) = 'object'),
  constraint user_state_data_size check (pg_column_size(data) <= 10 * 1024 * 1024)
);

comment on table public.user_state is 'Per-user app state blob (S). Synced by the frontend.';

drop trigger if exists user_state_set_updated_at on public.user_state;
create trigger user_state_set_updated_at
  before update on public.user_state
  for each row execute function public.set_updated_at();

alter table public.user_state enable row level security;

drop policy if exists "user_state_select_own" on public.user_state;
create policy "user_state_select_own" on public.user_state
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "user_state_insert_own" on public.user_state;
create policy "user_state_insert_own" on public.user_state
  for insert to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "user_state_update_own" on public.user_state;
create policy "user_state_update_own" on public.user_state
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

revoke all on table public.user_state from anon;
revoke delete, truncate, references, trigger on table public.user_state from authenticated;
grant select, insert, update on table public.user_state to authenticated;
