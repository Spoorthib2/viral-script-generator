require("dotenv").config();
const express = require("express");
const cors = require("cors");

const scriptRoutes = require("./routes/scriptRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", scriptRoutes);

app.get("/", (req, res) => {
  res.send("Viral Script Generator Backend Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});