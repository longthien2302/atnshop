module.exports = function(app) {
    app.get('/cart', cart_view);
    function cart_view(req,res){
        res.render('cart', {cart: req.session.cart});
    }
}
