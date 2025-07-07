# WhatsApp Bot Auto Reply

Bot WhatsApp sederhana yang akan membalas semua pesan masuk dengan pesan otomatis.

## Fitur

- ✅ Auto reply untuk semua pesan masuk
- ✅ Skip reply untuk admin
- ✅ Skip reply untuk pesan grup
- ✅ Logging aktivitas bot
- ✅ Konfigurasi mudah

## Instalasi

1. **Clone atau download project ini**

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Konfigurasi bot:**
   - Edit file `config.js` sesuai kebutuhan
   - Ubah pesan auto reply
   - Tambahkan nomor admin jika diperlukan

4. **Jalankan bot:**
   \`\`\`bash
   npm start
   \`\`\`

5. **Scan QR Code:**
   - QR Code akan muncul di terminal
   - Scan dengan WhatsApp di HP Anda
   - Tunggu hingga bot ready

## Konfigurasi

Edit file `config.js`:

\`\`\`javascript
module.exports = {
    // Pesan yang akan dikirim otomatis
    AUTO_REPLY_MESSAGE: "Silahkan menghubungi 6285155154154 untuk lebih lanjut",
    
    // Nomor admin (tidak akan mendapat auto reply)
    ADMIN_NUMBERS: [
        "6285155154154@c.us"
    ],
    
    // Nama bot
    BOT_NAME: "Auto Reply Bot",
    
    // Delay reply (milidetik)
    REPLY_DELAY: 1000
};
\`\`\`

## Cara Kerja

1. Bot akan memindai semua pesan masuk
2. Jika pesan bukan dari admin dan bukan dari grup
3. Bot akan membalas dengan pesan yang sudah dikonfigurasi
4. Ada delay 1 detik sebelum membalas (bisa diubah)

## Catatan Penting

- ⚠️ Gunakan dengan bijak, jangan spam
- ⚠️ WhatsApp bisa memblokir akun jika terdeteksi bot
- ⚠️ Pastikan akun WhatsApp tidak digunakan di HP lain saat bot aktif
- ⚠️ Bot akan berhenti jika HP/komputer mati

## Troubleshooting

**QR Code tidak muncul:**
- Pastikan internet stabil
- Restart bot dengan `npm start`

**Bot tidak membalas:**
- Cek log di terminal
- Pastikan nomor pengirim bukan admin
- Pastikan bukan pesan grup

**Bot terputus:**
- Bot akan otomatis reconnect
- Jika tidak, restart dengan `npm start`

## Development

Untuk development mode:
\`\`\`bash
npm run dev
\`\`\`

## Support

Jika ada masalah, silahkan hubungi developer.
\`\`\`

File untuk environment variables (opsional):
