const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  name: { type: String },
  balance: { type: Number }
}, {
  timestamps: true
});

// Ensure that the number is saved as an integer but returned as a float
accountSchema.path("balance")
  .get(value => (value/100).toFixed(2))
  .set(value => value*100);

// Unsure that the object is sent as JSON
accountSchema.set("toJSON", { getters: true, setters: true, virtuals: false });

module.exports = mongoose.model("Account", accountSchema);
