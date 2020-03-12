CREATE DATABASE ng_blog_db;

USE ng_blog_db;

CREATE TABLE categories(
    categorie_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(255),
    created_datetime datetime not null,
    created_userId INT(11),
    modified_datetime datetime,
    modified_userId INT(11)
);

USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE INSERT_CATEGORIES (
IN pname  VARCHAR(100), pdescription VARCHAR(255)
)
BEGIN
	
    INSERT INTO CATEGORIES (NAME, DESCRIPTION, created_datetime, CREATED_USERID)
    VALUES (pname, pdescription, now(), 1);

END$$

USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE GET_ALL_CATEGORIES ()
BEGIN
	
    SELECT * FROM CATEGORIES;

END$$

USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE GET_CATEGORIE_byId (IN pId INT(11))
BEGIN
	
    SELECT * FROM CATEGORIES WHERE CATEGORIE_ID = pId;

END$$