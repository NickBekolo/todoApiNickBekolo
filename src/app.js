const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const taskRoutes = require("./routes/tasks");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});

app.use("/tasks", taskRoutes);

app.use(errorHandler);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});