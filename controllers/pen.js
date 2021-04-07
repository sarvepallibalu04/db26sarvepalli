var Pen = require('../models/pen');
// List of all Pens
exports.pen_list = async function(req, res) {
    try{
        thePens = await Pen.find();
        res.send(thePens);
        }
        catch(err){
        res.error(500,`{"error": ${err}}`);
        }
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