const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

// GET /api/users/
router.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(user);
  } catch (ex) {
    console.log("Error getting a users from api");
    next(ex);
  }
});

// PUT /api/users/:id
router.put("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(await user.update(req.body));
  } catch (error) {
    console.log("Error updating user from api");
    next(error);
  }
});
