use golden_girls;

DROP TABLE IF EXISTS `Members`;
  create table Members(
   	members_id int not null auto_increment,
      user_name VARCHAR(50),
	     primary key(members_id),
	      constraint uc_user_name unique (user_name)
);

DROP TABLE IF EXISTS `Goals`;
  create table Goals(
    Goals_id int not null auto_increment,
	   members_id int,
	    goal_name VARCHAR(50),
	     start_date date not null,
	      target_date date not null,
	       primary key(Goals_id),
	        foreign key(members_id) REFERENCES Members(members_id),
	         constraint uc_goal_name unique (goal_name)
);

DROP TABLE IF EXISTS 'Milestones';
  create table Milestones(
	    id int not null auto_increment,
	     Goals_id int,
	      Milestone_name VARCHAR(50),
	       primary key(id),
	        foreign key(Goals_id) REFERENCES Goals(Goals_id),
	         constraint uc_Milestone_name unique (Milestone_name)
);
