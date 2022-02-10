const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db");
const dbHelpers = require("./db/helpers/dbHelpers")(db);
const cors = require("cors");

const usersRouter = require("./routes/users");
const buildingsRouter = require("./routes/buildings");
const unitsRouter = require("./routes/units");
const contractsRouter = require("./routes/contracts");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api/users", usersRouter(dbHelpers));
app.use("/api/users/:user_id/buildings", buildingsRouter(dbHelpers));
app.use(
  "/api/users/:user_id/buildings/:building_id/units",
  unitsRouter(dbHelpers)
);
app.use(
  "/api/users/:user_id/buildings/:building_id/units/:unit_id/contracts",
  contractsRouter(dbHelpers)
);

module.exports = app;
