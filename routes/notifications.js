exports.show = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);

        var id = req.params.goal_id;

        connection.query('SELECT members.user_name, goals.goal, milestones.milestone, milestones.timeframe FROM milestones INNER JOIN goals ON milestones.goal_id = goals.id INNER JOIN members ON goals.member_id = members.id where goals.id = ? LIMIT 0 , 1', id,
            function(err, results) {
                if (err) return next(err);
                res.render('notifications', {
                  milestones :results,
                  layout : false
                });
            });
    });
};
