const express = require("express");
const router = express.Router();

module.exports = ({ getUsers }) => {
  router.get("/", (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) => res.json({ error: err.message }));
  });

  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    login(email, password)
      .then((user) => {
        if (!user) {
          res.status(401);
          return res.send({ message: "Wrong username or password" });
        }
        res.json(user);
      })
      .catch((error) => res.json({ error: error.message }));
  });
  return router;
};
