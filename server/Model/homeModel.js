
const mongoose = require("mongoose")



const homeInfoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  heading: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String },
}, { timestamps: true });

homeInfoSchema.index({ '$**': 'text' });

const homeProjectsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  heading: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String},
  imgLight: { type: String}
}, { timestamps: true });

homeProjectsSchema.index({ '$**': 'text' });

const HomeInfo = mongoose.model("homeinfo", homeInfoSchema);
const HomeProjects = mongoose.model("homeprojects", homeProjectsSchema);

module.exports = { HomeInfo, HomeProjects };
