const mongoose = require("mongoose");

//method - 1
require("dotenv").config()


const connectDatabase = () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/finest_shave", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

//method - 2

// mongoose.connect("mongodb://0.0.0.0:27017/finest_shave")
//  .then( () => console.log("connection successfull...."))
//  .catch((err) => console.log(err));



module.exports = connectDatabase;