CREATE DATABASE ng_blog_db;

USE ng_blog_db;

CREATE TABLE categories(
    categorie_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(255),
    is_active int(1),
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

USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE DELETE_CATEGORIE_byId (IN pId INT(11))
BEGIN
	
    DELETE FROM CATEGORIES WHERE CATEGORIE_ID = pId;

END$$

USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE UPDATE_CATEGORIE_byId (
IN pId INT(11),
IN pName VARCHAR(100),
IN pDescription VARCHAR(255))
BEGIN
	
    UPDATE CATEGORIES SET NAME = pName , DESCRIPTION = pDescription, MODIFIED_DATETIME = NOW(), MODIFIED_USERID = 1
    WHERE CATEGORIE_ID = pId;

END$$

USE ng_blog_db;

CREATE TABLE topics(
    topic_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    contenido text,
    picture varchar(100),
    categorie_id int(11),
    visitas int(11),
    likes int(11),
    tiempo int(11),
    link varchar(1000),
    is_active int(1),
    created_datetime datetime not null,
    created_userId INT(11),
    modified_datetime datetime,
    modified_userId INT(11),
    FOREIGN KEY (categorie_id) REFERENCES categories(categorie_id)
);


USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE INSERT_TOPIC (
IN 	pname  VARCHAR(100), 
	pcontenido text,
    ppicture varchar(100),
    pcategorie_id int(11),
    ptiempo int(11),
    plink varchar(1000),
    pisactive int(1)

)
BEGIN
	
    INSERT INTO TOPICS (name,
        contenido,
        picture,
        categorie_id,
        tiempo,
        link,
        is_active,
        created_datetime,
        created_userId)
    VALUES ( pname, 
	        pcontenido,
            ppicture,
            pcategorie_id,
            ptiempo,
            plink,
            pisactive,
            now(), 1);

END$$


USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE GET_ALL_TOPICS()
BEGIN
	
    SELECT * FROM TOPICS;

END$$

USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE GET_ALL_TOPICS_byCategorieId (IN pId INT(11))
BEGIN
	
    SELECT * FROM TOPICS WHERE CATEGORIE_ID = pId;

END$$

USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE GET_TOPIC_byId (IN pId INT(11))
BEGIN
	
    SELECT * FROM TOPICS WHERE TOPIC_ID = pId;

END$$

USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE DELETE_TOPIC_byId (IN pId INT(11))
BEGIN
	
    DELETE FROM TOPICS WHERE TOPIC_ID = pId;

END$$

USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE DELETE_TOPIC_byId (IN pId INT(11))
BEGIN
	
    DELETE FROM TOPICS WHERE TOPIC_ID = pId;

END$$

USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE UPDATE_TOPIC_byId (
    pname  VARCHAR(100), 
	pcontenido text,
    ppicture varchar(100),
    pcategorie_id int(11),
    ptiempo int(11),
    plink varchar(1000),
    pisActive int(1)
)
BEGIN
	
    UPDATE TOPICS SET 
        name = pname, 
        contenido = pcontenido,
        picture = ppicture,
        categorie_id = pcategorie_id,
        tiempo = ptiempo,
        link = plink,
        is_active = pisActive,
        MODIFIED_DATETIME = NOW(), 
        MODIFIED_USERID = 1)  
    WHERE Topic = pId;

END$$

USE ng_blog_db;

CREATE TABLE tripulantes(
    tripulante_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    apellido VARCHAR(100),
    picture varchar(1000),
    provider_id varchar(1000),
	mail varchar(100),
    pass varchar(100),
    is_active int(1),
    created_datetime datetime not null,
    created_userId INT(11),
    modified_datetime datetime,
    modified_userId INT(11)
    modified_userId INT(11),
    user_access_level INT
);

USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE GET_TRIPULANTE_BY_PROVIDERID(IN pId varchar(1000))
BEGIN
	
    SELECT * FROM TRIPULANTES WHERE provider_id = pId;

END$$

USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE GET_TRIPULANTE_BY_ID(IN pId varchar(1000))
BEGIN
	
    SELECT * FROM TRIPULANTES WHERE tripulante_id = pId;

END$$


USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE INSERT_TRIPULANTE_BYPROVIDER(
IN pname  VARCHAR(100), 
ppicture varchar(1000),
pprovider_id varchar(1000),
pmail varchar(100)
)
BEGIN
	
    INSERT INTO TRIPULANTES (name, picture, provider_id, mail, is_active, created_datetime, created_userId)
    VALUES (pname, ppicture, pprovider_id, pmail, 1 , now(), 1);
    
END$$

CREATE PROCEDURE INSERT_TRIPULANTE_BYMAIL(
IN pname  VARCHAR(100), 
pmail varchar(100),
ppassword varchar(100)
)
BEGIN
	
    INSERT INTO TRIPULANTES (name, mail, password , is_active, created_datetime, created_userId, user_access_level)
    VALUES (pname, pmail, ppassword, 1 , now(), 1, 0);
    
    SELECT tripulante_id, name, mail, user_access_level FROM TRIPULANTES WHERE mail = pmail;
    
END$$

USE ng_blog_db;

DELIMITER $$

CREATE PROCEDURE GET_TRIPULANTE_BY_EMAIL(IN pMail varchar(100))
BEGIN
	
    SELECT tripulante_id, name, mail, password, user_access_level FROM TRIPULANTES WHERE mail = pMail;

END$$

