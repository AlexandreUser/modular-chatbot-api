const express = require("express");
const routes = express.Router();
const { get } = require("./controller/main.controller");
const createController = require("./controller/create.controller");
const botController = require("./controller/bot.controller");

routes.get("/api/v1/main", get);
routes.get("/api/v1/create", createController.get);
routes.get("/api/v1/read", createController.getBot);
routes.get("/api/v1/read/all", botController.getAllbots);
routes.post("/api/v1/edit", createController.postQuestion);
routes.delete("/api/v1/edit", createController.deleteQuestion);
routes.get("/api/v1/get/response", botController.getResponse);

module.exports = routes;
