const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "User Page", users: ["Alice", "Bob"] });
});

router.get("/profile", (req, res) => {
  res.json({ message: "User Profile", name: "John Doe" });
});

module.exports = router;