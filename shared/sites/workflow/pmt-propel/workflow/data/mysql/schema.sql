
# This is a fix for InnoDB in MySQL >= 4.1.x
# It "suspends judgement" for fkey relationships until are tables are set.
SET FOREIGN_KEY_CHECKS = 0;

#-----------------------------------------------------------------------------
#-- PMT_NEWKALA
#-----------------------------------------------------------------------------

DROP TABLE IF EXISTS `PMT_NEWKALA`;


CREATE TABLE `PMT_NEWKALA`
(
	`APP_UID` VARCHAR(32)  NOT NULL,
	`APP_NUMBER` INTEGER(11)  NOT NULL,
	`APP_STATUS` VARCHAR(10)  NOT NULL,
	`USERNAME` VARCHAR(255),
	`USERNAME_LABEL` VARCHAR(255),
	`ASSESSREQUEST` INTEGER,
	PRIMARY KEY (`APP_UID`),
	KEY `indexTable`(`APP_UID`)
)ENGINE=InnoDB  DEFAULT CHARSET='utf8';
# This restores the fkey checks, after having unset them earlier
SET FOREIGN_KEY_CHECKS = 1;
