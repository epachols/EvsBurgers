DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    is_eaten BOOLEAN default false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (name)
VALUES ("Every Breath You Tiki Masala"),
 ("Bet it all on black garlic"),
  ("I'm Sprouta here (comes with sprouts"), ("Runny out of Thyme");