# İleri Parti — Web Sitesi (canlı)

Ticari Fırsatlar bölümü Supabase'e bağlıdır ve CANLI'dır (publishable key gömülü).
- Kod: index.html + assets/css/style.css + assets/js/app.js
- Supabase URL ve publishable key: assets/js/app.js en üstünde.
- Kurulum SQL'i: docs/supabase-kurulum.sql (çalıştırıldı).

## Yayın
GitHub Pages: klasör içeriğini deponun köküne koy → Settings → Pages → main /(root).
Netlify: app.netlify.com/drop'a sürükle.

## Giriş çalışması için (ÖNEMLİ)
Supabase → Authentication → URL Configuration → Site URL ve Redirect URLs'e
sitenin adresini ekle (ör. GitHub Pages adresin). Bu olmadan e-posta ile giriş
bağlantısı geri dönemez.
