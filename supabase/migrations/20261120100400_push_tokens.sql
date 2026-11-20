-- push_tokens: device tokens for push notifications (FCM / APNs / Web Push).

create table if not exists public.push_tokens (
  user_id    uuid not null default auth.uid() references auth.users (id) on delete cascade,
  token      text not null check (length(token) between 1 and 4096),
  platform   text not null check (platform in ('android', 'ios', 'web')),
  updated_at timestamptz not null default now(),
  primary key (user_id, token)
);

comment on table public.push_tokens is 'Push notification device tokens per user.';

drop trigger if exists push_tokens_set_updated_at on public.push_tokens;
create trigger push_tokens_set_updated_at
  before update on public.push_tokens
  for each row execute function public.set_updated_at();

alter table public.push_tokens enable row level security;

drop policy if exists "push_tokens_select_own" on public.push_tokens;
create policy "push_tokens_select_own" on public.push_tokens
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "push_tokens_insert_own" on public.push_tokens;
create policy "push_tokens_insert_own" on public.push_tokens
  for insert to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "push_tokens_update_own" on public.push_tokens;
create policy "push_tokens_update_own" on public.push_tokens
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "push_tokens_delete_own" on public.push_tokens;
create policy "push_tokens_delete_own" on public.push_tokens
  for delete to authenticated
  using (user_id = (select auth.uid()));

revoke all on table public.push_tokens from anon;
revoke truncate, references, trigger on table public.push_tokens from authenticated;
grant select, insert, update, delete on table public.push_tokens to authenticated;
