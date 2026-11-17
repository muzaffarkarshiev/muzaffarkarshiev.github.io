# Yechim — matematika masalalarini rasmdan yechish

Masalani rasmga oling — sayt uni qadamma-qadam, oddiy tilda yechib beradi. O'zbek, rus va ingliz tillarida.

🌐 Sayt: https://muzaffarkarshiev.github.io/yechim/
👤 Muallif: Muzaffar — [@i0zbek](https://www.instagram.com/i0zbek/)

## AI ni ulash

Rasmdan yechish uchun Anthropic Claude API ishlatiladi. Ikki yo'l bor:

**1. Tez (shaxsiy foydalanish):** saytda ⚙️ tugmasini bosib, o'z API kalitingizni kiriting
([console.anthropic.com](https://console.anthropic.com/settings/keys)). Kalit faqat brauzeringizda saqlanadi.

**2. Hamma uchun (tavsiya etiladi):** `worker.js` ni Cloudflare Workers ga joylang, `ANTHROPIC_API_KEY`
ni Secret sifatida qo'shing, so'ng `index.html` dagi `PROXY_URL` ga worker manzilini yozing.
Shunda tashrif buyuruvchilar kalit kiritmaydi, to'lov esa sizning hisobingizdan bo'ladi.

> ⚠️ API kalitini hech qachon `index.html` ichiga yozmang — u ochiq bo'lib qoladi.
