import mongoose from "mongoose";
import dotenv from "dotenv";

const connect = () => {
  mongoose
    .connect(
      MONGODB_URL='mongodb+srv://spartaUser:asas1214@express-mongo.vjxbyhd.mongodb.net/?retryWrites=true&w=majority&appName=Express-Mongo',
      MONGODB_NAME='node_beginner',
      process.env.MONGODB_URL,
      {
        dbName: process.env.MONGODB_NAME,
      },
    )
    .then(() => console.log("MongoDB 연결에 성공하였습니다."))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on("error", (err) => {
  console.error("MongoDB 연결 에러", err);
});

export default connect;
