const mongoose = require("mongoose");
const DB =
  "mongodb+srv://dbUser:xVLh2MIRnNgmYGmR@cluster0.oxp8p.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection started"))
  .catch((error) => console.log(error.messsage));
