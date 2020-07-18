DROP DATABASE burger_db IF EXISTS;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    burger_special BOOLEAN default false,
	PRIMARY KEY (id)
);
