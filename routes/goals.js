exports.add = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        var data = {
            goal: req.body.goal,
            member_id: Number(req.body.member_id),
            start_date: req.body.start_date,
            target_date: req.body.target_date
        };

        var data1 = {
          milestone: req.body.milestone,
          goal_id: Number(req.body.goal_id),
          timeframe:Number(req.body.timeframe)
        }

        connection.query('insert into goals set ?', data, function(err, results) {
            if (err) return next(err);
            connection.query('insert into milestones set ?', data1, function(err, results) {
                if (err) return next(err);
                res.redirect('/');
            });
        });
    });
};
