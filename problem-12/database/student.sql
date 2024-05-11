-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 09, 2023 at 08:46 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student`
--

-- --------------------------------------------------------

--
-- Table structure for table `semester_reg`
--

CREATE TABLE `semester_reg` (
  `ID` varchar(34) NOT NULL,
  `Name` text NOT NULL,
  `Session` text NOT NULL,
  `Ph_Num` text NOT NULL,
  `City` text NOT NULL,
  `Gender` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `semester_reg`
--

INSERT INTO `semester_reg` (`ID`, `Name`, `Session`, `Ph_Num`, `City`, `Gender`) VALUES
('12115606', 'Asad Safiq ', '2017-18', '01627768447', 'Rajshahi', 'Male'),
('12115607', 'Md. Tofail ', '2019-20', '01722633140', 'Kushtia', 'Male'),
('12115608', 'Mst. Momtaz', '2014-15', '01965849197', 'Jhynadah', 'Female');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `semester_reg`
--
ALTER TABLE `semester_reg`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
