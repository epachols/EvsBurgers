DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int AUTO_INCREMENT NOT NULL,
	name varchar(255) NOT NULL,
    edible BOOLEAN DEFAULT false NOT NULL,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO burgers (name)
VALUES ("Every Breath You Tiki Masala"),
 ("Bet it all on black garlic"),
  ("I'm Sprouta here (comes with sprouts"), ("Runny out of Thyme");

INSERT INTO burgers (name, edible)
VALUES ("this burger should be on the burgers to come back to list'", true);