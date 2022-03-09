module.exports = function(app) {
    app.get('/', index_view);
    function index_view(req,res){
        res.render('index') 
    }
}
