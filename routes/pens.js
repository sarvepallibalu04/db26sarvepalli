var express = require('express');
const pen_controlers= require('../controllers/pen');
var router = express.Router();

/* GET pens */
router.get('/', pen_controlers.pen_view_all_Page);

module.exports = router;
