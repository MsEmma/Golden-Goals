exports.show = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT members.user_name, goals.goal, milestones.milestone, milestones.timeframe FROM milestones INNER JOIN goals ON milestones.goal_id = goals.id INNER JOIN members ON goals.member_id = members.id LIMIT 0 , 1',
            function(err, results) {
                if (err) return next(err);
                res.render('notifications', {
                  milestones :results
                });
            });
    });
};

exports.update = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    connection.query('UPDATE milestones SET ? WHERE id = ?', [data, id], function(err, rows){
      
      var data = {
            milestone : req.body.milestone,
            personal_rating: Name(req.body.personal_rating)
      };

          console.log(data);
    });

    if (err) return next(err);
    res.render('/');
});

};
