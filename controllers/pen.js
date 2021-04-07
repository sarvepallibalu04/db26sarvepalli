var Pen = require('../models/pen');
// List of all Pens
exports.pen_list = function(req, res) {
res.send('NOT IMPLEMENTED: Pen list');
};
// for a specific Pen.
exports.pen_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Pen detail: ' + req.params.id);
};
// Handle Pen create on POST.
exports.pen_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Pen create POST');
};
// Handle Pen delete form on DELETE.
exports.pen_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Pen delete DELETE ' + req.params.id);
};
// Handle Pen update form on PUT.
exports.pen_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Pen update PUT' + req.params.id);
};