const express = require("express")
const config = require("./config")

const app = express()

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "WhatsApp Bot is running",
    timestamp: new Date().toISOString(),
  })
})

app.get("/", (req, res) => {
  res.json({
    message: "WhatsApp Auto Reply Bot",
    status: "Running",
  })
})

const server = app.listen(config.PORT, () => {
  console.log(`🌐 Health check server running on port ${config.PORT}`)
})

module.exports = { app, server }
