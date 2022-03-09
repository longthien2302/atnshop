module.exports = function(app) {
    app.get('/contact', contact_view);
    function contact_view(req,res){
        res.render('contactinfo')
    }
}
