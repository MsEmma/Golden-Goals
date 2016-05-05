exports.show = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query(`SELECT members.id, members.member, goals.goal, goals.member_id,
          FROM  members
				 	INNER JOIN goals
          ON goals.member_id = members.id`,
					function(err, results) {
            if (err) return next(err);
            res.render('/', {
                status: results
            });
        });
    });
};
