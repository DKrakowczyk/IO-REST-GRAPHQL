const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.get("/", dataController.controller.findAll);
router.post("/", dataController.controller.create);
router.delete("/", dataController.controller.removeAll);
router.get("/:id", dataController.controller.findById);

module.exports = router;
