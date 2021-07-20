
CREATE DATABASE IF NOT EXISTS `MartinzBanDB` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `MartinzBanDB`;

CREATE TABLE IF NOT EXISTS `appeal_data` (
  `Appeal_User` text NOT NULL,
  `Appeal_User_Object` text NOT NULL,
  `Appeal_Reason` text NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `bans` (
  `admin_name` text NOT NULL,
  `admin_id` int(19) NOT NULL,
  `case_id` int(20) NOT NULL,
  `ban_reason` text NOT NULL,
  `ban_proof` text NOT NULL,
  `date_time` text NOT NULL,
  `ban_guildID` int(20) NOT NULL,
  `ban_id` text NOT NULL,
  `banned_user` text NOT NULL
  `images` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `guild_settings` (
  `guild_id` text NOT NULL,
  `autobans` text NOT NULL,
  `guild_owner` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `id_case` (
  `id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `report_data` (
  `user_id` int(19) NOT NULL,
  `Report_ID` text NOT NULL,
  `Report` text NOT NULL,
  `Proof` text NOT NULL,
  `Report_User` text NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `case_data` (
  `images` text NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


