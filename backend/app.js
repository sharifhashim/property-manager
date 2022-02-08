const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db");
const dbHelpers = require("./helpers/dbHelpers")(db);

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

app.use("/api/users", usersRouter(dbHelpers));
app.use("/api/buildings", buildingsRouter(dbHelpers));
app.use("/api/units", unitsRouter(dbHelpers));
app.use("/api/contracts", contractsRouter(dbHelpers));

module.exports = app;
