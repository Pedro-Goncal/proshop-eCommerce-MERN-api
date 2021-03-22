import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log(`==>ProShop mongoDB connected!<==`))
    .catch((err) => {
      console.log(`Error: ${err}`);
      process.exit(1);
    });
};

export default connectDB;
