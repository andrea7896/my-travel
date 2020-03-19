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
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel` (
  `idHotel` int NOT NULL AUTO_INCREMENT,
  `idCategory` int DEFAULT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(280) COLLATE utf8mb4_0900_as_cs NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `imgPrincipal` varchar(2080) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `imgExtra1` varchar(2080) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `imgExtra2` varchar(2080) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `imgExtra3` varchar(2080) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idCity` int DEFAULT NULL,
  `rate` int NOT NULL,
  `destacado` int NOT NULL,
  PRIMARY KEY (`idHotel`),
  KEY `idCity_idx` (`idCity`),
  KEY `rate_idx` (`rate`),
  CONSTRAINT `idCity` FOREIGN KEY (`idCity`) REFERENCES `cities` (`idCity`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idRate` FOREIGN KEY (`rate`) REFERENCES `stars` (`idRate`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_as_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,1,'Hotel Bugambilias','Lugar tranquilo para descansar',3500.00,'2020-06-30','2020-07-05','2020-03-14 07:15:11','https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=615&q=80','','','',1,4,1),(2,1,'Hotel Imperial','El mejor escape para un momento de relajación',2500.00,'2020-05-30','2020-06-05','2020-03-14 07:15:11','https://images.unsplash.com/photo-1544097935-e6d136448533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','','','',1,2,0),(3,1,'Hotel Deluxe Diamante','Jardines botánicos con flora tipica de la región',4000.00,'2020-05-30','2020-06-05','2020-03-14 07:15:11','https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80}','https://images.unsplash.com/photo-1560850006-5837212e620b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1580565996832-60ccfdf1a755?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=743&q=80','https://images.unsplash.com/photo-1574118139440-94aef80059b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',1,3,1),(4,1,'Hotel La Cabaña ','Lugar fuera de la ciudad perfecto para hacer actividades recreativas como nuestras clases de Yoga',1800.00,'2020-05-30','2020-06-05','2020-03-14 07:15:11','https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80','','','',2,5,0);
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-18  8:53:33
