const mongoose = require("mongoose")



const aboutUsHistorySchema = new mongoose.Schema({
  title: { type: String },
  heading: { type: String },
  description: { type: String },
  img: { type: String },
}, { timestamps: true });

aboutUsHistorySchema.index({ '$**': 'text' });

const aboutUsTeamSchema = new mongoose.Schema({
  title: { type: String },
  name: {type:String},
  heading1: { type: String },
  heading2: { type: String },
  description1: { type: String },
  description2: { type: String },
  img: { type: String },
}, { timestamps: true });

aboutUsTeamSchema.index({ '$**': 'text' });

const AboutUsHistory = mongoose.model("AboutUsHistory", aboutUsHistorySchema);
const AboutUsTeam = mongoose.model("AboutUsTeam", aboutUsTeamSchema);

module.exports = { AboutUsHistory, AboutUsTeam };
