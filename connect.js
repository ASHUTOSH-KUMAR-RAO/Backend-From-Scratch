const mongoose = require('mongoose');

// Connect to MongoDB

const connectToMongoDb = async (url)=>{

  mongoose.connect(url);

}
module.exports = {
  connectToMongoDb,
}