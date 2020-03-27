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
  `description` varchar(2800) COLLATE utf8mb4_0900_as_cs NOT NULL,
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
  KEY `idCategory_idx` (`idCategory`),
  CONSTRAINT `idCategory` FOREIGN KEY (`idCategory`) REFERENCES `category` (`idCategory`),
  CONSTRAINT `idCity` FOREIGN KEY (`idCity`) REFERENCES `cities` (`idCity`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idRate` FOREIGN KEY (`rate`) REFERENCES `stars` (`idRate`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_as_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (5,1,'Hotel Bugambilias','Lugar tranquilo para descansar',3500.00,'2020-05-30','2020-06-06','2020-03-22 23:42:47','https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=615&q=80','https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1486591038957-19e7c73bdc41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',1,4,1),(6,1,'Hotel Imperial','El mejor escape para un momento de relajación',2500.00,'2020-05-30','2020-06-06','2020-03-22 23:42:47','https://images.unsplash.com/photo-1544097935-e6d136448533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80','https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80','https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',2,2,1),(7,1,'Hotel Deluxe Diamante','Jardines botánicos con flora tipica de la región. Somos la mejor opción para escapar de la rutina diaria; a través de nuestros tratamientos faciales, corporales y masajes, usted logrará recuperar el equilibrio en cuerpo, mente y espíritu ',4000.00,'2020-05-30','2020-06-06','2020-03-22 23:42:48','https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80}','https://images.unsplash.com/photo-1560850006-5837212e620b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1580565996832-60ccfdf1a755?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=743&q=80','https://images.unsplash.com/photo-1574118139440-94aef80059b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',3,4,1),(8,2,'Hotel La Cabaña ','Lugar fuera de la ciudad perfecto para hacer actividades extremas como volar en parapente o deslizarse por la tiroleza. Contamos con tour completamente guiado por nuestro guia y actividades dirigidas por profesionales',1800.00,'2020-05-30','2020-06-06','2020-03-22 23:42:48','https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80','https://images.unsplash.com/photo-1505738313577-5357ff512f16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80','https://images.unsplash.com/photo-1539372786391-0518119e77f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80','https://images.unsplash.com/photo-1531203586808-3820069c6b96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',2,2,0),(9,2,'Hotel Quinto Sol','El mejor lugar para empezar una aventura de altura en globo aerostático',3000.00,'2020-05-30','2020-06-06','2020-03-22 23:42:48','https://images.unsplash.com/photo-1515362655824-9a74989f318e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1535479939465-f597a4f58943?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1545039986-c631605fb605?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80','https://images.unsplash.com/photo-1575359848983-1a0644a07a42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',2,3,0),(10,2,'Hotel Aldea Rodavento','El lugar perfecto para practicar rafting.Ubicado a las afueras de la ciudad y que ofrece un tour con transporte incluido directo hacia uno de los sitios más importantes de México para practicar este deporte',2700.00,'2020-05-30','2020-06-06','2020-03-22 23:42:48','https://images.unsplash.com/photo-1576675784201-0e142b423952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80','https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80','https://images.unsplash.com/photo-1582811588429-becf2ea63485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1503477742902-923d33a4d8cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',3,3,0),(11,3,'Hotel L\'otel Chiquitos','Se trata de un hotel boutique inspirado en el arte y el buen gusto galardonado como uno de los hoteles más románticos del mundo con tan solo 4 habitaciones. Cuando vayas visita su terraza con los mejores atardeceres y vistas a la ciudad',9900.00,'2020-05-30','2020-06-06','2020-03-22 23:42:48','https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80','https://images.unsplash.com/photo-1550155888-430386a434b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80','https://images.unsplash.com/photo-1571456803038-80efbf5c9d6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',1,5,0),(12,3,'Hotel Encuentro Guadalupe','Encuentro Guadalupe es un hotel de diseño vanguardista enclavado en una reserva ecológica una región donde se producen los mejores vinos de México. Son 22 lofts independientes con una decoración moderna minimalista y terraza privada con una maravillosa vista a los viñedos, para tener la mejor cita',7800.00,'2020-05-30','2020-06-06','2020-03-22 23:42:48','https://images.unsplash.com/photo-1575422097060-235342882edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','https://images.unsplash.com/photo-1571456823048-252eeb3a1b14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1568449497118-ef852ddbbed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80','https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',2,5,0),(13,3,'Hotel Verana','Exclusivo lugar apartado del mundo, donde la naturaleza es la protagonista. Verana es un hotel que se especializa exclusivamente en parejas y ha sido premiado por su arquitectura y diseńo de interiores, que incluye elementos decorativos mexicanos. Cada una de sus diez casitas tiene estilo propio; con sus terrazas y alberca voladas ofrecen una excepcional vista que te robará el aliento',8500.00,'2020-05-30','2020-06-06','2020-03-22 23:42:48','https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80','https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','https://peopledotcom.files.wordpress.com/2017/03/tao1406secret_gardent_obey.jpg','https://images.unsplash.com/photo-1550060005-d0f498411f51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=395&q=80',3,5,0),(14,4,'Hotel Hacienda del Bosque','Lugar para pasar las mejores lunadas en el bosque de la sierra madre',3700.00,'2020-05-30','2020-06-06','2020-03-22 23:42:49','https://images.unsplash.com/photo-1487695652027-48e475bfa86f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80','https://images.unsplash.com/photo-1525113990976-399835c43838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80','https://images.unsplash.com/photo-1533088339408-74fcf62b8e6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1547561993-9fe9f2af3fd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',1,4,1),(15,4,'Hotel Casino Plaza','El Hotel Casino Plaza ofrece acceso fácil a muchas atracciones locales ademas de  tener barra libre en su casino y el mejor antro de la ciudad',8000.00,'2020-05-30','2020-06-06','2020-03-22 23:42:49','https://images.unsplash.com/photo-1576675762999-2d8ee979aac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80','https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1393&q=80','https://images.unsplash.com/photo-1559060680-36abfac01944?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80','https://images.unsplash.com/photo-1537154835319-14f43d91ea98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',2,3,0),(16,4,'Hotel Hard Rock ','El mejor lugar para  pasar con tus amigos con canciones clásicas de rock y conciertos en vivo desde su teatro principal.Vive los mejores encuentros con tus artistas en compańía de amigos',2300.00,'2020-05-30','2020-06-06','2020-03-22 23:42:49','https://images.unsplash.com/photo-1556597258-dca9fea9489d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=337&q=80','https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','https://images.unsplash.com/photo-1574006223363-30bf25a69658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80','https://images.unsplash.com/photo-1574521091464-a55e7763c1e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=363&q=80',3,3,0);
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

-- Dump completed on 2020-03-27 10:22:37
