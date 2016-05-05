exports.showAdd = function(req, res) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT * from categories', function(err, categories) {
            if (err) return next(err);
            res.render('add', {
                categories: categories,
            });
        });
    });
};

exports.add = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        var data = {
            product: req.body.product,
            category_id: Number(req.body.category_id)
        };

        connection.query('insert into products set ?', data, function(err, results) {
            if (err) return next(err);
            res.redirect('/');
        });
    });
};
