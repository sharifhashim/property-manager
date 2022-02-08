const express = require("express");
const router = express.Router();

module.exports = ({ getBuildings }) => {
  router.get("/", (req, res) => {
    getBuildings()
      .then((users) => res.json(users))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
