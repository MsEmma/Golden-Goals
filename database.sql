use Goal_it;

DROP TABLE IF EXISTS `milestones`;
DROP TABLE IF EXISTS `goals`;
DROP TABLE IF EXISTS `members`;


create table members(
   	id int not null auto_increment,
      user_name VARCHAR(50),
	     primary key(id),
	      constraint uc_user_name unique (user_name)
);

create table goals(
    id int not null auto_increment,
	   member_id int,
	    goal VARCHAR(50),
	     start_date date not null,
	      target_date date not null,
	       primary key(id),
	        foreign key(member_id) REFERENCES members(id)
);

create table milestones(
	    id int not null auto_increment,
	     goal_id int,
	      milestone VARCHAR(50),
	       primary key(id),
         personal_rating VARCHAR(20),
         timeframe int not null,
	        foreign key(goal_id) REFERENCES goals(id)
);
