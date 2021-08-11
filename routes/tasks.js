const router = require("express").Router();
const Tasks = require("../models/Tasks");

// get all tasks
router.get("/", async (req, res) => {
  const tasks = await Tasks.find();
  if (!tasks) {
    return res.status(401).json({
      data: [],
    });
  }
  res.status(200).json({
    data: tasks,
  });
});

// get single task
router.get("/:id", async (req, res) => {
  const tasks = await Tasks.findById(req.params.id);
  if (!tasks) {
    return res.status(401).json({
      data: [],
    });
  }
  res.status(200).json({
    data: tasks,
  });
});

// create tasks
router.post("/", async (req, res) => {
  const tasks = await Tasks.create(req.body);
  if (!tasks) {
    return res.status(401).json({
      data: [],
    });
  }
  res.status(200).json({
    data: tasks,
  });
});

// update a tasks
router.put("/:id", async (req, res) => {
  const tasks = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!tasks) {
    return res.status(401).json({
      data: [],
    });
  }
  res.status(200).json({
    data: tasks,
  });
});

// delete a tasks
router.delete("/:id", async (req, res) => {
  const tasks = await Tasks.findByIdAndRemove(req.params.id, {
    new: true,
  });
  if (!tasks) {
    return res.status(401).json({
      data: [],
    });
  }
  res.status(200).json({
    data: tasks,
  });
});

module.exports = router;
