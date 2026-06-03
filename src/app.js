require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./database");
const helmet = require("helmet");

const taskRoutes = require("./routes/tasks");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

// Routes
app.use("/tasks", taskRoutes);

// Error handler
app.use(errorHandler);

const port = process.env.PORT || 8080;

const startServer = async () => {
  const maxRetries = 10;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log("Database connected");
      break;
    } catch (err) {
      retries += 1;
      console.warn(`DB connection failed (${retries}/${maxRetries}), retrying in 2s...`);
      if (retries >= maxRetries) {
        console.error("DB error:", err);
        process.exit(1);
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  app.listen(port, () => {
    console.log(`API running on port ${port}`);
  });
};

startServer();