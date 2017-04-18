-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 18 apr 2017 om 21:55
-- Serverversie: 10.1.21-MariaDB
-- PHP-versie: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `parking_rotterdam`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `parking`
--

CREATE TABLE `parking` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `latitude` varchar(45) DEFAULT NULL,
  `longitude` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `parking`
--

INSERT INTO `parking` (`id`, `name`, `latitude`, `longitude`) VALUES
(1, 'Parkeergarage Schiecentrale', '51.904024', '4.458610'),
(2, 'Parkeergarage Big Shops', '51.909393', '4.436641'),
(3, 'Parkeergarage Mathenesserplein', '51.917251', '4.436641'),
(4, 'Parkeergarage Nieuwe Binnenweg', '51.911506', '4.453115'),
(5, 'Parkeergarage Erasmus MC Wytemaweg', '51.913420', '4.470002'),
(6, 'Parkeergarage Westerpark', '51.905381', '4.474401'),
(7, 'Parkeergarage World Port Center', '51.904862', '4.484671'),
(8, 'Parkeergarage De Rotterdam Cruise Terminal', '51.905330', '4.486967'),
(9, 'Parkeergarage Boston Seattle', '51.905465', '4.488003'),
(10, 'Parkeergarage Colosseumweg', '51.898080', '4.515104'),
(11, 'Parkeergarage Boulevard-Zuid', '51.896910', '4.509635'),
(12, 'Parkeergarage Veranda', '51.928172', '4.491342'),
(13, 'Parkeergarage Ikazia Ziekenhuis', '51.885413', '4.493623'),
(14, 'Parkeergarage Zuidplein', '51.886656', '4.491450'),
(15, 'Parkeergarage Ahoy', '51.882891', '4.488225'),
(16, 'Parkeergarage Zorgboulevard', '51.878877', '4.533409'),
(17, 'Parkeergarage Hart van IJsselmonde', '51.888300', '4.548495'),
(18, 'Parkeergarage Maastoren', '51.908905', '4.493635'),
(19, 'Parkeergarage Erasmusbrug', '51.910596', '4.479679'),
(20, 'Parkeergarage Vasteland', '51.911521', '4.478927'),
(21, 'Parkeergarage Museumpark', '51.914021', '4.469766'),
(22, 'Parkeergarage De Boompjes', '51.914309', '4.486299'),
(23, 'Parkeergarage Westblaak', '51.916411', '4.477952'),
(24, 'Parkeergarage the Red Apple', '51.917229', '4.488321'),
(25, 'Parkeergarage Wijnstraat', '51.918029', '4.486163'),
(26, 'Parkeergarage Koopgoot', '51.919235', '4.481528'),
(27, 'Parkeergarage Markthal', '51.919619', '4.486135'),
(28, 'Parkeergarage Oude Haven', '51.920859', '4.492925'),
(29, 'Parkeergarage Kiphof', '51.921729', '4.492363'),
(30, 'Parkeergarage Lijnbaan', '51.918893', '4.476716'),
(31, 'Parkeergarage Schouwburgplein', '51.920223', '4.473446'),
(32, 'Parkeergarage de Bijenkorf', '51.920841', '4.477920'),
(33, 'Parkeergarage WTC-V&D', '51.921172', '4.482236'),
(34, 'Parkeergarage Kruiskade', '51.923219', '4.476132'),
(35, 'Parkeergarage Weena', '51.922658', '4.473881'),
(36, 'Parkeergarage Central Plaza', '51.922539', '4.472622'),
(37, 'Parkeergarage Schouwburgplein 2', '51.922763', '4.470522'),
(38, 'Parkeergarage Groothandelsgebouw ', '51.923315', '4.469165'),
(39, 'Parkeergarage Schaatsbaan', '51.923268', '4.465126'),
(40, 'Parkeergarage Eudokiaplein', '51.932882', '4.470089'),
(41, 'Parkeergarage Benthuizerstraat', '51.936748', '4.480115'),
(42, 'Parkeergarage Zoomstraat', '51.937588', '4.480233'),
(43, 'Parkeergarage Lusthofstraat', '51.925692', '4.509837'),
(44, 'Parkeergarage Alexandrium', '51.950965', '4.555897'),
(45, 'Parkeergarage Alexandrium Woonmall', '51.951531', '4.558004');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `parking`
--
ALTER TABLE `parking`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `parking`
--
ALTER TABLE `parking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
