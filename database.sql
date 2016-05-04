use Goal_it;


DROP TABLE IF EXISTS `Milestones`;
DROP TABLE IF EXISTS `Goals`;
DROP TABLE IF EXISTS `Members`;


create table members(
   	members_id int not null auto_increment,
      user_name VARCHAR(50),
	     primary key(members_id),
	      constraint uc_user_name unique (user_name)
);


create table goals(
    goals_id int not null auto_increment,
	   members_id int,
	    goal_name VARCHAR(50),
	     start_date date not null,
	      target_date date not null,
	       primary key(goals_id),
	        foreign key(members_id) REFERENCES members(members_id),
	         constraint uc_goal_name unique (goal_name)
);


create table milestones(
	    id int not null auto_increment,
	     goals_id int,
	      milestone VARCHAR(50),
	       primary key(id),
	        foreign key(goals_id) REFERENCES goals(goals_id),
	         constraint uc_milestone unique (milestone)
);
