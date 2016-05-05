# Golden-Goals

Our app allows the creation of teams amongst individuals who know each other ie soccer team/Codex team.
Each team member can create a goal on the app and have the rest of the team help with support.
The goals are monitored over a period of time and when a member reaches a certain level team members can engage using emoticons.


# database setup

Run this script to setup database, but make sure you inside the project folder

To login to sql:

`mysql -u golden_girls -p`

The password is: `goals`

To create the database run the sql below in `mysql` :

```sql
CREATE DATABASE Goal_it;
CREATE USER golden_girls@localhost IDENTIFIED BY 'goals';
GRANT ALL PRIVILEGES ON Goal_it.* TO golden_girls@localhost;
FLUSH PRIVILEGES;
```

To create the tables run this in `mysql`:

`
source database.sql
`
