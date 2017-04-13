-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2017 at 02:54 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `parking`
--

CREATE TABLE `parking` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(235) NOT NULL,
  `x` varchar(235) DEFAULT NULL,
  `y` varchar(235) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parking`
--

INSERT INTO `parking` (`id`, `name`, `x`, `y`) VALUES
(1, 'P06 - Sluisstraat', '52.2490470982696', '6.16317987442017'),
(2, '3 - Burcht', '52.43874285574651', '4.828051328659058'),
(3, 'P3 - Chasséveld', '51.5882829848258', '4.786058664321899'),
(4, 'Westeinde - Westeinde', '52.34565658333334', '5.614957805555555'),
(5, 'P03 - Dek Stadspoort', '52.256324421386', '6.15569114685059'),
(6, 'P7 - Pieter Vreedeplein', '51.558229784814124', '5.088949799537659'),
(7, 'Paardenveld - Paardenveld', '52.095195996615026', '5.11139988899231'),
(8, 'P10 - Concordiastraat', '51.58452325488173', '4.775340557098389'),
(9, 'Rhijnauwen Lus (P2) - Rhijnauwen Lus (P2)', '52.06799870113459', '5.177870392799377'),
(10, 'PAP03 - Brinkpark Kortparkeerders', '52.2110911111111', '5.96102713888889'),
(11, 'Grifthoek - Grifthoek', '52.09857060177943', '5.125594139099121'),
(12, 'Kruisstraat - Kruisstraat', '52.09381180738805', '5.129284858703613'),
(13, 'P4 - Het Turfschip', '51.58978945596664', '4.78503942489624'),
(14, 'Hoog Catharijne P6 - Hoog Catharijne P6 (Rijnkade)', '52.09039069835134', '5.1148974895477295'),
(15, 'Stille Wei - Stille Wei', '52.34992973343006', '5.6142497062683105'),
(16, 'Hoog Catharijne P2 - Hoog Catharijne P2 (Godebald)', '52.09017975433362', '5.113159418106079'),
(17, 'P30 - P+R_Slinge benedendek', '51.8729803571662', '4.47684288024902'),
(18, 'P2 - Koningsplein', '51.553780463298', '5.08840799331665'),
(19, 'P5 - Schouwburg', '51.55405397237777', '5.081133842468262'),
(20, 'PAP02 - Koningshaven', '52.2131619079695', '5.96844077110291'),
(21, 'P301 - P+R Slinge bovendek', '51.8733380548501', '4.4769287109375'),
(22, 'P7 - De Prins', '51.591495840811106', '4.7705769538879395'),
(23, 'P1 - Keizer Karel', '51.84240656861573', '5.856581926345825'),
(24, 'P04 - Kelder Stadspoort', '52.2563638260229', '6.15393161773682'),
(25, 'P5 - Marienburg', '51.844600568563486', '5.8658623695373535'),
(26, 'Hoog Catharijne P3 - Hoog Catharijne P3 (Radboud)', '52.09135311777744', '5.112231373786926'),
(27, 'P00 - Kazerneplein', '51.19838635076391', '5.985145568847656'),
(28, 'Scheepssingel - Scheepssingel', '52.35063751368113', '5.6233906745910645'),
(29, 'Jaarbeurs P2 - Jaarbeurs P2', '52.08112799819222', '5.103042125701904'),
(30, 'P3 - Kelfkensbos', '51.84664864723714', '5.870475769042969'),
(31, 'P10 - De Oranjerie', '51.1910477', '5.990299'),
(32, 'Kop van Lombok - Kop van Lombok', '52.09247701281645', '5.104174017906189'),
(33, 'P11 - Gasthuisvelden / Arsenaalpad', '51.58436325947214', '4.767358303070068'),
(34, 'P1 - Chasséparking', '51.586389833333335', '4.783709055555556'),
(35, 'P1 - Emmapassage', '51.5551579984091', '5.088724493980408'),
(36, 'Flevoweg - Flevoweg', '52.35476600594218', '5.627145767211914'),
(37, 'Klooster - Klooster', '52.347871861111116', '5.61783313888889'),
(38, 'P8 - Stappegoor', '51.53934218643719', '5.075125694274902'),
(39, 'Boulevard - Boulevard', '52.35346852777778', '5.620086194444445'),
(40, 'P6 - Eiermarkt', '51.84750364280097', '5.866667032241821'),
(41, 'P2 - Oude Stad', '51.84845140960078', '5.85397481918335'),
(42, 'P01 - Stationsplein', '52.2573226613971', '6.16240739822388'),
(43, 'Jaarbeurs P3 - Jaarbeurs P3', '52.08549917740244', '5.106196403503418'),
(44, 'P5 - Beyerd-Vlaszak', '51.588736264582444', '4.782078266143799'),
(45, 'P05 - Roercenter', '51.19349177222469', '5.984029769897461'),
(46, 'P2 - Holland casino', '51.58620316666667', '4.7833013611111115'),
(47, 'Lelykade - Lelykade', '52.35393378536099', '5.625332593917847'),
(48, 'Hoog Catharijne P1 - Hoog Catharijne P1 (Moreelsepark)', '52.08964250178408', '5.113610029220581'),
(49, 'P09 - P+R Godsweerdersingel', '51.19473', '5.993793'),
(50, 'Jaarbeurs P1 - Jaarbeurs P1', '52.08745716861027', '5.102596879005432'),
(51, 'P+R Haren 2 - P+R Haren 2', '53.1709583806887', '6.5915608406066895'),
(52, 'P4 - Molenpoort', '51.84382174396586', '5.863738059997559'),
(53, 'Hoog Catharijne P4 - Hoog Catharijne P4 (Stationstraat)', '52.09149154626114', '5.112086534500122'),
(54, 'Oldehove - Oldehove', '53.203050820307034', '5.790460109710693'),
(55, 'P07 - Stationspark', '51.19230838947341', '5.995616912841797'),
(56, 'P02 - Brink', '52.2495594398646', '6.16193532943726'),
(57, 'P08 - P+R Handelskade', '52.2550897250294', '6.16807222366333'),
(58, '2 - Zaantheater', '52.43811824330201', '4.824280142784119'),
(59, 'PAP01 - Marktplein', '52.215548', '5.964031'),
(60, 'La Vie - La Vie', '52.094128197283446', '5.115283727645874'),
(61, 'Oud Amelisweerd (P3) - Oud Amelisweerd (P3)', '52.064582208854986', '5.17032265663147'),
(62, 'P4 - Knegtel', '51.56082446554211', '5.078451633453369'),
(63, 'P6 - 013 - Tivoli', '51.55865668333436', '5.092881917953491'),
(64, 'P3 - Heuvelpoort', '51.556822325372295', '5.090703964233398'),
(65, 'Oosterstraat - Oosterstraat', '53.20134137218582', '5.802358388900757'),
(66, 'Vuldersbrink - Vuldersbrink', '52.350244305555556', '5.621159083333334'),
(67, '1 - Rozenhof', '52.4387493961441', '4.82349157333374'),
(68, 'Houtwal - Houtwal', '52.34828475592206', '5.621148347854614'),
(69, 'P11 - P+R Veeladingstraat', '51.1905467065823', '5.992891788482666'),
(70, 'Havendijk - Havendijk', '52.35272147222222', '5.624613750000001'),
(71, 'Vaartsche Rijn - Vaartsche Rijn', '52.07818067193853', '5.123276710510254'),
(72, 'Springweg - Springweg', '52.088759152242126', '5.119773745536804'),
(73, 'P8 - De Barones', '51.58757639265605', '4.7725725173950195'),
(74, 'Hoog Catharijne P5 - Hoog Catharijne P5 (Vredenburg)', '52.091946379683705', '5.113052129745483'),
(75, 'Rhijnauwen Theehuis (P1) - Rhijnauwen Theehuis (P1)', '52.070511436934936', '5.177607536315918'),
(76, 'P+R Haren 1 - P+R Haren 1', '53.17021235736379', '6.592526435852051'),
(77, 'P05 - Centrumgarage', '52.2547350718495', '6.15916728973389'),
(78, 'P07 - De Boreel', '52.25325', '6.164703'),
(79, 'Jaarbeurs P4 - Jaarbeurs P4', '52.082275226931465', '5.101497173309326');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `parking`
--
ALTER TABLE `parking`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `parking`
--
ALTER TABLE `parking`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
