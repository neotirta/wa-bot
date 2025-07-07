/**
 * Format nomor WhatsApp ke format yang benar
 * @param {string} number - Nomor telepon
 * @returns {string} - Nomor dalam format WhatsApp ID
 */
function formatPhoneNumber(number) {
  // Hapus karakter non-digit
  let cleaned = number.replace(/\D/g, "")

  // Tambahkan kode negara jika belum ada
  if (!cleaned.startsWith("62")) {
    if (cleaned.startsWith("0")) {
      cleaned = "62" + cleaned.substring(1)
    } else {
      cleaned = "62" + cleaned
    }
  }

  return cleaned + "@c.us"
}

/**
 * Cek apakah nomor adalah admin
 * @param {string} number - Nomor WhatsApp ID
 * @returns {boolean} - True jika admin
 */
function isAdmin(number) {
  const config = require("./config")
  return config.ADMIN_NUMBERS.includes(number)
}

/**
 * Log dengan timestamp
 * @param {string} message - Pesan log
 */
function logWithTime(message) {
  const now = new Date().toLocaleString("id-ID")
  console.log(`[${now}] ${message}`)
}

module.exports = {
  formatPhoneNumber,
  isAdmin,
  logWithTime,
}
