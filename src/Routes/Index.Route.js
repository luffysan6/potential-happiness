const { Router } = require("express");
const Index = require("../Controllers/Index.Controller");

const IndexRoute = Router();

IndexRoute.get("/", Index);

module.exports = IndexRoute;
