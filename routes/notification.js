exports.show = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query(`SELECT milestones.id, milestones.milestone
          milestones.timeframe
          FROM milestones`,
            function(err, results) {
                if (err) return next(err);
                res.render('notification', {
                    milestones: results
                });
            });
    });
};

exports.update = function(req, res, next) {

    var data = {
        milestone : req.body.milestone,
        personal_rating: Number(req.body.personal_rating)
    };
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('UPDATE milestones SET ? WHERE id = ?', [data, id], function(err, rows) {
            if (err) return next(err);
            res.redirect('/home');
        });
    });
};
