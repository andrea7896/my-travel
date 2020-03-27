-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: mytravel2
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `idBooking` int NOT NULL AUTO_INCREMENT,
  `idHotel` int DEFAULT NULL,
  `added_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `username` varchar(280) NOT NULL,
  `firstName` varchar(280) NOT NULL,
  `lastName` varchar(280) NOT NULL,
  `email` varchar(280) NOT NULL,
  `hotel_date` varchar(100) NOT NULL,
  `active` int DEFAULT NULL,
  PRIMARY KEY (`idBooking`),
  KEY `username_idx` (`username`),
  KEY `idHotel_idx` (`idHotel`),
  CONSTRAINT `idHotel` FOREIGN KEY (`idHotel`) REFERENCES `hotel` (`idHotel`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,6,'2020-03-25 03:42:15','2020-03-26 05:19:47','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(2,11,'2020-03-25 21:11:59','2020-03-26 05:20:05','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(3,9,'2020-03-25 21:19:08','2020-03-26 05:17:41','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(4,5,'2020-03-26 00:39:15','2020-03-26 01:19:54','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(5,7,'2020-03-26 00:49:01','2020-03-26 02:12:51','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(6,14,'2020-03-26 01:08:03','2020-03-26 02:11:19','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(7,16,'2020-03-26 01:12:39','2020-03-26 01:12:43','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(8,5,'2020-03-26 01:15:52','2020-03-26 01:19:54','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(9,5,'2020-03-26 01:17:40','2020-03-26 01:19:54','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(10,11,'2020-03-26 01:18:09','2020-03-26 05:20:05','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(11,5,'2020-03-26 01:19:49','2020-03-26 01:19:54','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(12,14,'2020-03-26 02:11:15','2020-03-26 02:11:19','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(13,7,'2020-03-26 02:12:43','2020-03-26 02:12:51','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(14,13,'2020-03-26 02:14:13','2020-03-26 02:17:19','andrea7896','undefined','undefined','aadc1025@gmail.com','2020-05-30,2020-06-06',0),(15,5,'2020-03-26 02:14:27','2020-03-26 05:19:26','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(16,11,'2020-03-26 04:12:21','2020-03-26 05:20:05','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(17,11,'2020-03-26 04:29:53','2020-03-26 05:20:05','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(18,7,'2020-03-26 05:01:14','2020-03-26 05:22:15','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(19,14,'2020-03-26 05:22:32','2020-03-26 05:22:47','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(20,11,'2020-03-26 06:24:43','2020-03-26 07:20:35','andrea7896','undefined','undefined','aadc1025@gmail.com','2020-05-30,2020-06-06',0),(21,11,'2020-03-27 03:34:36','2020-03-27 03:37:01','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(22,11,'2020-03-27 14:27:50','2020-03-27 14:47:51','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(23,15,'2020-03-27 14:31:34','2020-03-27 14:35:11','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(24,16,'2020-03-27 14:41:27','2020-03-27 14:50:06','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(25,12,'2020-03-27 14:46:07','2020-03-27 14:54:20','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0),(26,13,'2020-03-27 14:55:31','2020-03-27 14:57:06','andrea7896','undefined','undefined','andrea_nataly_05@hotmail.com','2020-05-30,2020-06-06',0);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-27 10:22:38
