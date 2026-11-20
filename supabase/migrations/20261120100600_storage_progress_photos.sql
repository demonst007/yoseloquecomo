-- Private Storage bucket for progress photos.
-- Object paths must start with the owner's user id: "{auth.uid()}/...".
-- Example: "1b2c.../2026-11-20-frente.jpg"

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'progress-photos',
  'progress-photos',
  false,
  10485760, -- 10 MB
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
  set public             = false,
      file_size_limit    = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- RLS on storage.objects is already enabled by Supabase.

drop policy if exists "progress_photos_objects_select_own" on storage.objects;
create policy "progress_photos_objects_select_own" on storage.objects
  for select to authenticated
  using (
    bucket_id = 'progress-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "progress_photos_objects_insert_own" on storage.objects;
create policy "progress_photos_objects_insert_own" on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'progress-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

-- UPDATE is needed for upsert (upload with { upsert: true }) and move/rename.
drop policy if exists "progress_photos_objects_update_own" on storage.objects;
create policy "progress_photos_objects_update_own" on storage.objects
  for update to authenticated
  using (
    bucket_id = 'progress-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  )
  with check (
    bucket_id = 'progress-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "progress_photos_objects_delete_own" on storage.objects;
create policy "progress_photos_objects_delete_own" on storage.objects
  for delete to authenticated
  using (
    bucket_id = 'progress-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );
