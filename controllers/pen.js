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

// Handle Pen create on POST.
exports.pen_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Pen();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"pentype":"goat", "cost":12, "size":"large"}
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
exports.pen_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await Pen.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle Pen update form on PUT.
exports.pen_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Pen.findById( req.params.id)
        // Do updates of properties
        if(req.body.pentype) toUpdate.pentype = req.body.pentype;
        if(req.body.color) toUpdate.cost = req.body.color;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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
    // for a specific pen.
exports.pen_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Pen.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
