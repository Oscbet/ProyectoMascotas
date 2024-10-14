-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2024 at 04:27 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mascotas`
--

-- --------------------------------------------------------

--
-- Table structure for table `perros`
--

CREATE TABLE `perros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `edad` int(11) NOT NULL,
  `raza` varchar(100) NOT NULL,
  `tamano` enum('pequeño','mediano','grande') NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `entregado_a` varchar(100) DEFAULT NULL,
  `fecha_adopcion` date DEFAULT NULL,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `perros`
--

INSERT INTO `perros` (`id`, `nombre`, `edad`, `raza`, `tamano`, `imagen`, `entregado_a`, `fecha_adopcion`, `creado_en`) VALUES
(1, 'Firulais', 3, 'Chihuahua', 'pequeño', 'chihuahua.jpg', 'Juaquin lopez', NULL, '2024-09-25 14:21:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `perros`
--
ALTER TABLE `perros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `perros`
--
ALTER TABLE `perros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
