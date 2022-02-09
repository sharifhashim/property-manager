const express = require("express");
const router = express.Router();

module.exports = ({ getUnits }) => {
  router.get("/", (req, res) => {
    getUnits()
      .then((units) => res.json(units))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
