const mongoose = require("mongoose");
const {Schema} = mongoose;
const courseModel = new Schema({
  courseId: {type: Number},
  courseName: {type: String},
  time: {type: String},
  location: {type: String},
});
module.exports = mongoose.model("Course", courseModel);
