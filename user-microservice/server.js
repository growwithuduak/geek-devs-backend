const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const userRouter = require("./routes/userRoutes.js");

app.use(express.json());
app.use("/api/v1/users", userRouter);

const port = process.env.PORT || 4000;

// DB
const connectDatabase = (url) => {
  return mongoose.connect(url);
};

const startServer = async () => {
  try {
    await connectDatabase(process.env.MONGO_URI);
    console.log("MongoDB is connected");

    app.listen(port, () =>
      console.log(`Yaayyy server is listening on port ${port}... let's go`)
    );
  } catch (err) {
    console.error(err);
  }
};
startServer();

// app.listen(port, () => {
//   console.log(
//     `Yayyy my user-microservice is listening at http://localhost:${port}... let's go`
//   );
// });
