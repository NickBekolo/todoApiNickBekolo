const express = require("express");
const Task = require("../models/task");

const router = express.Router();

const VALID_STATUSES = ["todo", "in-progress", "done"];

const findTask = async (id) => {
  return Task.findByPk(id);
};

// CREATE
router.post("/", async (req, res, next) => {
  try {
    if (!req.body.description) {
      return res.status(400).json({ message: "La description est requise." });
    }

    if (req.body.status && !VALID_STATUSES.includes(req.body.status)) {
      return res.status(400).json({
        message: `Status invalide. Valeurs acceptées: ${VALID_STATUSES.join(", ")}`,
      });
    }

    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});

// READ ALL
router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// READ ONE
router.get("/:id", async (req, res, next) => {
  try {
    const task = await findTask(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    next(err);
  }
});

// UPDATE
router.put("/:id", async (req, res, next) => {
  try {
    const task = await findTask(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (req.body.status && !VALID_STATUSES.includes(req.body.status)) {
      return res.status(400).json({
        message: `Status invalide. Valeurs acceptées: ${VALID_STATUSES.join(", ")}`,
      });
    }

    await task.update(req.body);
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    const task = await findTask(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.destroy();
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;