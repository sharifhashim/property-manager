const express = require("express");
const router = express.Router();

module.exports = ({ getContracts }) => {
  router.get("/", (req, res) => {
    getContracts()
      .then((contracts) => res.json(contracts))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
