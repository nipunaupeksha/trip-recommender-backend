-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2020 at 03:21 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nadeguraf`
--

-- --------------------------------------------------------

--
-- Table structure for table `age`
--

CREATE TABLE `age` (
  `ageId` int(255) NOT NULL,
  `ageValue` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `age`
--

INSERT INTO `age` (`ageId`, `ageValue`) VALUES
(1, 'Below 15 years'),
(2, '15-25 years'),
(3, '25-35 years'),
(4, '35-45 years'),
(5, '45-55 years'),
(6, '55-65 years'),
(7, '65-75 years'),
(8, 'Over 75 years');

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `driverId` int(255) NOT NULL,
  `driverName` varchar(40) NOT NULL,
  `license` varchar(20) NOT NULL,
  `transportId` int(255) NOT NULL,
  `driverPhone` varchar(40) NOT NULL,
  `driverMail` varchar(40) NOT NULL,
  `vehicleId` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`driverId`, `driverName`, `license`, `transportId`, `driverPhone`, `driverMail`, `vehicleId`) VALUES
(0, 'p', '45', 2, '234', '234', 1),
(2, 'p', '45', 2, '234', '234', 1);

-- --------------------------------------------------------

--
-- Table structure for table `hotel`
--

CREATE TABLE `hotel` (
  `hotelId` int(255) NOT NULL,
  `hotelName` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `phone` varchar(40) NOT NULL,
  `address` varchar(40) NOT NULL,
  `userId` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hotel`
--

INSERT INTO `hotel` (`hotelId`, `hotelName`, `email`, `phone`, `address`, `userId`) VALUES
(1, 'Villa 26', 'villa26@gmail.com', '0912245789', 'Villa 26, Galle.', 5),
(2, 'Elliot Nature Resort', 'elliotnr@gmail.com', '0912245863', 'Elliot Nature Resort, Galle.', 6),
(3, 'GreenCase', 'Galle,undefined,', '0712545168', 'gc@yahoo.com', 6),
(5, 'Fairway Sunset Hotel', 'Galle,undefined,', '0912245903', 'fw@gc.lk', 6),
(6, 'Amari', 'Galle,undefined,', '0914545897', 'amari@galle.lk', 6);

-- --------------------------------------------------------

--
-- Table structure for table `hoteldetails`
--

CREATE TABLE `hoteldetails` (
  `hotelDetailsId` int(255) NOT NULL,
  `hotelId` int(255) NOT NULL,
  `noOfAdults` int(255) NOT NULL,
  `noOfKids` int(255) NOT NULL,
  `price` double NOT NULL,
  `luxury` int(255) NOT NULL,
  `semiluxury` int(255) NOT NULL,
  `deluxe` int(255) NOT NULL,
  `suite` int(255) NOT NULL,
  `luxuryac` varchar(40) NOT NULL,
  `semiluxuryac` varchar(40) NOT NULL,
  `deluxeac` varchar(40) NOT NULL,
  `suiteac` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hoteldetails`
--

INSERT INTO `hoteldetails` (`hotelDetailsId`, `hotelId`, `noOfAdults`, `noOfKids`, `price`, `luxury`, `semiluxury`, `deluxe`, `suite`, `luxuryac`, `semiluxuryac`, `deluxeac`, `suiteac`) VALUES
(1, 2, 2, 3, 1000, 3000, 3000, 3000, 3000, 'AC', 'AC', 'AC', 'AC'),
(2, 3, 314, 131, 13, 3, 23, 2323, 232, '1', '1', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `roomtype`
--

CREATE TABLE `roomtype` (
  `roomTypeId` int(255) NOT NULL,
  `roomType` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roomtype`
--

INSERT INTO `roomtype` (`roomTypeId`, `roomType`) VALUES
(1, 'luxury'),
(2, 'semi-luxury'),
(3, 'deluxe'),
(4, 'suite');

-- --------------------------------------------------------

--
-- Table structure for table `transport`
--

CREATE TABLE `transport` (
  `transportId` int(255) NOT NULL,
  `transportType` varchar(30) NOT NULL,
  `transportName` varchar(30) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phone` int(255) NOT NULL,
  `email` varchar(30) NOT NULL,
  `userId` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transport`
--

INSERT INTO `transport` (`transportId`, `transportType`, `transportName`, `address`, `phone`, `email`, `userId`) VALUES
(1, 'wwwrww', 'q', 'q,undefined,', 12, 'q@q', 7),
(2, 'wwwwwr', 'Flinto', 'f', 123056, 'flinto@f', 16),
(3, 'wwrwww', 'f', 'f,f,', 21, 'f', 16);

-- --------------------------------------------------------

--
-- Table structure for table `travel`
--

CREATE TABLE `travel` (
  `travelId` int(255) NOT NULL,
  `travelValue` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `travel`
--

INSERT INTO `travel` (`travelId`, `travelValue`) VALUES
(1, 'directions_run'),
(2, 'directions_bike'),
(3, 'directions_car'),
(4, 'airport_shuttle'),
(5, 'directions_bus'),
(6, 'directions_railway');

-- --------------------------------------------------------

--
-- Table structure for table `trip`
--

CREATE TABLE `trip` (
  `tripId` int(255) NOT NULL,
  `tripDestinationId` int(255) NOT NULL,
  `startDate` varchar(40) NOT NULL,
  `startTime` varchar(40) NOT NULL,
  `startVenue` varchar(40) NOT NULL,
  `days` int(40) NOT NULL,
  `peopleCount` int(40) NOT NULL,
  `participants` int(20) NOT NULL,
  `budgetPerPerson` double NOT NULL,
  `ageId` int(255) NOT NULL,
  `triptype` int(10) NOT NULL,
  `travel` varchar(40) NOT NULL,
  `userId` int(255) NOT NULL,
  `hotelId` int(255) NOT NULL,
  `transportId` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trip`
--

INSERT INTO `trip` (`tripId`, `tripDestinationId`, `startDate`, `startTime`, `startVenue`, `days`, `peopleCount`, `participants`, `budgetPerPerson`, `ageId`, `triptype`, `travel`, `userId`, `hotelId`, `transportId`) VALUES
(4, 2, '2020-07-05', '12.55', 'G', 4, 4, 2, 12, 2, 1, 'wwwwww', 17, 6, 1),
(59, 1, '2020-06-10', '22:47', 'm', 12, 2147483647, 1, 1, 1, 1, 'wwwwww', 1, 1, 1),
(60, 3, '2020-06-09', '11:39', 'Galle', 12, 1212, 1, 1222, 2, 1, 'rwwwww', 17, 1, 1),
(61, 4, '2020-06-30', '14.55', 'Galle', 5, 30, 12, 1000, 3, 1, '1', 1, 2, 1),
(70, 2, '2020-07-05', '12.55', 'G', 4, 4, 1, 12, 2, 1, 'wwwwww', 1, 6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tripdestination`
--

CREATE TABLE `tripdestination` (
  `tripDestinationId` int(255) NOT NULL,
  `destination` varchar(30) NOT NULL,
  `district` varchar(30) NOT NULL,
  `province` varchar(30) NOT NULL,
  `area` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tripdestination`
--

INSERT INTO `tripdestination` (`tripDestinationId`, `destination`, `district`, `province`, `area`) VALUES
(1, 'Koggala', 'Galle', 'Southern Province', 'Koggala'),
(2, 'Galle Dutch Fort', 'Galle', 'Southern Province', 'Galle'),
(3, 'Ahungalla', 'Galle', 'Southern Province', 'Galle'),
(4, 'Bentota Venture Beach', 'Galle', 'Southern Province', 'Bentota');

-- --------------------------------------------------------

--
-- Table structure for table `tripdetails`
--

CREATE TABLE `tripdetails` (
  `tripDetailId` int(255) NOT NULL,
  `tripId` int(255) NOT NULL,
  `userID` int(255) NOT NULL,
  `buddies` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tripdetails`
--

INSERT INTO `tripdetails` (`tripDetailId`, `tripId`, `userID`, `buddies`) VALUES
(10, 4, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(255) NOT NULL,
  `fName` varchar(20) NOT NULL,
  `lName` varchar(20) NOT NULL,
  `address` varchar(40) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `email` varchar(40) NOT NULL,
  `dob` varchar(40) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `nic` varchar(20) NOT NULL,
  `drivingLicense` varchar(40) NOT NULL,
  `occupation` varchar(40) NOT NULL,
  `forgetPasswordNo` varchar(100) NOT NULL,
  `password` varchar(40) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `fName`, `lName`, `address`, `mobile`, `email`, `dob`, `gender`, `nic`, `drivingLicense`, `occupation`, `forgetPasswordNo`, `password`, `role`) VALUES
(1, 'nipuna', 'upeksha', '77/43,isurupedesa,galle', '712120452', 'b@b', '2020-06-18', 'Male', '95176', '23', 'doc', '775376', '12', 'customer'),
(5, 't', 't', 't', '1', 't@t', '2020-06-01', 'Female', '12', 't', 't', '', 't', 'admin'),
(6, 'k', 'k', 'k,k,', '1', 'k#k', '2020-06-11', 'Female', '1', '1', 'k', '', 'k', 'serviceH'),
(7, 'a', 'a', 'a,a,a', '1231231231', 'a@gmail.com', '2020-06-02', 'Male', '959595959', '12121313', 'aa', '', 'a', 'serviceT'),
(16, 'j', 'j', 'j', '1', 'j#j', '2020-06-05', 'female', '112', '12', 'ho', '', 'j', 'serviceT'),
(17, 'x', 'x', 'xx,x,', '1', 'x', '2020-06-10', 'Male', '12', 'y', 'x', '', 'x', 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `vehicleId` int(255) NOT NULL,
  `licensePlate` varchar(30) NOT NULL,
  `model` varchar(30) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `noOfSeats` int(255) NOT NULL,
  `ac` varchar(30) NOT NULL,
  `cdplayer` varchar(30) NOT NULL,
  `usb` varchar(30) NOT NULL,
  `availability` varchar(30) NOT NULL,
  `transportId` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`vehicleId`, `licensePlate`, `model`, `brand`, `noOfSeats`, `ac`, `cdplayer`, `usb`, `availability`, `transportId`) VALUES
(1, '123458', 'Honda', 'Fit', 45, 'DUAL_AC', 'YES', 'NO', 'YES', 2),
(3, '1424', 'Totota', 'Vitz', 5, '1', '1', '1', '1', 2),
(6, 'f', 'f', 'f', 3, '1', '1', '1', '1', 2),
(7, '132323', 'v', 'v', 21, '1', '1', '1', '1', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `age`
--
ALTER TABLE `age`
  ADD PRIMARY KEY (`ageId`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`driverId`),
  ADD KEY `transportId` (`transportId`),
  ADD KEY `vehicleId` (`vehicleId`);

--
-- Indexes for table `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`hotelId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `hoteldetails`
--
ALTER TABLE `hoteldetails`
  ADD PRIMARY KEY (`hotelDetailsId`),
  ADD KEY `hotelId` (`hotelId`);

--
-- Indexes for table `roomtype`
--
ALTER TABLE `roomtype`
  ADD PRIMARY KEY (`roomTypeId`);

--
-- Indexes for table `transport`
--
ALTER TABLE `transport`
  ADD PRIMARY KEY (`transportId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `travel`
--
ALTER TABLE `travel`
  ADD PRIMARY KEY (`travelId`);

--
-- Indexes for table `trip`
--
ALTER TABLE `trip`
  ADD PRIMARY KEY (`tripId`),
  ADD KEY `tripDestinationId` (`tripDestinationId`),
  ADD KEY `ageId` (`ageId`),
  ADD KEY `hotelId` (`hotelId`),
  ADD KEY `transportId` (`transportId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `tripdestination`
--
ALTER TABLE `tripdestination`
  ADD PRIMARY KEY (`tripDestinationId`);

--
-- Indexes for table `tripdetails`
--
ALTER TABLE `tripdetails`
  ADD PRIMARY KEY (`tripDetailId`),
  ADD KEY `tripId` (`tripId`),
  ADD KEY `userId` (`userID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`vehicleId`),
  ADD KEY `transportId` (`transportId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `age`
--
ALTER TABLE `age`
  MODIFY `ageId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `driver`
--
ALTER TABLE `driver`
  MODIFY `driverId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `hotel`
--
ALTER TABLE `hotel`
  MODIFY `hotelId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `hoteldetails`
--
ALTER TABLE `hoteldetails`
  MODIFY `hotelDetailsId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roomtype`
--
ALTER TABLE `roomtype`
  MODIFY `roomTypeId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `transport`
--
ALTER TABLE `transport`
  MODIFY `transportId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `travel`
--
ALTER TABLE `travel`
  MODIFY `travelId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `trip`
--
ALTER TABLE `trip`
  MODIFY `tripId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `tripdestination`
--
ALTER TABLE `tripdestination`
  MODIFY `tripDestinationId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tripdetails`
--
ALTER TABLE `tripdetails`
  MODIFY `tripDetailId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `vehicleId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `driver`
--
ALTER TABLE `driver`
  ADD CONSTRAINT `driver_ibfk_1` FOREIGN KEY (`transportId`) REFERENCES `transport` (`transportId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `driver_ibfk_2` FOREIGN KEY (`vehicleId`) REFERENCES `vehicle` (`vehicleId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hotel`
--
ALTER TABLE `hotel`
  ADD CONSTRAINT `hotel_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hoteldetails`
--
ALTER TABLE `hoteldetails`
  ADD CONSTRAINT `hoteldetails_ibfk_1` FOREIGN KEY (`hotelId`) REFERENCES `hotel` (`hotelId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transport`
--
ALTER TABLE `transport`
  ADD CONSTRAINT `transport_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `trip`
--
ALTER TABLE `trip`
  ADD CONSTRAINT `trip_ibfk_1` FOREIGN KEY (`tripDestinationId`) REFERENCES `tripdestination` (`tripDestinationId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `trip_ibfk_2` FOREIGN KEY (`ageId`) REFERENCES `age` (`ageId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `trip_ibfk_3` FOREIGN KEY (`hotelId`) REFERENCES `hotel` (`hotelId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `trip_ibfk_4` FOREIGN KEY (`transportId`) REFERENCES `transport` (`transportId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `trip_ibfk_5` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tripdetails`
--
ALTER TABLE `tripdetails`
  ADD CONSTRAINT `tripdetails_ibfk_1` FOREIGN KEY (`tripId`) REFERENCES `trip` (`tripId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tripdetails_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD CONSTRAINT `vehicle_ibfk_1` FOREIGN KEY (`transportId`) REFERENCES `transport` (`transportId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
