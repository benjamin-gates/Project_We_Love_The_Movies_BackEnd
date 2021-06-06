const controller = require("./theaters.controller");
const router = require("express").Router({ mergeParams: true });

router.route("/").get(controller.list);

module.exports = router;

