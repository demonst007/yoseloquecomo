-- progress_photos: metadata for progress photos stored in the private
-- "progress-photos" Storage bucket at "{user_id}/...".

create table if not exists public.progress_photos (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null default auth.uid() references auth.users (id) on delete cascade,
  taken_on     date not null default current_date,
  view         text not null check (view in ('frente', 'lado', 'espalda')),
  storage_path text not null,
  weight_kg    numeric check (weight_kg is null or (weight_kg > 0 and weight_kg < 1000)),
  body_fat     numeric check (body_fat is null or (body_fat >= 0 and body_fat <= 100)),
  created_at   timestamptz not null default now(),
  -- The object must live inside the owner's folder.
  constraint progress_photos_path_in_user_folder
    check (storage_path like (user_id::text || '/%'))
);

comment on table public.progress_photos is 'Progress photo metadata; files live in Storage bucket progress-photos.';

create index if not exists progress_photos_user_taken_on_idx
  on public.progress_photos (user_id, taken_on desc);

alter table public.progress_photos enable row level security;

drop policy if exists "progress_photos_select_own" on public.progress_photos;
create policy "progress_photos_select_own" on public.progress_photos
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "progress_photos_insert_own" on public.progress_photos;
create policy "progress_photos_insert_own" on public.progress_photos
  for insert to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "progress_photos_update_own" on public.progress_photos;
create policy "progress_photos_update_own" on public.progress_photos
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "progress_photos_delete_own" on public.progress_photos;
create policy "progress_photos_delete_own" on public.progress_photos
  for delete to authenticated
  using (user_id = (select auth.uid()));

revoke all on table public.progress_photos from anon;
revoke truncate, references, trigger on table public.progress_photos from authenticated;
grant select, insert, update, delete on table public.progress_photos to authenticated;
