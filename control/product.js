module.exports = function(app, Product) {
    app.get('/product', product_view);
    function product_view(req, res){
        Product.find({}, function(err, products) {
            res.render('product', {products: products});
        });
    }

    app.get('/product/add_to_cart/:pid', product_add_to_cart);
    function product_add_to_cart(req, res) {

        var pid = req.params.pid;
     

        if(!req.session.cart) req.session.cart = {};

        console.log(req.session.cart);

        Product.find({ID: pid}, function(err, product) {
            if(product != null) {

                if(pid in req.session.cart) {
                    req.session.cart[pid].qty++;
                }else {
                    req.session.cart[pid] = JSON.parse(JSON.stringify(product[0]));
                    req.session.cart[pid].qty = 1;
                }
                res.redirect('/product');
            }
            
        });
    }
}
