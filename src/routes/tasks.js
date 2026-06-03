const express = require("express");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

const tasks = [];

// CREATE
router.post("/", (req, res) => {
  const task = {
    id: uuidv4(),
    description: req.body.description,
    state: req.body.state || "todo"
  };

  tasks.push(task);

  res.status(201).json(task);
});

// READ ALL
router.get("/", (req, res) => {
  res.json(tasks);
});

// READ ONE
router.get("/:id", (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// UPDATE
router.put("/:id", (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.description = req.body.description ?? task.description;
  task.state = req.body.state ?? task.state;

  res.json(task);
});

// DELETE
router.delete("/:id", (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);

  res.status(204).send();
});

module.exports = router;