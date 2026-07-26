-- =====================================================================
--  İLERİ PARTİ — Ticari Fırsatlar (Bayilik İlan Sistemi)
--  Supabase kurulum betiği.
--  Kullanım: Supabase panelinde  SQL Editor → New query → bu metni
--  yapıştır → Run.  "Success" görmelisin.
-- =====================================================================

-- 1) İLAN TABLOSU ------------------------------------------------------
create table if not exists public.ilanlar (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  firma       text not null,
  yetkili     text,
  iletisim    text not null,
  kategori    text not null,
  urunler     text,
  bolge       text,
  sehir       text,
  ilce        text,
  fotograflar text[] default '{}',
  durum       text not null default 'yayinda'   -- ileride 'beklemede' ile moderasyon eklenebilir
);

-- 2) SATIR GÜVENLİĞİ (RLS) --------------------------------------------
alter table public.ilanlar enable row level security;

-- Herkes (giriş yapmadan) yayındaki ilanları görebilir
create policy "ilanlar_public_read"
  on public.ilanlar for select
  using ( durum = 'yayinda' );

-- Giriş yapan firma yalnızca KENDİ ilanını ekleyebilir
create policy "ilanlar_owner_insert"
  on public.ilanlar for insert
  with check ( auth.uid() = user_id );

-- Firma yalnızca kendi ilanını güncelleyebilir / silebilir
create policy "ilanlar_owner_update"
  on public.ilanlar for update
  using ( auth.uid() = user_id );

create policy "ilanlar_owner_delete"
  on public.ilanlar for delete
  using ( auth.uid() = user_id );

-- 3) FOTOĞRAF DEPOSU (STORAGE) ----------------------------------------
-- Herkese açık bir bucket oluştur (panelde Storage altında da görünür)
insert into storage.buckets (id, name, public)
values ('ilan-fotograflari', 'ilan-fotograflari', true)
on conflict (id) do nothing;

-- Depodaki fotoğrafları herkes görüntüleyebilir
create policy "ilan_foto_public_read"
  on storage.objects for select
  using ( bucket_id = 'ilan-fotograflari' );

-- Yalnızca giriş yapmış kullanıcı fotoğraf yükleyebilir
create policy "ilan_foto_auth_insert"
  on storage.objects for insert
  with check ( bucket_id = 'ilan-fotograflari' and auth.uid() is not null );

-- =====================================================================
--  BİTTİ.  Not: Bir politikanın "already exists" hatası verirse sorun
--  değildir; o satır zaten kurulmuş demektir, geri kalanı çalışır.
-- =====================================================================
