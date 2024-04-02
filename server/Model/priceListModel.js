
const mongoose = require("mongoose")



const priceListInfoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  heading: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String },
  imgLight: { type: String}
}, { timestamps: true });

priceListInfoSchema.index({ '$**': 'text' });

const priceListPackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  heading: { type: String, required: true },
  description: { type: Array, required: true },
  img: { type: String},
  imgLight: { type: String}
}, { timestamps: true });

priceListPackageSchema.index({ '$**': 'text' });

const PriceListInfo = mongoose.model("priceListInfo", priceListInfoSchema);
const PriceListPackage = mongoose.model("priceListPackage", priceListPackageSchema);

module.exports = { PriceListInfo, PriceListPackage };
