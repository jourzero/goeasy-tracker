var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("indexEN", {title: "Go Easy! Tracker"});
});

module.exports = router;
