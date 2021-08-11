const router = require("express").Router();
const History = require("../models/History");

// get all history
router.get("/", async (req, res) => {
  const tasks = await History.find();
  if (!tasks) {
    return res.status(401).json({
      data: [],
    });
  }
  res.status(200).json({
    data: tasks,
  });
});

// get single history
router.get("/:id", async (req, res) => {
  const tasks = await History.findById(req.params.id);
  if (!tasks) {
    return res.status(401).json({
      data: [],
    });
  }
  res.status(200).json({
    data: tasks,
  });
});

// create history
router.post("/", async (req, res) => {
  const tasks = await History.create(req.body);
  if (!tasks) {
    return res.status(401).json({
      data: [],
    });
  }
  res.status(200).json({
    data: tasks,
  });
});

// update a history
router.put("/:id", async (req, res) => {
  const tasks = await History.findByIdAndUpdate(req.params.id, req.body, {
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

// delete a history
router.delete("/:id", async (req, res) => {
  const tasks = await History.findByIdAndRemove(req.params.id, {
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
