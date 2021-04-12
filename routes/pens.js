var express = require('express');
const pen_controlers= require('../controllers/pen');
var router = express.Router();

/* GET pens */
router.get('/', pen_controlers.pen_view_all_Page);

/* GET detail pen page */
router.get('/detail', pen_controlers.Pen_view_one_Page);

module.exports = router;
