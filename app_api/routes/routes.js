var express = require('express');
var router = express.Router();
var cont= require('../controller/cont')

/* GET home page. */
router.get('/', cont.output);
router.post('/validate-rule', cont.input)

module.exports = router;
