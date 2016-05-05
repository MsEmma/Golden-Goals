exports.add = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);

        var user_name = req.params.user_name;

        connection.query('select id from members where user_name = ?', user_name, function(err, results) {
            if (err) return next(err);


            var data = {
                goal: req.body.goal,
                start_date: new Date(),
                target_date: new Date(),
                member_id: results[0].id
            };

            connection.query('insert into goals set ?', data, function(err, results) {
                if (err) return next(err);

                var goal_id = results.insertId;

                var data1 = [
                    [
                        req.body.milestone1,
                        goal_id,
                        Number(req.body.timeframe1)
                    ],
                    [
                        req.body.milestone2,
                        goal_id,
                        Number(req.body.timeframe2)
                    ],
                    [
                        req.body.milestone3,
                        goal_id,
                        Number(req.body.timeframe3)
                    ]

                ];

                connection.query('insert into milestones (milestone,goal_id,timeframe) VALUES ?', [data1], function(err, results) {

                    if (err) return next(err);
                    res.redirect('/goals?notify=true&goal_id=' + goal_id);
                });
            });
        });

    });
}
