const mongoose = require("mongoose");
// const colors = require("colors");

const databaseConnect = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://priyakiruthi21:dY4cnxHusMnhkxSD@kiruthidb.ci4cnyg.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};
module.exports = databaseConnect;