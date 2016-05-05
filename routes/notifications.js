exports.show = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT members.user_name, goals.goal, milestones.milestone, milestones.timeframe FROM milestones INNER JOIN goals ON milestones.goal_id = goals.id INNER JOIN members ON goals.member_id = members.id',
            function(err, results) {
                if (err) return next(err);
                res.render('notifications', {
                    notifications: results
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
            res.redirect('/');
        });
    });
};
