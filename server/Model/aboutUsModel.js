const mongoose = require("mongoose")



const aboutUsHistorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  heading: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  imgLight: { type: String}
}, { timestamps: true });

aboutUsHistorySchema.index({ '$**': 'text' });

const aboutUsTeamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  heading1: { type: String, required: true },
  heading2: { type: String, required: true },
  description1: { type: Array, required: true },
  description2: { type: Array, required: true },
  img: { type: String},
}, { timestamps: true });

aboutUsTeamSchema.index({ '$**': 'text' });

const AboutUsHistory = mongoose.model("AboutUsHistory", aboutUsHistorySchema);
const AboutUsTeam = mongoose.model("AboutUsTeam", aboutUsTeamSchema);

module.exports = { AboutUsHistory, AboutUsTeam };
