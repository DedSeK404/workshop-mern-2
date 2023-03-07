const mongoose = require("mongoose");
async function connect() {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(process.env.mongourl, connectionParams);
    console.log("data base is connect");
  } catch (error) {
    console.log(error);
  }
}
module.exports = connect;
