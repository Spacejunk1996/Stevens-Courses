const express = require("express");
const router = express.Router();


const myInfo = { name: 'Zixu Jiang', dateOfBirth: '8/9', hometown: 'Beijing'}
router.get("/", async (req, res) => {
res.json(myInfo)
});

module.exports = router;