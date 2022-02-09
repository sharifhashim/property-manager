const express = require("express");
const router = express.Router();

module.exports = ({ getBuildings }) => {
  router.get("/", (req, res) => {
    getBuildings()
      .then((buildings) => res.json(buildings))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
