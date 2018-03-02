const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({name:String, description:String});
const studiesSchema = new mongoose.Schema({name:String, description:String, years:String});

mongoose.model('skills', skillsSchema);
mongoose.model('studies', studiesSchema);
