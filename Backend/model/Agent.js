const mongoose = require('mongoose')

const agentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  description: {
    type: String
  }
}, { timestamps: true })

agentSchema.index({ name: 1 })

module.exports = mongoose.model("Agent", agentSchema)