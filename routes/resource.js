var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var pen_controller = require('../controllers/pen');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Pen ROUTES ///
// POST request for creating a Pen.
router.post('/pens', pen_controller.pen_create_post);
// DELETE request to delete Pen.
router.delete('/pens/:id', pen_controller.pen_delete);
// PUT request to update Pen.
router.put('/pens/:id', pen_controller.pen_update_put);
// GET request for one Pen.
router.get('/pens/:id', pen_controller.pen_detail);
// GET request for list of all Pen items.
router.get('/pens', pen_controller.pen_list);
module.exports = router;