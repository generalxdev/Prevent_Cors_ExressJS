const { suggestedFees, getLimits, getCoingecko, getPools } = require("../controllers/bridge.controllers.js");
var router = require("express").Router();

// ************* MakeBid ***************************
router.get("/suggested-fees", suggestedFees);
router.get("/limits", getLimits);
router.get("/coingecko", getCoingecko);
router.get("/pools", getPools);

module.exports = router;