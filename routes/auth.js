const router = require("express").Router();
const User = require("../models/User");

// create a user

router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  if (!user) {
    return res.status(401).json([]);
  }

  res.status(200).json(user);
});

// get all user

router.get("/", async (req, res) => {
  const user = await User.find();
  if (!user) {
    return res.status(401).json([]);
  }

  res.status(200).json(user);
});

//   get one user
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(401).json([]);
  }

  res.status(200).json(user);
});

//   update one user
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) {
    return res.status(401).json([]);
  }

  res.status(200).json(user);
});

//   update one user
router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id, { new: true });
  if (!user) {
    return res.status(401).json([]);
  }

  res.status(200).json(user);
});

module.exports = router;
