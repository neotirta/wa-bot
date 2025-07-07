const { Client, LocalAuth } = require("whatsapp-web.js")
const qrcode = require("qrcode-terminal")
const config = require("./config")

// Inisialisasi client WhatsApp
const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "whatsapp-bot",
  }),
  puppeteer: {
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--no-zygote",
      "--single-process",
      "--disable-gpu",
    ],
  },
})

// Event ketika QR code siap
client.on("qr", (qr) => {
  console.log("📱 Scan QR Code berikut dengan WhatsApp Anda:")
  qrcode.generate(qr, { small: true })
  console.log("⏳ Menunggu scan QR Code...")
})

// Event ketika bot siap
client.on("ready", () => {
  console.log("✅ Bot WhatsApp siap digunakan!")
  console.log(`🤖 Bot Name: ${config.BOT_NAME}`)
  console.log("📝 Bot akan membalas SEMUA pesan masuk termasuk admin")
})

// Event ketika ada pesan masuk
client.on("message", async (message) => {
  try {
    // Cek apakah pesan dari grup atau personal
    const chat = await message.getChat()
    const contact = await message.getContact()

    // Log pesan masuk
    console.log(`📨 Pesan dari: ${contact.name || contact.pushname || contact.number}`)
    console.log(`💬 Isi pesan: ${message.body}`)

    // Cek apakah pesan dari bot sendiri
    if (message.fromMe) {
      return
    }

    // Skip pesan dari grup (opsional: hapus jika ingin reply di grup juga)
    if (chat.isGroup) {
      console.log("👥 Pesan dari grup, skip auto reply")
      return
    }

    // Delay sebelum reply
    setTimeout(async () => {
      try {
        // Kirim auto reply ke SEMUA pesan (termasuk admin)
        await message.reply(config.AUTO_REPLY_MESSAGE)
        console.log("✅ Auto reply terkirim")
      } catch (error) {
        console.error("❌ Error mengirim reply:", error)
      }
    }, config.REPLY_DELAY)
  } catch (error) {
    console.error("❌ Error memproses pesan:", error)
  }
})

// Event ketika ada pesan yang gagal terkirim
client.on("message_create", (message) => {
  if (message.fromMe) {
    console.log(`📤 Pesan terkirim: ${message.body}`)
  }
})

// Event ketika terputus dari WhatsApp
client.on("disconnected", (reason) => {
  console.log("❌ Bot terputus dari WhatsApp:", reason)
  console.log("🔄 Mencoba reconnect...")
})

// Event ketika ada error
client.on("auth_failure", (message) => {
  console.error("❌ Autentikasi gagal:", message)
})

// Mulai bot
console.log("🚀 Memulai WhatsApp Bot...")
client.initialize()

// Handle process termination
process.on("SIGINT", async () => {
  console.log("🛑 Menghentikan bot...")
  await client.destroy()
  process.exit(0)
})
