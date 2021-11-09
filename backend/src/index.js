const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const app = express();
app.use(express.json({ extended: false }));
app.use(cors());
const mongoURL =
  "mongodb+srv://andrewnode:andrewnode@cluster0.xc1ft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(mongoURL, {})
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("port running");
});
app.use("/api/users", require("./Routes/api/Users"));
app.use("/test", require("./Routes/api/Test"));

app.listen(4000, () => console.log("PORT RUNS CORRECTLY"));
