
const mongoose = require("mongoose")



const priceListInfoSchema = new mongoose.Schema({
  title: { type: String },
  heading: { type: String },
  description: { type: String },
  img: { type: String },
}, { timestamps: true });

priceListInfoSchema.index({ '$**': 'text' });

const priceListPackageSchema = new mongoose.Schema({
  title: { type: String },
  heading: { type: String },
  description: { type: Array },
  img: { type: String },
}, { timestamps: true });

priceListPackageSchema.index({ '$**': 'text' });

const PriceListInfo = mongoose.model("priceListInfo", priceListInfoSchema);
const PriceListPackage = mongoose.model("priceListPackage", priceListPackageSchema);

module.exports = { PriceListInfo, PriceListPackage };
