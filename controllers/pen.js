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
exports.pen_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Pen();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.pentype = req.body.pentype;
    document.price = req.body.price;
    document.color = req.body.color;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// Handle Pen delete form on DELETE.
exports.pen_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Pen delete DELETE ' + req.params.id);
};
// Handle Pen update form on PUT.
exports.pen_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Pen update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.pen_view_all_Page = async function(req, res) {
    try{
    thePens = await Pen.find();
    res.render('pens', { title: 'Pen Search Results', results: thePens });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };