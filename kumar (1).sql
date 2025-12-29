-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 29, 2025 at 05:55 PM
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
-- Database: `kumar`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_task_limits`
--

CREATE TABLE `add_task_limits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `limit` varchar(255) NOT NULL,
  `tdate` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `add_task_limits`
--

INSERT INTO `add_task_limits` (`id`, `limit`, `tdate`, `created_at`, `updated_at`) VALUES
(2, '10', '2021-09-21', '2021-09-21 11:11:29', '2021-09-21 11:21:28');

-- --------------------------------------------------------

--
-- Table structure for table `add_task_urls`
--

CREATE TABLE `add_task_urls` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url` text NOT NULL,
  `tdate` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `add_task_urls`
--

INSERT INTO `add_task_urls` (`id`, `url`, `tdate`, `created_at`, `updated_at`) VALUES
(1, 'https://www.youtube.com/watch?v=cM1kKjIumnk', '2021-09-21', '2021-09-21 10:56:32', '2021-09-21 10:56:32'),
(2, 'http://127.0.0.1:8000/home', '2021-09-21', '2021-09-21 10:57:54', '2021-09-21 10:57:54'),
(3, 'https://www.youtube.com/watch?v=cM1kKjIumnk', '2021-09-21', '2021-09-21 11:08:03', '2021-09-21 11:08:03'),
(4, 'https://www.youtube.com/watch?v=cM1kKjIumnk', '2021-09-21', '2021-09-21 11:08:04', '2021-09-21 11:08:04'),
(5, 'https://www.youtube.com/watch?v=cM1kKjIumnk', '2021-09-21', '2021-09-21 11:08:06', '2021-09-21 11:08:06');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `username`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'AD10001', '$2y$10$wtkE0cY0JaGwSK.gtswNqeiBc9ytPAesPCZaUi.9pkuPB.FXtusMO', NULL, '2023-06-05 14:48:52');

-- --------------------------------------------------------

--
-- Table structure for table `banks`
--

CREATE TABLE `banks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `account_holder` varchar(255) NOT NULL,
  `bank_name` varchar(255) NOT NULL,
  `branch_name` varchar(255) NOT NULL,
  `account_no` varchar(255) NOT NULL,
  `ifsc_code` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banks`
--

INSERT INTO `banks` (`id`, `user_id`, `account_holder`, `bank_name`, `branch_name`, `account_no`, `ifsc_code`, `created_at`, `updated_at`) VALUES
(1, 685, 'Sachin Sachin', 'SBI BANK', 'SBI KRISHANPURA PANIPAT', '38825655675', '85721W', '2024-05-21 02:51:22', '2024-11-08 04:14:06');

-- --------------------------------------------------------

--
-- Table structure for table `buy_funds`
--

CREATE TABLE `buy_funds` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_id_fk` varchar(255) DEFAULT NULL,
  `amount` double(8,2) NOT NULL,
  `txn_no` varchar(255) NOT NULL,
  `bdate` date NOT NULL,
  `status` enum('Approved','Pending','Failed') NOT NULL DEFAULT 'Pending',
  `slip` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `buy_funds`
--

INSERT INTO `buy_funds` (`id`, `user_id`, `user_id_fk`, `amount`, `txn_no`, `bdate`, `status`, `slip`, `type`, `created_at`, `updated_at`) VALUES
(1, 1, 'RF10001', 500.00, '0x637944155be2daa584f6b8f315991c098d1548ad', '2023-12-07', 'Approved', 'public/slip/1701942512.jpg', 'USDT', '2023-12-07 08:48:32', '2023-12-07 08:48:32'),
(2, 53, 'RF455385', 1000.00, 'RF53790', '2023-12-07', 'Approved', 'public/slip/1701946200.jpg', 'USDT', '2023-12-07 09:50:00', '2023-12-07 09:57:28'),
(3, 1, 'RF10001', 10000.00, '121993', '2023-12-07', 'Approved', 'public/slip/1701951851.jpg', 'USDT', '2023-12-07 11:24:11', '2023-12-07 11:24:41'),
(4, 53, 'RF455385', 1000.00, '53790', '2023-12-23', 'Approved', 'public/slip/1703317429.jpg', 'USDT', '2023-12-23 06:43:49', '2023-12-23 06:44:32'),
(5, 53, 'RF455385', 1000.00, '53790', '2023-12-31', 'Approved', 'public/slip/1704040946.jpg', 'USDT', '2023-12-31 15:42:26', '2023-12-31 15:44:22'),
(6, 53, 'RF455385', 1000.00, '53790', '2024-01-01', 'Approved', 'public/slip/1704097790.jpg', 'USDT', '2024-01-01 07:29:50', '2024-01-01 07:30:24'),
(7, 53, 'RF455385', 10000.00, '53790', '2024-01-06', 'Approved', 'public/slip/1704526160.jpg', 'USDT', '2024-01-06 06:29:20', '2024-01-06 06:30:34'),
(8, 53, 'RF455385', 1000.00, '53790', '2024-01-16', 'Approved', 'public/slip/1705395909.jpg', 'USDT', '2024-01-16 08:05:09', '2024-01-16 08:18:51'),
(9, 53, 'RF455385', 500.00, 'RF455385', '2024-02-03', 'Approved', 'public/slip/1706959823.jpg', 'USDT', '2024-02-03 10:30:23', '2024-02-03 10:30:36'),
(10, 53, 'RF455385', 1000.00, '53790', '2024-02-05', 'Approved', 'public/slip/1707136776.jpg', 'USDT', '2024-02-05 11:39:36', '2024-02-05 11:39:57'),
(11, 284, 'RF299834', 1300.00, '98266', '2024-02-06', 'Approved', 'public/slip/1707211353.jpg', 'USDT', '2024-02-06 08:22:33', '2024-02-06 08:23:01'),
(12, 58, 'RF501267', 400.00, '12502', '2024-02-08', 'Approved', 'public/slip/1707402853.jpg', 'USDT', '2024-02-08 13:34:13', '2024-02-08 13:35:58'),
(13, 135, 'RF245712', 100.00, '57412', '2024-02-08', 'Approved', 'public/slip/1707410900.jpg', 'USDT', '2024-02-08 15:48:20', '2024-02-09 07:15:07'),
(14, 58, 'RF501267', 1100.00, '12502', '2024-02-09', 'Approved', 'public/slip/1707466251.jpg', 'USDT', '2024-02-09 07:10:51', '2024-02-09 07:11:44'),
(15, 53, 'RF455385', 17000.00, '53790', '2024-02-19', 'Approved', 'public/slip/1708347350.jpg', 'USDT', '2024-02-19 11:55:50', '2024-02-19 11:56:17'),
(16, 53, 'RF455385', 50000.00, '53790', '2024-02-20', 'Approved', 'public/slip/1708428431.jpg', 'USDT', '2024-02-20 10:27:11', '2024-02-20 10:27:45'),
(17, 53, 'RF455385', 1000.00, '53790', '2024-02-21', 'Approved', 'public/slip/1708513728.jpg', 'USDT', '2024-02-21 10:08:48', '2024-02-21 13:15:28'),
(18, 58, 'RF501267', 1000.00, '12502', '2024-02-21', 'Approved', 'public/slip/1708529064.jpg', 'USDT', '2024-02-21 14:24:24', '2024-02-21 14:24:51'),
(19, 53, 'RF455385', 1000.00, '53790', '2024-02-24', 'Approved', 'public/slip/1708757149.jpg', 'USDT', '2024-02-24 05:45:49', '2024-02-24 05:49:46'),
(20, 57, 'RF953808', 1000.00, '38048', '2024-02-27', 'Approved', 'public/slip/1709031408.jpg', 'USDT', '2024-02-27 09:56:48', '2024-02-27 10:02:37'),
(21, 53, 'RF455385', 6000.00, '53790', '2024-03-03', 'Approved', 'public/slip/1709461260.jpg', 'USDT', '2024-03-03 09:21:00', '2024-03-03 09:21:58'),
(22, 658, 'RF151183', 20000.00, '11863', '2024-03-21', 'Approved', NULL, 'USDT', '2024-03-21 04:53:16', '2024-03-21 04:53:16'),
(23, 658, 'RF151183', 24998.00, '11863', '2024-03-21', 'Approved', NULL, 'USDT', '2024-03-21 06:50:15', '2024-03-21 06:50:15'),
(24, 685, 'RF213000', 100.00, '1929', '2024-05-13', 'Approved', NULL, 'USDT', '2024-05-13 01:06:40', '2024-05-21 01:06:03'),
(25, 685, 'RF213000', 50000.00, '334', '2024-05-13', 'Approved', NULL, 'USDT', '2024-05-13 01:07:08', '2024-05-21 01:05:59'),
(26, 685, 'RF213000', 20000.00, '685', '2024-05-13', 'Approved', NULL, 'USDT', '2024-05-13 01:11:00', '2024-05-13 01:11:00'),
(27, 685, 'RF213000', 100.00, '685', '2024-05-18', 'Approved', 'public/slip/1716009647.jpg', 'USDT', '2024-05-17 23:50:47', '2024-05-21 01:05:49'),
(28, 708, 'MP312549', 100.00, '25862', '2024-05-21', 'Approved', 'public/slip/1716273144.jpg', 'USDT', '2024-05-21 01:02:24', '2024-05-21 01:05:53'),
(29, 708, 'MP312549', 20000.00, '25862', '2024-05-21', 'Approved', 'public/slip/1716273168.png', 'USDT', '2024-05-21 01:02:48', '2024-05-21 01:05:38'),
(30, 1, 'RF10001', 100000.00, 'RF10001', '2024-10-15', 'Approved', 'public/slip/1728974043.png', 'USDT', '2024-10-15 01:04:03', '2024-10-15 01:04:35');

-- --------------------------------------------------------

--
-- Table structure for table `dth_recharge`
--

CREATE TABLE `dth_recharge` (
  `id` int(100) NOT NULL,
  `user_id` varchar(100) DEFAULT NULL,
  `operatorcode` varchar(100) DEFAULT NULL,
  `amount` int(10) DEFAULT NULL,
  `number` varchar(200) DEFAULT NULL,
  `status` enum('Success','Pending','Failed') NOT NULL DEFAULT 'Pending',
  `transaction_id` varchar(100) DEFAULT NULL,
  `walletType` int(10) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dth_recharge`
--

INSERT INTO `dth_recharge` (`id`, `user_id`, `operatorcode`, `amount`, `number`, `status`, `transaction_id`, `walletType`, `created_at`, `updated_at`) VALUES
(1, '685', 'STV', 1234, '1234567890', 'Success', 'RF213000', 1, '2024-05-14 17:49:37', '2024-05-14 17:49:37'),
(2, '685', 'DTV', 1235, '1234567890', 'Success', 'RF213000', 1, '2024-05-14 17:50:40', '2024-05-14 17:50:40'),
(3, '1', 'ATV', 1235, '1234567890', 'Success', 'RF10001', 1, '2024-05-15 10:35:06', '2024-05-15 10:35:06'),
(4, '1', 'ATV', 1235, '1234567890', 'Success', 'RF10001', 1, '2024-05-15 10:35:55', '2024-05-15 10:35:55'),
(5, '1', 'ATV', 1235, '1234567890', 'Success', 'RF10001', 1, '2024-05-15 10:36:58', '2024-05-15 10:36:58'),
(6, '1', 'ATV', 1235, '1234567890', 'Success', 'RF10001', 1, '2024-05-15 10:47:01', '2024-05-15 10:47:01'),
(7, '1', 'ATV', 100, '1234567890', 'Success', 'RF10001', 1, '2024-05-15 10:52:10', '2024-05-15 10:52:10'),
(8, '1', 'ATV', 100, '1234567890', 'Success', 'RF10001', 1, '2024-05-15 10:59:31', '2024-05-15 10:59:31'),
(9, '1', 'ATV', 100, '1234567890', 'Success', 'RF10001', 1, '2024-05-15 11:01:29', '2024-05-15 11:01:29'),
(10, '685', 'ATV', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 11:23:16', '2024-05-15 11:23:16'),
(11, '685', 'ATV', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 11:24:10', '2024-05-15 11:24:10'),
(12, '685', 'ATV', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 11:48:16', '2024-05-15 11:48:16'),
(13, '685', 'ATV', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 11:50:21', '2024-05-15 11:50:21');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fundtransfers`
--

CREATE TABLE `fundtransfers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `transfer_id` bigint(20) UNSIGNED NOT NULL,
  `transfered_id` bigint(20) UNSIGNED NOT NULL,
  `user_id_from` varchar(255) DEFAULT NULL,
  `user_id_to` varchar(255) DEFAULT NULL,
  `amount` double(8,2) NOT NULL,
  `charge` float(18,2) NOT NULL,
  `netAmt` float(18,2) NOT NULL,
  `transfer_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fundtransfers`
--

INSERT INTO `fundtransfers` (`id`, `transfer_id`, `transfered_id`, `user_id_from`, `user_id_to`, `amount`, `charge`, `netAmt`, `transfer_date`, `created_at`, `updated_at`) VALUES
(4, 120, 53, 'RF243245', 'RF455385', 11.00, 0.55, 10.45, '2023-12-29', '2023-12-29 08:40:12', '2023-12-29 08:40:12'),
(5, 61, 53, 'RF915469', 'RF455385', 20.00, 1.00, 19.00, '2024-01-06', '2024-01-06 08:23:47', '2024-01-06 08:23:47'),
(6, 66, 53, 'RF027387', 'RF455385', 136.00, 6.80, 129.20, '2024-01-06', '2024-01-06 10:38:41', '2024-01-06 10:38:41'),
(7, 404, 53, 'RF283461', 'RF455385', 94.00, 4.70, 89.30, '2024-01-06', '2024-01-06 10:40:54', '2024-01-06 10:40:54'),
(8, 406, 53, 'RF841691', 'RF455385', 16.00, 0.80, 15.20, '2024-01-06', '2024-01-06 10:42:59', '2024-01-06 10:42:59'),
(9, 412, 53, 'RF750108', 'RF455385', 16.00, 0.80, 15.20, '2024-01-06', '2024-01-06 10:44:45', '2024-01-06 10:44:45'),
(10, 1, 1, 'RF10001', 'RF10001', 100.00, 5.00, 95.00, '2024-01-08', '2024-01-08 02:44:36', '2024-01-08 02:44:36'),
(11, 351, 53, 'RF874852', 'RF455385', 10.00, 0.50, 9.50, '2024-01-10', '2024-01-10 11:06:54', '2024-01-10 11:06:54'),
(12, 61, 61, 'RF915469', 'RF915469', 50.00, 2.50, 47.50, '2024-01-14', '2024-01-14 09:02:56', '2024-01-14 09:02:56'),
(13, 403, 61, 'RF277043', 'RF915469', 10.00, 0.50, 9.50, '2024-01-14', '2024-01-14 09:08:46', '2024-01-14 09:08:46'),
(14, 402, 61, 'RF932260', 'RF915469', 10.00, 0.50, 9.50, '2024-01-14', '2024-01-14 09:10:16', '2024-01-14 09:10:16'),
(15, 299, 61, 'RF096658', 'RF915469', 30.00, 1.50, 28.50, '2024-01-14', '2024-01-14 09:16:43', '2024-01-14 09:16:43'),
(16, 294, 61, 'RF284708', 'RF915469', 10.00, 0.50, 9.50, '2024-01-14', '2024-01-14 09:20:49', '2024-01-14 09:20:49'),
(17, 59, 53, 'RF394368', 'RF455385', 22.00, 1.10, 20.90, '2024-01-14', '2024-01-14 12:55:29', '2024-01-14 12:55:29'),
(18, 413, 53, 'RF576309', 'RF455385', 10.00, 0.50, 9.50, '2024-01-15', '2024-01-15 06:16:07', '2024-01-15 06:16:07'),
(19, 406, 53, 'RF841691', 'RF455385', 24.00, 1.20, 22.80, '2024-01-15', '2024-01-15 06:18:20', '2024-01-15 06:18:20'),
(20, 412, 53, 'RF750108', 'RF455385', 24.00, 1.20, 22.80, '2024-01-15', '2024-01-15 06:20:49', '2024-01-15 06:20:49'),
(21, 66, 53, 'RF027387', 'RF455385', 30.00, 1.50, 28.50, '2024-01-18', '2024-01-18 14:35:23', '2024-01-18 14:35:23'),
(22, 404, 53, 'RF283461', 'RF455385', 59.00, 2.95, 56.05, '2024-01-18', '2024-01-18 14:40:15', '2024-01-18 14:40:15'),
(23, 406, 53, 'RF841691', 'RF455385', 12.00, 0.60, 11.40, '2024-01-18', '2024-01-18 14:45:32', '2024-01-18 14:45:32'),
(24, 412, 53, 'RF750108', 'RF455385', 12.00, 0.60, 11.40, '2024-01-18', '2024-01-18 14:47:34', '2024-01-18 14:47:34'),
(25, 467, 53, 'RF836248', 'RF455385', 12.00, 0.60, 11.40, '2024-01-18', '2024-01-18 14:53:24', '2024-01-18 14:53:24'),
(26, 405, 53, 'RF380836', 'RF455385', 13.00, 0.65, 12.35, '2024-01-18', '2024-01-18 14:55:27', '2024-01-18 14:55:27'),
(27, 71, 53, 'RF088105', 'RF455385', 15.00, 0.75, 14.25, '2024-01-19', '2024-01-19 13:02:31', '2024-01-19 13:02:31'),
(28, 58, 53, 'RF501267', 'RF455385', 35.00, 1.75, 33.25, '2024-01-29', '2024-01-29 12:03:15', '2024-01-29 12:03:15'),
(29, 413, 53, 'RF576309', 'RF455385', 13.00, 0.65, 12.35, '2024-02-01', '2024-02-01 08:52:06', '2024-02-01 08:52:06'),
(30, 66, 53, 'RF027387', 'RF455385', 10.00, 0.50, 9.50, '2024-02-01', '2024-02-01 08:53:51', '2024-02-01 08:53:51'),
(31, 404, 53, 'RF283461', 'RF455385', 10.00, 0.50, 9.50, '2024-02-01', '2024-02-01 08:55:38', '2024-02-01 08:55:38'),
(32, 406, 53, 'RF841691', 'RF455385', 40.00, 2.00, 38.00, '2024-02-01', '2024-02-01 08:57:28', '2024-02-01 08:57:28'),
(33, 412, 53, 'RF750108', 'RF455385', 40.00, 2.00, 38.00, '2024-02-01', '2024-02-01 08:59:10', '2024-02-01 08:59:10'),
(34, 467, 53, 'RF836248', 'RF455385', 60.00, 3.00, 57.00, '2024-02-01', '2024-02-01 09:00:50', '2024-02-01 09:00:50'),
(35, 405, 53, 'RF380836', 'RF455385', 10.00, 0.50, 9.50, '2024-02-01', '2024-02-01 09:05:21', '2024-02-01 09:05:21'),
(36, 349, 53, 'RF872734', 'RF455385', 60.00, 3.00, 57.00, '2024-02-02', '2024-02-02 08:50:34', '2024-02-02 08:50:34'),
(37, 69, 53, 'RF908632', 'RF455385', 95.00, 4.75, 90.25, '2024-02-02', '2024-02-02 08:52:22', '2024-02-02 08:52:22'),
(38, 469, 61, 'RF598655', 'RF915469', 21.00, 1.05, 19.95, '2024-02-04', '2024-02-04 05:11:57', '2024-02-04 05:11:57'),
(39, 470, 61, 'RF131144', 'RF915469', 11.00, 0.55, 10.45, '2024-02-04', '2024-02-04 05:16:41', '2024-02-04 05:16:41'),
(40, 471, 61, 'RF587291', 'RF915469', 11.00, 0.55, 10.45, '2024-02-04', '2024-02-04 05:18:08', '2024-02-04 05:18:08'),
(41, 61, 61, 'RF915469', 'RF915469', 50.00, 2.50, 47.50, '2024-02-04', '2024-02-04 05:41:45', '2024-02-04 05:41:45'),
(42, 61, 61, 'RF915469', 'RF915469', 10.00, 0.50, 9.50, '2024-02-04', '2024-02-04 05:48:04', '2024-02-04 05:48:04'),
(43, 66, 53, 'RF027387', 'RF455385', 51.00, 2.55, 48.45, '2024-02-10', '2024-02-10 06:34:39', '2024-02-10 06:34:39'),
(44, 406, 53, 'RF841691', 'RF455385', 24.00, 1.20, 22.80, '2024-02-10', '2024-02-10 06:36:22', '2024-02-10 06:36:22'),
(45, 412, 53, 'RF750108', 'RF455385', 24.00, 1.20, 22.80, '2024-02-10', '2024-02-10 06:38:02', '2024-02-10 06:38:02'),
(46, 467, 53, 'RF836248', 'RF455385', 36.00, 1.80, 34.20, '2024-02-10', '2024-02-10 06:40:43', '2024-02-10 06:40:43'),
(47, 417, 53, 'RF145052', 'RF455385', 26.00, 1.30, 24.70, '2024-02-10', '2024-02-10 06:58:45', '2024-02-10 06:58:45'),
(48, 53, 53, 'RF455385', 'RF455385', 520.00, 26.00, 494.00, '2024-02-10', '2024-02-10 08:44:06', '2024-02-10 08:44:06'),
(49, 77, 53, 'RF462686', 'RF455385', 30.00, 1.50, 28.50, '2024-02-12', '2024-02-12 10:48:39', '2024-02-12 10:48:39'),
(50, 59, 53, 'RF394368', 'RF455385', 25.00, 1.25, 23.75, '2024-02-18', '2024-02-18 07:53:29', '2024-02-18 07:53:29'),
(51, 531, 58, 'RF093822', 'RF501267', 20.00, 1.00, 19.00, '2024-02-18', '2024-02-18 09:43:15', '2024-02-18 09:43:15'),
(52, 469, 61, 'RF598655', 'RF915469', 25.00, 1.25, 23.75, '2024-02-18', '2024-02-18 11:22:20', '2024-02-18 11:22:20'),
(53, 470, 61, 'RF131144', 'RF915469', 10.00, 0.50, 9.50, '2024-02-18', '2024-02-18 11:25:01', '2024-02-18 11:25:01'),
(54, 471, 61, 'RF587291', 'RF915469', 10.00, 0.50, 9.50, '2024-02-18', '2024-02-18 11:26:13', '2024-02-18 11:26:13'),
(55, 492, 61, 'RF451629', 'RF915469', 10.00, 0.50, 9.50, '2024-02-18', '2024-02-18 11:29:00', '2024-02-18 11:29:00'),
(56, 299, 61, 'RF096658', 'RF915469', 36.00, 1.80, 34.20, '2024-02-18', '2024-02-18 14:13:26', '2024-02-18 14:13:26'),
(57, 295, 61, 'RF805464', 'RF915469', 39.00, 1.95, 37.05, '2024-02-18', '2024-02-18 14:15:41', '2024-02-18 14:15:41'),
(58, 403, 61, 'RF277043', 'RF915469', 30.00, 1.50, 28.50, '2024-02-18', '2024-02-18 14:16:46', '2024-02-18 14:16:46'),
(59, 61, 61, 'RF915469', 'RF915469', 35.00, 1.75, 33.25, '2024-02-18', '2024-02-18 15:51:51', '2024-02-18 15:51:51'),
(60, 294, 61, 'RF284708', 'RF915469', 25.00, 1.25, 23.75, '2024-02-18', '2024-02-18 16:14:05', '2024-02-18 16:14:05'),
(61, 61, 61, 'RF915469', 'RF915469', 62.00, 3.10, 58.90, '2024-02-19', '2024-02-19 15:54:42', '2024-02-19 15:54:42'),
(62, 413, 53, 'RF576309', 'RF455385', 13.00, 0.65, 12.35, '2024-02-20', '2024-02-20 00:24:34', '2024-02-20 00:24:34'),
(63, 66, 53, 'RF027387', 'RF455385', 278.00, 13.90, 264.10, '2024-02-20', '2024-02-20 00:26:47', '2024-02-20 00:26:47'),
(64, 404, 53, 'RF283461', 'RF455385', 13.00, 0.65, 12.35, '2024-02-20', '2024-02-20 00:28:27', '2024-02-20 00:28:27'),
(65, 406, 53, 'RF841691', 'RF455385', 28.00, 1.40, 26.60, '2024-02-20', '2024-02-20 00:31:11', '2024-02-20 00:31:11'),
(66, 412, 467, 'RF750108', 'RF836248', 28.00, 1.40, 26.60, '2024-02-20', '2024-02-20 00:33:23', '2024-02-20 00:33:23'),
(67, 467, 53, 'RF836248', 'RF455385', 42.00, 2.10, 39.90, '2024-02-20', '2024-02-20 00:35:28', '2024-02-20 00:35:28'),
(68, 405, 53, 'RF380836', 'RF455385', 13.00, 0.65, 12.35, '2024-02-20', '2024-02-20 00:40:25', '2024-02-20 00:40:25'),
(69, 594, 53, 'RF253776', 'RF455385', 56.00, 2.80, 53.20, '2024-02-20', '2024-02-20 00:43:03', '2024-02-20 00:43:03'),
(70, 404, 53, 'RF283461', 'RF455385', 324.00, 16.20, 307.80, '2024-02-20', '2024-02-20 01:03:40', '2024-02-20 01:03:40'),
(71, 523, 601, 'RF937581', 'RF277533', 81.00, 4.05, 76.95, '2024-02-22', '2024-02-22 08:17:04', '2024-02-22 08:17:04'),
(72, 599, 601, 'RF181337', 'RF277533', 27.00, 1.35, 25.65, '2024-02-22', '2024-02-22 08:19:53', '2024-02-22 08:19:53'),
(73, 600, 601, 'RF261065', 'RF277533', 10.00, 0.50, 9.50, '2024-02-23', '2024-02-23 11:43:09', '2024-02-23 11:43:09'),
(74, 470, 61, 'RF131144', 'RF915469', 60.00, 3.00, 57.00, '2024-02-25', '2024-02-25 11:13:20', '2024-02-25 11:13:20'),
(75, 489, 284, 'RF344811', 'RF299834', 158.00, 7.90, 150.10, '2024-02-28', '2024-02-28 09:14:51', '2024-02-28 09:14:51'),
(76, 516, 284, 'RF918782', 'RF299834', 160.00, 8.00, 152.00, '2024-02-28', '2024-02-28 09:23:58', '2024-02-28 09:23:58'),
(77, 490, 284, 'RF107104', 'RF299834', 90.00, 4.50, 85.50, '2024-02-28', '2024-02-28 09:25:36', '2024-02-28 09:25:36'),
(78, 491, 284, 'RF718916', 'RF299834', 18.00, 0.90, 17.10, '2024-02-28', '2024-02-28 09:29:02', '2024-02-28 09:29:02'),
(79, 517, 284, 'RF848448', 'RF299834', 48.00, 2.40, 45.60, '2024-02-28', '2024-02-28 09:31:47', '2024-02-28 09:31:47'),
(80, 71, 53, 'RF088105', 'RF455385', 30.00, 1.50, 28.50, '2024-03-01', '2024-03-01 13:46:35', '2024-03-01 13:46:35'),
(81, 294, 61, 'RF284708', 'RF915469', 10.00, 0.50, 9.50, '2024-03-02', '2024-03-02 14:32:55', '2024-03-02 14:32:55'),
(82, 61, 61, 'RF915469', 'RF915469', 19.00, 0.95, 18.05, '2024-03-02', '2024-03-02 14:36:16', '2024-03-02 14:36:16'),
(83, 469, 61, 'RF598655', 'RF915469', 21.00, 1.05, 19.95, '2024-03-04', '2024-03-04 09:57:40', '2024-03-04 09:57:40'),
(84, 56, 56, 'RF228112', 'RF228112', 105.00, 5.25, 99.75, '2024-03-04', '2024-03-04 09:59:18', '2024-03-04 09:59:18'),
(85, 471, 61, 'RF587291', 'RF915469', 16.00, 0.80, 15.20, '2024-03-04', '2024-03-04 09:59:47', '2024-03-04 09:59:47');

-- --------------------------------------------------------

--
-- Table structure for table `general_settings`
--

CREATE TABLE `general_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sitename` varchar(50) DEFAULT NULL,
  `siteurl` varchar(200) NOT NULL,
  `cur_text` varchar(20) DEFAULT NULL COMMENT 'currency text',
  `cur_sym` varchar(20) DEFAULT NULL COMMENT 'currency symbol',
  `email_from` varchar(255) DEFAULT NULL,
  `email_template` text DEFAULT NULL,
  `sms_api` varchar(255) DEFAULT NULL,
  `base_color` varchar(10) DEFAULT NULL,
  `secondary_color` varchar(10) DEFAULT NULL,
  `mail_config` text DEFAULT NULL COMMENT 'email configuration',
  `ev` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'email verification, 0 - dont check, 1 - check',
  `en` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'email notification, 0 - dont send, 1 - send',
  `sv` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'sms verication, 0 - dont check, 1 - check',
  `sn` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'sms notification, 0 - dont send, 1 - send',
  `force_ssl` tinyint(4) NOT NULL DEFAULT 0,
  `secure_password` tinyint(4) NOT NULL DEFAULT 0,
  `registration` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0: Off	, 1: On',
  `social_login` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'social login',
  `social_credential` text DEFAULT NULL,
  `active_template` varchar(50) DEFAULT NULL,
  `sys_version` text DEFAULT NULL,
  `bv_price` varchar(50) DEFAULT NULL,
  `total_bv` varchar(50) DEFAULT NULL,
  `max_bv` int(11) DEFAULT NULL,
  `cary_flash` tinyint(1) DEFAULT NULL,
  `notice` blob DEFAULT NULL,
  `free_user_notice` blob DEFAULT NULL,
  `matching_bonus_time` varchar(50) DEFAULT NULL,
  `matching_when` varchar(50) DEFAULT NULL,
  `last_paid` datetime DEFAULT NULL,
  `last_cron` datetime DEFAULT NULL,
  `bal_trans_per_charge` decimal(18,8) NOT NULL DEFAULT 0.00000000,
  `bal_trans_fixed_charge` decimal(18,8) NOT NULL DEFAULT 0.00000000,
  `PaginationLimit` bigint(200) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `general_settings`
--

INSERT INTO `general_settings` (`id`, `sitename`, `siteurl`, `cur_text`, `cur_sym`, `email_from`, `email_template`, `sms_api`, `base_color`, `secondary_color`, `mail_config`, `ev`, `en`, `sv`, `sn`, `force_ssl`, `secure_password`, `registration`, `social_login`, `social_credential`, `active_template`, `sys_version`, `bv_price`, `total_bv`, `max_bv`, `cary_flash`, `notice`, `free_user_notice`, `matching_bonus_time`, `matching_when`, `last_paid`, `last_cron`, `bal_trans_per_charge`, `bal_trans_fixed_charge`, `PaginationLimit`, `created_at`, `updated_at`) VALUES
(1, 'Rejoice Fx', 'https://rejoicefx.com/', 'USDT', '₹', 'no-reply@demo.com', '<table style=\"color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(0, 23, 54); text-decoration-style: initial; text-decoration-color: initial;\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" bgcolor=\"#001736\"><tbody><tr><td valign=\"top\" align=\"center\"><table class=\"mobile-shell\" width=\"650\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"td container\" style=\"width: 650px; min-width: 650px; font-size: 0pt; line-height: 0pt; margin: 0px; font-weight: normal; padding: 55px 0px;\"><div style=\"text-align: center;\"><img src=\"https://i.imgur.com/gudv2IN.png\" style=\"height: 240 !important;width: 338px;margin-bottom: 20px;\"></div><table style=\"width: 650px; margin: 0px auto;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td style=\"padding-bottom: 10px;\"><table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"tbrr p30-15\" style=\"padding: 60px 30px; border-radius: 26px 26px 0px 0px;\" bgcolor=\"#000036\"><table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td style=\"color: rgb(255, 255, 255); font-family: Muli, Arial, sans-serif; font-size: 20px; line-height: 46px; padding-bottom: 25px; font-weight: bold;\">Hi {{name}} ,</td></tr><tr><td style=\"color: rgb(193, 205, 220); font-family: Muli, Arial, sans-serif; font-size: 20px; line-height: 30px; padding-bottom: 25px;\">{{message}}</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table style=\"width: 650px; margin: 0px auto;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"p30-15 bbrr\" style=\"padding: 50px 30px; border-radius: 0px 0px 26px 26px;\" bgcolor=\"#000036\"><table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td class=\"text-footer1 pb10\" style=\"color: rgb(0, 153, 255); font-family: Muli, Arial, sans-serif; font-size: 18px; line-height: 30px; text-align: center; padding-bottom: 10px;\">© 2021 RevPTC. All Rights Reserved.</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>', '--------------------------------------------', 'ff7149', '2285d7', '{\"name\":\"php\"}', 0, 0, 0, 0, 0, 0, 1, 0, '{\"google_client_id\":\"53929591142-l40gafo7efd9onfe6tj545sf9g7tv15t.apps.googleusercontent.com\",\"google_client_secret\":\"BRdB3np2IgYLiy4-bwMcmOwN\",\"fb_client_id\":\"277229062999748\",\"fb_client_secret\":\"1acfc850f73d1955d14b282938585122\"}', 'basic', NULL, '500', '2', 0, 2, 0x3c683520636c6173733d22636172642d7469746c6520746578742d7072696d61727922207374796c653d226d617267696e2d626f74746f6d3a20302e3572656d3b20666f6e742d7765696768743a203630303b206c696e652d6865696768743a20312e333b20666f6e742d73697a653a20323070783b20666f6e742d66616d696c793a202671756f743b4f70656e2053616e732671756f743b2c2073616e732d73657269663b2070616464696e673a203070783b207472616e736974696f6e3a20616c6c20302e337320656173652030733b20636f6c6f723a2072676228302c203137352c20323535292021696d706f7274616e743b223e416c6c2055736572206e6f746963653c2f68353e3c683520636c6173733d22636172642d7469746c6520746578742d7072696d61727922207374796c653d226d617267696e2d626f74746f6d3a20302e3572656d3b206c696e652d6865696768743a20312e333b2070616464696e673a203070783b207472616e736974696f6e3a20616c6c20302e337320656173652030733b223e3c7020636c6173733d22636172642d7465787422207374796c653d22223e3c666f6e7420636f6c6f723d22233231323532392220666163653d224f70656e2053616e732c2073616e732d7365726966223e4d756c74692d6c6576656c206d61726b6574696e672069732061206469766572736520616e642076617269656420696e6475737472792c20656d706c6f79696e67206d616e7920646966666572656e74207374727563747572657320616e64206d6574686f6473206f662073656c6c696e672e20416c74686f756768207468657265206d6179206265207369676e69666963616e7420646966666572656e63657320696e20686f77206d756c74692d6c6576656c206d61726b65746572732073656c6c2074686569722070726f6475637473206f722073657276696365732c20636f726520636f6e73756d65722070726f74656374696f6e207072696e6369706c657320617265206170706c696361626c6520746f206576657279206d656d626572206f662074686520696e6475737472792e2054686520436f6d6d697373696f6e207374616666206f66666572732074686973206e6f6e2d62696e64696e672067756964616e636520746f20617373697374206d756c74692d6c6576656c206d61726b657465727320696e206170706c79696e672074686f736520636f7265207072696e6369706c657320746f20746865697220627573696e657373207072616374696365732e3c2f666f6e743e3c62723e3c2f703e3c2f68353e, 0x3c683520636c6173733d22636172642d7469746c6520746578742d7072696d61727922207374796c653d226d617267696e2d626f74746f6d3a20302e3572656d3b20666f6e742d7765696768743a203630303b206c696e652d6865696768743a20312e333b20666f6e742d73697a653a20323070783b20666f6e742d66616d696c793a202671756f743b4f70656e2053616e732671756f743b2c2073616e732d73657269663b2070616464696e673a203070783b207472616e736974696f6e3a20616c6c20302e337320656173652030733b20636f6c6f723a2072676228302c203137352c20323535292021696d706f7274616e743b223e467265652055736572206e6f746963653c2f68353e3c7020636c6173733d22636172642d7465787422207374796c653d22223e3c666f6e7420636f6c6f723d22233231323532392220666163653d224f70656e2053616e732c2073616e732d7365726966223e4d756c74692d6c6576656c206d61726b6574696e672069732061206469766572736520616e642076617269656420696e6475737472792c20656d706c6f79696e67206d616e7920646966666572656e74207374727563747572657320616e64206d6574686f6473206f662073656c6c696e672e20416c74686f756768207468657265206d6179206265207369676e69666963616e7420646966666572656e63657320696e20686f77206d756c74692d6c6576656c206d61726b65746572732073656c6c2074686569722070726f6475637473206f722073657276696365732c20636f726520636f6e73756d65722070726f74656374696f6e207072696e6369706c657320617265206170706c696361626c6520746f206576657279206d656d626572206f662074686520696e6475737472792e2054686520436f6d6d697373696f6e207374616666206f66666572732074686973206e6f6e2d62696e64696e672067756964616e636520746f20617373697374206d756c74692d6c6576656c206d61726b657465727320696e206170706c79696e672074686f736520636f7265207072696e6369706c657320746f20746865697220627573696e657373207072616374696365732e3c2f666f6e743e3c62723e3c2f703e, 'daily', '24', '2021-04-10 00:00:00', '2022-05-06 18:55:01', 0.00000000, 0.00000000, 10, NULL, '2022-05-07 01:55:01');

-- --------------------------------------------------------

--
-- Table structure for table `generate_pins`
--

CREATE TABLE `generate_pins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_id_fk` varchar(255) DEFAULT NULL,
  `pin` varchar(255) NOT NULL,
  `allocated_date` date NOT NULL,
  `remarks` double(8,2) NOT NULL,
  `type` double(8,2) NOT NULL,
  `wallet` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `incomes`
--

CREATE TABLE `incomes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_id_fk` varchar(255) DEFAULT NULL,
  `amt` float NOT NULL,
  `comm` float NOT NULL,
  `remarks` varchar(255) NOT NULL,
  `ttime` date NOT NULL,
  `level` int(11) NOT NULL,
  `tleft` double(8,2) DEFAULT NULL,
  `tright` double(8,2) DEFAULT NULL,
  `rname` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `curry` varchar(200) NOT NULL DEFAULT '0',
  `invest_id` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `incomes`
--

INSERT INTO `incomes` (`id`, `user_id`, `user_id_fk`, `amt`, `comm`, `remarks`, `ttime`, `level`, `tleft`, `tright`, `rname`, `fullname`, `curry`, `invest_id`, `created_at`, `updated_at`) VALUES
(3606, 57, 'RF953808', 25000, 750, 'Level Bonus', '2024-03-21', 1, NULL, NULL, 'RF151183', 'MANOJ V', '0', 0, '2024-03-21 17:52:38', '2024-03-21 17:52:38'),
(3607, 1, 'RF10001', 500, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 1, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3608, 54, 'RF738209', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 3, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3609, 56, 'RF228112', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 5, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3610, 58, 'RF501267', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 6, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3611, 64, 'RF466628', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 7, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3612, 59, 'RF394368', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 8, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3613, 231, 'RF770311', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 9, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3614, 120, 'RF243245', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 10, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3615, 65, 'RF727085', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 12, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3616, 255, 'RF585829', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 13, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3617, 60, 'RF074948', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 14, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3618, 76, 'RF202298', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 15, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3619, 61, 'RF915469', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 16, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3620, 70, 'RF267387', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 17, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3621, 69, 'RF908632', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 18, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3622, 349, 'RF872734', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 19, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3623, 295, 'RF805464', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 20, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3624, 351, 'RF874852', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 21, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3625, 299, 'RF096658', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 22, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3626, 77, 'RF462686', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 23, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3627, 71, 'RF088105', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 24, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3628, 294, 'RF284708', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 25, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3629, 402, 'RF932260', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 26, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3630, 403, 'RF277043', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 27, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3631, 405, 'RF380836', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 28, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3632, 412, 'RF750108', 400, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 30, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3633, 413, 'RF576309', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 31, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3634, 406, 'RF841691', 400, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 32, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3635, 392, 'RF258934', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 33, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3636, 414, 'RF552567', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 34, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3637, 416, 'RF941373', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 35, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3638, 417, 'RF145052', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 36, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3639, 444, 'RF545924', 10000, 1000, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 37, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3640, 62, 'RF165792', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 38, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3641, 456, 'RF286467', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 39, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3642, 467, 'RF836248', 600, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 40, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3643, 348, 'RF518744', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 41, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3644, 469, 'RF598655', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 42, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3645, 470, 'RF131144', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 43, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3646, 471, 'RF587291', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 44, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3647, 359, 'RF188245', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 45, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3648, 63, 'RF346135', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 46, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3649, 284, 'RF299834', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 47, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3650, 489, 'RF344811', 600, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 48, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3651, 490, 'RF107104', 500, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 49, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3652, 491, 'RF718916', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 50, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3653, 492, 'RF451629', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 51, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3654, 67, 'RF777808', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 52, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3655, 493, 'RF389035', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 53, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3656, 488, 'RF225339', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 54, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3657, 517, 'RF848448', 300, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 55, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3658, 516, 'RF918782', 1000, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 56, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3659, 521, 'RF947570', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 57, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3660, 68, 'RF328330', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 58, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3661, 135, 'RF245712', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 59, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3662, 523, 'RF937581', 200, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 60, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3663, 524, 'RF423154', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 61, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3664, 525, 'RF712670', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 62, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3665, 531, 'RF093822', 200, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 64, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3666, 72, 'RF428716', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 65, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3667, 575, 'RF825134', 200, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 66, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3668, 593, 'RF417768', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 67, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3669, 576, 'RF800172', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 68, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3670, 579, 'RF582579', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 69, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3671, 580, 'RF556613', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 70, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3672, 577, 'RF581044', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 71, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3673, 578, 'RF186780', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 72, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3674, 594, 'RF253776', 5600, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 73, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3675, 66, 'RF027387', 500, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 74, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3676, 596, 'RF768130', 5500, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 75, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3677, 595, 'RF446036', 5600, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 76, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3678, 404, 'RF283461', 500, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 77, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3679, 518, 'RF511647', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 78, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3680, 598, 'RF843621', 50000, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 79, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3681, 407, 'RF454511', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 80, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3682, 527, 'RF780105', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 81, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3683, 599, 'RF181337', 200, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 82, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3684, 600, 'RF261065', 500, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 83, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3685, 499, 'RF605487', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 84, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3686, 601, 'RF277533', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 85, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3687, 233, 'RF055975', 1000, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 86, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3688, 628, 'RF449980', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 87, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3689, 630, 'RF411680', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 88, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3690, 636, 'RF976458', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 89, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3691, 629, 'RF511453', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 90, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3692, 635, 'RF410329', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 91, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3693, 633, 'RF766653', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 92, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3694, 637, 'RF059635', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 93, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3695, 117, 'RF271728', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 94, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3696, 638, 'RF286715', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 95, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3697, 639, 'RF671038', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 96, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3698, 113, 'RF367156', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 97, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3699, 641, 'RF683526', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 98, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3700, 475, 'RF468852', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 99, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3701, 485, 'RF610245', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 100, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3702, 474, 'RF285740', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 101, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3703, 658, 'RF151183', 5000, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 103, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3704, 418, 'RF701198', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 104, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3705, 419, 'RF731641', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 105, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3706, 659, 'RF146529', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 106, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3707, 660, 'RF238614', 100, 0, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 107, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3708, 658, 'RF151183', 10000, 1000, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 108, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3709, 658, 'RF151183', 10000, 1000, 'Roi Bonus', '2024-03-21', 0, NULL, NULL, NULL, NULL, '0', 109, '2024-03-21 17:52:47', '2024-03-21 17:52:47'),
(3710, 658, 'RF213000', 25000, 3000, 'Roi Bonus', '2024-05-10', 0, NULL, NULL, NULL, NULL, '0', 110, '2024-05-10 17:52:47', '2024-05-10 17:52:47'),
(3711, 658, 'RF151183', 3150, 1000, 'Referral Income', '2024-05-21', 1, NULL, NULL, 'RF213000', 'ankit', '0', 0, '2024-05-21 11:13:53', '2024-05-21 11:13:53'),
(3712, 658, 'RF151183', 3150, 157.5, 'Level Income', '2024-05-21', 1, NULL, NULL, 'RF213000', 'ankit', '0', 0, '2024-05-21 11:13:53', '2024-05-21 11:13:53'),
(3713, 658, 'RF151183', 3150, 1000, 'Referral Income', '2024-05-21', 1, NULL, NULL, 'RF213000', 'ankit', '0', 0, '2024-05-21 11:25:27', '2024-05-21 11:25:27'),
(3714, 658, 'RF151183', 3150, 157.5, 'Level Income', '2024-05-21', 1, NULL, NULL, 'RF213000', 'ankit', '0', 0, '2024-05-21 11:25:27', '2024-05-21 11:25:27'),
(3715, 658, 'RF151183', 3150, 1000, 'Referral Income', '2024-05-21', 1, NULL, NULL, 'RF213000', 'ankit', '0', 0, '2024-05-21 12:15:03', '2024-05-21 12:15:03'),
(3716, 658, 'RF151183', 3150, 157.5, 'Level Income', '2024-05-21', 1, NULL, NULL, 'RF213000', 'ankit', '0', 0, '2024-05-21 12:15:03', '2024-05-21 12:15:03'),
(3717, 685, 'RF213000', 3150, 1000, 'Referral Income', '2024-05-21', 1, NULL, NULL, 'MP312549', 'Sachin', '0', 0, '2024-05-21 12:31:54', '2024-05-21 12:31:54'),
(3718, 658, 'RF151183', 3150, 126, 'Level Income', '2024-05-21', 2, NULL, NULL, 'MP312549', 'Sachin', '0', 0, '2024-05-21 12:31:54', '2024-05-21 12:31:54');

-- --------------------------------------------------------

--
-- Table structure for table `investments`
--

CREATE TABLE `investments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `plan` varchar(255) DEFAULT NULL,
  `user_id_fk` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `amount` double(8,2) NOT NULL,
  `amt` float(18,2) NOT NULL DEFAULT 0.00,
  `sdate` date NOT NULL,
  `status` enum('Active','Pending') NOT NULL DEFAULT 'Pending',
  `payment_order_id` varchar(255) DEFAULT NULL,
  `payment_status` int(11) NOT NULL DEFAULT 1 COMMENT '0-failed,1-pending,2-success\r\n',
  `payment_status_desc` varchar(255) DEFAULT NULL,
  `payment_id` varchar(255) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `slip` text DEFAULT NULL,
  `payment_mode` varchar(255) DEFAULT NULL,
  `active_from` varchar(255) DEFAULT NULL,
  `roiCandition` int(11) NOT NULL DEFAULT 0 COMMENT '0=>ON & 1=> Off',
  `walletType` int(11) DEFAULT 0 COMMENT '1=>activation Wallet &2=>Income Wallet',
  `capping` float(18,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `investments`
--

INSERT INTO `investments` (`id`, `plan`, `user_id_fk`, `user_id`, `amount`, `amt`, `sdate`, `status`, `payment_order_id`, `payment_status`, `payment_status_desc`, `payment_id`, `transaction_id`, `slip`, `payment_mode`, `active_from`, `roiCandition`, `walletType`, `capping`, `created_at`, `updated_at`) VALUES
(1, '1', 'RF10001', 1, 500.00, 0.00, '2023-12-07', 'Active', NULL, 1, NULL, NULL, '128090a42a7c3fa5589a769e31c6fd56', NULL, 'USDT', 'RF10001', 0, 1, 0.00, '2023-12-07 14:19:02', '2023-12-07 09:49:02'),
(2, '1', 'RF455385', 53, 100.00, 0.00, '2023-12-07', 'Active', NULL, 1, NULL, NULL, '7efc5b2a9a54049c7a5adeeeaca1beb7', NULL, 'USDT', 'RF10001', 1, 1, 0.00, '2023-12-07 16:56:19', '2024-03-03 15:15:03'),
(3, '1', 'RF738209', 54, 100.00, 0.00, '2023-12-07', 'Active', NULL, 1, NULL, NULL, 'bc63786a8647a5259c2bbdb8fd6b62c2', NULL, 'USDT', 'RF10001', 0, 1, 0.00, '2023-12-07 16:56:49', '2023-12-07 12:26:49'),
(4, '1', 'RF953808', 57, 100.00, 0.00, '2023-12-07', 'Active', NULL, 1, NULL, NULL, '6129902e09433f64e7c65a951e13d295', NULL, 'USDT', 'RF10001', 1, 1, 0.00, '2023-12-07 16:57:18', '2024-03-04 00:30:06'),
(5, '1', 'RF228112', 56, 100.00, 0.00, '2023-12-07', 'Active', NULL, 1, NULL, NULL, '8156279ae7b5f6e10019bdbe20995315', NULL, 'USDT', 'RF10001', 0, 1, 0.00, '2023-12-07 16:57:39', '2023-12-07 12:27:39'),
(6, '1', 'RF501267', 58, 100.00, 0.00, '2023-12-09', 'Active', NULL, 1, NULL, NULL, '0dfe1543e9fd6d722b297bf1dea21fe2', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-09 10:45:53', '2023-12-09 06:15:53'),
(7, '1', 'RF466628', 64, 100.00, 0.00, '2023-12-13', 'Active', NULL, 1, NULL, NULL, 'ddeb1e523926fe17b69904a077ca4bed', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-13 10:56:35', '2023-12-13 06:26:35'),
(8, '1', 'RF394368', 59, 100.00, 0.00, '2023-12-13', 'Active', NULL, 1, NULL, NULL, '62d856531816407a4ddc7bf0129a91b5', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-13 18:19:03', '2023-12-13 13:49:03'),
(9, '1', 'RF770311', 231, 100.00, 0.00, '2023-12-14', 'Active', NULL, 1, NULL, NULL, '660ece9a45c708667dfd2c1d85d53c17', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-14 11:44:17', '2023-12-14 07:14:17'),
(10, '1', 'RF243245', 120, 100.00, 0.00, '2023-12-14', 'Active', NULL, 1, NULL, NULL, 'a7d72c05a190dc2458e651bc45bf8cc4', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-14 20:43:46', '2023-12-14 16:13:46'),
(11, '1', 'RF027387', 66, 100.00, 0.00, '2023-12-17', 'Active', NULL, 1, NULL, NULL, '6a5bcb3c1e3faad2ac12c27b3ed743c1', NULL, 'USDT', 'RF455385', 1, 1, 0.00, '2023-12-17 13:28:17', '2024-02-19 17:29:04'),
(12, '1', 'RF727085', 65, 100.00, 0.00, '2023-12-17', 'Active', NULL, 1, NULL, NULL, '88f74d8a7e2def618dddf27a056427a8', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-17 13:29:08', '2023-12-17 08:59:08'),
(13, '1', 'RF585829', 255, 100.00, 0.00, '2023-12-19', 'Active', NULL, 1, NULL, NULL, '55d4d91e6cbc1b763d13bb5e72cb2fab', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-19 15:21:26', '2023-12-19 10:51:26'),
(14, '1', 'RF074948', 60, 100.00, 0.00, '2023-12-20', 'Active', NULL, 1, NULL, NULL, 'd6a4ce4349bb11b9c4eb9d37b7e01718', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-20 18:26:22', '2023-12-20 13:56:22'),
(15, '1', 'RF202298', 76, 100.00, 0.00, '2023-12-22', 'Active', NULL, 1, NULL, NULL, 'c0ffed6ac76626272ce7c38d75eb4cf0', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-22 16:28:49', '2023-12-22 11:58:49'),
(16, '1', 'RF915469', 61, 100.00, 0.00, '2023-12-23', 'Active', NULL, 1, NULL, NULL, 'a7b8c30fb1edcd5fad74f05342a5ae62', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-23 17:38:55', '2023-12-23 13:08:55'),
(17, '1', 'RF267387', 70, 100.00, 0.00, '2023-12-24', 'Active', NULL, 1, NULL, NULL, 'a661b2e6aa6c7e0ba9dc71f716f3bed3', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-24 13:33:04', '2023-12-24 09:03:04'),
(18, '1', 'RF908632', 69, 100.00, 0.00, '2023-12-24', 'Active', NULL, 1, NULL, NULL, '44ff56eb0483703c486fb3d69b04f697', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-24 15:19:52', '2023-12-24 10:49:52'),
(19, '1', 'RF872734', 349, 100.00, 0.00, '2023-12-24', 'Active', NULL, 1, NULL, NULL, '382a3e2ee751ba5ed357bd853a66cf8c', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-24 15:23:12', '2023-12-24 10:53:12'),
(20, '1', 'RF805464', 295, 100.00, 0.00, '2023-12-25', 'Active', NULL, 1, NULL, NULL, 'a764f1f24e4969063cf6b93bce7b7880', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-25 13:43:16', '2023-12-25 09:13:16'),
(21, '1', 'RF874852', 351, 100.00, 0.00, '2023-12-27', 'Active', NULL, 1, NULL, NULL, '20c02d513ea5061dbdfb83101858c3ef', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-27 14:38:11', '2023-12-27 10:08:11'),
(22, '1', 'RF096658', 299, 100.00, 0.00, '2023-12-28', 'Active', NULL, 1, NULL, NULL, 'bc5b0ce04ed6d55338fa8f5225f2e63d', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-28 12:51:31', '2023-12-28 08:21:31'),
(23, '1', 'RF462686', 77, 100.00, 0.00, '2023-12-29', 'Active', NULL, 1, NULL, NULL, '45634920279b5609a11e7214a64672fb', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-29 15:15:42', '2023-12-29 10:45:42'),
(24, '1', 'RF088105', 71, 100.00, 0.00, '2023-12-29', 'Active', NULL, 1, NULL, NULL, 'b366798344dd4eee4812579c672afdb9', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-29 15:52:55', '2023-12-29 11:22:55'),
(25, '1', 'RF284708', 294, 100.00, 0.00, '2023-12-31', 'Active', NULL, 1, NULL, NULL, 'aee58a263a4e229034aabf241b2c8170', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-31 21:43:51', '2023-12-31 17:13:51'),
(26, '1', 'RF932260', 402, 100.00, 0.00, '2023-12-31', 'Active', NULL, 1, NULL, NULL, '88abdfb364e473ccfe1276efe84044c7', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-31 21:59:04', '2023-12-31 17:29:04'),
(27, '1', 'RF277043', 403, 100.00, 0.00, '2023-12-31', 'Active', NULL, 1, NULL, NULL, '019e289b74de7dcf44a2f14137fed283', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2023-12-31 21:59:57', '2023-12-31 17:29:57'),
(28, '1', 'RF380836', 405, 100.00, 0.00, '2024-01-01', 'Active', NULL, 1, NULL, NULL, 'a85cd20ae09e2eab935df8127d3bee28', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-01 12:55:30', '2024-01-01 08:25:30'),
(29, '1', 'RF283461', 404, 100.00, 0.00, '2024-01-01', 'Active', NULL, 1, NULL, NULL, '394aed41ababffb52acc26e1a1686478', NULL, 'USDT', 'RF455385', 1, 1, 0.00, '2024-01-01 12:56:40', '2024-02-20 06:23:19'),
(30, '1', 'RF750108', 412, 400.00, 0.00, '2024-01-01', 'Active', NULL, 1, NULL, NULL, '549a829d8038585cd11cc284ab474748', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-01 12:57:42', '2024-01-01 08:27:42'),
(31, '1', 'RF576309', 413, 100.00, 0.00, '2024-01-01', 'Active', NULL, 1, NULL, NULL, '8dc2b64ea482e8babfdeb305390a4cec', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-01 12:58:39', '2024-01-01 08:28:39'),
(32, '1', 'RF841691', 406, 400.00, 0.00, '2024-01-01', 'Active', NULL, 1, NULL, NULL, '788a09d2623fe366524f760ac8336d4c', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-01 13:01:39', '2024-01-01 08:31:39'),
(33, '1', 'RF258934', 392, 100.00, 0.00, '2024-01-01', 'Active', NULL, 1, NULL, NULL, '644116eb7986596e78907ecf9772912b', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-01 14:58:34', '2024-01-01 10:28:34'),
(34, '1', 'RF552567', 414, 100.00, 0.00, '2024-01-01', 'Active', NULL, 1, NULL, NULL, '30c02d007060eb10d468b83a6420b027', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-01 15:06:41', '2024-01-01 10:36:41'),
(35, '1', 'RF941373', 416, 100.00, 0.00, '2024-01-01', 'Active', NULL, 1, NULL, NULL, '18a0db651a4deb6a0955acb0218144dd', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-01 15:13:11', '2024-01-01 10:43:11'),
(36, '1', 'RF145052', 417, 100.00, 0.00, '2024-01-04', 'Active', NULL, 1, NULL, NULL, '9e6936ad0b570a76d527f0a0ed390b59', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-04 08:56:09', '2024-01-04 04:26:09'),
(37, '1', 'RF545924', 444, 10000.00, 0.00, '2024-01-06', 'Active', NULL, 1, NULL, NULL, '84d068c34f4e9859b684118f87872384', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-06 12:05:26', '2024-01-06 07:35:26'),
(38, '1', 'RF165792', 62, 100.00, 0.00, '2024-01-13', 'Active', NULL, 1, NULL, NULL, '90a51230249964f6cbc84df0bccf1214', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-13 17:07:10', '2024-01-13 12:37:10'),
(39, '1', 'RF286467', 456, 100.00, 0.00, '2024-01-14', 'Active', NULL, 1, NULL, NULL, '9b727bd85151265623ccc05a005c0bc9', NULL, 'USDT', 'RF915469', 0, 1, 0.00, '2024-01-14 15:10:58', '2024-01-14 10:40:58'),
(40, '1', 'RF836248', 467, 600.00, 0.00, '2024-01-16', 'Active', NULL, 1, NULL, NULL, '699d490c260c2728d3daffbb95ee95e4', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-16 13:55:19', '2024-01-16 09:25:19'),
(41, '1', 'RF518744', 348, 100.00, 0.00, '2024-01-16', 'Active', NULL, 1, NULL, NULL, 'b43fab69b4375300bfbc5efa6c8b5e88', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-16 14:43:21', '2024-01-16 10:13:21'),
(42, '1', 'RF598655', 469, 100.00, 0.00, '2024-01-18', 'Active', NULL, 1, NULL, NULL, '5981083ffaab4ccd59e2bde358490dea', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-18 14:53:15', '2024-01-18 10:23:15'),
(43, '1', 'RF131144', 470, 100.00, 0.00, '2024-01-18', 'Active', NULL, 1, NULL, NULL, 'c339109b5cb50fdd77de82b6c1adbc5b', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-18 14:53:47', '2024-01-18 10:23:47'),
(44, '1', 'RF587291', 471, 100.00, 0.00, '2024-01-18', 'Active', NULL, 1, NULL, NULL, '7b47d04af52eba0c4d9cb90f7fa94426', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-18 14:54:30', '2024-01-18 10:24:30'),
(45, '1', 'RF188245', 359, 100.00, 0.00, '2024-01-18', 'Active', NULL, 1, NULL, NULL, 'bb0c7b1a15b620e42bbb781f608a40f1', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-01-18 20:20:01', '2024-01-18 15:50:01'),
(46, '1', 'RF346135', 63, 100.00, 0.00, '2024-02-03', 'Active', NULL, 1, NULL, NULL, '5ec52b1e06a6d591d8bb7cbbca5a5afc', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-03 16:08:16', '2024-02-03 11:38:16'),
(47, '1', 'RF299834', 284, 100.00, 0.00, '2024-02-03', 'Active', NULL, 1, NULL, NULL, '016b0fe14b1d7c882df14c9682234870', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-03 16:09:03', '2024-02-03 11:39:03'),
(48, '1', 'RF344811', 489, 600.00, 0.00, '2024-02-03', 'Active', NULL, 1, NULL, NULL, '277ac45353c5ff3a723a4495d506583e', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-03 16:09:41', '2024-02-03 11:39:41'),
(49, '1', 'RF107104', 490, 500.00, 0.00, '2024-02-03', 'Active', NULL, 1, NULL, NULL, '021e6782cf95d0b6d5bf4f057c2702fc', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-03 16:10:23', '2024-02-03 11:40:23'),
(50, '1', 'RF718916', 491, 100.00, 0.00, '2024-02-03', 'Active', NULL, 1, NULL, NULL, '8ee8651397d2319f0362d230d1a6a919', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-03 16:11:09', '2024-02-03 11:41:09'),
(51, '1', 'RF451629', 492, 100.00, 0.00, '2024-02-04', 'Active', NULL, 1, NULL, NULL, '88db68ba52cdf76c7e9724033ffff1c1', NULL, 'USDT', 'RF915469', 0, 1, 0.00, '2024-02-04 11:19:51', '2024-02-04 06:49:51'),
(52, '1', 'RF777808', 67, 100.00, 0.00, '2024-02-05', 'Active', NULL, 1, NULL, NULL, 'fefd433bebdfdfe87faae220a4af6679', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-05 17:11:47', '2024-02-05 12:41:47'),
(53, '1', 'RF389035', 493, 100.00, 0.00, '2024-02-05', 'Active', NULL, 1, NULL, NULL, 'd1789cec28885c71022141fd67a0c06a', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-05 17:14:19', '2024-02-05 12:44:19'),
(54, '1', 'RF225339', 488, 100.00, 0.00, '2024-02-06', 'Active', NULL, 1, NULL, NULL, '6e0f55ff59e65f89c51ab13eb4a43564', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-06 12:51:27', '2024-02-06 08:21:27'),
(55, '1', 'RF848448', 517, 300.00, 0.00, '2024-02-06', 'Active', NULL, 1, NULL, NULL, '8db77f9e321823050e4645f8e7a13582', NULL, 'USDT', 'RF299834', 0, 1, 0.00, '2024-02-06 13:58:06', '2024-02-06 09:28:06'),
(56, '1', 'RF918782', 516, 1000.00, 0.00, '2024-02-06', 'Active', NULL, 1, NULL, NULL, '8fb0f78f954808d76c3153b2bfcd682a', NULL, 'USDT', 'RF299834', 0, 1, 0.00, '2024-02-06 13:59:07', '2024-02-06 09:29:07'),
(57, '1', 'RF947570', 521, 100.00, 0.00, '2024-02-07', 'Active', NULL, 1, NULL, NULL, 'ce122ddd97f2c448b572b23f0d235d35', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-07 21:02:32', '2024-02-07 16:32:32'),
(58, '1', 'RF328330', 68, 100.00, 0.00, '2024-02-08', 'Active', NULL, 1, NULL, NULL, '0710b19c0adb84f2f84ae92e5013cf36', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-08 16:43:41', '2024-02-08 12:13:41'),
(59, '1', 'RF245712', 135, 100.00, 0.00, '2024-02-08', 'Active', NULL, 1, NULL, NULL, 'd06b39748da0a889d8f9a9b250464a13', NULL, 'USDT', 'RF501267', 0, 1, 0.00, '2024-02-08 21:37:25', '2024-02-08 17:07:25'),
(60, '1', 'RF937581', 523, 200.00, 0.00, '2024-02-08', 'Active', NULL, 1, NULL, NULL, 'bc246c8bdc9623b625241c97b76f09d0', NULL, 'USDT', 'RF501267', 0, 1, 0.00, '2024-02-08 21:46:15', '2024-02-08 17:16:15'),
(61, '1', 'RF423154', 524, 100.00, 0.00, '2024-02-08', 'Active', NULL, 1, NULL, NULL, '99dcb7fa449c5c5a6ed940983ba8acca', NULL, 'USDT', 'RF501267', 0, 1, 0.00, '2024-02-08 22:01:42', '2024-02-08 17:31:42'),
(62, '1', 'RF712670', 525, 100.00, 0.00, '2024-02-09', 'Active', NULL, 1, NULL, NULL, '3bb927b29a7e0e171bc0d073ea4f8760', NULL, 'USDT', 'RF501267', 0, 1, 0.00, '2024-02-09 12:46:08', '2024-02-09 08:16:08'),
(63, '1', 'RF455385', 53, 500.00, 0.00, '2024-02-10', 'Active', NULL, 1, NULL, NULL, '67c9ee06d9ddc7fcc7c87331ba3525b3', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-10 14:14:59', '2024-03-04 07:41:42'),
(64, '1', 'RF093822', 531, 200.00, 0.00, '2024-02-11', 'Active', NULL, 1, NULL, NULL, 'da938e89288e25e8d3de826d5158aac0', NULL, 'USDT', 'RF501267', 0, 1, 0.00, '2024-02-11 20:23:28', '2024-02-11 15:53:28'),
(65, '1', 'RF428716', 72, 100.00, 0.00, '2024-02-12', 'Active', NULL, 1, NULL, NULL, 'affa62ca142655cfa626627082222ea6', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-12 15:21:55', '2024-02-12 10:51:55'),
(66, '1', 'RF825134', 575, 200.00, 0.00, '2024-02-18', 'Active', NULL, 1, NULL, NULL, 'a7cf24cd4771c1be76a4e9133a735a22', NULL, 'USDT', 'RF501267', 0, 1, 0.00, '2024-02-18 15:08:38', '2024-02-18 10:38:38'),
(67, '1', 'RF417768', 593, 100.00, 0.00, '2024-02-18', 'Active', NULL, 1, NULL, NULL, '2c6a69b6aaa1882e4ded76b65fac86b6', NULL, 'USDT', 'RF915469', 0, 1, 0.00, '2024-02-18 19:49:07', '2024-02-18 15:19:07'),
(68, '1', 'RF800172', 576, 100.00, 0.00, '2024-02-18', 'Active', NULL, 1, NULL, NULL, '5230a2644c4019fb3cf0ed591e7dc921', NULL, 'USDT', 'RF915469', 0, 1, 0.00, '2024-02-18 21:46:01', '2024-02-18 17:16:01'),
(69, '1', 'RF582579', 579, 100.00, 0.00, '2024-02-18', 'Active', NULL, 1, NULL, NULL, '8a5365ce8ac4684161062456ddfc4d18', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-18 21:59:52', '2024-02-18 17:29:52'),
(70, '1', 'RF556613', 580, 100.00, 0.00, '2024-02-18', 'Active', NULL, 1, NULL, NULL, '1477937d2031cbadfae4243a1d3da70b', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-18 22:00:33', '2024-02-18 17:30:33'),
(71, '1', 'RF581044', 577, 100.00, 0.00, '2024-02-18', 'Active', NULL, 1, NULL, NULL, 'dff73da2887f244e96237e230545e2a8', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-18 22:01:15', '2024-02-18 17:31:15'),
(72, '1', 'RF186780', 578, 100.00, 0.00, '2024-02-18', 'Active', NULL, 1, NULL, NULL, '2899b0846478d3aaa37c7d37cff665c5', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-18 22:01:55', '2024-02-18 17:31:55'),
(73, '1', 'RF253776', 594, 5600.00, 0.00, '2024-02-19', 'Active', NULL, 1, NULL, NULL, '200c7f08c005b0593a072ddfef5fee02', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-19 17:29:04', '2024-02-19 12:59:04'),
(74, '1', 'RF027387', 66, 500.00, 0.00, '2024-02-19', 'Active', NULL, 1, NULL, NULL, '82d62039744c779699ed635da27080b3', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-19 22:44:41', '2024-02-19 18:14:41'),
(75, '1', 'RF768130', 596, 5500.00, 0.00, '2024-02-20', 'Active', NULL, 1, NULL, NULL, '8bc2721c0c989e6b34a8a35eb2c4b773', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-20 06:19:53', '2024-02-20 01:49:53'),
(76, '1', 'RF446036', 595, 5600.00, 0.00, '2024-02-20', 'Active', NULL, 1, NULL, NULL, '3abc6887ebf367680a4b580aeaa9338b', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-20 06:23:19', '2024-02-20 01:53:19'),
(77, '1', 'RF283461', 404, 500.00, 0.00, '2024-02-20', 'Active', NULL, 1, NULL, NULL, '8ecd6d90016cf8c0a4e94223bad1a99c', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-20 06:42:05', '2024-02-20 02:12:05'),
(78, '1', 'RF511647', 518, 100.00, 0.00, '2024-02-20', 'Active', NULL, 1, NULL, NULL, '0cd435a0e6f9c7b341a3efe70e1ab69e', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-20 12:15:31', '2024-02-20 07:45:31'),
(79, '1', 'RF843621', 598, 50000.00, 0.00, '2024-02-20', 'Active', NULL, 1, NULL, NULL, '4b72e3d27863fbc77d47e0901c94fa58', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-20 16:02:23', '2024-02-20 11:32:23'),
(80, '1', 'RF454511', 407, 100.00, 0.00, '2024-02-20', 'Active', NULL, 1, NULL, NULL, '369e3f67766991d35f32eaa7da202150', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-20 16:07:39', '2024-02-20 11:37:39'),
(81, '1', 'RF780105', 527, 100.00, 0.00, '2024-02-20', 'Active', NULL, 1, NULL, NULL, '56578ba552be9be8193eaf2bb66b596f', NULL, 'USDT', 'RF501267', 0, 1, 0.00, '2024-02-20 19:19:51', '2024-02-20 14:49:51'),
(82, '1', 'RF181337', 599, 200.00, 0.00, '2024-02-21', 'Active', NULL, 1, NULL, NULL, '27e1838758b6d7d6f40b18b06a735548', NULL, 'USDT', 'RF501267', 0, 1, 0.00, '2024-02-21 19:17:56', '2024-02-21 14:47:56'),
(83, '1', 'RF261065', 600, 500.00, 0.00, '2024-02-21', 'Active', NULL, 1, NULL, NULL, '8f8f1e4550fd40e694a83eec6eb0fe6d', NULL, 'USDT', 'RF501267', 0, 1, 0.00, '2024-02-21 20:02:08', '2024-02-21 15:32:08'),
(84, '1', 'RF605487', 499, 100.00, 0.00, '2024-02-22', 'Active', NULL, 1, NULL, NULL, 'e6e1172101c2a280ccb6b235ebc8e034', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-22 12:46:37', '2024-02-22 08:16:37'),
(85, '1', 'RF277533', 601, 100.00, 0.00, '2024-02-22', 'Active', NULL, 1, NULL, NULL, 'd2c55910f952ad6c6a05b800f8dd757c', NULL, 'USDT', 'RF277533', 0, 1, 0.00, '2024-02-22 13:55:57', '2024-02-22 09:25:57'),
(86, '1', 'RF055975', 233, 1000.00, 0.00, '2024-02-24', 'Active', NULL, 1, NULL, NULL, '12bf48277f8cfe8b84dbed9abc20b4bc', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-24 11:37:54', '2024-02-24 07:07:54'),
(87, '1', 'RF449980', 628, 100.00, 0.00, '2024-02-25', 'Active', NULL, 1, NULL, NULL, 'a17d87ea89c075878aeb39c47e59d5ee', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-25 12:52:15', '2024-02-25 08:22:15'),
(88, '1', 'RF411680', 630, 100.00, 0.00, '2024-02-25', 'Active', NULL, 1, NULL, NULL, '1243295ae5d7b5887ba8573981e12af5', NULL, 'USDT', 'RF915469', 0, 1, 0.00, '2024-02-25 16:46:53', '2024-02-25 12:16:53'),
(89, '1', 'RF976458', 636, 100.00, 0.00, '2024-02-27', 'Active', NULL, 1, NULL, NULL, 'd4cc6f4af68c1a9d0d8298bca1533e22', NULL, 'USDT', 'RF953808', 0, 1, 0.00, '2024-02-27 16:00:04', '2024-02-27 11:30:04'),
(90, '1', 'RF511453', 629, 100.00, 0.00, '2024-02-27', 'Active', NULL, 1, NULL, NULL, 'ad0e91f873f59406062945dba9de903f', NULL, 'USDT', 'RF953808', 0, 1, 0.00, '2024-02-27 16:04:30', '2024-02-27 11:34:30'),
(91, '1', 'RF410329', 635, 100.00, 0.00, '2024-02-27', 'Active', NULL, 1, NULL, NULL, 'c05762812a7fcad6dcd1de530f6c5ea3', NULL, 'USDT', 'RF953808', 0, 1, 0.00, '2024-02-27 16:05:16', '2024-02-27 11:35:16'),
(92, '1', 'RF766653', 633, 100.00, 0.00, '2024-02-27', 'Active', NULL, 1, NULL, NULL, 'db276dfba6fa9cb5065e877d6e0be397', NULL, 'USDT', 'RF953808', 0, 1, 0.00, '2024-02-27 16:05:59', '2024-02-27 11:35:59'),
(93, '1', 'RF059635', 637, 100.00, 0.00, '2024-02-27', 'Active', NULL, 1, NULL, NULL, '2c607e9bf676c90b421f9bf725967f44', NULL, 'USDT', 'RF953808', 0, 1, 0.00, '2024-02-27 16:07:25', '2024-02-27 11:37:25'),
(94, '1', 'RF271728', 117, 100.00, 0.00, '2024-02-27', 'Active', NULL, 1, NULL, NULL, 'b7fead73db077e42f53f0f1865958445', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-27 16:12:57', '2024-02-27 11:42:57'),
(95, '1', 'RF286715', 638, 100.00, 0.00, '2024-02-27', 'Active', NULL, 1, NULL, NULL, '689949567f05c32dd66d71c21d1ac938', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-27 16:13:31', '2024-02-27 11:43:31'),
(96, '1', 'RF671038', 639, 100.00, 0.00, '2024-02-27', 'Active', NULL, 1, NULL, NULL, '7130aab9bcf6879fb31dd4901ce3969d', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-27 16:14:07', '2024-02-27 11:44:07'),
(97, '1', 'RF367156', 113, 100.00, 0.00, '2024-02-29', 'Active', NULL, 1, NULL, NULL, 'e008cdf4d79ee8a39c90bd9114c3cf5a', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-02-29 14:46:59', '2024-02-29 10:16:59'),
(98, '1', 'RF683526', 641, 100.00, 0.00, '2024-03-01', 'Active', NULL, 1, NULL, NULL, 'd82d36b84d47fa373538afd1abce8ed5', NULL, 'USDT', 'RF953808', 0, 1, 0.00, '2024-03-01 18:41:27', '2024-03-01 14:11:27'),
(99, '1', 'RF468852', 475, 100.00, 0.00, '2024-03-02', 'Active', NULL, 1, NULL, NULL, '7f0f23403641bbc8c985f69f6a32c8b6', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-03-02 11:35:21', '2024-03-02 07:05:21'),
(100, '1', 'RF610245', 485, 100.00, 0.00, '2024-03-02', 'Active', NULL, 1, NULL, NULL, '8b036cb497ab4e3048a2019a89fe1ee2', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-03-02 11:36:01', '2024-03-02 07:06:01'),
(101, '1', 'RF285740', 474, 100.00, 0.00, '2024-03-02', 'Active', NULL, 1, NULL, NULL, 'b34ce2db9bd851f8e1571641496ba3f0', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-03-02 11:36:36', '2024-03-02 07:06:36'),
(102, '1', 'RF953808', 57, 200.00, 0.00, '2024-03-03', 'Active', NULL, 1, NULL, NULL, 'eab72414f9a38e2616d5df117e0f242a', NULL, 'USDT', 'RF953808', 1, 1, 0.00, '2024-03-03 14:51:42', '2024-03-04 00:30:07'),
(103, '1', 'RF151183', 658, 5000.00, 10000.00, '2024-03-03', 'Active', NULL, 1, NULL, NULL, 'bf211af56b9986efef37210bb63ac759', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-03-03 15:00:21', '2024-03-21 10:47:49'),
(104, '1', 'RF701198', 418, 100.00, 0.00, '2024-03-03', 'Active', NULL, 1, NULL, NULL, '9613f6d60446bd364681e824c9199fd2', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-03-03 15:04:05', '2024-03-03 10:34:05'),
(105, '1', 'RF731641', 419, 100.00, 0.00, '2024-03-03', 'Active', NULL, 1, NULL, NULL, '62dced3d8dd948b775dc83712c5afd76', NULL, 'USDT', 'RF455385', 0, 1, 0.00, '2024-03-03 15:04:35', '2024-03-03 10:34:35'),
(106, '1', 'RF146529', 659, 100.00, 0.00, '2024-03-03', 'Active', NULL, 1, NULL, NULL, 'f3dc08fc5c163002339729518c33c3b7', NULL, 'USDT', 'RF501267', 0, 1, 0.00, '2024-03-03 19:10:48', '2024-03-03 14:40:48'),
(107, '1', 'RF238614', 660, 100.00, 0.00, '2024-03-04', 'Active', NULL, 1, NULL, NULL, '8b30052690d9f7442ebc6b8a1a925d9e', NULL, 'USDT', 'RF501267', 0, 1, 0.00, '2024-03-04 04:23:25', '2024-03-03 23:53:25'),
(108, '1', 'RF151183', 658, 10000.00, 0.00, '2024-03-21', 'Active', NULL, 1, NULL, NULL, 'e932876ae45ce486eb8c45f20fc61f9a', NULL, 'USDT', 'RF151183', 0, 0, 0.00, '2024-03-21 11:24:27', '2024-03-21 11:24:27'),
(109, '1', 'RF151183', 658, 10000.00, 0.00, '2024-03-21', 'Active', NULL, 1, NULL, NULL, 'e7cea3e63cafab2533199e8b38276659', NULL, 'USDT', 'RF151183', 0, 0, 0.00, '2024-03-21 11:25:56', '2024-03-21 11:25:56'),
(110, '1', 'RF151183', 658, 25000.00, 0.00, '2024-03-21', 'Active', NULL, 1, NULL, NULL, 'c3f70010922613fc3edace13285b1fcf', NULL, 'USDT', 'RF151183', 0, 0, 0.00, '2024-03-21 12:22:38', '2024-03-21 12:22:38'),
(111, '1', 'RF10001', 1, 3150.00, 0.00, '2024-05-02', 'Active', NULL, 1, NULL, NULL, 'fc1bb2402ff7ca7dcdda32f7d3ba7981', NULL, 'USDT', 'RF10001', 0, 1, 0.00, '2024-05-02 08:34:22', '2024-05-02 08:34:22'),
(112, '1', 'RF213000', 685, 3150.00, 0.00, '2024-05-21', 'Active', NULL, 1, NULL, NULL, '6df91f2a2603605819679b6ea12ba419', NULL, 'USDT', 'RF213000', 0, 1, 0.00, '2024-05-21 05:43:53', '2024-05-21 05:43:53'),
(113, '1', 'RF213000', 685, 3150.00, 0.00, '2024-05-21', 'Active', NULL, 1, NULL, NULL, 'e4ee49d9e461017870f772573d996002', NULL, 'USDT', 'RF213000', 0, 1, 0.00, '2024-05-21 05:55:27', '2024-05-21 05:55:27'),
(114, '1', 'RF213000', 685, 3150.00, 0.00, '2024-05-21', 'Active', NULL, 1, NULL, NULL, 'f7abf9b970afe2e6fdc3658df6841132', NULL, 'USDT', 'RF213000', 0, 1, 0.00, '2024-05-21 06:45:03', '2024-05-21 06:45:03'),
(115, '1', 'MP312549', 708, 3150.00, 0.00, '2024-05-21', 'Active', NULL, 1, NULL, NULL, 'b41aca49258faeaeebf77d8805d04de4', NULL, 'USDT', 'MP312549', 0, 1, 0.00, '2024-05-21 07:01:54', '2024-05-21 07:01:54');

-- --------------------------------------------------------

--
-- Table structure for table `jolo`
--

CREATE TABLE `jolo` (
  `id` int(11) NOT NULL,
  `operatortxnid` varchar(200) DEFAULT NULL,
  `joloorderid` varchar(200) DEFAULT NULL,
  `userorderid` varchar(200) DEFAULT NULL,
  `status` varchar(200) DEFAULT NULL,
  `error` varchar(200) DEFAULT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_07_23_061430_create_investments_table', 1),
(5, '2021_07_23_061517_create_incomes_table', 1),
(6, '2021_07_23_061548_create_banks_table', 1),
(7, '2021_07_23_061928_create_admins_table', 1),
(8, '2021_07_23_140049_create_withdraws_table', 1),
(12, '2021_08_07_140624_create_buy_funds_table', 4),
(15, '2021_08_07_133713_create_generate_pins_table', 5),
(16, '2021_08_07_134333_create_wallet_pins_table', 6),
(17, '2021_08_07_201100_create_used_pins_table', 7),
(19, '2021_09_14_110019_create_tasks_table', 8),
(20, '2021_09_21_161736_create_add_task_urls_table', 9),
(21, '2021_09_21_163851_create_add_task_limits_table', 10),
(22, '2021_09_21_165857_create_task_user_urls_table', 11),
(24, '2021_10_21_162904_create_rewards_table', 12),
(25, '2022_03_24_193447_create_pintransfers_table', 13),
(26, '2022_03_26_124439_create_payouts_table', 14);

-- --------------------------------------------------------

--
-- Table structure for table `mobile_recharge`
--

CREATE TABLE `mobile_recharge` (
  `id` int(100) NOT NULL,
  `user_id` varchar(100) DEFAULT NULL,
  `operatorcode` varchar(100) DEFAULT NULL,
  `amount` int(10) DEFAULT NULL,
  `number` varchar(200) DEFAULT NULL,
  `status` enum('Success','Pending','Failed') DEFAULT 'Pending',
  `transaction_id` varchar(100) DEFAULT NULL,
  `walletType` int(10) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mobile_recharge`
--

INSERT INTO `mobile_recharge` (`id`, `user_id`, `operatorcode`, `amount`, `number`, `status`, `transaction_id`, `walletType`, `created_at`, `updated_at`) VALUES
(1, '685', 'RC', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-14 12:33:33', '2024-05-14 12:33:33'),
(2, '685', 'RC', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-14 12:34:05', '2024-05-14 12:34:05'),
(3, '685', 'RC', 101, '9467480674', 'Success', 'RF213000', 1, '2024-05-14 12:35:50', '2024-05-14 12:35:50'),
(4, '685', 'RC', 102, '9467480674', 'Success', 'RF213000', 1, '2024-05-14 12:39:56', '2024-05-14 12:39:56'),
(5, '685', 'RC', 101, '9467480674', 'Success', 'RF213000', 1, '2024-05-14 12:45:28', '2024-05-14 12:45:28'),
(6, '685', 'RC', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 11:46:35', '2024-05-15 11:46:35'),
(7, '685', 'RC', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 11:47:11', '2024-05-15 11:47:11'),
(8, '685', 'ATV', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 12:21:50', '2024-05-15 12:21:50'),
(9, '685', 'ATV', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 12:58:00', '2024-05-15 12:58:00'),
(10, '685', 'ATV', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 12:58:57', '2024-05-15 12:58:57'),
(11, '685', 'ATV', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 13:23:49', '2024-05-15 13:23:49'),
(12, '685', 'AEML', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 16:27:55', '2024-05-15 16:27:55'),
(13, '685', 'AEML', 101, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 16:28:11', '2024-05-15 16:28:11'),
(14, '685', 'AEML', 102, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 16:43:31', '2024-05-15 16:43:31'),
(15, '685', 'LAT', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 16:57:26', '2024-05-15 16:57:26'),
(16, '685', 'LAT', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 16:57:41', '2024-05-15 16:57:41'),
(17, '685', 'LAT', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:00:30', '2024-05-15 17:00:30'),
(18, '685', 'LAT', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:01:28', '2024-05-15 17:01:28'),
(19, '685', 'LAT', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:09:28', '2024-05-15 17:09:28'),
(20, '685', 'LAT', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:11:26', '2024-05-15 17:11:26'),
(21, '685', 'LAT', 101, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:11:35', '2024-05-15 17:11:35'),
(22, '685', 'LAT', 101, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:12:22', '2024-05-15 17:12:22'),
(23, '685', 'LAT', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:12:30', '2024-05-15 17:12:30'),
(24, '685', 'LAT', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:12:33', '2024-05-15 17:12:33'),
(25, '685', 'LAT', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:12:35', '2024-05-15 17:12:35'),
(26, '685', 'LAT', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:12:39', '2024-05-15 17:12:39'),
(27, '685', 'LAT', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:12:42', '2024-05-15 17:12:42'),
(28, '685', 'LAT', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:12:46', '2024-05-15 17:12:46'),
(29, '685', 'LAT', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:12:50', '2024-05-15 17:12:50'),
(30, '685', 'LAT', 101, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:13:03', '2024-05-15 17:13:03'),
(31, '685', 'LAT', 10, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:13:26', '2024-05-15 17:13:26'),
(32, '685', 'LAT', 10, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:22:16', '2024-05-15 17:22:16'),
(33, '685', 'AG', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:23:23', '2024-05-15 17:23:23'),
(34, '685', 'AG', 20, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 17:27:43', '2024-05-15 17:27:43'),
(35, '685', 'AG', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 18:06:03', '2024-05-15 18:06:03'),
(36, '685', 'ATV', 89, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 18:23:43', '2024-05-15 18:23:43'),
(37, '685', 'ATV', 78, '9467480674', 'Success', 'RF213000', 1, '2024-05-15 18:24:34', '2024-05-15 18:24:34'),
(38, '685', 'ATV', 34, '9467480674', 'Success', 'RF213000', 1, '2024-05-16 11:17:06', '2024-05-16 11:17:06'),
(39, '685', 'ATV', 12, '9467480674', 'Success', 'RF213000', 1, '2024-05-16 11:29:13', '2024-05-16 11:29:13'),
(40, '685', 'ATV', 12, '9467480674', 'Success', 'RF213000', 1, '2024-05-16 11:30:47', '2024-05-16 11:30:47'),
(41, '685', 'ATV', 11, '9467480674', 'Success', 'RF213000', 1, '2024-05-16 11:49:51', '2024-05-16 11:49:51'),
(42, '685', 'ATV', 100, '9467480674', 'Success', 'RF213000', 1, '2024-05-16 11:53:10', '2024-05-16 11:53:10'),
(43, '685', 'ATV', 13, '9467480674', 'Success', 'RF213000', 1, '2024-05-16 11:59:05', '2024-05-16 11:59:05'),
(44, '685', 'ATV', 12, '9467480674', 'Success', 'RF213000', 1, '2024-05-16 12:00:52', '2024-05-16 12:00:52'),
(45, '685', 'RC', 100, '9991881540', 'Failed', '356253664627392db5b3.10190121', 1, '2024-05-16 21:03:13', '2024-05-16 21:03:13'),
(46, '685', 'RC', 100, '9991881540', 'Pending', '30425866462764acde26.56820589', 1, '2024-05-16 21:03:56', '2024-05-16 21:03:56'),
(47, '685', 'RC', 100, '9991881540', 'Pending', '588088664627682f4185.62007324', 1, '2024-05-16 21:04:00', '2024-05-16 21:04:00'),
(48, '685', 'RC', 100, '9991881540', 'Pending', '3197536646276b308176.21256451', 1, '2024-05-16 21:04:03', '2024-05-16 21:04:03'),
(49, '685', 'ATV', 10, '15263309088', 'Failed', '479123664637479a0a92.80298669', 1, '2024-05-16 22:11:43', '2024-05-16 22:11:43'),
(50, '685', 'ATV', 10, '15263309088', 'Failed', '2875286646374a84d560.84643525', 1, '2024-05-16 22:11:46', '2024-05-16 22:11:46'),
(51, '685', 'AG', 10, '9991881540', 'Failed', '23245266470427d3ddd9.84992216', 1, '2024-05-17 12:45:51', '2024-05-17 12:45:51'),
(52, '685', 'AG', 10, '9991881539', 'Failed', '574424664704599ffb62.29812359', 1, '2024-05-17 12:46:41', '2024-05-17 12:46:41'),
(53, '685', 'RC', 100, '9991881540', 'Failed', '63583566483e18702123.22430032', 1, '2024-05-18 11:05:20', '2024-05-18 11:05:20'),
(54, '685', 'A', 100, '9991881540', 'Failed', '29151566483e2917a8a6.13771936', 1, '2024-05-18 11:05:37', '2024-05-18 11:05:37'),
(55, '685', 'RC', 100, '9991881540', 'Failed', '233274664da8ae243ee1.83067768', 1, '2024-05-22 13:41:26', '2024-05-22 13:41:26'),
(56, '685', 'RC', 100, '9991881540', 'Failed', '745389664da8b2a19648.69670788', 1, '2024-05-22 13:41:30', '2024-05-22 13:41:30'),
(57, '685', 'RC', 100, '9991881540', 'Failed', '450498664dab509ff605.65633877', 1, '2024-05-22 13:52:40', '2024-05-22 13:52:40'),
(58, '685', 'DTV', 156, '09876543219', 'Failed', '892141664dab97c2a4f0.33706055', 1, '2024-05-22 13:53:51', '2024-05-22 13:53:51'),
(59, '685', 'JPP', 100, '9467480674', 'Failed', '594851664dabb3ea4fc8.57447457', 1, '2024-05-22 13:54:19', '2024-05-22 13:54:19');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`, `updated_at`) VALUES
('rameshkashyap8801@gmail.com', '450995', '2023-08-14 04:18:38', '2023-08-14 09:48:38'),
('anshuuttam143@gmail.com', '986866', '2024-03-26 01:33:34', '2024-03-26 07:03:34'),
('prajapati2123gmail.com', '424637', '2024-03-26 02:15:04', '2024-03-26 07:45:04'),
('sachinw3axis@gmail.com', '578583', '2024-03-26 02:15:35', '2024-03-26 07:45:35'),
('prajapati21237@gmail.com', '815304', '2024-03-26 05:46:47', '2024-03-26 11:16:47');

-- --------------------------------------------------------

--
-- Table structure for table `payouts`
--

CREATE TABLE `payouts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_id_fk` varchar(255) NOT NULL,
  `growth_bonus` double(8,2) NOT NULL,
  `level_bonus` double(8,2) NOT NULL,
  `reward_bonus` double(8,2) NOT NULL,
  `total` double(8,2) NOT NULL,
  `deduction` double(8,2) NOT NULL,
  `withdraw_amt` double(8,2) NOT NULL,
  `payable_amt` double(8,2) NOT NULL,
  `ttime` date NOT NULL,
  `payout_date` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pintransfers`
--

CREATE TABLE `pintransfers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `to` varchar(255) NOT NULL,
  `from` varchar(255) NOT NULL,
  `pin` varchar(255) NOT NULL,
  `tdate` date NOT NULL,
  `remarks` varchar(255) NOT NULL,
  `pin_type` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `referrals`
--

CREATE TABLE `referrals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_id_fk` varchar(255) DEFAULT NULL,
  `amount` double(16,2) NOT NULL,
  `tdate` date NOT NULL,
  `level` int(11) NOT NULL,
  `status` enum('Approved','Pending','Failed') NOT NULL DEFAULT 'Approved',
  `remarks` int(11) NOT NULL DEFAULT 0 COMMENT '1=>Off',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rewards`
--

CREATE TABLE `rewards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_id_fk` varchar(255) DEFAULT NULL,
  `total_business` double(16,2) NOT NULL,
  `amount` double(16,2) NOT NULL,
  `tdate` date NOT NULL,
  `level` int(11) NOT NULL,
  `status` enum('Approved','Pending','Failed') NOT NULL DEFAULT 'Pending',
  `remarks` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_id_fk` varchar(255) DEFAULT NULL,
  `url` text NOT NULL,
  `tdate` date NOT NULL,
  `approved_date` date DEFAULT NULL,
  `status` enum('Approved','Pending','Reject') NOT NULL DEFAULT 'Pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `task_user_urls`
--

CREATE TABLE `task_user_urls` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `url` text NOT NULL,
  `tdate` date NOT NULL,
  `status` enum('Approved','Pending') NOT NULL DEFAULT 'Pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_id_fk` varchar(200) NOT NULL,
  `category` varchar(200) NOT NULL,
  `msg` text NOT NULL,
  `status` varchar(50) NOT NULL,
  `gen_date` date NOT NULL,
  `closing_date` date DEFAULT NULL,
  `ticket_no` varchar(200) NOT NULL,
  `reply_by` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `used_pins`
--

CREATE TABLE `used_pins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pin` varchar(255) NOT NULL,
  `remarks` varchar(255) NOT NULL,
  `type` int(11) NOT NULL,
  `pdate` date NOT NULL,
  `owner` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `sponsor` bigint(20) NOT NULL,
  `ParentId` bigint(20) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `package` double(8,2) DEFAULT NULL,
  `amt` float(18,2) NOT NULL DEFAULT 0.00,
  `active_status` enum('Active','Pending','Inactive','Block') NOT NULL DEFAULT 'Pending',
  `jdate` date NOT NULL,
  `level` int(11) NOT NULL,
  `tpassword` varchar(255) DEFAULT NULL,
  `adate` timestamp NULL DEFAULT NULL,
  `rank` int(11) NOT NULL DEFAULT 0 COMMENT '0=>normal 1=> pool 1 & 2=> pool 2 & 3=> pool 3',
  `trx_addres` varchar(255) DEFAULT NULL,
  `PSR` varchar(200) DEFAULT NULL,
  `TPSR` varchar(200) DEFAULT NULL,
  `capping` int(11) NOT NULL DEFAULT 0 COMMENT '0=>No Capping& 1=> Capping',
  `power_leg` varchar(199) NOT NULL DEFAULT '0',
  `vicker_leg` varchar(199) NOT NULL DEFAULT '0',
  `balance` decimal(8,2) NOT NULL DEFAULT 0.00,
  `country` varchar(200) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `gender` enum('Male','Female','Other') DEFAULT 'Male',
  `nominee_relation` varchar(20) DEFAULT NULL,
  `adhar` int(20) DEFAULT NULL,
  `pan` int(20) DEFAULT NULL,
  `nominee_name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `sponsor`, `ParentId`, `phone`, `position`, `package`, `amt`, `active_status`, `jdate`, `level`, `tpassword`, `adate`, `rank`, `trx_addres`, `PSR`, `TPSR`, `capping`, `power_leg`, `vicker_leg`, `balance`, `country`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`, `gender`, `nominee_relation`, `adhar`, `pan`, `nominee_name`) VALUES
(1, 'REJOICE', 'rameshkashyap8801@gmail.com', 'RF10001', '$2y$10$wtkE0cY0JaGwSK.gtswNqeiBc9ytPAesPCZaUi.9pkuPB.FXtusMO', 0, 0, '8053461772', 'Left', 3150.00, 0.00, 'Active', '2022-12-02', 0, '$2y$10$.rFVrpsFQYq3IcCnCp0yPOtNt3UJ1BUzw32.C.4Wg077c28vN3WOq', '2023-12-07 14:19:02', 0, '0xCafdbC21F44eE1E4307EF0aC9D0f1E50f1090cF9', '12345', '121993', 0, '0', '0', 0.00, NULL, NULL, NULL, '2022-12-02 16:41:25', '2024-05-02 08:34:22', 'Male', NULL, NULL, NULL, NULL),
(2, 'Rejoice', 'REJOICEFX@gmail.com', 'RF304004', '$2y$10$j38uEAoqI2NWpXo2U0ga6ufU8dR673AKxqmjp2NNj84lK6sXa0UXm', 1, 1, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 1, '$2y$10$tLLZ49C3ziP/lNwRdmC13uSSTGpK2CqlcZnhGaWv4.BCCwyhU1gHm', NULL, 0, NULL, '12345', '40822', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 08:52:20', '2023-12-07 08:52:20', 'Male', NULL, NULL, NULL, NULL),
(3, 'Rejoice', 'REJOICEFX@gmail.com', 'RF185238', '$2y$10$uq0qqjEm3mPAXnJcIzMutupt8ro5SkBqqHLm6prlFG74D3CWhoFMy', 1, 2, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 1, '$2y$10$Febo3yhwUAuUNjfgiBOuoer8u7DF5FkwRWw.8PAjkJSRj0PrFWCzy', NULL, 0, NULL, '12345', '52537', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 08:52:32', '2023-12-07 08:52:32', 'Male', NULL, NULL, NULL, NULL),
(4, 'Rejoice', 'REJOICEFX@gmail.com', 'RF295523', '$2y$10$snjJEBJeHyjUORWpNjBkmOh7NSi0GJGfTwTr45riALdbMLi.dVMy.', 1, 3, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 1, '$2y$10$4yAnx/IBsmIu8lu/AN3sUOFHzOYqlhCgmghsnvP2sbK5nDUktMQJG', NULL, 0, NULL, '12345', '55194', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 08:52:35', '2023-12-07 08:52:35', 'Male', NULL, NULL, NULL, NULL),
(5, 'Rejoice', 'REJOICEFX@gmail.com', 'RF995779', '$2y$10$4Jzrtj3P3tot9WvMSqP1dOxiMElKob.xQ1GU2mLx7QnGYiXc28bHi', 1, 4, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 1, '$2y$10$NjwrjTYqeedvwtTTRHLdi.bFqLEZF/481SvXs2g7VwdhrYOA0pB9G', NULL, 0, NULL, '12345', '57437', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 08:52:37', '2023-12-07 08:52:37', 'Male', NULL, NULL, NULL, NULL),
(6, 'Rejoice', 'REJOICEFX@gmail.com', 'RF245975', '$2y$10$ZvpxeCjOi.VNLiOdYAlkmeTtjStYGBeA95iUeEytAwLBp72RuzEhq', 1, 5, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 1, '$2y$10$FwHLYqtNymVTUXQusYaYUundex0bOeu9udda7fgueZviLYP1ytwZO', NULL, 0, NULL, '12345', '59208', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 08:52:39', '2023-12-07 08:52:39', 'Male', NULL, NULL, NULL, NULL),
(7, 'Rejoice', 'REJOICEFX@gmail.com', 'RF746158', '$2y$10$ChQpkUylBIO0ZqQ3Lk.shOvskj6PPcF/ndTiPwLNDIan2qbWLy00C', 1, 6, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 1, '$2y$10$XhjOmfrWx3qNgF5BFUAh.OkrDk35PTyj6TNfmcLmx6WGIcy1fQxy6', NULL, 0, NULL, '12345', '61187', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 08:52:41', '2023-12-07 08:52:41', 'Male', NULL, NULL, NULL, NULL),
(83, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF144856', '$2y$10$i9pK1FTtRczA22C4IcJ2BOyB4P5eil1PRSLuCcCT7TwG9Ad/nZGnm', 53, 82, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 3, '$2y$10$jxWoRQerwTcqCJ5BJQJVQOaTZYfVQmLToP9NVNiRX37QcA5TQHxAi', NULL, 0, NULL, '123456', '48944', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 09:22:28', '2023-12-07 09:22:28', 'Male', NULL, NULL, NULL, NULL),
(84, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF935564', '$2y$10$fim1p8pLaHPa1euXDTA.KupvVX.TT6U2d4SOj.F51RzPR/AUVy9Ny', 53, 83, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 3, '$2y$10$lKwE2kUrahBYQVWyh.fpDuEbHRI.Y1dOtAz0WWYpTcUFipjzUhzpS', NULL, 0, NULL, '123456', '55508', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 09:22:35', '2023-12-07 09:22:35', 'Male', NULL, NULL, NULL, NULL),
(85, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF345955', '$2y$10$H8QMujz.53NiZakpVqkkUOQKJmcQfJNvpffMOP3CeAHX9mXKPtZDq', 53, 84, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 3, '$2y$10$QayhRLWJerm544kx8F83.Oi5VyK84pOK3WWcvPsnBBzxH/yChMbPO', NULL, 0, NULL, '123456', '59968', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 09:22:39', '2023-12-07 09:22:39', 'Male', NULL, NULL, NULL, NULL),
(86, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF056224', '$2y$10$WYTKWrpMKZBUA/tgAcxHH.QI8aukS3gvXOY/H/Beedbi4vPE54/Na', 53, 85, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 3, '$2y$10$3FWj5vngaGfP1WF2Z521ZOwZDnmNbi0o5P0qQtRdTUWlZT6tUbSGy', NULL, 0, NULL, '123456', '62361', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 09:22:43', '2023-12-07 09:22:43', 'Male', NULL, NULL, NULL, NULL),
(87, 'BALVEER', 'balveerlic208013@gmail.com', 'RF791964', '$2y$10$YEbvPt2.BqplM2QyPem2IeXnAw8lVcg2jCqGnBjKkvOv69H9UPDhS', 57, 86, '9026911052', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$7Y/jQ0Vp6CIwkKuD6v5e6upCKsCmOGc3X9PZ/M9eHJBUL/.B82Cce', NULL, 0, NULL, '123456', '19614', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:15:20', '2023-12-07 10:15:20', 'Male', NULL, NULL, NULL, NULL),
(88, 'SANDEEP KUMAR', 'balveerlic208013@gmail.com', 'RF074043', '$2y$10$KxNZ9znlr2MtqB7UPRo6XOoSxkROuNsLyxrnrxCgeanIGLTNgK22u', 57, 57, '9026911052', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$Wdm7df9F47YBEAMFnPoOP.C34LfKI..UVqQOrIPMqx.KccDvbLkWG', NULL, 0, NULL, '123456', '40019', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:15:40', '2024-01-06 08:08:17', 'Male', NULL, NULL, NULL, NULL),
(89, 'MAHENDRA KUMAR', 'mahetbc83@gmail.com', 'RF985076', '$2y$10$kCtVAU.QYK8f.md7cdXJMOaYb2e31vdf1FKHQkZblzN9klaPffe9y', 57, 88, '6392705493', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$SerJXxyNDWuGmF9.zYalv.OOviy7LuzV4LAeSsSQtXqJm1D15G5ha', NULL, 0, NULL, '123456', '50980', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:15:50', '2024-02-10 11:17:38', 'Male', NULL, NULL, NULL, NULL),
(90, 'BALVEER', 'balveerlic208013@gmail.com', 'RF426081', '$2y$10$va6jcu3cZdTXTJu/BXXHEuEyzTFqGfj4EBneYeu0/WzPFs1ozkPge', 57, 89, '9026911052', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$re4NGQ.BQn18zmocETxyieX6.A6bgmejwjVEXxnWMqpam5ZnlLsBS', NULL, 0, NULL, '123456', '60784', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:16:00', '2023-12-07 10:16:00', 'Male', NULL, NULL, NULL, NULL),
(91, 'BALVEER', 'balveerlic208013@gmail.com', 'RF757216', '$2y$10$DadNaxKyc7w/J1eMCTgvDe4V9YwmlRBNEAlG1NSRbKGJ7/G2j.J7G', 57, 90, '9026911052', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$Il.d0.lpACjJorLK0Sq0Yu6DnhbwDozrAx8TiW7k336m9sFmPG7Lq', NULL, 0, NULL, '123456', '72901', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:16:13', '2023-12-07 10:16:13', 'Male', NULL, NULL, NULL, NULL),
(92, 'BALVEER', 'balveerlic208013@gmail.com', 'RF388204', '$2y$10$22Wc9wcYrLLClVQduKNYs.jmI3WIyqVrIVELEv55ZSwkUVoX8kcR6', 57, 91, '9026911052', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$uGArryq1jFMMn2DlN/p4zOR.TQiNFThHrIPPM089WW74GB1szqco2', NULL, 0, NULL, '123456', '82833', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:16:22', '2023-12-07 10:16:22', 'Male', NULL, NULL, NULL, NULL),
(93, 'BALVEER', 'balveerlic208013@gmail.com', 'RF880072', '$2y$10$r4CUDZ/Tshgcu1C2emqgf.TByzk1AfTlUa1mRBT7dyGrSiVviqFkO', 57, 92, '9026911052', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$3vj9iDUVhfIOCYYjjBzLGe1axr1v9HrgJqAgWcYVmSKOUzW/u6U8e', NULL, 0, NULL, '123456', '00131', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:16:40', '2023-12-07 10:16:40', 'Male', NULL, NULL, NULL, NULL),
(94, 'BALVEER', 'balveerlic208013@gmail.com', 'RF390762', '$2y$10$XaYjEeeuywh6jHmRnjBmjO4Daql/7eRaQyjSZfId0J6m2OfjFRAEa', 57, 93, '9026911052', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$Q5gohHeoOP48eaEbVoDEeuGldf8YrJdQgSv5xsdb.IZKg2y86kW/.', NULL, 0, NULL, '123456', '07218', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:16:47', '2023-12-07 10:16:47', 'Male', NULL, NULL, NULL, NULL),
(95, 'BALVEER', 'balveerlic208013@gmail.com', 'RF451681', '$2y$10$8MHrMPbpwGipdrwEBWIJWOmTtqMxdjbcq3z0TBwekzniJMayEPc8e', 57, 94, '9026911052', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$MMfCXRbHKcWtvjEYd9t3YuqR178V2yaFc5w5o5SRBSPKmY.pdzYBS', NULL, 0, NULL, '123456', '16538', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:16:56', '2023-12-07 10:16:56', 'Male', NULL, NULL, NULL, NULL),
(96, 'BALVEER', 'balveerlic208013@gmail.com', 'RF482500', '$2y$10$BKb/y/J43RMXXUuSCpOeT.JvcjRLNz0mp.GCZqNY/4BqOiUv1B84q', 57, 95, '9026911052', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$iqOHTJ6w6TCVizQRXxQggeAXgftPEp.tzKmzMxjD6Xvqrx1eT4POK', NULL, 0, NULL, '123456', '25825', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:17:05', '2023-12-07 10:17:05', 'Male', NULL, NULL, NULL, NULL),
(97, 'BALVEER', 'balveerlic208013@gmail.com', 'RF983626', '$2y$10$ZyWjAVm8C2yGsL2L36aWjujtMIgPXyKL5XJDH2uNIrmgTu4HnSjGK', 57, 96, '9026911052', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$tPg7PK2dtRDe4Rr/HgYeQOajEODli31dRMHaG.S4LePdCHrZAVs8.', NULL, 0, NULL, '123456', '36243', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:17:16', '2023-12-07 10:17:16', 'Male', NULL, NULL, NULL, NULL),
(98, 'BALVEER', 'balveerlic208013@gmail.com', 'RF534409', '$2y$10$RsgJmaYA2SXD1RvcbKc1c.G0AuXxdzkqtZspUQCpiRF5I8KHFQ8jm', 57, 97, '9026911052', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$uIWt7jFVH/FyXi/ZgbW28euNAaqUks2jPF4kAAzPNO9AQIteXjG4G', NULL, 0, NULL, '123456', '44454', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:17:24', '2023-12-07 10:17:24', 'Male', NULL, NULL, NULL, NULL),
(99, 'BALVEER', 'balveerlic208013@gmail.com', 'RF364404', '$2y$10$lX.qwdtFkSSe32bhoOhxxONYZih6sovqqKfEfYknFahMMxOH5jyAq', 57, 98, '9026911052', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$1hgUhkA7ajD1p4zMRRh66OgF6p5YxVN0c4e9WtIp1sqRSbjQTzWmm', NULL, 0, NULL, '123456', '44793', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:20:44', '2023-12-07 10:20:44', 'Male', NULL, NULL, NULL, NULL),
(100, 'PREETI', 'Jkumar08081990@gmail.com', 'RF007687', '$2y$10$OBeYGbG1OTckAPrbk7j0kOMcBfY7HVBKn1wvJnbYZQabffBL9SX32', 56, 87, '8840508076', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$Cms7s4mFrC6.IfaYPJ73teBT6/ANVO0OIjv6hjzxGzG/hYAKACu96', NULL, 0, NULL, '123456', '76749', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:26:16', '2023-12-07 10:26:16', 'Male', NULL, NULL, NULL, NULL),
(101, 'UMESH CHANDRA', 'Jkumar08081990@gmail.com', 'RF180899', '$2y$10$gg52JvAkWWN8HsDsDBnJ0uhlFyGvjciCmJvHf8SoCuzdBmw9dxDCW', 56, 100, '1234567890', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$17SWMCvi7q0HvRd4EQOQhOt/o67/GvM0uRHWXMT2p1Nxqvo2GGNbG', NULL, 0, NULL, '123456', '08257', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:26:48', '2024-02-10 10:14:06', 'Male', NULL, NULL, NULL, NULL),
(102, 'PREETI', 'Jkumar08081990@gmail.com', 'RF751368', '$2y$10$n6utRFw4Zu6er9W4lGsjle.jSxSG3RljDmi6H5gftlqxSNop704nC', 56, 101, '8840508076', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$15GolkfU82aXNpVhcrqStuUYy5iPGy/VKEnf7KAvTpV5ccARF2yiq', NULL, 0, NULL, '123456', '13751', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:26:53', '2023-12-07 10:26:53', 'Male', NULL, NULL, NULL, NULL),
(103, 'PREETI', 'Jkumar08081990@gmail.com', 'RF191878', '$2y$10$dnedlr17o2BoCMgoYD995.TN6rJmkP5Imu7T9kiX2jGnYina6xleW', 56, 102, '8840508076', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$kQdoCFcTTJtkh2bgxrVE3eytMbXQA0L81gzTAiBKyD6MZzzC4JnKG', NULL, 0, NULL, '123456', '18014', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:26:58', '2023-12-07 10:26:58', 'Male', NULL, NULL, NULL, NULL),
(104, 'PREETI', 'Jkumar08081990@gmail.com', 'RF232341', '$2y$10$nesfvLWYyfAMCOmDCApYret81h66UsX4vAa6FfmhSGwoC8Jwbyhai', 56, 103, '8840508076', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$E877Ciz6fmU07lYVkxzn..qpdRUfm0VYkzQBaozaGAis1Q/kW8e7G', NULL, 0, NULL, '123456', '23643', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:27:03', '2023-12-07 10:27:03', 'Male', NULL, NULL, NULL, NULL),
(105, 'PREETI', 'Jkumar08081990@gmail.com', 'RF762768', '$2y$10$OZyzbIVpjvjEXB3CTK80QuvN3B6bvUV6rqxSU2IMepyBsTB7/2IUK', 56, 104, '8840508076', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$6zxE6QRZeriPpWwkHg6wAeRKJPujJq/seuRX09m5.t1lwFkaNo.Cy', NULL, 0, NULL, '123456', '27285', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:27:07', '2023-12-07 10:27:07', 'Male', NULL, NULL, NULL, NULL),
(106, 'PREETI', 'Jkumar08081990@gmail.com', 'RF023034', '$2y$10$xwC1n6LKLkCStLQUmY8KzerHJa3D5dX3v8jw./Np8q2315o.4Dyyq', 56, 105, '8840508076', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$XMSsGeWHWCAttQdQzyLT0OkHAjTdlt3IBpI8gomAmGfgTYTXNX/Eq', NULL, 0, NULL, '123456', '30673', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:27:11', '2023-12-07 10:27:11', 'Male', NULL, NULL, NULL, NULL),
(107, 'PREETI', 'Jkumar08081990@gmail.com', 'RF063798', '$2y$10$2K8QwLJiNc./w5Hd.e04R.gWZ3acN1Zug1U/x5Tsyf1SLwTRBpEca', 56, 106, '8840508076', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$HeIeaZSWmCbvgZpR2xjaXebqCOoJIu0HhYHLIoCsx7NQmKtXzLgbS', NULL, 0, NULL, '123456', '37867', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:27:17', '2023-12-07 10:27:17', 'Male', NULL, NULL, NULL, NULL),
(108, 'PREETI', 'Jkumar08081990@gmail.com', 'RF664376', '$2y$10$elFClucxohs6Te8y6qKIhu3widurNshevj0j3kFk7QR8iMWaHK1/e', 56, 107, '8840508076', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$iq5L98zuhABtHTg3ik0FyeWMxKqHecc7K46SK5EL9yZWWYuWFHqKC', NULL, 0, NULL, '123456', '43800', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:27:23', '2023-12-07 10:27:23', 'Male', NULL, NULL, NULL, NULL),
(109, 'PREETI', 'Jkumar08081990@gmail.com', 'RF494913', '$2y$10$kFw/UY98WDfM3O/rZhqtnuT8cpAmrokrX4KdcmLF4C5sZtl6BzIH.', 56, 108, '8840508076', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$ML2trSPrlA3qyWgm6Oo/r.LPMCYMhL3LDz.yD0tcpy8CIZR5uU1su', NULL, 0, NULL, '123456', '49531', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:27:29', '2023-12-07 10:27:29', 'Male', NULL, NULL, NULL, NULL),
(110, 'PREETI', 'Jkumar08081990@gmail.com', 'RF425448', '$2y$10$6tfVTZUj1buvZZN/cBnmeeBOk7vXT2ROb.Me4wgqbRjyBzX59xS/G', 56, 109, '8840508076', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$iW2nlAh0liOHQsp167VZcelX/uI6E.JqwMVoc790oAx.5PefMvbki', NULL, 0, NULL, '123456', '54840', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:27:34', '2023-12-07 10:27:34', 'Male', NULL, NULL, NULL, NULL),
(111, 'PREETI', 'Jkumar08081990@gmail.com', 'RF936017', '$2y$10$RRhEwuedQfv2vwunL746.uLHI.ddjB4RSTmSNYTqxY7aaW6WWdNbi', 56, 110, '8840508076', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$yOAq/l08eXZMhG45LxOh4eLdpmxoW8U/iLM8iF8tX5lN6qFPL2b5K', NULL, 0, NULL, '123456', '60795', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:27:40', '2023-12-07 10:27:40', 'Male', NULL, NULL, NULL, NULL),
(112, 'PREETI', 'Jkumar08081990@gmail.com', 'RF476486', '$2y$10$QQMBcxf6DsjjGMilcMeNHujNwEbOXZxSLgIXT.b52sIsMq/9EZPlq', 56, 111, '8840508076', 'Left', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$EZoZSliAMwHTN7acTKqq6eYlRm2AA8KWws41ebGBjrjcajYd0PVLG', NULL, 0, NULL, '123456', '64915', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:27:44', '2023-12-07 10:27:44', 'Male', NULL, NULL, NULL, NULL),
(113, 'MUKESH KUMAR', 'Jkumar08081990@gmail.com', 'RF367156', '$2y$10$QSB6KRe6uKb5dRLotGl/O.1ca0fv7JkBj.mJGw1vYCetc1OSFfjAu', 56, 112, '1234567890', 'Left', 100.00, 0.00, 'Active', '2023-12-07', 4, '$2y$10$L7eGw7xRAT4.OXVr6UxvZ.TROoTqQvZY1lelNFtWYrBpRjh3Jzu3S', '2024-02-29 14:46:59', 0, NULL, '123456', '71213', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:27:51', '2024-02-29 14:46:59', 'Male', NULL, NULL, NULL, NULL),
(114, 'PREETI', 'Jkumar08081990@gmail.com', 'RF609309', '$2y$10$JErdXhL.RNzXzh6ot.1kvuOCVRXVdukoJHFJcj6oUXahd28yv5IdK', 56, 56, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$a8z8kprKl5/v.PLbG2yaC.grvCfIZVXyKnEWJ9rvRXamiI.LHjbH2', NULL, 0, NULL, '123456', '93353', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:44:53', '2023-12-07 10:44:53', 'Male', NULL, NULL, NULL, NULL),
(115, 'ATHARV SHUKLA', 'Jkumar08081990@gmail.com', 'RF770657', '$2y$10$Xpt3sKsuP0Z8Y5ALZ14MAebU1TvUO./7qyqBxBMJsRNkXLiUBFU9.', 56, 114, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$Y6qM3AUPTYmLaRdy2bb0Oei/jQW6YUZ5sdRhL3Fqt6uJ1Ty1AcFQm', NULL, 0, NULL, '123456', '06545', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:45:06', '2024-02-28 07:41:23', 'Male', NULL, NULL, NULL, NULL),
(116, 'RAVI KUMAR VISHWAKARMA', 'speakravi12@gmail.com', 'RF941241', '$2y$10$jVwzZBop/h5YSUPpFs17ReY5.w16v2ywf/y4MicasdbHDdObBVOYm', 56, 115, '9838584312', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$3QXy1Cj/SDp0bFoKUt8wnuXtko6fFAoGSlqlOxedxAGxEB.FARG.e', NULL, 0, NULL, '123456', '12618', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:45:12', '2024-02-18 13:25:26', 'Male', NULL, NULL, NULL, NULL),
(117, 'UMESH CHANDRA', 'Jkumar08081990@gmail.com', 'RF271728', '$2y$10$OX9yTbJlDvz13OxSFAn5t.3qTWXIKVJE/UueaEb9u/REERWZhovGG', 56, 116, '1234567890', 'Right', 100.00, 0.00, 'Active', '2023-12-07', 4, '$2y$10$q41wWo6zwmOQV6ezQWBf.O8dMIXM/nWZ7Nyc46TclQbacHW6jUVom', '2024-02-27 16:12:57', 0, NULL, '123456', '17034', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:45:17', '2024-02-27 16:12:57', 'Male', NULL, NULL, NULL, NULL),
(118, 'PREETI', 'Jkumar08081990@gmail.com', 'RF582202', '$2y$10$6DhZbCku2vgZvybe/zcaI.UjWygwbVXBqkVj0qdZKR7S4L8JPD3sO', 56, 117, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$QaHxyQO2nSRtBCnxhNZ8Zu1Y0k56y7Yqi73KQbot4TjUFvNjetOzy', NULL, 0, NULL, '123456', '22633', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:45:22', '2023-12-07 10:45:22', 'Male', NULL, NULL, NULL, NULL),
(119, 'PREETI', 'Jkumar08081990@gmail.com', 'RF942731', '$2y$10$rqXvqtTSGGxHHAlDZ1MBhO8mm2o9OegFQYAnFF.bgYyKG9i9vOFpW', 56, 118, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$GBgpBDJ6GnQ5COGtMccRm.zNPkkU.TF6Z2bsXMOlmsb0.A3KeIqAe', NULL, 0, NULL, '123456', '27809', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:45:27', '2023-12-07 10:45:27', 'Male', NULL, NULL, NULL, NULL),
(120, 'ARCHITA TRIPATHI', 'REJOICEFX@gmail.com', 'RF243245', '$2y$10$Uw94PUCSbrtziqo.WGoaL.b1c.a.42IXWlxV4W1sEVcb.CMsKMBvC', 56, 119, '1234567890', 'Right', 100.00, 0.00, 'Active', '2023-12-07', 4, '$2y$10$o5s4U.3A3wG7F6IrJxJMYeYhNN1VoT4i5z9Zj3SrnBanX6Yr209Rm', '2023-12-14 20:43:46', 0, NULL, '123456', '32913', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:45:32', '2023-12-31 09:13:26', 'Male', NULL, NULL, NULL, NULL),
(121, 'PREETI', 'Jkumar08081990@gmail.com', 'RF773739', '$2y$10$LJ1yCJXLfmE.wfMB9dyRKeoBok8X8kIJjBvGt5QFAwbNsRGxzsKOW', 56, 120, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$m0b7bzraMN4Xf3bM2qjWDedMu5BL0mFBQ6AHaP6pQFIACCPZnpzSC', NULL, 0, NULL, '123456', '37698', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:45:37', '2023-12-07 10:45:37', 'Male', NULL, NULL, NULL, NULL),
(122, 'PREETI', 'Jkumar08081990@gmail.com', 'RF504191', '$2y$10$DVI0axGPpn5rzj2JCK/F7OpiDusNHxazP47j6LTUJlzTagd2LJede', 56, 121, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$aSdVCnETjH16yrHSefV0JePYLEodZv7iygeZBjDNgmMTCu75ISjmy', NULL, 0, NULL, '123456', '41429', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:45:41', '2023-12-07 10:45:41', 'Male', NULL, NULL, NULL, NULL),
(123, 'PREETI', 'Jkumar08081990@gmail.com', 'RF094631', '$2y$10$tru1IqFMswGyC/PSrh9waOQQI2LXOSnb/LKbXqzkPL7wIi/xnlADK', 56, 122, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$ftNTi1DWt9qNI783ucZgUeLe1BV1FcMR5qcENbCcU.FQZfa4szt/u', NULL, 0, NULL, '123456', '46330', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:45:47', '2023-12-07 10:45:47', 'Male', NULL, NULL, NULL, NULL),
(124, 'PREETI', 'Jkumar08081990@gmail.com', 'RF445166', '$2y$10$OU4L.tcA9hz27yJQYu7tOeDFWHGgT95W0vIe/o7bfkMtM4Ri5nz3W', 56, 123, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$Ypdh1k8DXzHQr76KWAFEauQ5BKMKOyoWxOOkcCYZ9azvpT3b.1QLq', NULL, 0, NULL, '123456', '51129', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:45:51', '2023-12-07 10:45:51', 'Male', NULL, NULL, NULL, NULL),
(125, 'PREETI', 'Jkumar08081990@gmail.com', 'RF315600', '$2y$10$S3wFA0NORiULdKBsE6kE5ekI2iiZLthWuj7tmKm2Ttw/3Q3p6ZbT2', 56, 124, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$YCUy849EdJjOZyM/6v84rOy0Slbfi2RdCUTy9.PWMeVRWy5HA0kFW', NULL, 0, NULL, '123456', '56303', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:45:56', '2023-12-07 10:45:56', 'Male', NULL, NULL, NULL, NULL),
(126, 'PREETI', 'Jkumar08081990@gmail.com', 'RF336102', '$2y$10$pigNXfyWLdY6XVevaLWpyefYINw7Jus9R0rLJ/NE.O0Wwh36AECPG', 56, 125, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$38EGFbTXGrPXeq81Mi0wjuQKT7QgiEfiwjtMvUM3ih.R7sKPdb3gO', NULL, 0, NULL, '123456', '61381', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:46:01', '2023-12-07 10:46:01', 'Male', NULL, NULL, NULL, NULL),
(127, 'PREETI', 'Jkumar08081990@gmail.com', 'RF706594', '$2y$10$8MIjvOxJ./eXG9CT5fuc/uLuj0G6HMc.Ggf42P4Rzivzptad1/K6y', 56, 126, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$3lQR1Mj3PX5J3cogAt8H9eF9YlZCCP2.z21OVpjusWrezDETRm336', NULL, 0, NULL, '123456', '65976', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:46:05', '2023-12-07 10:46:05', 'Male', NULL, NULL, NULL, NULL),
(128, 'PREETI', 'Jkumar08081990@gmail.com', 'RF296860', '$2y$10$.YEuDlTx7Idnz3Ke8/pom.gZCL4tOrnbSZOqen9PlB6RFUN5jL8kW', 56, 127, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$yd4N1eSErv1lF5PekxUBAuJ3DkS175ymXEHrOoyUhXbUZfEwJRc4C', NULL, 0, NULL, '123456', '68466', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:46:09', '2023-12-07 10:46:09', 'Male', NULL, NULL, NULL, NULL),
(129, 'PREETI', 'Jkumar08081990@gmail.com', 'RF997125', '$2y$10$mJftgcFjLr25u.U9RYkeEex38ZJd5iurDQnHPmkwYcObXJA9jqM9W', 56, 128, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$NaBv7lpHIvRs.tKE7/9JaeeLV5A7dNTf5hhytHzmhIuwIF.j9si2y', NULL, 0, NULL, '123456', '71774', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:46:12', '2023-12-07 10:46:12', 'Male', NULL, NULL, NULL, NULL),
(130, 'PREETI', 'Jkumar08081990@gmail.com', 'RF647541', '$2y$10$0vfeJjUNv.AFrFJbzB9D7.f5rRId7TEAc0kZmyhLIeidEhCBbiTke', 56, 129, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$aKPmfmyHChuOxe87Z6i1I.ZFI3kpVmGDqGRK7VW.w57xnlVoTtTHa', NULL, 0, NULL, '123456', '75710', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:46:15', '2023-12-07 10:46:15', 'Male', NULL, NULL, NULL, NULL),
(131, 'PREETI', 'Jkumar08081990@gmail.com', 'RF507894', '$2y$10$jEdunqyKQohVzmtdEXT8Iu40piFg9ryTVGmJ3SDjza5stFwa7Byqi', 56, 130, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$5lxWDH48WEE6M1/sthHY1umGHGZP89M/999BHqTUvIpUn6uJiGIGK', NULL, 0, NULL, '123456', '78327', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:46:18', '2023-12-07 10:46:18', 'Male', NULL, NULL, NULL, NULL),
(132, 'PREETI', 'Jkumar08081990@gmail.com', 'RF088158', '$2y$10$e/SdHA6dTwbKj3o2cC.eTu.fP4cXyHLqA1FKK1RPyP.O5qY765.dm', 56, 131, '8840508076', 'Right', NULL, 0.00, 'Pending', '2023-12-07', 4, '$2y$10$7ChSjTQtxF98zHk1bqMmpeV38TR93MideV/tvEs754biY5qg6QpTa', NULL, 0, NULL, '123456', '81244', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-07 10:46:21', '2023-12-07 10:46:21', 'Male', NULL, NULL, NULL, NULL),
(133, 'Mohammad idreesh', 'idreeshm10@gmail.com', 'RF539147', '$2y$10$NnV3PPOpGTIWHF7VMvtVwOF7fp8H2HxK0XUJGoxsTd17gvMd1jhwq', 56, 132, '06392320116', 'Right', NULL, 0.00, 'Pending', '2023-12-08', 4, '$2y$10$OxH6czUczE6Kmphg.dSEeOXDy/U47G/Ue2sdFTIjf7tRL.Ul/kjTe', NULL, 0, NULL, 'Abc@0786', '91177', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-08 05:09:51', '2023-12-08 05:09:51', 'Male', NULL, NULL, NULL, NULL),
(134, 'Mr Ajay', 'kpradeep1424@gmail.com', 'RF134378', '$2y$10$8YgZPveV7eFDh.r9NfhGKekDTv1jdsODpxnk4jgL1U5Eg9UdA1WJu', 58, 113, '7518324644', 'Left', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$oYWXIS1k/chTAhPVoIygUODq6GFOqwF8vS5TNLtFb/pUPkcLmHz96', NULL, 0, NULL, '708040', '43099', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:04:03', '2023-12-09 07:04:03', 'Male', NULL, NULL, NULL, NULL),
(135, 'RAJESH KUMAR UTTAM', 'kpradeep1424@gmail.com', 'RF245712', '$2y$10$IvPGb6qQBAa79WHqO6Tquuhf61r17GFW4glExV7gvOmx6BCUyCNnm', 58, 58, '1234567890', 'Right', 100.00, 0.00, 'Active', '2023-12-09', 4, '$2y$10$eClKnX8Ui1peqyM8eXvVwOI0amiif/OJniPT8GgH6CRWtzjHqP6EK', '2024-02-08 21:37:25', 0, NULL, '708040', '57412', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:04:17', '2024-02-08 21:37:25', 'Male', NULL, NULL, NULL, NULL),
(136, 'Mr Ajay', 'kpradeep1424@gmail.com', 'RF876854', '$2y$10$Cl3CBL8bMfqU88mNpqiDE.kSQI34Gjyfo/B35e.jstaY5Vx0zmvEy', 58, 135, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$Yd9NDpEanhjfH.V3ni84C.Gj6HkMZc/5J6NHDkvrkj/TTPKbMEo3u', NULL, 0, NULL, '708040', '68297', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:04:28', '2023-12-09 07:04:28', 'Male', NULL, NULL, NULL, NULL),
(137, 'Mr Ajay', 'kpradeep1424@gmail.com', 'RF388053', '$2y$10$ggy9I1m7HMrlBXp7w/qkmONkWATaYUDaD0bKAsEGZvegG1eTWeJX2', 58, 136, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$PpxXUxWDLGnTzhfJhYDLsOxf7NjYdsUSbkTGxEBYKrn6QUEuH4J2W', NULL, 0, NULL, '708040', '80654', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:04:41', '2023-12-09 07:04:41', 'Male', NULL, NULL, NULL, NULL),
(138, 'Mr Laxmi sankar', 'kpradeep1424@gmail.com', 'RF181604', '$2y$10$cFq8fOiWDu5tPS9VsnCCMeUUTIM6Rd8LW8Qck11mEizDmWQ.HShCC', 58, 137, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$e4b1pdks1oPr9YT3aKVYhuYsAzNglSHLeSmrR0tWwwI097kicwyMa', NULL, 0, NULL, '708040', '16048', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:05:16', '2023-12-09 07:05:16', 'Male', NULL, NULL, NULL, NULL),
(139, 'Mr Laxmi sankar', 'kpradeep1424@gmail.com', 'RF342321', '$2y$10$z32Xn2VRTA/iU1xzChOE3.GG61E.HkVvRl/LESuHI5HhefRtgx9Py', 58, 138, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$JqxWcx4ICH/1NVSdJK8D4eDr8cQ1tTgWJFdXqTzD349h0mF/fvZNK', NULL, 0, NULL, '708040', '23240', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:05:24', '2023-12-09 07:05:24', 'Male', NULL, NULL, NULL, NULL),
(140, 'Mr Laxmi sankar', 'kpradeep1424@gmail.com', 'RF553140', '$2y$10$eMvO8WnTaeNZnvRXlE36NOKQipHJkVmAnhMyWs1hdSZVN1TzwN6GG', 58, 139, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$NGtzM6xyqzpb5gdFiKwkgeSR4kq76c.My/s6rirtCLiUC1Qm2TPV2', NULL, 0, NULL, '708040', '31733', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:05:31', '2023-12-09 07:05:31', 'Male', NULL, NULL, NULL, NULL),
(141, 'Mr Laxmi sankar', 'kpradeep1424@gmail.com', 'RF803752', '$2y$10$LPjReln28Y/Jj0/vPyRFRuFxCX1jOBbUl5pQ5JahBU23BM.SFkNry', 58, 140, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$R6EvYjZuM.qrFSNxsQHmBO6NSLCMQKk5j6KCVV70U6g2THF9BckEW', NULL, 0, NULL, '708040', '37554', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:05:37', '2023-12-09 07:05:37', 'Male', NULL, NULL, NULL, NULL),
(142, 'Mr Laxmi sankar', 'kpradeep1424@gmail.com', 'RF624370', '$2y$10$ETxEFrHrnBQ0pQ6MR1I.c.jeYeLhsc8bDS8nezgq5SZbEcwgCT5XO', 58, 141, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$Klz4usBTtU4Y4uU3xHnZYuRVna2vJc4Cd9X3NPn.iE.5ZMRuypCBK', NULL, 0, NULL, '708040', '43172', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:05:43', '2023-12-09 07:05:43', 'Male', NULL, NULL, NULL, NULL),
(143, 'Mr Laxmi sankar', 'kpradeep1424@gmail.com', 'RF215055', '$2y$10$RtjFec4vmjvRO0MCWac/9OhZ2i9pPiSgFgOo3dc7j.WruhosIhzo2', 58, 142, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$N6sH4GqCiFKHTmG12T7/oezQ/5Rk1eJKr6n1.FRjt7MgxRxOAbHWi', NULL, 0, NULL, '708040', '50387', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:05:50', '2023-12-09 07:05:50', 'Male', NULL, NULL, NULL, NULL),
(144, 'Mr Ramratan', 'kpradeep1424@gmail.com', 'RF628197', '$2y$10$znzz2rF/ayaubQXQuKE7UusJrkJJf9GAWrJy6b7y0j/Nh.2gN4GCm', 58, 143, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$KCeNNEtUxUwHMd1RVcpvFOX5baBtHVmOPHhCiEwljWDt1ePcLSqSS', NULL, 0, NULL, '708040', '81869', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:06:21', '2023-12-09 07:06:21', 'Male', NULL, NULL, NULL, NULL),
(145, 'Mr Ramratan', 'kpradeep1424@gmail.com', 'RF868840', '$2y$10$LuZLLP1aJ.8aIIATas8WGOm5cM/rJdUeMzR8CboTwvYnpU9ALPAN6', 58, 144, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$nGbehLmzlkRoTUEFlQiwQe6023RzNgV/CDjAp5xHgl2rQhOYwY7CS', NULL, 0, NULL, '708040', '88268', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:06:29', '2023-12-09 07:06:29', 'Male', NULL, NULL, NULL, NULL),
(146, 'Mr Ramratan', 'kpradeep1424@gmail.com', 'RF449371', '$2y$10$t4No2Tx52pSwV3jSFnf6/.cGfTzQGTLdSIuT04G.2SVCT/8yKiF3K', 58, 145, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$34hUp4hLjbOXnbu/r1ZDGec.pVPjjt.3mh6bqhDEAE5fcW8sQNaK6', NULL, 0, NULL, '708040', '93858', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:06:34', '2023-12-09 07:06:34', 'Male', NULL, NULL, NULL, NULL),
(147, 'Mr Ramratan', 'kpradeep1424@gmail.com', 'RF840023', '$2y$10$G3eP7SlTn1VVHtI3ASG/weB4U3AcqN0raugcjkWXNW/31cK/6vehK', 58, 146, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$lm/DGYSTJeYPIqPlu1oFGuXSn349FAa4ZFE4Zzk32Gtqhu//ZeShe', NULL, 0, NULL, '708040', '00278', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:06:41', '2023-12-09 07:06:41', 'Male', NULL, NULL, NULL, NULL),
(148, 'Mr Ramratan', 'kpradeep1424@gmail.com', 'RF302017', '$2y$10$87fKq91ZN3YrG9yIDQIUkePrs8TLu/hftHE2QbTcFupD8QGo/.lme', 58, 147, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$SsjHymxZ21WBJGz5bd4Ki.gRT92qtR6QEPlNAJgTSnREKBWBEhdtW', NULL, 0, NULL, '708040', '20429', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:07:00', '2023-12-09 07:07:00', 'Male', NULL, NULL, NULL, NULL),
(149, 'Mr Ramratan', 'kpradeep1424@gmail.com', 'RF442518', '$2y$10$gknRbPkxWM/tejdWZSPEnueyqMxuKo5Wg46RMcjc0NvlZQZ8Ib.IG', 58, 148, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$hmrh8szt0P0FFv9VgLfXaOQQIynB5W/uN8PxC8VCjSQh.5jnDnimK', NULL, 0, NULL, '708040', '25675', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:07:05', '2023-12-09 07:07:05', 'Male', NULL, NULL, NULL, NULL),
(150, 'Mr sunil Verma', 'kpradeep1424@gmail.com', 'RF489796', '$2y$10$4M6xzM9bJkCjWCl8MCdmaeN7b1hkAr/KmJDVpOfo2Qo02yRQampWu', 58, 149, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$03bRw0Yq1y9njG1rjZTaE.Qp5cSqdLpGFFmVXtiCAdEwdmuyZhtQK', NULL, 0, NULL, '708040', '97400', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:08:17', '2023-12-09 07:08:17', 'Male', NULL, NULL, NULL, NULL),
(151, 'Mr sunil Verma', 'kpradeep1424@gmail.com', 'RF440435', '$2y$10$ytNKOK6oSsBDh2GRjXjAlOmvBx/upzcGNO6Ke0iFYq3VvkwTtn5RC', 58, 150, '7518324644', 'Right', NULL, 0.00, 'Pending', '2023-12-09', 4, '$2y$10$t0HZGg2ATIW7XWPNOk6WCeYjoo7jC11t9UYuIM9/EHPmISX2eZmRW', NULL, 0, NULL, '708040', '04112', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-09 07:08:24', '2023-12-09 07:08:24', 'Male', NULL, NULL, NULL, NULL),
(152, 'Surrender Kumar', 'srgcsurendrakumar@gmail.com', 'RF938615', '$2y$10$YCDQs2gBd0KthZ0gpAxYDO2STsRqbLdWrPyZsMuv/vzzkfSHEJbri', 56, 133, '7668431274', 'Right', NULL, 0.00, 'Pending', '2023-12-10', 4, '$2y$10$1hoEGkVS4VtNuhP5pbSdFOOO7CB.Du13llNuwEubxWqFg.gG3.D.O', NULL, 0, NULL, '123456', '86872', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-10 03:43:06', '2023-12-10 03:43:06', 'Male', NULL, NULL, NULL, NULL),
(153, 'Lalit Kumar gaur', 'lalit909@rediffmail.com', 'RF333811', '$2y$10$JSUmrT4RWGJzvmznshJAP.Igz9BaN/2o937C/fiDYQ4iTi//cReiu', 58, 151, '9335841767', 'Right', NULL, 0.00, 'Pending', '2023-12-11', 4, '$2y$10$A6BxtFwfA8H10ejFsNxRouon98gjimhfay4t3AWg5poU4TogDUHXe', NULL, 0, NULL, 'lalit1234', '38881', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-11 04:02:19', '2023-12-11 04:02:19', 'Male', NULL, NULL, NULL, NULL),
(154, 'Jay', 'sujeetpal915@gmail.com', 'RF106403', '$2y$10$2Ui3j3RE7TYpGtWxoNcc0.gwHA8gwKU28EsX51fHVljt5goUmeOPm', 64, 64, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$xrALdSUcSxmllWAAEnRseerklPxIFc730SC1yiOAzxP.kDCHClMn2', NULL, 0, NULL, '123123', '64886', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 08:19:24', '2023-12-13 08:19:24', 'Male', NULL, NULL, NULL, NULL),
(155, 'Jay', 'sujeetpal915@gmail.com', 'RF368344', '$2y$10$.rPEc9wsuc9QrnJxguqwDufD5XduyBKd9ZaVej4idG4IGlIzjHWJC', 64, 154, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$lBm372/UYPcq5eztLB4aLe.TsOJBM9gxZaiTGaEJ2sgioRtiIUNqi', NULL, 0, NULL, '123123', '83454', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 08:21:23', '2023-12-13 08:21:23', 'Male', NULL, NULL, NULL, NULL),
(156, 'Jay', 'sujeetpal915@gmail.com', 'RF248130', '$2y$10$NgOQv95K2oZdh2jSEuvIAeTpvg9XJ8jz.nPCODsy8Tbgydc0HCWuu', 64, 155, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$5FYbLNSL8Y8O/whsoRIPY.FPiXXLw8hSYYqCuy.JcyZV/MdC7oYbi', NULL, 0, NULL, '123123', '81647', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 13:59:41', '2023-12-13 13:59:41', 'Male', NULL, NULL, NULL, NULL),
(157, 'Jay', 'sujeetpal915@gmail.com', 'RF852959', '$2y$10$m5R9YZ4RfmrKcpdquN4NG.ueDkJM6JAvePofVv/d46s4dzoqglqSa', 64, 156, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$IwBMOj7rP5IhOtegvZzpgOXdnZs04h4/TBRrx46aH2JWRFbYv8axu', NULL, 0, NULL, '123123', '29080', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:00:29', '2023-12-13 14:00:29', 'Male', NULL, NULL, NULL, NULL),
(158, 'Jay', 'sujeetpal915@gmail.com', 'RF574816', '$2y$10$nSvUHAVV18qPezmCYP0qOO4wkIK9uKV2DNE8fFEi4ZWoCiPJzL5QO', 64, 157, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$yUAs2eRVzbF5HXaQKYl3VOKBlnwlG8wU79KfKDyVLkkjXjlR.kP62', NULL, 0, NULL, '123123', '48054', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:00:48', '2023-12-13 14:00:48', 'Male', NULL, NULL, NULL, NULL),
(159, 'Jay', 'sujeetpal915@gmail.com', 'RF905942', '$2y$10$noY7ooFluBXyjBBdVLcfNO/GEnsXoSwqYFfMpwHIDi1YW1nPUGDSO', 64, 158, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$oM4KP.FgzZER8/.IgPHUwe9TqQHOA6aw7FHn5shgpc3wlrgnL2cKm', NULL, 0, NULL, '123123', '59976', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:00:59', '2023-12-13 14:00:59', 'Male', NULL, NULL, NULL, NULL),
(160, 'Jay', 'sujeetpal915@gmail.com', 'RF687062', '$2y$10$tPyTDFUv4Ap3r0Q9Ggm0e.KRnQZuZfBiwy8tAPxqDW3JU31MxF6Vi', 64, 159, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$UGbEM3Gjiv965QkxBZvJ9ewqx/cu77gmF.1330v2Jj9wncpUa2dRK', NULL, 0, NULL, '123123', '70293', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:01:10', '2023-12-13 14:01:10', 'Male', NULL, NULL, NULL, NULL),
(161, 'Jay', 'sujeetpal915@gmail.com', 'RF728162', '$2y$10$H/JJ47IirUUkeArYVM6kt.D7jq6VVWk3eJc2s.EPsUfp5aVCnsPHS', 64, 160, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$FoouxOJMskjMb9ioZ60qYOu2ovqzmgJMWGre6lGo0Z0IfZ2XEvXbG', NULL, 0, NULL, '123123', '81727', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:01:21', '2023-12-13 14:01:21', 'Male', NULL, NULL, NULL, NULL),
(162, 'Jay', 'sujeetpal915@gmail.com', 'RF449592', '$2y$10$hBAD.gJ27zM9TdRvKvCTNewKkBrOb24v2tVcxjh69zWZBo8L0NDsO', 64, 161, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$z50EbGQG2MAz4oRAAYwuZeC6ENjjeyY4ikkBTScLGWilkLCLgSFbO', NULL, 0, NULL, '123123', '95120', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:01:35', '2023-12-13 14:01:35', 'Male', NULL, NULL, NULL, NULL),
(163, 'Jay', 'sujeetpal915@gmail.com', 'RF190268', '$2y$10$jDSRAjWhXjz3xItkG2ClJ.WpL6jQ3k0VFJB.nMh7h4XAt0AkkJSCq', 64, 162, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$hcEPS3SiMmIJASCyfIvA4uQgoW3VvlBgQfTJgp4hyVAV9UipBqXTO', NULL, 0, NULL, '123123', '02570', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:01:42', '2023-12-13 14:01:42', 'Male', NULL, NULL, NULL, NULL),
(164, 'Jay', 'sujeetpal915@gmail.com', 'RF220975', '$2y$10$7CFoQIhlbpfZcnGfuWVt8e4IgkTJ61pFk1.XqmCrQ3wFwhC28sp4m', 64, 163, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$idYPUmncftXfXGvN19nNKOlCZQeGKoCCR9P0OOmgnY5T3be039ZAC', NULL, 0, NULL, '123123', '09060', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:01:49', '2023-12-13 14:01:49', 'Male', NULL, NULL, NULL, NULL),
(165, 'Jay', 'sujeetpal915@gmail.com', 'RF971709', '$2y$10$VqfO2JGS/mPltiuU/1zpXeeECqFz31XgVTDy1jHRSPlN.N7elXtLO', 64, 164, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$XBoMDQzYv1pe.0GbhD/5vuLqt/FhjtE6.CyvpkBEOixn2FW.5Ekv2', NULL, 0, NULL, '123123', '17071', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:01:57', '2023-12-13 14:01:57', 'Male', NULL, NULL, NULL, NULL),
(166, 'Jay', 'sujeetpal915@gmail.com', 'RF532397', '$2y$10$gvCA4bzJ/GNx2g/a/S1QNepYw.hVEW78JRnqUQa0Y2MAu4Zdl8LyO', 64, 165, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$fQhOTqAPFNgcD94d0L9hGO6w7BQ2zjx0dQJSIy8CtCUNyt82fgKWS', NULL, 0, NULL, '123123', '23329', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:02:03', '2023-12-13 14:02:03', 'Male', NULL, NULL, NULL, NULL),
(167, 'Jay', 'sujeetpal915@gmail.com', 'RF672927', '$2y$10$eRmwqN3JzpEMXYEOeRV4D.8ptmvu5VdTE1nh1aFucjj3qaYu6ziVe', 64, 166, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$.STvQRs1E4gXWYovervUcObOUDu6/YAcDFXzK9Y/UOkYW/Avxrj7O', NULL, 0, NULL, '123123', '29670', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:02:09', '2023-12-13 14:02:09', 'Male', NULL, NULL, NULL, NULL),
(168, 'Jay', 'sujeetpal915@gmail.com', 'RF633512', '$2y$10$cERPm8DOMqhLuhCOibYv2eUqh7smoUJC9MnZ3e5MEqw3MIZmFTArK', 64, 167, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$E65tS2mbDGwJvK.PV0YbJuHD.ZDE3e49JMbTG3SHCQuFEF5wCBBQy', NULL, 0, NULL, '123123', '35938', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:02:15', '2023-12-13 14:02:15', 'Male', NULL, NULL, NULL, NULL),
(169, 'Jay', 'sujeetpal915@gmail.com', 'RF974055', '$2y$10$eVSQsvBX9Cb0ZptGHOx12.hc.zgsLCOcmtUwJDfgEVoHNQ2/9Jo8K', 64, 168, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$0f0TSvvaDB84qklHx9uNO.9U7PQnC0/1UKaK.vfDkPi6M2He1o9iu', NULL, 0, NULL, '123123', '40941', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:02:21', '2023-12-13 14:02:21', 'Male', NULL, NULL, NULL, NULL),
(170, 'Jay', 'sujeetpal915@gmail.com', 'RF004622', '$2y$10$gnKRUJ65mZRl.ccwlCMv6OnZgL3OuW.QmmvsWPZ.vxiSQ7maqoZKi', 64, 169, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$O4.O9C5OCxhAuqaSZpWvZO8Aw5awKbpQP0WR5CWKynjxxdvGoYBRq', NULL, 0, NULL, '123123', '46654', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:02:26', '2023-12-13 14:02:26', 'Male', NULL, NULL, NULL, NULL),
(171, 'Jay', 'sujeetpal915@gmail.com', 'RF805257', '$2y$10$niGK6bSbIFgk2jfC0taPUOJkOD7EyAIf3nbi7bkpE0h0SELVLPlFa', 64, 170, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$DTpcKN2SJWjOmvKyCGc.FeuUIWNEv3wDeQ0vel7Ba6gYYeAs1sX8a', NULL, 0, NULL, '123123', '52912', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:02:32', '2023-12-13 14:02:32', 'Male', NULL, NULL, NULL, NULL),
(172, 'Jay', 'sujeetpal915@gmail.com', 'RF885687', '$2y$10$wIk7RTJ5CgRDIPwAU0zQ.OWHiYorxGpLINOL4DgHoXRt6m50qbUBS', 64, 171, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$uEOftljhc0wRWahX8Wv49usFlqds/QnYSh7uaxX.YoM.r7eLLb5W6', NULL, 0, NULL, '123123', '56429', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:02:37', '2023-12-13 14:02:37', 'Male', NULL, NULL, NULL, NULL),
(173, 'Jay', 'sujeetpal915@gmail.com', 'RF606242', '$2y$10$VGJ997QsSNy2J3C50ZhTsuL25CM0P8sZBxqtyUT/cTkoxBMoUmES6', 64, 172, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$17rUwZOQagayhCbsa7mt/.uLa6GxgDsJaZdGHUHjibiuG0uyhrGB6', NULL, 0, NULL, '123123', '62533', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:02:42', '2023-12-13 14:02:42', 'Male', NULL, NULL, NULL, NULL),
(174, 'Jay', 'sujeetpal915@gmail.com', 'RF346794', '$2y$10$711nFPlDMyMJLdfgM0JiFu/eC9IisiJ2ZlTZaXL/08UgH/DjvcFUO', 64, 173, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$R8XcyDzAvVcc/E9KtrZ9e.hfpvITRJ7nkMFwzNAk.i6qojH7YBcYW', NULL, 0, NULL, '123123', '67817', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:02:48', '2023-12-13 14:02:48', 'Male', NULL, NULL, NULL, NULL),
(175, 'Jay', 'sujeetpal915@gmail.com', 'RF597440', '$2y$10$.F5bELTgMhC8wtK/RjtwvuOnzvy818A/hMvKWAqXL0wlCD2yQVBlq', 64, 174, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$2NqtX16.TB21KgOpgRUTh..0tc3Q.oRf0pjLWyGmVJUKuogX9Yi7W', NULL, 0, NULL, '123123', '74557', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:02:54', '2023-12-13 14:02:54', 'Male', NULL, NULL, NULL, NULL),
(176, 'Jay', 'sujeetpal915@gmail.com', 'RF867956', '$2y$10$RMMRh0BjEwjd0hgrVV5qX.irIbtoXIhXmWS.0AF0e0TGZPaO8DwYi', 64, 175, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$gEjUTT27hZ7kQxdPKc3ZOuLYRLU07ZcrOP0JqVtXyeWL520jQ3i7W', NULL, 0, NULL, '123123', '79500', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:02:59', '2023-12-13 14:02:59', 'Male', NULL, NULL, NULL, NULL),
(177, 'Jay', 'sujeetpal915@gmail.com', 'RF618538', '$2y$10$G9UPuFGzN4hdDB1S3zqTvuRzHoqos6X81QNL9plXkpK328Wef1PCy', 64, 176, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$RkZN7aIarNjwi8IeFZyLbeIANiI0rebAHXopOCZUHoXNu/mH2pwxK', NULL, 0, NULL, '123123', '85201', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:03:05', '2023-12-13 14:03:05', 'Male', NULL, NULL, NULL, NULL),
(178, 'Jay', 'sujeetpal915@gmail.com', 'RF529041', '$2y$10$zK3O0JCofoIgVJFupwHzpencFO3lQpfGGbELVta6LJe62XBnsJJhi', 64, 177, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$lb3LBvS6jpe3F2IVMYsJ9utXYRYjKfXk2TCiQ9CMVX.32P.Ih6o.y', NULL, 0, NULL, '123123', '90162', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:03:10', '2023-12-13 14:03:10', 'Male', NULL, NULL, NULL, NULL),
(179, 'Jay', 'sujeetpal915@gmail.com', 'RF459587', '$2y$10$vDj/gwo2NwyROySRai7Yp.UrPNmd.R4l.H..IG3TaIxmtLbM8sOme', 64, 178, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$w89kd7FKQfith.RaWemJCubKAcvQMeyy8Css3xdABrRvmvk5ICgSO', NULL, 0, NULL, '123123', '95434', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:03:15', '2023-12-13 14:03:15', 'Male', NULL, NULL, NULL, NULL),
(180, 'Jay', 'sujeetpal915@gmail.com', 'RF569941', '$2y$10$7wlk0K18hK4uwS5l45t0XO4fLSdiAT2KLBQcHiFB5MG/WIsC5Ax92', 64, 179, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$p3hFx38rCUO54ckhurPb6.M6GHRRgCetN8O9CXyj0MTgIr7AQDvo6', NULL, 0, NULL, '123123', '99334', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:03:19', '2023-12-13 14:03:19', 'Male', NULL, NULL, NULL, NULL),
(181, 'Jay', 'sujeetpal915@gmail.com', 'RF820497', '$2y$10$bg3qGMjDYTVids3qxhVlbOlO4G/Ua86RPv8BFv6NTViEchi8.kRT6', 64, 180, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$qV23n5hFWTIqWsSt9MWfHuhjrv5wEh/C9WTEO1.M/zN/eMmu7APzO', NULL, 0, NULL, '123123', '04609', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:03:24', '2023-12-13 14:03:24', 'Male', NULL, NULL, NULL, NULL),
(182, 'Jay', 'sujeetpal915@gmail.com', 'RF161145', '$2y$10$ov6mujt5E027ryd7oLlfOu0ujnsPwIXDV9gDB.cM/S.7qx9ZeZX/K', 64, 181, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$LnPUubxnTiiaJJA0uaf9uOp1EN5JptngQ/VYCAMF2x34kpVlPnUyO', NULL, 0, NULL, '123123', '11372', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:03:31', '2023-12-13 14:03:31', 'Male', NULL, NULL, NULL, NULL),
(183, 'Jay', 'sujeetpal915@gmail.com', 'RF401616', '$2y$10$RNpaj8jwyzzgzAM4dZgFcuNNwRAdKgxDh8.mcMouU00TVt.mVvfei', 64, 182, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$zw7S2aGxI11DReWAcXNFRODfRUGeA.LaQZ3RJ2wEj/R8rXZg3HmZK', NULL, 0, NULL, '123123', '16595', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:03:36', '2023-12-13 14:03:36', 'Male', NULL, NULL, NULL, NULL),
(184, 'Jay', 'sujeetpal915@gmail.com', 'RF092154', '$2y$10$G2cNLHHgf7jsRtYeWGJhoOIwv3V6F/mmqEop0GfWvtR0JKSxMhPOK', 64, 183, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$mM9IE99I4EGSYnm9/1dkoe9juRNo408bKtXuiWmxgQ37oOM798JFe', NULL, 0, NULL, '123123', '21527', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:03:41', '2023-12-13 14:03:41', 'Male', NULL, NULL, NULL, NULL),
(185, 'Jay', 'sujeetpal915@gmail.com', 'RF212852', '$2y$10$AHcf.fduNXNWySmAFlEPXutDtm9GiLuHhs/iYfm9i8uW8CJ7/SJkC', 64, 184, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$G/Bel5iRSK49WExgLDLdD.YpjY2isTqWGWX.l1X7kxj00Xw5LKH0i', NULL, 0, NULL, '123123', '28180', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:03:48', '2023-12-13 14:03:48', 'Male', NULL, NULL, NULL, NULL),
(186, 'Jay', 'sujeetpal915@gmail.com', 'RF883311', '$2y$10$3JWqXuFgKajSA4A1MJ1cd.FQrChk1ZkgdYVNDa4c4JqVZi.bdo34W', 64, 185, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$AvpC1kBS74qJ/oRnjqm/deTefdwsDbNdOqW/iLI/T60eswozLc6ci', NULL, 0, NULL, '123123', '33528', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:03:54', '2023-12-13 14:03:54', 'Male', NULL, NULL, NULL, NULL),
(187, 'Jay', 'sujeetpal915@gmail.com', 'RF303991', '$2y$10$3LOc8HJnGc..xLDieEJvf.4j6PzroyhPMaUcMFFRYBpIzf0GVrDtC', 64, 186, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$3lliZ27sPJWvzNSMOwP2xetnN6visV0WGFn1dkwJRC6h6nuqUIyg2', NULL, 0, NULL, '123123', '39751', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:03:59', '2023-12-13 14:03:59', 'Male', NULL, NULL, NULL, NULL),
(188, 'Jay', 'sujeetpal915@gmail.com', 'RF784403', '$2y$10$3vS7N3/D3oer0I4nHTTMIez2aeJNkSKc8NG9CeXkrMCnDSb4uslD2', 64, 187, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$OQ8wuqPvZz/mLdiOHNGUTOXMP5cb4KeP6riogmJydBqBQVoi6iKeK', NULL, 0, NULL, '123123', '44763', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:04:04', '2023-12-13 14:04:04', 'Male', NULL, NULL, NULL, NULL),
(189, 'Jay', 'sujeetpal915@gmail.com', 'RF014819', '$2y$10$SlBV3m1XjDHedG7ZrcuK1.P.9dIp7PUSDXAkL2cANiXgsqdkMshcW', 64, 188, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$ME24b6BxzaqosPlhkS2SXuF0SFmeeL82iYJ9uAo6zkfTniHGzoMv.', NULL, 0, NULL, '123123', '48825', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:04:08', '2023-12-13 14:04:08', 'Male', NULL, NULL, NULL, NULL),
(190, 'Jay', 'sujeetpal915@gmail.com', 'RF705337', '$2y$10$/shdV/lEfidA3H5XRBurdeolPp/hicweNy/pROiDX1JVqXCm..wqu', 64, 189, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$rLQTRcrrBbOboHo3V.e4..yx.sTFpODyaSFTsaI09XbdUHF3eQI6W', NULL, 0, NULL, '123123', '53546', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:04:13', '2023-12-13 14:04:13', 'Male', NULL, NULL, NULL, NULL),
(191, 'Jay', 'sujeetpal915@gmail.com', 'RF005849', '$2y$10$kJUhCJDkEBHoyGTpPenewuscJG6GYwglQri.WW5wX2xLu.bOy55zC', 64, 190, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$8RTCxXA1GkMsabB8fw2Hdu/1RLwa2zCOt3tPSO24FRjuaYWSYhNTO', NULL, 0, NULL, '123123', '58496', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:04:18', '2023-12-13 14:04:18', 'Male', NULL, NULL, NULL, NULL),
(192, 'Jay', 'sujeetpal915@gmail.com', 'RF766762', '$2y$10$F4yOPjtl9V5dFKBIV6f00.nJAlM5DSZOYIac1Sp9XLzZnVTZcfpzK', 64, 191, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$2ycQoEa5YPg0uY0ptcD95eXe3lrQLFXa5zxgovhMIQyFwBQqpnFNe', NULL, 0, NULL, '123123', '67140', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:04:27', '2023-12-13 14:04:27', 'Male', NULL, NULL, NULL, NULL),
(193, 'Jay', 'sujeetpal915@gmail.com', 'RF207586', '$2y$10$lGC1gjH8HwE2jFtxoVzh7OipqzmzT0JOZbiKQVcbMGcATGKJ6grIS', 64, 192, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$AYiUv48CRRFBn7eHkB5X7ejye8aA4qT8Gvb4HswFvLzY7wdMfmDHW', NULL, 0, NULL, '123123', '75892', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:04:35', '2023-12-13 14:04:35', 'Male', NULL, NULL, NULL, NULL),
(194, 'Jay', 'sujeetpal915@gmail.com', 'RF188048', '$2y$10$dNPeNyLAJ7UjXQg6TMPd9u0u/yHR3o95ajvbWWMVzgdk776sDp4jW', 64, 193, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$s7vz4fomk8t8wEFnNH3sruskahQZ3v.J1hysIfyNWWZ67cmNdvgKq', NULL, 0, NULL, '123123', '80523', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:04:40', '2023-12-13 14:04:40', 'Male', NULL, NULL, NULL, NULL),
(195, 'Jay', 'sujeetpal915@gmail.com', 'RF308872', '$2y$10$fQ2GXXIU5iGp1ks/5CusIeZxfkKULY/Qb.7jqDy/RBaAYb7R5iQfC', 64, 194, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$uJkyioFohWXaWm2IL1iUi.BebHkiS/S.ndRseS9FAGsAEvWDiQNaW', NULL, 0, NULL, '123123', '88161', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:04:48', '2023-12-13 14:04:48', 'Male', NULL, NULL, NULL, NULL),
(196, 'Jay', 'sujeetpal915@gmail.com', 'RF699427', '$2y$10$zOHuZPOtcTGaMLHK4fX/4uor7Bt.qDn8JLo8i7cAgHDsrUsuf0uy2', 64, 195, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$h7sYyks4/0aOmGxQ42XGO.IzUb3PPSB0U19Q9l/qSTDfdefI.VNCK', NULL, 0, NULL, '123123', '94334', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:04:54', '2023-12-13 14:04:54', 'Male', NULL, NULL, NULL, NULL);
INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `sponsor`, `ParentId`, `phone`, `position`, `package`, `amt`, `active_status`, `jdate`, `level`, `tpassword`, `adate`, `rank`, `trx_addres`, `PSR`, `TPSR`, `capping`, `power_leg`, `vicker_leg`, `balance`, `country`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`, `gender`, `nominee_relation`, `adhar`, `pan`, `nominee_name`) VALUES
(197, 'Jay', 'sujeetpal915@gmail.com', 'RF500395', '$2y$10$F1SqIUAlas6/ezZkss8Y4.eLkOFQqGrT9jiGML6gByoy8iTcpMUZq', 64, 196, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$E.nOt/bsKkbDVZO16ZmQRuxtB2Re8eTYCgnshcb4CCvL7fxsXSNpS', NULL, 0, NULL, '123123', '03140', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:05:03', '2023-12-13 14:05:03', 'Male', NULL, NULL, NULL, NULL),
(198, 'Jay', 'sujeetpal915@gmail.com', 'RF280865', '$2y$10$gh/19.eq7NQy/CKjs2OfIOxeGcy0LqGe2TKX52Yam/i7MIjxaZKjq', 64, 197, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$IgoeoDvoClEKKbRuuMtTPOA6XzlLx0rH3QkfWujOYW/ryIbX1fJEe', NULL, 0, NULL, '123123', '08667', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:05:08', '2023-12-13 14:05:08', 'Male', NULL, NULL, NULL, NULL),
(199, 'Jay', 'sujeetpal915@gmail.com', 'RF211281', '$2y$10$gN1hS60IdsI2nxI9Se.m0uU5WySMgc34VGqaUsaSycssCGraAo9si', 64, 198, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$EsWEyFgBrkPwxzaohQmlkuwNhgVQPA.eY2eG2IJhpe9aXqfoDE8W.', NULL, 0, NULL, '123123', '12666', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:05:12', '2023-12-13 14:05:12', 'Male', NULL, NULL, NULL, NULL),
(200, 'Jay', 'sujeetpal915@gmail.com', 'RF881785', '$2y$10$aumwR6TdG3FGVO4BIkyGC..AUFMKWIjJQ7wTSiztDipwATCfUXI7y', 64, 199, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$xapYI5QiCPk5jrcoaft1iuljieYKfyRPtDwQiFLCi4PHLj569uhbu', NULL, 0, NULL, '123123', '17799', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:05:17', '2023-12-13 14:05:17', 'Male', NULL, NULL, NULL, NULL),
(201, 'Jay', 'sujeetpal915@gmail.com', 'RF342152', '$2y$10$m1WYbdEyjwsjxLsJyXa/j.TMaGIG3RNuFoNFGtJVBQODx.dwd8ZDu', 64, 200, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$Hz3QgJhyLT8km1f1xEcnSO9aUvWTmRw2vCI8ocgk7x.IQG85ceKQG', NULL, 0, NULL, '123123', '21992', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:05:21', '2023-12-13 14:05:21', 'Male', NULL, NULL, NULL, NULL),
(202, 'Jay', 'sujeetpal915@gmail.com', 'RF562577', '$2y$10$Sio5sg78D0/3aqaDPvHehON4K8bSbmumOPq2E8hTsLvRGp1WVGvQW', 64, 201, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$VThklHayjheASoNfmbxFnORg/TaCA8sB8Wy9rgzUf.fb6Bb9hQCCG', NULL, 0, NULL, '123123', '25685', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:05:26', '2023-12-13 14:05:26', 'Male', NULL, NULL, NULL, NULL),
(203, 'Jay', 'sujeetpal915@gmail.com', 'RF713068', '$2y$10$MOXiyCrY/3jOM/sR/10/eewwfXg/GUZQRtub2g2pQap5qnpm9Bf1u', 64, 202, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$g1NcXE0XOclWwA2igJtMiOyJGqz3kyAia91O8UvAfh284gbjM/cOm', NULL, 0, NULL, '123123', '30633', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:05:30', '2023-12-13 14:05:30', 'Male', NULL, NULL, NULL, NULL),
(204, 'Jay', 'sujeetpal915@gmail.com', 'RF253402', '$2y$10$myIraJKk/opk7L0.du9Do.MKtG0iB.obyr6S/vuCSUGo84j7LIf3e', 64, 203, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$ACrN0OHmf6rBV5CMsvT5Renk96lKJw9h7YsJPzfx5PTZD.i8RCKem', NULL, 0, NULL, '123123', '34926', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:05:35', '2023-12-13 14:05:35', 'Male', NULL, NULL, NULL, NULL),
(205, 'Jay', 'sujeetpal915@gmail.com', 'RF763969', '$2y$10$fCZ20QLCV1nq8ezzfOxUUOboTBZVidGx/uoLci8xqC4Wiy34PCKAa', 64, 204, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$gH17iXgn48u7pglnxbv2dOUMETyJ3Es1bd5VnO2ie7Dsmo8Xi9aFK', NULL, 0, NULL, '123123', '39896', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:05:39', '2023-12-13 14:05:39', 'Male', NULL, NULL, NULL, NULL),
(206, 'Jay', 'sujeetpal915@gmail.com', 'RF444393', '$2y$10$OuWQGi.4ABY6Sw2nKGzN7O7B2ywJid0PUWxLRsYEtRDyMbPCHBQGW', 64, 205, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$AfUgM6ux8OysLZg/V2Usw.TfudPcLyJ1v.90aH7Or11ZV1mAE8y3u', NULL, 0, NULL, '123123', '43672', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:05:44', '2023-12-13 14:05:44', 'Male', NULL, NULL, NULL, NULL),
(207, 'Jay', 'sujeetpal915@gmail.com', 'RF064841', '$2y$10$jYkEGp8BcQRBz0IlyIToQ.O1IQhmORXIvQNDBvuT4ZT2cq9MHcCI6', 64, 206, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$k8o3QLm3PNCwWZK1Oza0V.kXg78uF3uYABKdMwB.sRit06XBrkcjy', NULL, 0, NULL, '123123', '48978', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:05:48', '2023-12-13 14:05:48', 'Male', NULL, NULL, NULL, NULL),
(208, 'Jay', 'sujeetpal915@gmail.com', 'RF615255', '$2y$10$uvVl4WEAv0ZR3WoXK8Mzg.ZP1cspQXlB0ofj63icBoreJMknqBjPq', 64, 207, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$G9gS.JpJfG5d7xQXDgYyye6jOnIVps4cvfZ8XBuZ0sRvD8bqUSd6a', NULL, 0, NULL, '123123', '52425', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:05:52', '2023-12-13 14:05:52', 'Male', NULL, NULL, NULL, NULL),
(209, 'Jay', 'sujeetpal915@gmail.com', 'RF815865', '$2y$10$5OTJgbUwFbyp/HtfM3M/m.NyfOQYtifwb3Tq2Mcmy0l7ZsoHInF02', 64, 208, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$vAZ2ueKVspMLvsFwLvQBb.RFDAtmbrKGriNHtm/mt8UUYQx0.YzXy', NULL, 0, NULL, '123123', '58104', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:05:58', '2023-12-13 14:05:58', 'Male', NULL, NULL, NULL, NULL),
(210, 'Jay', 'sujeetpal915@gmail.com', 'RF446304', '$2y$10$Hfdg3XyTYkWwZ/ymgnKCDeAGmS1TcOG5EE/0YUhQktZrtUJd9MnvC', 64, 209, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$uzJcQRAOhFsFUBTYBVDNiO5R.cjaEHlf5LPRDHTGBifItrnv24jDK', NULL, 0, NULL, '123123', '63838', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:06:03', '2023-12-13 14:06:03', 'Male', NULL, NULL, NULL, NULL),
(211, 'Jay', 'sujeetpal915@gmail.com', 'RF706788', '$2y$10$uFzlxGJbcT39UQrP.J8h8ebzUJWBk1aPbnLjBV4KuYusK0SxXWdiS', 64, 210, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$zYIdv5.alwEjtzkZV4w5yO/OweL0Sa0UOOsJs..JahQt7nmiCvucS', NULL, 0, NULL, '123123', '67752', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:06:07', '2023-12-13 14:06:07', 'Male', NULL, NULL, NULL, NULL),
(212, 'Jay', 'sujeetpal915@gmail.com', 'RF667128', '$2y$10$Hmi9d0SUG7LUiJRMIXdhP.D6KctwrrDcWjpUppwFM2U.H2WA5.DAS', 64, 211, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$DGL12hHcpSvqqlpQ3rkCruNt2ObeL1mgvxuJF33k7Ef8HFtubVZzW', NULL, 0, NULL, '123123', '71418', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:06:11', '2023-12-13 14:06:11', 'Male', NULL, NULL, NULL, NULL),
(213, 'Jay', 'sujeetpal915@gmail.com', 'RF717580', '$2y$10$SpmnYPj6ffnNw84YJ7Y.m.eWwx6vTOKQxJrqD.b5/.4xKjglSp1qG', 64, 212, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$VXSUJA.XaY.tWovHnHWeVO7HSwim2XEDKjvZiIWPy9g8fb6I4BOHK', NULL, 0, NULL, '123123', '75189', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:06:15', '2023-12-13 14:06:15', 'Male', NULL, NULL, NULL, NULL),
(214, 'Jay', 'sujeetpal915@gmail.com', 'RF027962', '$2y$10$CitGyhWisJV/Jm82NKAHGeLR7B08Yg6fgOGuaeGMpaeo7.XpgEuYW', 64, 213, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$33H1WZAYjBcm7Jjo2IhQcO2.PHUfTm4vbaVvQrn/4Qh.DZ21J4moy', NULL, 0, NULL, '123123', '79435', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:06:20', '2023-12-13 14:06:20', 'Male', NULL, NULL, NULL, NULL),
(215, 'Jay', 'sujeetpal915@gmail.com', 'RF748469', '$2y$10$JS12d1r9W6xBdLhU3kQNxu6xsEoC7hVgq1nrqPq5ghXzA639G4BOK', 64, 214, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$QMZSTYH6uHH8llnM7ajA0eOyKPvfa/tSeixEJhE9efxSDMgMS8b1m', NULL, 0, NULL, '123123', '84786', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:06:24', '2023-12-13 14:06:24', 'Male', NULL, NULL, NULL, NULL),
(216, 'Jay', 'sujeetpal915@gmail.com', 'RF766578', '$2y$10$iy3ykdcOnuB5noa5LAgcM./m0icf/v9ayODJGiusfrzky7qBcK5C2', 64, 134, '9140641537', 'Left', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$BxfkZmhB60O6somXiBgrD.iTASTAhXdiMvjqqrETNRFaYUp6JM3fK', NULL, 0, NULL, '123123', '65351', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:09:25', '2023-12-13 14:09:25', 'Male', NULL, NULL, NULL, NULL),
(217, 'Jay', 'sujeetpal915@gmail.com', 'RF858236', '$2y$10$3uMe8ssbh1oF8JPmACc/mO0ptpXoVjNRL1i/JJzA4bqxq/KWPEV/S', 64, 215, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$MJsnhsOrVc7m.ubBi4hpGu3unHfnUIKNAdplJBh7jVOD474/hbUDK', NULL, 0, NULL, '123123', '82954', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:09:42', '2023-12-13 14:09:42', 'Male', NULL, NULL, NULL, NULL),
(218, 'Jay', 'sujeetpal915@gmail.com', 'RF879086', '$2y$10$fYAItaFmiI8jIjnLVr6Aveeh/4tikul1v583qPMBhdjPu6ntStx7i', 64, 217, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$56g9JdZR3oBJNAE5VNZZzufakcbcQsBi9.oTnEa8kArEZqByhjAcq', NULL, 0, NULL, '123123', '90259', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:09:50', '2023-12-13 14:09:50', 'Male', NULL, NULL, NULL, NULL),
(219, 'Jay', 'sujeetpal915@gmail.com', 'RF720126', '$2y$10$gcJlr3umb09EMQk7lEr3J.D/pTAd9FmyOZlpXAKYoViNjmkypoz/q', 64, 218, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$JAzGalquTJcLP3OFnvM1yOnW1Gl8VQEgfo70DsCf1f4pEIzCdRz2W', NULL, 0, NULL, '123123', '01289', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:10:01', '2023-12-13 14:10:01', 'Male', NULL, NULL, NULL, NULL),
(220, 'Jay', 'sujeetpal915@gmail.com', 'RF291007', '$2y$10$x3eKJ1xVp8gAE.CCLE3VyOy3Uer7t0lQyvxljzI3Cm8kpwkAht3vy', 64, 219, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$ai1uUapqD.oKqPnUdH5kFuHRSa5TKs7y2juQeYGQepryqsedfu7.a', NULL, 0, NULL, '123123', '10495', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:10:10', '2023-12-13 14:10:10', 'Male', NULL, NULL, NULL, NULL),
(221, 'Jay', 'sujeetpal915@gmail.com', 'RF551776', '$2y$10$pnZzinYizFSz8n9tMOJ8ge.upq9DY2Ogxuy6WxuopTc003.Sm9hQ.', 64, 220, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$wPYk4tDhPgXQbFdTJrm25.RVL8Z2bLaAcNzEo82MUJw8GGBRYGIYq', NULL, 0, NULL, '123123', '17193', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:10:17', '2023-12-13 14:10:17', 'Male', NULL, NULL, NULL, NULL),
(222, 'Jay', 'sujeetpal915@gmail.com', 'RF852251', '$2y$10$1tGFu7RZYRoSEIQ9irfai.ypJIYwGABeJC5bVSXqdJcQzO5SfvL4i', 64, 221, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$0fLu1jp.VPmr6eG2rycrN.gY7NPGgVnGSDU9e9EvjwJij3WBjwALa', NULL, 0, NULL, '123123', '22959', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:10:22', '2023-12-13 14:10:22', 'Male', NULL, NULL, NULL, NULL),
(223, 'Jay', 'sujeetpal915@gmail.com', 'RF993080', '$2y$10$Vg0uy9k0wKc0lggN4KGVneK2kQgfwGdzFzHgKh2dQHEWlVP9DA4eK', 64, 222, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$UT.bq8P3jXht/zw2BB6D8utxUhPKHhMcPNxHKFML7RWzyJLebPxN.', NULL, 0, NULL, '123123', '30562', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:10:30', '2023-12-13 14:10:30', 'Male', NULL, NULL, NULL, NULL),
(224, 'Jay', 'sujeetpal915@gmail.com', 'RF603633', '$2y$10$UyQ/ICumPVocD66Wq1Bnku0l7xjsQRCfXevBsjfxh3QZQ.BZdHQLO', 64, 223, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$XDH6zKoql0pYFl0cnSVaauMMd1I4shTBRZULhpVRGvV9hRRpaAToi', NULL, 0, NULL, '123123', '36640', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:10:36', '2023-12-13 14:10:36', 'Male', NULL, NULL, NULL, NULL),
(225, 'Jay', 'sujeetpal915@gmail.com', 'RF724466', '$2y$10$oLG.axEVFpUKkW2.mGZwLOJQOcKsW8Dy6cgAKkiWhBFL5ZtYWDsPm', 64, 224, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$iiC7XkjciR.RhoqPYewhbO85kJu24xfNfyTkuDQIROWTNVIKr1RDW', NULL, 0, NULL, '123123', '44962', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:10:45', '2023-12-13 14:10:45', 'Male', NULL, NULL, NULL, NULL),
(226, 'Jay', 'sujeetpal915@gmail.com', 'RF014942', '$2y$10$XdV8GQUEKzL/YYymuExXCuN3SHbnWtEohegRPG1Ug/t0NsrPFOX2G', 64, 225, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$rZ5KI1DBuQwBS6VV8CL5tOntFMZaarEyWQ6Uh0Gi2GbNNRAXrOhKa', NULL, 0, NULL, '123123', '49823', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:10:49', '2023-12-13 14:10:49', 'Male', NULL, NULL, NULL, NULL),
(227, 'Jay', 'sujeetpal915@gmail.com', 'RF195615', '$2y$10$scNj/Pma.D/A.wXsQECBc.pV5Dlhx8GqeDRUu93rtEwJF53gXrk4i', 64, 226, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$oZnGxNfMi8ax.bRJMPAAhemrtscVBL0y.YX7kGpJdslbUd4l4WsIy', NULL, 0, NULL, '123123', '56103', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:10:57', '2023-12-13 14:10:57', 'Male', NULL, NULL, NULL, NULL),
(228, 'Jay', 'sujeetpal915@gmail.com', 'RF006307', '$2y$10$arGy0K0/xgOb4o7mLxH/fuoShHYyqNFKD.vOZQR6CeYjPIx3XUrkm', 64, 227, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$CXYIZvMzZUpILAg//bvnlOhpal5sUeHVRBlqizKDOC49HP2GKcudS', NULL, 0, NULL, '123123', '63606', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:11:03', '2023-12-13 14:11:03', 'Male', NULL, NULL, NULL, NULL),
(229, 'Jay', 'sujeetpal915@gmail.com', 'RF307036', '$2y$10$pKz8wGAT4E.kWrrGXbvt3O2ImzRmDq12NspRrTksoB7k9oXwT0KN6', 64, 228, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$ypM12sTSIBwZ7aDz/aYJlekPOriTOtYcvqr9vaDacvELkCxtQbgDe', NULL, 0, NULL, '123123', '70492', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:11:10', '2023-12-13 14:11:10', 'Male', NULL, NULL, NULL, NULL),
(230, 'Jay', 'sujeetpal915@gmail.com', 'RF597771', '$2y$10$iZr3nfDroteFSJhTOeMf5utKw4S3lqqHRuynQoxOAOpJZEbHsSaI.', 64, 229, '9140641537', 'Right', NULL, 0.00, 'Pending', '2023-12-13', 4, '$2y$10$eh.2Nx6REw/spBWwm1/pFOwz8bQU2RrRhu8f2xpJXhYUQdsey10.2', NULL, 0, NULL, '123123', '77627', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:11:17', '2023-12-13 14:11:17', 'Male', NULL, NULL, NULL, NULL),
(231, 'Aftab Alam', 'aalam575@gmail.com', 'RF770311', '$2y$10$QLD7I2OlxogvFeSbzlc8ceUheTQ5thLaUAzWTHZuwhXEldiDcPLJm', 64, 230, '9956218434', 'Right', 100.00, 0.00, 'Active', '2023-12-13', 4, '$2y$10$sp0gG9S.m9XdhxdDe9u8N.n77Mle1iFB9Arh5c3zVlRO7meqeWsLi', '2023-12-14 11:44:17', 0, NULL, '123123', '03712', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-13 14:13:23', '2023-12-26 03:56:42', 'Male', NULL, NULL, NULL, NULL),
(232, 'KING OF AZAMGAD', 'amarpal1733@gmal.com', 'RF304729', '$2y$10$chITt4Zb0zdwRaM0jz4KweWUUcNyKGfTl1XkBgUCvaDKFTQcBXBbO', 53, 54, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$3uQEiot6uy97YvJKQLW1m.WAOwjjrkBLm074BO4aOuvaXNWsAbLrO', NULL, 0, NULL, '123456', '47937', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:19:07', '2024-01-10 08:19:32', 'Male', NULL, NULL, NULL, NULL),
(233, 'KING OF KANPUR', 'kdshuklaknpav3@gmail.com', 'RF055975', '$2y$10$NpqFK5f60ZG3MF/3/ri3zeOVR8kcZU02vXNGmXk6rSStfSamVEHm2', 53, 232, '9651217565', 'Right', 1000.00, 0.00, 'Active', '2023-12-14', 3, '$2y$10$WhMhM1HXirq7462tOOF1P.253DeK4Ps5QE9.U3joPwkslzPzniCJm', '2024-02-24 11:37:54', 0, NULL, 'shukla', '59002', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:19:19', '2024-03-03 14:29:02', 'Male', NULL, NULL, NULL, NULL),
(234, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF626945', '$2y$10$8iJy8euR6df7a.MM1N.1kuKA.Unxkfugn.UO4yflNlN3kZk1JRbCa', 53, 233, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$SrXRUQF4RG69fzjtJZ.ztOpl.FKzrqRJaJ20kU4.Jh6LaIAN8Uf9a', NULL, 0, NULL, '123456', '69105', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:19:29', '2023-12-14 07:19:29', 'Male', NULL, NULL, NULL, NULL),
(235, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF567944', '$2y$10$BwaDmaIwR9.YALWtKy2JQe0/stF9dJF4Ubdp/HTlG6OUWhwKPq0DC', 53, 234, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$1pzUZpTYdljJk0ircgLkPuf.xvGnVc0r.qIO9s5BX7wgRoSzGU5mO', NULL, 0, NULL, '123456', '79889', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:19:39', '2023-12-14 07:19:39', 'Male', NULL, NULL, NULL, NULL),
(236, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF248595', '$2y$10$87IIFMIbewsJAKuspfvVBuu3Sv2tzYGa5eavIvZLOlqgi4YxGQ1TG', 53, 235, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$F6xvFfVfdZUfmKLQ29SEFOsYFaCIcZqn6eUJC0hpZ8Viorx8G/dwu', NULL, 0, NULL, '123456', '85763', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:19:46', '2023-12-14 07:19:46', 'Male', NULL, NULL, NULL, NULL),
(237, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF969359', '$2y$10$3ZSxLTjGUZk5FExtySGJx.woPxX0NtZhsF3ghlpf33d.jaIO4KH1i', 53, 236, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$frjyK2b1qqGQh1ZoDm2D9eQ2nL15svfLTpCupot0/vNa5RVPtzoKG', NULL, 0, NULL, '123456', '93458', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:19:53', '2023-12-14 07:19:53', 'Male', NULL, NULL, NULL, NULL),
(238, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF829705', '$2y$10$cIwM3u9159G/g0HUnOHs1uFqwtAcHaHcqa4ccyMH.CzXUihCYsZJe', 53, 237, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$12JonkYay27kuCpKKaA8zelxMU3FY6Q8R4n/4Feya7Zz.Wz9gj.c6', NULL, 0, NULL, '123456', '97690', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:19:57', '2023-12-14 07:19:57', 'Male', NULL, NULL, NULL, NULL),
(239, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF630352', '$2y$10$b6mUVNMy8Ycmy.XP.ikv2epjUnu4CLgkUsYP0rF./mpftRW7.Q4jS', 53, 238, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$K2i0PoYLgddmt2W5PgAUi.XB7UFRRikKNegz2KyySgpauMpeVR38.', NULL, 0, NULL, '123456', '03600', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:20:03', '2023-12-14 07:20:03', 'Male', NULL, NULL, NULL, NULL),
(240, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF060944', '$2y$10$zQ2a.SjuJV12L52ulTt0q.W3o42Qi.j28qVQHE8fUw4N9rPg0Z7wS', 53, 239, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$csOGMZ6k.CA4BvF/44sAmuHnF9SwoUr8s184YXkUz136m2GORAEMy', NULL, 0, NULL, '123456', '09682', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:20:09', '2023-12-14 07:20:09', 'Male', NULL, NULL, NULL, NULL),
(241, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF991778', '$2y$10$.PmmesWg8XKPn.8gRD/t4.87bKh7HQihaNjmF0aYZ.AqiWBg8tzPm', 53, 240, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$DfLnSyeTdRK/gPwDqQIJruC.UM8PU4JFAuAA.8Zreu/IFm2oSuQ4a', NULL, 0, NULL, '123456', '17840', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:20:17', '2023-12-14 07:20:17', 'Male', NULL, NULL, NULL, NULL),
(242, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF762417', '$2y$10$ESHp5Ew5ciHMzDL9ku6dduvwYA93Z6scev70mHS4uUZ15PvDJpAVK', 53, 241, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$5ZcBrLM4wEUGG0voG1tyrexdM3Jk.i4E/kMgbQH1TmNYruLhbWdHS', NULL, 0, NULL, '123456', '24389', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:20:24', '2023-12-14 07:20:24', 'Male', NULL, NULL, NULL, NULL),
(243, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF603404', '$2y$10$VwijYCqEA66SukxvRC3uk.Yaym34CoRxwvPUwj9UXTELLoegg4ucO', 53, 242, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$MXCvUGWICcDP/Xc3caGUD.GLIq3RPTz5RCGUn7ENoQ.fZOPn9FOxa', NULL, 0, NULL, '123456', '34824', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:20:34', '2023-12-14 07:20:34', 'Male', NULL, NULL, NULL, NULL),
(244, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF804210', '$2y$10$HAm.6nnVberjFiwDv5QqSOpq4O49RbO8jL3kpsnFCvFBTfW42DoVG', 53, 243, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$PCVUCvIciHpuDmi/aroFleGWO3mr49TOuFptmAGd1V6Z48k/ffuYC', NULL, 0, NULL, '123456', '42862', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:20:42', '2023-12-14 07:20:42', 'Male', NULL, NULL, NULL, NULL),
(245, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF604767', '$2y$10$uZcwy4DPZxCp6jv2JRtU7uzu9pmAUNukI4qRsb52zuCnDAVOhnUZG', 53, 244, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$yQnVlKpMoY90JHBKzmh85eRKgMTJcG7AW/iLfi5qSxhg/pVuoYQSm', NULL, 0, NULL, '123456', '47131', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:20:47', '2023-12-14 07:20:47', 'Male', NULL, NULL, NULL, NULL),
(246, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF135443', '$2y$10$k1VwaNySUiA1z0RoxoasQ.cnncRL96mYfcmBZtaqaPwX/y/Yt/4WK', 53, 245, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$SEcZCZ76vD1pKWO9AlRO5epnPagbPbCl88FIrLcZ3SgVxWgW4vNxe', NULL, 0, NULL, '123456', '54884', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:20:54', '2023-12-14 07:20:54', 'Male', NULL, NULL, NULL, NULL),
(247, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF685969', '$2y$10$cCxPVh5EU9o0jFdHNgizvesQTcuEPgPYwWs0E8zCcmYyLWGQXHlcu', 53, 246, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$l1JfNjJ6HcuU96qHRK4jrer.JT42URA3cz.i5XtFYX0Ep/zypb9nW', NULL, 0, NULL, '123456', '59148', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:21:00', '2023-12-14 07:21:00', 'Male', NULL, NULL, NULL, NULL),
(248, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF086683', '$2y$10$ShrwSk2jjaI6k20k1trIo.GtAB3YAiXmflgVDq9lIeL2gPt0PEZOa', 53, 247, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$8G.LDETQLvfFtpR1c0AjxumcneMo57XegOSBgKY4EyduAVhTY3CWK', NULL, 0, NULL, '123456', '66713', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:21:06', '2023-12-14 07:21:06', 'Male', NULL, NULL, NULL, NULL),
(249, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF097807', '$2y$10$GS8HEzxvqm8FviSSCVQJGuY56WI2vGIOW6uzH7EekEDzT7XgEuLi2', 53, 248, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$OyjWChnYaU4J99sfxiLXke7/tIZQ9vyrAQsHSenjIYJ9vT.lk38GK', NULL, 0, NULL, '123456', '78450', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:21:18', '2023-12-14 07:21:18', 'Male', NULL, NULL, NULL, NULL),
(250, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF369438', '$2y$10$GXR.AYLZ9uTs/PmvJ3JDducATNtEp/HwQQRxJJxAm6mAPPxAYRq/u', 53, 249, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$.jMztVcjaMbfxoDen0R8f.SOolgiF1YERiBqQOro0VogOsXAtFZDe', NULL, 0, NULL, '123456', '94917', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:21:34', '2023-12-14 07:21:34', 'Male', NULL, NULL, NULL, NULL),
(251, 'AMAR PAL', 'amarpal1733@gmal.com', 'RF020062', '$2y$10$YibRR.D/jiLT2M7wvm.i/eyjmg7/bVtcFYFUcdg3AQcGu2Xfbe5B6', 53, 250, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 3, '$2y$10$Upm.X/tnlH16ABbXB3TYTe6GDdwWpkX7sw3WusNPcKnVR2eAj2EWa', NULL, 0, NULL, '123456', '00834', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:21:40', '2023-12-14 07:21:40', 'Male', NULL, NULL, NULL, NULL),
(252, 'MOHD ANAS', 'amarpal1733@gmal.com', 'RF239466', '$2y$10$D1.zZUcoT/iRBmFXAL31V.a8NHmeSRIZV5yXyVIlWoreKEKwLhAku', 70, 216, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-14', 4, '$2y$10$K4J80TtvChZCPS1ospVG/uzwxYY/Zs/6Bz0333ffYaZYCcptf7zeq', NULL, 0, NULL, '123456', '94210', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:28:14', '2023-12-14 07:28:14', 'Male', NULL, NULL, NULL, NULL),
(253, 'MOHD ANAS', 'amarpal1733@gmal.com', 'RF002774', '$2y$10$fHBFc3p3lBz6I1g.1R8psuQXjNEvluc2Se5ha04bLROgIoU5fDEha', 70, 70, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 4, '$2y$10$WexSrOxnfTv9rtJ.hWM6k.EtkvEXue6iTFRiaqQGkz1ih.t7/Kbry', NULL, 0, NULL, '123456', '27990', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:28:47', '2023-12-14 07:28:47', 'Male', NULL, NULL, NULL, NULL),
(254, 'MOHD AMIN', 'amimsjfx@gmal.com', 'RF267518', '$2y$10$i16ruJEqPVhhuxMmvMl20uYycavBnUQcJFmg0UCxJpUrA0efxFsDe', 70, 253, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-14', 4, '$2y$10$Ij8dmjAfjZGSwz4jKfbof.wJ3tZSJ4y1Njq9/usBcVI97rMSH5VaG', NULL, 0, NULL, '123456', '75321', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-14 07:29:35', '2023-12-24 07:50:26', 'Male', NULL, NULL, NULL, NULL),
(255, 'Ramkhilawan', 'Saritdevi00@gmail.com', 'RF585829', '$2y$10$dhxSLW85qI3oI.nuotJJFO7cZZ4mbeZxnlebfkstfZaIIuYeOVdXi', 64, 231, '9628054928', 'Right', 100.00, 0.00, 'Active', '2023-12-19', 4, '$2y$10$/t8LJcggPysyMHVoJQxGVuF7oGtSQCKeMlxJxnNj5kyjgwGAaCjJy', '2023-12-19 15:21:26', 0, NULL, '123123', '58911', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 09:45:59', '2023-12-19 15:21:26', 'Male', NULL, NULL, NULL, NULL),
(256, 'Ramkhilawan', 'Saritdevi00@gmail.com', 'RF146091', '$2y$10$4RBeGKRz6AttbmUt21nMbu29Nra85KVTeWsa232J5r.9AJ4jIGVKi', 255, 255, '9628054928', 'Right', NULL, 0.00, 'Pending', '2023-12-19', 5, '$2y$10$Fi/V/R6.uRPzs08GNhgOHuRjFXERO8nvLrU8azlcYv09iqm61lAxO', NULL, 0, NULL, '123123', '60165', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 09:54:20', '2023-12-19 09:54:20', 'Male', NULL, NULL, NULL, NULL),
(257, 'Ramkhilawan', 'Saritdevi00@gmail.com', 'RF147675', '$2y$10$Pm0ODeKI5Dn8jhkvZopnBOm/Snfw64XxBDEPBwWyR7pKcXl.Ws6dW', 255, 255, '9628054928', 'Left', NULL, 0.00, 'Pending', '2023-12-19', 5, '$2y$10$pUIlXrq7FTzWDD64/yuyXexVT01ki46JjxUaP9d84A8KQTgPxP.ry', NULL, 0, NULL, '123123', '76824', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 09:54:36', '2023-12-19 09:54:36', 'Male', NULL, NULL, NULL, NULL),
(258, 'Ramkhilawan', 'Saritdevi00@gmail.com', 'RF760471', '$2y$10$qJvVsh9BUZOXO3T1fY2bK.puAZhmykvVaaooJQTSP3LO5QCVIZF3e', 255, 256, '9628054928', 'Right', NULL, 0.00, 'Pending', '2023-12-19', 5, '$2y$10$AZuvTjeg0YRyJIz07Tl.Ueuk2J9J7IjqL4PHh1Sn/jc2mTjZJSws.', NULL, 0, NULL, '123123', '04901', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 09:55:04', '2023-12-19 09:55:04', 'Male', NULL, NULL, NULL, NULL),
(259, 'Ramkhilawan', 'Saritdevi00@gmail.com', 'RF251319', '$2y$10$.iZwv2o8rGAOxDZltBB5q.HJRau0gSZlScpWY6fUnF/A.E44fuXym', 255, 258, '9628054928', 'Right', NULL, 0.00, 'Pending', '2023-12-19', 5, '$2y$10$R3SecMAMClv7YLcLsTAenOjyRrr8EaI2p4v.q4AlbaYV9eeo8q2zq', NULL, 0, NULL, '123123', '13986', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 09:55:13', '2023-12-19 09:55:13', 'Male', NULL, NULL, NULL, NULL),
(260, 'Ramkhilawan', 'Saritdevi00@gmail.com', 'RF552839', '$2y$10$.vZfWTd7yVcLencHjcR5NuvRKQBs.e9X933GGiMSCgG8hWc1CaEN2', 255, 259, '9628054928', 'Right', NULL, 0.00, 'Pending', '2023-12-19', 5, '$2y$10$.Rz.o0894fVqdN0oj7KBCuG1bjCgNpTsJVhGWn2NxbjKxwWccdYam', NULL, 0, NULL, '123123', '28191', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 09:55:28', '2023-12-19 09:55:28', 'Male', NULL, NULL, NULL, NULL),
(261, 'Ramkhilawan', 'Saritdevi00@gmail.com', 'RF004022', '$2y$10$zdM6iuLhRyVN..2EjsIZHOWpUSiWS3P3skjMTtEt1NxSjJt2Wz5VG', 255, 260, '9628054928', 'Right', NULL, 0.00, 'Pending', '2023-12-19', 5, '$2y$10$2r1V6fvvrzKpERma3s1bVuZYxtTR.M8r1J7jFZXtkQf9V0xBBKc2.', NULL, 0, NULL, '123123', '40300', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 09:55:40', '2023-12-19 09:55:40', 'Male', NULL, NULL, NULL, NULL),
(262, 'Ramkhilawan', 'Saritdevi00@gmail.com', 'RF949218', '$2y$10$Ny9xazKF7BaWTIBw691HtOUG4NYGygIdjbCrNpontSGzbHA/7ldsC', 255, 261, '9628054928', 'Right', NULL, 0.00, 'Pending', '2023-12-19', 5, '$2y$10$HPE3w60KiaLophXLkaizn.PquwQpj/5TUjsgTO9KD3C4.ZKnEx5Ne', NULL, 0, NULL, '123123', '92177', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 09:56:32', '2023-12-19 09:56:32', 'Male', NULL, NULL, NULL, NULL),
(263, 'Ramkhilawan', 'Saritdevi00@gmail.com', 'RF150714', '$2y$10$pa7KIgsEN5KShpjFJhX2keKaLX0bJ/1asnDImdQRDwGLGNvUjELjm', 255, 262, '9628054928', 'Right', NULL, 0.00, 'Pending', '2023-12-19', 5, '$2y$10$WUx6OvDWFyuzWNAnEnNAru87W/lyzOC/5bSVmT9WLLMr7XtLzIFhO', NULL, 0, NULL, '123123', '07658', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 09:56:47', '2023-12-19 09:56:47', 'Male', NULL, NULL, NULL, NULL),
(264, 'Ramkhilawan', 'Saritdevi00@gmail.com', 'RF471940', '$2y$10$7PVY9hpNzxYZxsS1pJvpluLjNnrB6oUocVSpV37MUhQ4EayDKJ6CS', 255, 263, '9628054928', 'Right', NULL, 0.00, 'Pending', '2023-12-19', 5, '$2y$10$soZiCq3jsytHsgKzc00OhO.H5HCQro85bk8HATibhJX6PL1ResQhy', NULL, 0, NULL, '123123', '19740', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 09:57:00', '2023-12-19 09:57:00', 'Male', NULL, NULL, NULL, NULL),
(265, 'Ramkhilawan', 'Saritdevi00@gmail.com', 'RF083031', '$2y$10$e/ZDIW1LewME9Na560JknOYn44BpYEdatAZVDCyPyoX5MbcFg0A9a', 255, 264, '9628054928', 'Right', NULL, 0.00, 'Pending', '2023-12-19', 5, '$2y$10$4dXiFXpe6DVk4RdMtP6xbuur/pGTHe63Io4wLLrYp8brqB0XWNfPO', NULL, 0, NULL, '123123', '30522', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 09:57:10', '2023-12-19 09:57:10', 'Male', NULL, NULL, NULL, NULL),
(266, 'Ramkhilawan', 'Saritdevi00@gmail.com', 'RF884225', '$2y$10$qWoyOLNaY9LFIuE4uUYMT.aIhbvn9tOrC0Qn2ykwg7Accljk5HU4G', 255, 265, '9628054928', 'Right', NULL, 0.00, 'Pending', '2023-12-19', 5, '$2y$10$J2cUqOEBrWF8.d4i02tLsOhRPMp.cnD/Mv9DarB0j4JxTAD8QkdtS', NULL, 0, NULL, '123123', '42046', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 09:57:22', '2023-12-19 09:57:22', 'Male', NULL, NULL, NULL, NULL),
(267, 'Ramkhilawan', 'Saritdevi00@gmail.com', 'RF645175', '$2y$10$NQ0LvfCQ7YO5gm3kNtQqDOI3MtCiajsr1iD80tFtyi3OD5SrUXqSK', 255, 266, '9628054928', 'Right', NULL, 0.00, 'Pending', '2023-12-19', 5, '$2y$10$ZOYjmZvlFrdp/Nf/MvxE3.jQkHMZFDcPr2MME7FVXNoEp2gfA.NSi', NULL, 0, NULL, '123123', '51992', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 09:57:31', '2023-12-19 09:57:31', 'Male', NULL, NULL, NULL, NULL),
(268, 'Sujeet Kumar pal L', 'sujeetpal915@gmail.com', 'RF803398', '$2y$10$lB6AY6y1O6G3KWxX1N1P6./zSm9uef91h9wRITwlDWD1nPbb/YLj.', 64, 252, '9140641537', 'Left', NULL, 0.00, 'Pending', '2023-12-19', 4, '$2y$10$XY/lp6HHkUj868JYUv8ld.DdwvgxsdaWhMM.ObA1DWSPV0cEZ31gy', NULL, 0, NULL, '123123', '33644', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-19 10:02:13', '2023-12-19 10:02:13', 'Male', NULL, NULL, NULL, NULL),
(269, 'SUSHIL KUMAR SINGH', 'sushilsingh2423@gmail.com', 'RF900160', '$2y$10$FWlgt0Wv6vc9TmPL46DaGeHWXqSQy7xCKZc.FuCa7nubUajF1Cfti', 63, 268, '9026420306', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$UHVTgunFJsXCXPYHY58wsus7cf/1Id3ZmjpozZAvg59xaMsTze/z.', NULL, 0, NULL, '123456', '01735', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:20:01', '2024-02-06 16:01:15', 'Male', NULL, NULL, NULL, NULL),
(270, 'SUSHIL KUMAR SINGH', 'rejoicefx@gmail.com', 'RF020766', '$2y$10$MLhPxxONxOhM8.JC4UcC9uPIIIIby7D3GAm9svsn9aceQnshMDLPa', 63, 269, '1234567890', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$oSLUGOh1ucTWUQBIlxZIZO/cTq.KkiUtlbvhW9VB.04jeMKRJCXoe', NULL, 0, NULL, '123456', '07526', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:20:07', '2023-12-20 06:20:07', 'Male', NULL, NULL, NULL, NULL),
(271, 'SUSHIL KUMAR SINGH', 'rejoicefx@gmail.com', 'RF531101', '$2y$10$6z68JPNukPVunWHx11jID.9Uv6675DSA1tzaYcmjIGuMe6HvwBy4C', 63, 270, '1234567890', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$2B53pus1qgWl9WMDV4A8cOWc.c758hoBsyzfkEETvgHabdkaQbWuW', NULL, 0, NULL, '123456', '11220', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:20:11', '2023-12-20 06:20:11', 'Male', NULL, NULL, NULL, NULL),
(272, 'SUSHIL KUMAR SINGH', 'rejoicefx@gmail.com', 'RF301550', '$2y$10$r3aIxotV3oSA73qknNRYYeqUmgrgx.t3zeg3qJVtdc5nuey3149c2', 63, 271, '1234567890', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$kX.wJIuEUDJGE4dRobKXqequ6y.KRMLrGsTIAVpKaNanp3/GK20Fa', NULL, 0, NULL, '123456', '15614', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:20:15', '2023-12-20 06:20:15', 'Male', NULL, NULL, NULL, NULL),
(273, 'SUSHIL KUMAR SINGH', 'rejoicefx@gmail.com', 'RF141921', '$2y$10$SlkSNEOLHr5b6.jlPZijK.Ea1AknmQljn8j8b4W4a6uaTXsZMc8vi', 63, 272, '1234567890', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$thic7Hvs2cmjTE6wcg47fe4HC8FsAnijYLHTBin5l322YXQXMn902', NULL, 0, NULL, '123456', '19563', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:20:19', '2023-12-20 06:20:19', 'Male', NULL, NULL, NULL, NULL),
(274, 'SUSHIL KUMAR SINGH', 'rejoicefx@gmail.com', 'RF372720', '$2y$10$97pm20I6YsrHhi/d.nBVGetYEJTfZp8QgOlgYdg.CyUZtygMdr9lq', 63, 63, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$.B5A9l1y89BcKh25bNrZkeKY7SZAtq5yYi.afuqs7lyD8tyxc8cvW', NULL, 0, NULL, '123456', '27588', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:20:28', '2023-12-20 06:20:28', 'Male', NULL, NULL, NULL, NULL),
(275, 'SUSHIL KUMAR SINGH', 'rejoicefx@gmail.com', 'RF883121', '$2y$10$sWpOrhM1T1tRzY9B3lsB6O5HfgKz0tFxkHQchs8LkPbQKRtzM.NrW', 63, 274, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$pf5la/hzUkFIEyP2HuK4NudJ/ETdcDHQgcCZT3uMfCkNanr21mJKu', NULL, 0, NULL, '123456', '31353', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:20:32', '2023-12-20 06:20:32', 'Male', NULL, NULL, NULL, NULL),
(276, 'SUSHIL KUMAR SINGH', 'rejoicefx@gmail.com', 'RF283592', '$2y$10$Vp4C0YFxNn5H6jHutuzBzeex9CXjqsyZq8ag8ONCkNkV7aKBfMeui', 63, 275, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$FQ9J5LXgrEANDiQiO2yRiO/oz0OtvIyRIJeGBfJMzKWAZZ0soRpJ2', NULL, 0, NULL, '123456', '35272', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:20:35', '2023-12-20 06:20:35', 'Male', NULL, NULL, NULL, NULL),
(277, 'SUSHIL KUMAR SINGH', 'rejoicefx@gmail.com', 'RF224231', '$2y$10$dagJNu5zytSPg2HefjJ3R.PiPoNERYEfX72GmLY67qh28qJYgEvqu', 63, 276, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$VKp9XEjrY2ie.UmLPtJJSOD0ipO0LN07703Ck/PreWxDLS/xfD4Wy', NULL, 0, NULL, '123456', '42836', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:20:42', '2023-12-20 06:20:42', 'Male', NULL, NULL, NULL, NULL),
(278, 'SUSHIL KUMAR SINGH', 'rejoicefx@gmail.com', 'RF254678', '$2y$10$iLqPCHNLq5nNmJBRSueyQ.72onY9lWVLCBRLktkCcf117g.xax7Te', 63, 277, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$wIk39ZdtgZvun/aL84BsAOVyZw04DIhlnpHo4MGpuH2oxfQJjHa8O', NULL, 0, NULL, '123456', '46034', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:20:46', '2023-12-20 06:20:46', 'Male', NULL, NULL, NULL, NULL),
(279, 'SUSHIL KUMAR SINGH', 'rejoicefx@gmail.com', 'RF884823', '$2y$10$RAE9zIEE9VZzCnzA2.e8Be1teY2q8sgzovCeGd/SZTR1bO5DI39Vi', 63, 278, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$JWAqhX6oJ8U8L6o752lDn.Ok9nFQhgxsAhIfGAUAUGahwnbK9yO72', NULL, 0, NULL, '123456', '48161', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:20:49', '2023-12-20 06:20:49', 'Male', NULL, NULL, NULL, NULL),
(280, 'SUSHIL KUMAR SINGH', 'rejoicefx@gmail.com', 'RF545299', '$2y$10$mFdO.dKT/ALqAeaELHlwn.dQk8lb1sqrIgJlCdJxoCKZrZZfmo0ne', 63, 279, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$xhiIL0KgL2Y6rRJtqfMMNukjO6F6A/YqUq3Y/uiGc4Xag8HY.OgPi', NULL, 0, NULL, '123456', '52406', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:20:52', '2023-12-20 06:20:52', 'Male', NULL, NULL, NULL, NULL),
(281, 'SUSHIL KUMAR SINGH', 'rejoicefx@gmail.com', 'RF745672', '$2y$10$zxEIvAHy4Cl94bG1an4MzuSRKDgx7TRmrNlXZPaeyW2k9fKL.NnzG', 63, 280, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$NoQPOGg8.4tuhZ2yrlcE4.QSxJNRcB53TajGxrJr2RWabS5nqc1au', NULL, 0, NULL, '123456', '56355', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:20:56', '2023-12-20 06:20:56', 'Male', NULL, NULL, NULL, NULL),
(282, 'SUSHIL KUMAR SINGH', 'rejoicefx@gmail.com', 'RF515970', '$2y$10$Txr1ZB9DbrbJ5CN.WVPZreXb5/L3QQKDfTJiWB6uYTpYhj/nR5Cre', 63, 281, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$buT4QlDZgJ2zuUlgUphhL.gFoTzgab.RsjbRofNzs7cU69QkmQFFm', NULL, 0, NULL, '123456', '59711', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:21:00', '2023-12-20 06:21:00', 'Male', NULL, NULL, NULL, NULL),
(283, 'SUSHIL KUMAR SINGH', 'sushilsingh2423@gmail.com', 'RF746307', '$2y$10$aSvOxy.K66GKA52z5LAD.O.cwnR9LNyq9CyIEIAzEctm3Gbs6Mwh2', 63, 282, '9026420306', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$gt/amElPol9KwDfod3xi6eGX40upySx24eK3HDWP8sjKjAoNATNEG', NULL, 0, NULL, '123456', '63709', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:21:04', '2024-02-06 11:33:00', 'Male', NULL, NULL, NULL, NULL),
(284, 'KARAM SINGH', 'ksingh8825@gmail.com', 'RF299834', '$2y$10$HOgtR2282ZcqyLYWAKsYcu84oyMTYf/7VxbaMla.4uPIgrFu6PZba', 283, 283, '9696651981', 'Right', 100.00, 0.00, 'Active', '2023-12-20', 5, '$2y$10$Mr0nqq6fQu7d74fqknaGYeoMnOF8Mo6d3hNivmnEh9xdYCFlH1iyW', '2024-02-03 16:09:03', 0, NULL, '123456', '98266', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:23:18', '2024-02-10 15:50:55', 'Male', NULL, NULL, NULL, NULL),
(285, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF651371', '$2y$10$MR0zHjoP6nvGNHkTJC.bg.RFe9pCeVY2VLrv.T7ODq6ObWgW80/1u', 61, 273, '07905088109', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$w043zYudTibb16st6YmUquO4cHkozqmAujzJsdSPdZDNuk/pdK07q', NULL, 0, NULL, '123456', '13444', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:35:13', '2023-12-20 06:35:13', 'Male', NULL, NULL, NULL, NULL),
(286, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF332241', '$2y$10$yNgg//wi2VQVK79kTEm9hurj.pdfBvpVlWwv17Vh5hjwcGnTbsYgq', 61, 285, '07905088109', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$63UQsKte5ktFhvQ7rYeUv.q19cR.iZyIdmmFm5zhXsLgsX/49tzfm', NULL, 0, NULL, '123456', '22404', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:35:22', '2023-12-20 06:35:22', 'Male', NULL, NULL, NULL, NULL),
(287, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF312571', '$2y$10$voaW9WWIajrqX7kN5ySYO.398rN25YQWzgxjucIu1n0GIZouXq3Nq', 61, 286, '07905088109', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$ZpI.QXfVu7Q4KDI9uP4vyuaYHvVqDOtwnXo4b/hLc.Uo8yiPz3FnW', NULL, 0, NULL, '123456', '25386', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:35:25', '2023-12-20 06:35:25', 'Male', NULL, NULL, NULL, NULL),
(288, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF682982', '$2y$10$U0JClnN40cXsY0zLpGATV.ij0CX2.7PVDC.KDuOHMpl7sgnkWY12.', 61, 287, '07905088109', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$578yIccxnxUbS421N5c1IOzKh995USOT8CQS5hY7zxHLbqiAoeve2', NULL, 0, NULL, '123456', '29317', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:35:29', '2023-12-20 06:35:29', 'Male', NULL, NULL, NULL, NULL),
(289, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF323266', '$2y$10$38qoJ57Wzn9kPFwAFDRVa.Ztr1oJlFBJVhpVMznKJZ1E2F/YWhWYa', 61, 288, '07905088109', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$kw/kN/Ro767LRiSLJ.pRy.HxLgoBLaFXfdxLAWgIPDAKV/c2HKdx.', NULL, 0, NULL, '123456', '32661', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:35:32', '2023-12-20 06:35:32', 'Male', NULL, NULL, NULL, NULL),
(290, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF973587', '$2y$10$dSdI8ydN5avgdMwCSUbqY.MP2DzY14DcOsux/.mt6qMqUN3o1Mz5O', 61, 289, '07905088109', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$MRxKfjE6Y82UU6SqfZYz3.M997.s5orjLNm45/EBklXpl/CaKdDti', NULL, 0, NULL, '123456', '35697', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:35:35', '2023-12-20 06:35:35', 'Male', NULL, NULL, NULL, NULL),
(291, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF623843', '$2y$10$adGLlbbwKOZesXz0.jx7OuNBpFr.Ergw4D/mH1PLDjumv2upjGgIi', 61, 290, '07905088109', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$1wBhSuiWaxAJK2JV/no2fu9S9dMtV4uQe100mJMixrC2lZfvNyugC', NULL, 0, NULL, '123456', '38895', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:35:38', '2023-12-20 06:35:38', 'Male', NULL, NULL, NULL, NULL),
(292, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF204139', '$2y$10$.kQafliCNcnBEfiP1Y3a7ehh1V4RoLO/yqlxLSav4MiJ4GEMj4WhG', 61, 291, '07905088109', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$5X1GG7Go1UBtmx7GhZMJbOtktcWzxMgIQGQVnRKq3h6lA7DHuidqC', NULL, 0, NULL, '123456', '41433', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:35:41', '2023-12-20 06:35:41', 'Male', NULL, NULL, NULL, NULL),
(293, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF584475', '$2y$10$OkX/SUBA3bTBCwyDQe0zAOeWKWzLaDFGcZA6ea4awYIqk7h2jvPwO', 61, 292, '07905088109', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$g5V0Ql2ICq0j7tXf8j/JD.Tx3wZOtfL0U/7L30lBdHDwCYzi2LJti', NULL, 0, NULL, '123456', '44073', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:35:44', '2023-12-20 06:35:44', 'Male', NULL, NULL, NULL, NULL),
(294, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF284708', '$2y$10$3y0h3kRdOnMeJxUZykqeDuvYZC3TPc/MhdGf7P/7L3fd3ZDJb11Oi', 61, 293, '07905088109', 'Left', 100.00, 0.00, 'Active', '2023-12-20', 4, '$2y$10$HJjyJnHDUFmRe7W663lZ5uxHE7FP98fON.8mTlnOGtmaBeIuAD0Ne', '2023-12-31 21:43:51', 0, NULL, '123456', '47606', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:35:47', '2023-12-31 21:43:51', 'Male', NULL, NULL, NULL, NULL),
(295, 'SANJAY SONKAR', 'shariqzaki2008@gmail.com', 'RF805464', '$2y$10$YH3MOdPTIjNiR24Lr5Vas.0/RsKDDo1ekc9CNz10/yudaLh.Vjm06', 61, 61, '6394454044', 'Right', 100.00, 0.00, 'Active', '2023-12-20', 4, '$2y$10$qxVpgbKIFz2E2sSZBVln2.E3qD9ec7btagpqnLeu1cKgCpuO.7sha', '2023-12-25 13:43:16', 0, NULL, '123456', '54600', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:35:54', '2024-01-28 09:09:09', 'Male', NULL, NULL, NULL, NULL),
(296, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF935766', '$2y$10$5bIk6yPmDPRK.Wx./6.KkuYTlhNok026X7BwsemSfmKCd80pAuG02', 61, 295, '07905088109', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$zl7.gL2MvJwgon1y8oArIO7okfj0arxiQHsOAxJrviaeZyJQIz2Pq', NULL, 0, NULL, '123456', '57775', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:35:58', '2023-12-20 06:35:58', 'Male', NULL, NULL, NULL, NULL),
(297, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF596095', '$2y$10$SOKmr0RbvrIptDPdK9ajce8PuzIki7g0mQIa6C0f6wBcQ6WvvDruq', 61, 296, '07905088109', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$7cVuQBTWaGpbxQq72FunG.h6lPgFBOzw6tPcFwd8.qGeN0sBWhTT2', NULL, 0, NULL, '123456', '60390', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:36:00', '2023-12-20 06:36:00', 'Male', NULL, NULL, NULL, NULL),
(298, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF456339', '$2y$10$yeYMYxqlplYjT0/44Rlkpe2xOYNUKhJONnLyon/vOCX9eVlo9msju', 61, 297, '07905088109', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$QDrvT9wRVsxDolBLYRsEVeF0jgR9Ct8fJrxzIs/jYD7HdCPhO9Tii', NULL, 0, NULL, '123456', '63780', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:36:04', '2023-12-20 06:36:04', 'Male', NULL, NULL, NULL, NULL),
(299, 'SANJAY SONKAR', 'shabih.shinecity@gmail.com', 'RF096658', '$2y$10$HZA3UzGDx2/dcp1XKOmDmu1DU/LzQE7fNEDhHeH3sAqB2KPSgBzBy', 61, 298, '07905088109', 'Right', 100.00, 0.00, 'Active', '2023-12-20', 4, '$2y$10$o9LOZ0I7XttBdyxQwsXJB.Zo5jMB318wCR6orwSKpMjdt3pIK1mbC', '2023-12-28 12:51:31', 0, NULL, '123456', '66351', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 06:36:06', '2023-12-28 12:51:31', 'Male', NULL, NULL, NULL, NULL),
(300, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF945558', '$2y$10$EK513gzXpmbYrdCvKL38Dewcpm54Ytp0mJOqSlYbb9VvvgsIvByQi', 55, 294, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$PlOIB4saVA0PD7QEMt.1SexTx/uTeA2Zo0m6va1vrgw2qbHuQopfO', NULL, 0, NULL, '123456', '55285', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:05:55', '2023-12-20 12:05:55', 'Male', NULL, NULL, NULL, NULL),
(301, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF176219', '$2y$10$0YP9R1vjfMzqAWOksUsXLOdP/q5F/MkQKAdbjgAw3z2UXhXfLUGfy', 55, 300, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$q8bSc1kpLtVzxddDwqnMQ.9OIMoiAM/syWLj3/nrmkrDAWP6cUZIK', NULL, 0, NULL, '123456', '62876', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:06:03', '2023-12-20 12:06:03', 'Male', NULL, NULL, NULL, NULL),
(302, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF146944', '$2y$10$B7DS3nvnnkht.dg7wM9RJe7CWmAGmLk6cW0ydZdIVboz9KAECFFga', 55, 301, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$KIfqG8KhBXWcDSUzCwsoqOEMPtHS8W8ct1/rgck2OcIzQa0pv87Hu', NULL, 0, NULL, '123456', '69212', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:06:10', '2023-12-20 12:06:10', 'Male', NULL, NULL, NULL, NULL),
(303, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF847683', '$2y$10$QpUxWPmzOehgRugSfz9WzuBk2LYz8HyrHaSO4bjwYcXR6R37q.x7e', 55, 302, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$D9kANyTgBtID7QhLti/uGusnUvnMe/61VE0hKu7jDzrHc.Y5UmSw2', NULL, 0, NULL, '123456', '76562', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:06:16', '2023-12-20 12:06:16', 'Male', NULL, NULL, NULL, NULL),
(304, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF988207', '$2y$10$Zr.m5.eQc4eC0vo3R7k29uV4gVuQbU.6jVU4UH16FFw5i4bONPkD.', 55, 303, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$4Up72o7bKL0X3/vc79foTeiLn6QLUqsvy4b1pBLfFEHGCYxSmOjT6', NULL, 0, NULL, '123456', '82965', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:06:23', '2023-12-20 12:06:23', 'Male', NULL, NULL, NULL, NULL),
(305, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF478943', '$2y$10$TOPlrvQuH.KaZ2nHOd5lseTRtzSP2RjpeekA8QFELV3qfl/2W4NJ.', 55, 304, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$RXB9wk/PssdlDc5gzIjlUO3Nl6N4Hr4O.IQqOT1C7S0dTz.RXoV.a', NULL, 0, NULL, '123456', '89955', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:06:29', '2023-12-20 12:06:29', 'Male', NULL, NULL, NULL, NULL),
(306, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF879665', '$2y$10$7HL5pixCV6Y97DHyjKPIA.VJH7GNtF9pUFm42Oa.S/nIPGLdMqFqq', 55, 305, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$gTavTumTN0mD1KwhFwurYO41n.WaBqhYFaDCU5XBnGoSlFk7CIkD6', NULL, 0, NULL, '123456', '96231', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:06:36', '2023-12-20 12:06:36', 'Male', NULL, NULL, NULL, NULL),
(307, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF190238', '$2y$10$1eW9GdOpxIQZVYoGgdH6lOlNi/2kBN8E75dalxZtO7eEgc597vmBG', 55, 306, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$W88ts7Gq8bCuHkyHDb6q7eVBVLNuOADdWdS8a.l8ahkBLB4F52Jqi', NULL, 0, NULL, '123456', '02425', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:06:42', '2023-12-20 12:06:42', 'Male', NULL, NULL, NULL, NULL),
(308, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF540987', '$2y$10$4VzaSmPmRMpT3gtPf.Z3Qe02WRhR43m.TEikZ55LAelB9ZvQ3GIq2', 55, 307, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$7jtR2KrVKbJRM5gqLfZrNO1Pf7aJFXY9noJp2JV/oJx8wwPWUyAt6', NULL, 0, NULL, '123456', '09257', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:06:49', '2023-12-20 12:06:49', 'Male', NULL, NULL, NULL, NULL),
(309, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF461474', '$2y$10$DvzvrNbds6rlHmizMar.zOXvIZd9fCv3dF1caYlyNTbfEs.re0xBi', 55, 308, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$lC56Y9w2PJgocW0iQOO/rei4VP0ApuTR7aXj6TWKWKUKHhUci3Ipy', NULL, 0, NULL, '123456', '14942', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:06:55', '2023-12-20 12:06:55', 'Male', NULL, NULL, NULL, NULL),
(310, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF972197', '$2y$10$eUn3qJZP5yx7VD2ruF.XF.avgtyk2fdPdtAv0nXOTDyFYFHU6hKp2', 55, 309, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$63JoNJSBFzkIFORm9gtiQOCPxv960vD4hOeLUOCzv/KJ8/8EliyLu', NULL, 0, NULL, '123456', '21891', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:07:01', '2023-12-20 12:07:01', 'Male', NULL, NULL, NULL, NULL),
(311, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF762660', '$2y$10$EH2l0XuJ.53C2VBDcK2f6eFUbawnRy4tpgNHXcuF4dKF2MxWEsIBK', 55, 310, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$JBnqN0aGHt3p56Yb0q24dOW9cijw47ANI3k5gM.3z01QcO6G4vUY6', NULL, 0, NULL, '123456', '26553', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:07:07', '2023-12-20 12:07:07', 'Male', NULL, NULL, NULL, NULL),
(312, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF583361', '$2y$10$aUyyGABzCNrhR8b6yZqhyugN9No1II.qFX4HLAxOq/bL2ZPRdpYve', 55, 311, '9936422727', 'Left', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$qIxx.AKSLMTDnEzaeOe4l.bef2jGut9DpwUBfUoGnbhujOS9JTmv6', NULL, 0, NULL, '123456', '33613', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:07:13', '2023-12-20 12:07:13', 'Male', NULL, NULL, NULL, NULL),
(313, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF294505', '$2y$10$SAFXLkGaNe9mmSrbhf170eV9G5KOX79aY7UE4wEh7wT.AtCWXLuQW', 55, 55, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$/NbyijLFQoRPTedVx4JJAeiDIZznO0C2JyJXrUkRX6WF9epc.FxB6', NULL, 0, NULL, '123456', '45859', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:07:25', '2023-12-20 12:07:25', 'Male', NULL, NULL, NULL, NULL),
(314, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF875272', '$2y$10$vM8c.spUUwObbHaTkjp.meq8raGCzXkdMxH1BEzG.jBJniNmrbPVu', 55, 313, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$MYZwWqXovJqRxWB0qxmVw.rAJSrHNNEM8DMgrQOcqO3ip37joJyHO', NULL, 0, NULL, '123456', '52027', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:07:32', '2023-12-20 12:07:32', 'Male', NULL, NULL, NULL, NULL),
(315, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF745926', '$2y$10$hJlz2GLe3HnzGjE3czYqCOq/nYtdFGvL3hm.h2jJrP6jEBr.Ief4O', 55, 314, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$l6VtxBVUUJIRM/OrHjcHAegctiFZSwCxu2IDJjpBnOcBik2kOns5.', NULL, 0, NULL, '123456', '59362', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:07:39', '2023-12-20 12:07:39', 'Male', NULL, NULL, NULL, NULL),
(316, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF236773', '$2y$10$NvlIveN9y15ao/EUa8zQb..Yl/CbbU8yxmCXJ2V3enL1gLtqQbckm', 55, 315, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$f/6pCM7kCWxui/T1/CfGqeGLkBKCS2vrNZSump3.a8l4k3Q0Xdh1O', NULL, 0, NULL, '123456', '67457', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:07:47', '2023-12-20 12:07:47', 'Male', NULL, NULL, NULL, NULL),
(317, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF897528', '$2y$10$/OdvA2IY7lABBVwCCRzu1uSYZ.aiL1LVnZpFekOxHvcPWZyaF0r4i', 55, 316, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$1Yb/nCxbl9OFB18TzejPbO6..1mdaiWP0ExocXYqrZok13EMdDIfe', NULL, 0, NULL, '123456', '75120', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:07:55', '2023-12-20 12:07:55', 'Male', NULL, NULL, NULL, NULL);
INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `sponsor`, `ParentId`, `phone`, `position`, `package`, `amt`, `active_status`, `jdate`, `level`, `tpassword`, `adate`, `rank`, `trx_addres`, `PSR`, `TPSR`, `capping`, `power_leg`, `vicker_leg`, `balance`, `country`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`, `gender`, `nominee_relation`, `adhar`, `pan`, `nominee_name`) VALUES
(318, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF538424', '$2y$10$NH9os9tAYZ8IuNBA/btjmeRGx7BdltAUpIrSNDxQBoyiDzgt4KIVK', 55, 317, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$cOBk6aOffHnwYCQdj2.8q.gza8FGCuEhCrUSbaPjjiofY3rZXY4gW', NULL, 0, NULL, '123456', '84677', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:08:04', '2023-12-20 12:08:04', 'Male', NULL, NULL, NULL, NULL),
(319, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF859143', '$2y$10$ZjBYWyxgpVW4qpQ/9FqpEeNZmYynSemRnX4jflT9F5ivASxqLJ5Vm', 55, 318, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$F80BOgzqHpGrg9902nGMk.Y6xFo1YxVVucTfmdpjzUrZVcEviwOdW', NULL, 0, NULL, '123456', '91707', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:08:11', '2023-12-20 12:08:11', 'Male', NULL, NULL, NULL, NULL),
(320, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF879720', '$2y$10$M5f5Aftux2e86BYPzYBVN.lF2hbw4wj0WKpvfZ1Xq5quGuCkOD7Di', 55, 319, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$regSAmOZliYzdauipk0cneWTLdDRy/zLVlgDaSn2KBYfOIOCROwUy', NULL, 0, NULL, '123456', '97256', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:08:18', '2023-12-20 12:08:18', 'Male', NULL, NULL, NULL, NULL),
(321, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF951370', '$2y$10$3BpnDOjT5T82xZ/haoS90.rrvzIwaf4F4rbDLKVDOnZkATK.xU/3a', 55, 320, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$US.fKuxapTpRXpYRr5QlZesId9ddGv2GUnVgT5NNChqIKfMlR0GBa', NULL, 0, NULL, '123456', '13045', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:08:33', '2023-12-20 12:08:33', 'Male', NULL, NULL, NULL, NULL),
(322, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF222181', '$2y$10$j0kD7GzyZIo7c0oMXB15oewCK8FGSP/PUV27qt2eJ6C.0283/AwKy', 55, 321, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$pFRWbp2h6RRGuZlvhm/laOLH85rvYWF1B/lDaHUtde.MLnsyHdpnW', NULL, 0, NULL, '123456', '21916', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:08:41', '2023-12-20 12:08:41', 'Male', NULL, NULL, NULL, NULL),
(323, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF812859', '$2y$10$HEYYdvmOQYpes9ltkC0nJezfoHOHcWG0pWxQCdbt3MMIFAG4NiGrC', 55, 322, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$PECwahsDcWGssEbsTYHad.0B0N7wLFxILCicTh8AxX5NZIS1GXNyW', NULL, 0, NULL, '123456', '28056', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:08:48', '2023-12-20 12:08:48', 'Male', NULL, NULL, NULL, NULL),
(324, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF673722', '$2y$10$XEYVO2kl80olx.wRHx35UOACGnXKf18/cs1mnmLXbQSyy1nmnGO.S', 55, 323, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$cIcrMLmty6pf1OSTsG3fZuElexUCPiPSD0ocgiLOxrXC.7itnUp.S', NULL, 0, NULL, '123456', '37777', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:08:57', '2023-12-20 12:08:57', 'Male', NULL, NULL, NULL, NULL),
(325, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF264388', '$2y$10$vrfPCkzGR.aNllmdV05A7u6SisvajScPc5YI2fI2m.f9WDkvoygui', 55, 324, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$pm1AgNeDte1mZX5M2T0n1uxHD0Qng6W4CSYG082ninOzwHhbl03um', NULL, 0, NULL, '123456', '43394', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:09:03', '2023-12-20 12:09:03', 'Male', NULL, NULL, NULL, NULL),
(326, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF555079', '$2y$10$ryf6z6kejVHTu2vMb31sEusdr9uZchizp1DPOxWFGujlMe5x0QH4y', 55, 325, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$puESaobwyrQJ7W3JWuQk7Oe/2xFBwZ7aYVaLvpALZzTTsmkMO6AA.', NULL, 0, NULL, '123456', '50038', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:09:10', '2023-12-20 12:09:10', 'Male', NULL, NULL, NULL, NULL),
(327, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF065744', '$2y$10$lBFMIRq8v7nqxfaGFvTYTex3F4nCIPgwuoBSM8axQS5TdMivMQI8S', 55, 326, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$b3zOtsqbkdcNQEK5WvmtkunRUetpcjAo.7ibsPwlHLQBK700ddxRu', NULL, 0, NULL, '123456', '57087', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:09:17', '2023-12-20 12:09:17', 'Male', NULL, NULL, NULL, NULL),
(328, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF986395', '$2y$10$0w3DkdBpaSh0dyY7FbRS7.gWu5eI82.zasotfVJNAh4vEhOLYL/CC', 55, 327, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$sUjaMzO/gRQldosn1O7XFeaJ1rd6ieEYRRkcqU3t1EsIuDDN/XKBm', NULL, 0, NULL, '123456', '63759', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:09:23', '2023-12-20 12:09:23', 'Male', NULL, NULL, NULL, NULL),
(329, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF127087', '$2y$10$kdIxKaYN2g31cHo7RAKlU.WjtcFeREHNDkXHY2JJSsbwPPCSJRnXm', 55, 328, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$4AaGluWcPv4JzeonER40vu1NYk6uNJwzzgDgJ7Tvhy3fJ.ZZ92iii', NULL, 0, NULL, '123456', '70598', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:09:30', '2023-12-20 12:09:30', 'Male', NULL, NULL, NULL, NULL),
(330, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF518010', '$2y$10$uppeS1Ftvrb7aDu1Pyad.e21ghca.y1R1Os3SJWx.e49asWZpcDQu', 55, 329, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$H7oFVvft.0/eucclwG.PouuqXjGKQPq7lkwIaRA4lzFHDvKCd3EDC', NULL, 0, NULL, '123456', '80201', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:09:40', '2023-12-20 12:09:40', 'Male', NULL, NULL, NULL, NULL),
(331, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF828062', '$2y$10$F.jePJQG1rczyay0VviKAOHun5dSe4w/AsNTeZmOL3l9ypfbWv7xe', 55, 330, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$bMyr/d0B7CjR8lK1yJPyTOvdYwe9Rz4ubWTbOxvgtHvnvNE68QOdy', NULL, 0, NULL, '123456', '80017', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:09:40', '2023-12-20 12:09:40', 'Male', NULL, NULL, NULL, NULL),
(332, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF139185', '$2y$10$0SD47qKQz8e/FbQHU1.NleZiek2sMWHQyPeBg0XUv1r2XMYoLNREK', 55, 331, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$6XHrCwE8arLfSKqwV/SCO.zr6JOfw1.c5bv51tyyreqIPXk1ItH0O', NULL, 0, NULL, '123456', '91326', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:09:51', '2023-12-20 12:09:51', 'Male', NULL, NULL, NULL, NULL),
(333, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF609931', '$2y$10$w7Hzj0A37QEno7nqjSfBR.Mb/0O5ZKOtv.hPMgpbN8uY8OjQEYEJe', 55, 332, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$FdAclXof4ELNWCm9FRgpwOtmv1ltWgeTT5gkfodzLerul82i2Ksxa', NULL, 0, NULL, '123456', '99190', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:10:00', '2023-12-20 12:10:00', 'Male', NULL, NULL, NULL, NULL),
(334, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF990760', '$2y$10$DK2qrCVvHevTuC8N9rT5MugjhfM3OT2W1FzGvh8EvLsQvwrEU1qXO', 55, 333, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$FiiMpL9glrw9rvTAnhzGxerhhOFL2k7f6B.HTxkxodCXTcN.eTYMG', NULL, 0, NULL, '123456', '07399', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:10:07', '2023-12-20 12:10:07', 'Male', NULL, NULL, NULL, NULL),
(335, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF871700', '$2y$10$JgSCt4OOgMI/OTmEEQvYbu47x2y3bb00akUgAohCGE2pTms7AOXLK', 55, 334, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$N/inn3ww2LRD2z8Y2SlwBOHaVC0iVYeselFigU9LKMLbBwnhbyA2m', NULL, 0, NULL, '123456', '17217', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:10:17', '2023-12-20 12:10:17', 'Male', NULL, NULL, NULL, NULL),
(336, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF922478', '$2y$10$2V1QeHnB1bllWwhjMM9DVOX.gCilYVxLp.Vg1YqHB/LcL29kcmYiK', 55, 335, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$7u87daVJpT7hEaWkEXuIjuxSr3PcIhijNFF278ZDrbWtVHEnzpnSC', NULL, 0, NULL, '123456', '24550', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:10:25', '2023-12-20 12:10:25', 'Male', NULL, NULL, NULL, NULL),
(337, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF443487', '$2y$10$CBZ1jUPngR93XOyLcD3jouEcH5DaF2TS0THdMeiDfmjey2H.5R/16', 55, 336, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$coNN9BhkthpYifUR120aru8radaMEJzjcFSQCdd0pFdcWlJduHGXK', NULL, 0, NULL, '123456', '34309', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:10:34', '2023-12-20 12:10:34', 'Male', NULL, NULL, NULL, NULL),
(338, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF084109', '$2y$10$gi/M/aT4e//UCsxHIE5gW.YDA2dP0Y4z56M7Bxz7g0mooiD3kSjFi', 55, 337, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$6VLSnFDUOXXsiuEvh7t3UOPQkohfUgMFlzB1m.PQEEe0XnQOp4dXW', NULL, 0, NULL, '123456', '41895', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:10:41', '2023-12-20 12:10:41', 'Male', NULL, NULL, NULL, NULL),
(339, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF594830', '$2y$10$1C0iDd1i8sQ04c.mZ5nMsexVIyQhoVQjS2xLU5xJSE8bzFswM/57q', 55, 338, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$yLligo/XwhWaYYJTTqooEutm72ouI600n6cn10OS2mgjwiKNOdbEm', NULL, 0, NULL, '123456', '48460', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:10:48', '2023-12-20 12:10:48', 'Male', NULL, NULL, NULL, NULL),
(340, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF485483', '$2y$10$8qlFCiOJPboSHORb9fa9peqmHK1gvNb//sQlvTmYTDkMjp49y2wWa', 55, 339, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$b3q3idUSrSk/2wyE3PNVVOPDJEhfNwJG6kDth1H.W6t6lLIZjk2SK', NULL, 0, NULL, '123456', '54156', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:10:54', '2023-12-20 12:10:54', 'Male', NULL, NULL, NULL, NULL),
(341, 'RAMA PAL', 'amarpal1733@gmal.com', 'RF706680', '$2y$10$JJ.RZo5PRg7XyBkwgyDSteYz.TMx5baC9Nr5iy5cUQMGXjHO.rgaq', 55, 340, '9936422727', 'Right', NULL, 0.00, 'Pending', '2023-12-20', 4, '$2y$10$Uy92ziHnBy14lZw/8496jO89bMVlDBA0RtZKXGQeRUpfRtcZzYxPC', NULL, 0, NULL, '123456', '66193', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-20 12:11:06', '2023-12-20 12:11:06', 'Male', NULL, NULL, NULL, NULL),
(342, 'SATISH KUMAR CHAUDHARY', 'Rejoicefx@gmail.com', 'RF155406', '$2y$10$klNyVMtZDbxLUjicLpiGxOPC5wKSZ/fDXoioyKd9t6gEjVsOA1pzS', 76, 312, '1234567890', 'Left', NULL, 0.00, 'Pending', '2023-12-22', 4, '$2y$10$H6ttHtoCC9l/ucWLajina.rdUX6pVKEZbOyaqsmygfRbWBjvZIJ1m', NULL, 0, NULL, '123456', '54321', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-22 11:25:54', '2023-12-22 11:25:54', 'Male', NULL, NULL, NULL, NULL),
(343, 'SATISH KUMAR CHAUDHARY', 'santoshc027@gmail.com', 'RF203597', '$2y$10$.xI/wIoNSCNTF74tVHW7zec86TCfgZApSgmOIOKIm61CCWXjIgVQ.', 76, 76, '8707584664', 'Right', NULL, 0.00, 'Pending', '2023-12-22', 4, '$2y$10$eAMpzNzFPWPjAFQUXVrVaeDfNPD/Y7oz07XiVlc.fh3GNwbsq6b5S', NULL, 0, 'HN-10,KAILSH VIHAR,JAJMAU,KANPUR-208010', '123456', '35497', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-22 11:27:15', '2023-12-25 13:47:01', 'Male', NULL, NULL, NULL, NULL),
(344, 'Santosh kumar chaudhary', 'Rejoicefx@gmail.com', 'RF949623', '$2y$10$hyh.uFRKpZHDw/evd17r1.Nw2XH8Ex0LWMxWnvfwZb2O1NT/vpvEO', 76, 343, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-22', 4, '$2y$10$ShlNY7lGRpzrqTehf9ZR8eezTY.IyKiukONnFkzXGsCclbGwcHkya', NULL, 0, NULL, '123456', '96712', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-22 11:28:16', '2023-12-22 11:28:16', 'Male', NULL, NULL, NULL, NULL),
(345, 'Santosh kumar chaudhary', 'Rejoicefx@gmail.com', 'RF464575', '$2y$10$RPldiao4PTGXPDwNMVDGdeO9j7hVeM.p2ig9behnOofZGW5jW/Kzq', 76, 344, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-22', 4, '$2y$10$eQSgLcLL83Am7H7DuU5apuohxvXeGudvBkp4YhEzppvMOwv3RUQta', NULL, 0, NULL, '123456', '45182', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-22 11:29:05', '2023-12-22 11:29:05', 'Male', NULL, NULL, NULL, NULL),
(346, 'Santosh kumar chaudhary', 'Rejoicefx@gmail.com', 'RF940453', '$2y$10$nAvVXMKkS.3txHm0smSOAe8eY6vgVlKOz8WC9rCtHDn4PUA7on7km', 76, 345, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-22', 4, '$2y$10$LOHRl1wsAcOKrQn0J9xH1.w741SRErBQWNWIObtaLU8zZ2NdMkDM6', NULL, 0, NULL, '123456', '04677', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-22 11:30:05', '2023-12-22 11:30:05', 'Male', NULL, NULL, NULL, NULL),
(347, 'Santosh kumar chaudhary', 'Rejoicefx@gmail.com', 'RF725210', '$2y$10$J8tfvnoOlEmb.fEbM1/K4OW6BvyWju67vYBXxRCBhUhYSyms7c/i.', 76, 346, '1234567890', 'Right', NULL, 0.00, 'Pending', '2023-12-22', 4, '$2y$10$QpjoYxpMCpr0dn8jh0O3Huam0maLk8V9CTt7GVGWJBzYbz56KAplO', NULL, 0, NULL, '123456', '52650', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-22 11:30:52', '2023-12-22 11:30:52', 'Male', NULL, NULL, NULL, NULL),
(348, 'SARLA', 'manbabupal16@gmail.com', 'RF518744', '$2y$10$NdHJBAp2GG2GYzQyP.qZ1OyifvNfAXC3CDd4EgZik/UqSW0JWFt8q', 69, 342, '6387699448', 'Left', 100.00, 0.00, 'Active', '2023-12-24', 4, '$2y$10$kiFbupTXI2AvtL6vubh3BuTHyzVA4s8JOc/X5hFHKaYj.z84FG9Wu', '2024-01-16 14:43:21', 0, NULL, '123456', '87009', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-24 09:39:47', '2024-01-16 14:43:21', 'Male', NULL, NULL, NULL, NULL),
(349, 'SARLA', 'manbabupal16@gmail.com', 'RF872734', '$2y$10$WyGRDQjyMmBhmXG6gYFCteCKNWe9tWG3bXl0udscV1qqronuAtH2K', 69, 69, '6387699448', 'Right', 100.00, 0.00, 'Active', '2023-12-24', 4, '$2y$10$05B4DFVIXze931f9uQAGDO/0KgM70/cgA9hmBQNuiU60PHDgcBOBC', '2023-12-24 15:23:12', 0, NULL, '123456', '27563', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-24 09:40:27', '2023-12-24 15:23:12', 'Male', NULL, NULL, NULL, NULL),
(350, 'SARLA', 'manbabupal16@gmail.com', 'RF034106', '$2y$10$61HVrCejuhil1n/yx43apurrkE0asNaohxUlW.d9MvuHcUkmT6S3G', 69, 349, '6387699448', 'Right', NULL, 0.00, 'Pending', '2023-12-24', 4, '$2y$10$IY5IznwEfrZHewKztRDTLe43owtnKrLR0NaJaBiySfhnBeB1XrkKK', NULL, 0, NULL, '123456', '41773', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-24 09:40:41', '2023-12-24 09:40:41', 'Male', NULL, NULL, NULL, NULL),
(351, 'LALLAN NISHAD', 'lallannishadlallan@gmail.com', 'RF874852', '$2y$10$08Bi3Bgxgrx/a87Pjc9cYOyvXvNmDNz5ihTwbNe/mfTajNUGQLMm2', 69, 350, '9794989289', 'Right', 100.00, 0.00, 'Active', '2023-12-24', 4, '$2y$10$kPi9OXuTr5GEBW6vPG/c2.Bufp4qqY3WPI2uET4Z25Vze39itAiri', '2023-12-27 14:38:11', 0, 'Unnao', '1773', '48460', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-24 09:40:48', '2024-01-04 15:57:54', 'Male', NULL, NULL, NULL, NULL),
(352, 'SARLA', 'manbabupal16@gmail.com', 'RF315226', '$2y$10$P7yRTu0f4mAhfs2gqh9FMemWR3gjJqSxNkvdn9Q76VV6l91n7mLZu', 69, 351, '6387699448', 'Right', NULL, 0.00, 'Pending', '2023-12-24', 4, '$2y$10$Hn4ewQIUjfqMvK1SLwcDpOtA6US3fIsTCBtRBPgtx2eF4ZDO0L2ii', NULL, 0, NULL, '123456', '52784', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-24 09:40:52', '2023-12-24 09:40:52', 'Male', NULL, NULL, NULL, NULL),
(353, 'SARLA', 'manbabupal16@gmail.com', 'RF336156', '$2y$10$/kcwoKKNdYSCMv7vVrkkSOTpyMfHjg8q1zJfBAuYfG6unTA2crVdu', 69, 352, '6387699448', 'Right', NULL, 0.00, 'Pending', '2023-12-24', 4, '$2y$10$olTDiFgzaM9MmC1bpowQc.I8IWdXMXKmyUeWzWFIEuWn63IrVvgo2', NULL, 0, NULL, '123456', '61815', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-24 09:41:01', '2023-12-24 09:41:01', 'Male', NULL, NULL, NULL, NULL),
(354, 'SARLA', 'manbabupal16@gmail.com', 'RF416914', '$2y$10$fLbmyEpdjencJqyoXqANm.PBGKHzEWdeldwqDxGegQAeAOwMNhQzi', 69, 353, '6387699448', 'Right', NULL, 0.00, 'Pending', '2023-12-24', 4, '$2y$10$Qvh0.J6sVQCt7EHQiDsqxOJYDRJ8O.C/9p3wl5wxxwIFtUJT2dHiy', NULL, 0, NULL, '123456', '69783', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-24 09:41:09', '2023-12-24 09:41:09', 'Male', NULL, NULL, NULL, NULL),
(355, 'SARLA', 'manbabupal16@gmail.com', 'RF407868', '$2y$10$1jQeaQoozsNAAF3882c.rONYfDdc7FhlPOJtXC0Ch/QjqOOxz8.fa', 69, 354, '6387699448', 'Right', NULL, 0.00, 'Pending', '2023-12-24', 4, '$2y$10$G2tKnalTdHcB.YXNCdZyiuyLGfmIrAgcstRXxRJUwb9ElyAXcr0cW', NULL, 0, NULL, '123456', '78045', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-24 09:41:18', '2023-12-24 09:41:18', 'Male', NULL, NULL, NULL, NULL),
(356, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF585634', '$2y$10$an.7PPTIivQwcQn26qk0q.pzmWlSOxcr/C8Fr1BtbOyORxD5wvgJ6', 61, 299, '07905088109', 'Right', NULL, 0.00, 'Pending', '2023-12-25', 4, '$2y$10$sWDT/zofKzwZ8LISWTOFbu6ONFfvDGh3Y9vooTMh6whh994rGo3cW', NULL, 0, NULL, '123456', '56102', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 06:34:16', '2023-12-25 06:34:16', 'Male', NULL, NULL, NULL, NULL),
(357, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF306866', '$2y$10$bi3.L3KP5I7Z81hXSG86z.OyS24SaMgnNese0UXP69ALd.8Yn6moi', 61, 356, '07905088109', 'Right', NULL, 0.00, 'Pending', '2023-12-25', 4, '$2y$10$YdAtbXH59YZ50cWtk2zyvurrz3PoKrbQOONlMdaojaZOmllWC8aSC', NULL, 0, NULL, '123456', '68981', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 06:34:28', '2023-12-25 06:34:28', 'Male', NULL, NULL, NULL, NULL),
(358, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF307631', '$2y$10$Z/TqMs2iyUiFZ9Jc..WjUev58LF8lyc7hs1ZYdZaOs5/WLzp/YJge', 61, 357, '07905088109', 'Right', NULL, 0.00, 'Pending', '2023-12-25', 4, '$2y$10$Mn/5.AV62w9fE9fMfpN85eiwINJHXrZ4N6bzIjrfxJAPG/bubixES', NULL, 0, NULL, '123456', '76103', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 06:34:36', '2023-12-25 06:34:36', 'Male', NULL, NULL, NULL, NULL),
(359, 'BALBEER SONKAR', 'shabih.shinecity@gmail.com', 'RF188245', '$2y$10$e5bhvovY1dCSyW/20iiW1O4MH3zyazWbcjKzIWfQk5BYeVhiJxakK', 61, 358, '07905088109', 'Right', 100.00, 0.00, 'Active', '2023-12-25', 4, '$2y$10$9n2x2MtOBF0tWqo6yl8wuulERk.tkzTvBCJIyHdMmi5dx0qTu.76i', '2024-01-18 20:20:01', 0, NULL, '123456', '82215', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 06:34:42', '2024-01-18 20:20:01', 'Male', NULL, NULL, NULL, NULL),
(360, 'Mohd shabih', 'shabih.shinecity@gmail.com', 'RF639227', '$2y$10$FJ6ZSWcKAevlt20Kqt1x/eW5d4jC5Fiy4.AK1Py2LyE4Jlr6vc3tW', 61, 359, '07905088109', 'Right', NULL, 0.00, 'Pending', '2023-12-25', 4, '$2y$10$/yokPQrqq.tUF4/LpcyzEujQ5v.6dMN0h7Z62tDm62oF24rIs.bTm', NULL, 0, NULL, '123456', '92302', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 06:34:52', '2023-12-25 06:34:52', 'Male', NULL, NULL, NULL, NULL),
(361, 'Ms', 'Shariqzaki2008@gmail.com', 'RF239251', '$2y$10$oynPhxoe9atMLW8xIdGKm.MrvuzH.p7SXVFCDFnGPi7obQxHPriHK', 295, 295, '6394454044', 'Left', NULL, 0.00, 'Pending', '2023-12-25', 5, '$2y$10$RkdlsQhDxuSfC/yXV4ozguzEfRLojGQMzMeNo8ML.ZkvAXls4/Tca', NULL, 0, NULL, '123456', '92046', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 08:11:33', '2023-12-25 08:11:33', 'Male', NULL, NULL, NULL, NULL),
(362, 'Szaki', 'shariqzaki2008@gmail.com', 'RF293891', '$2y$10$vbUSjsk980ZcF6jTpab37OOak3yYwDbgAKRsZRrVpJvHwQ7lOrQNe', 295, 361, '6394454044', 'Left', NULL, 0.00, 'Pending', '2023-12-25', 5, '$2y$10$dG3uWITmrgCrVEJNPj908OICN8VqnWeIANxOpuQ8texQH.Kpbe.PS', NULL, 0, NULL, '123456', '38289', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 08:20:38', '2023-12-25 08:20:38', 'Male', NULL, NULL, NULL, NULL),
(363, 'Szaki', 'shariqzaki2008@gmail.com', 'RF835907', '$2y$10$dAef/LsO27v6j/AZJDCifuuqAQwdO.MFWYAk5r8KjuJkV/CyHdutK', 295, 362, '6394454044', 'Left', NULL, 0.00, 'Pending', '2023-12-25', 5, '$2y$10$nt8zV2ZLlKKVtL.ziSQ3yOmzQtgFGZ4FwkfMF68xG2qx7enKRWRtC', NULL, 0, NULL, '123456', '59488', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 08:20:59', '2023-12-25 08:20:59', 'Male', NULL, NULL, NULL, NULL),
(364, 'Szaki', 'shariqzaki2008@gmail.com', 'RF426665', '$2y$10$7PRtERpD1xf5xbaGVzlVxONyG5Sk/gdTdq4y4DegximFjDJhqxxxu', 295, 363, '6394454044', 'Left', NULL, 0.00, 'Pending', '2023-12-25', 5, '$2y$10$w.oUUlIJvKGyvyNQblCeFOoYbFvpH/J4xXM.U5lDlAm.MzxreZ.ha', NULL, 0, NULL, '123456', '66709', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 08:21:06', '2023-12-25 08:21:06', 'Male', NULL, NULL, NULL, NULL),
(365, 'Szaki', 'shariqzaki2008@gmail.com', 'RF717256', '$2y$10$r3oSUoasYl1UOdh5bWvNPeBmOHoMFrfjCQPqQHESYB15FHR/IeczW', 295, 364, '6394454044', 'Left', NULL, 0.00, 'Pending', '2023-12-25', 5, '$2y$10$UJDj2ybbTEjITKWzflP4YelEr0C/JrbbIuhX6RnqlC1/lI0AYcipO', NULL, 0, NULL, '123456', '72811', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 08:21:12', '2023-12-25 08:21:12', 'Male', NULL, NULL, NULL, NULL),
(366, 'Szaki', 'shariqzaki2008@gmail.com', 'RF897923', '$2y$10$Hyt4/Le5TXtHBgk06xvkH.thj9MLhhgSH7nVc5G0V6wEvFGm63eVO', 295, 365, '6394454044', 'Left', NULL, 0.00, 'Pending', '2023-12-25', 5, '$2y$10$a6kN9XLWdJ0J5T2HxK4/z.cwcjrPjDoqlc1hsZuo5P/aET6R.gFHy', NULL, 0, NULL, '123456', '79794', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 08:21:19', '2023-12-25 08:21:19', 'Male', NULL, NULL, NULL, NULL),
(367, 'Szaki', 'shariqzaki2008@gmail.com', 'RF475178', '$2y$10$u/SuUO8K1YqL5wKYL9Oqzu9M59rSEKcAetJNpYmocfejI0D67GHyy', 295, 366, '6394454044', 'Left', NULL, 0.00, 'Pending', '2023-12-25', 5, '$2y$10$LjryZ256NMJJDrPouUW8jOEsehS3fZF7c.tuHWYozquRNEH0qfrJS', NULL, 0, NULL, '123456', '51645', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 08:22:31', '2023-12-25 08:22:31', 'Male', NULL, NULL, NULL, NULL),
(368, 'Szaki', 'shariqzaki2008@gmail.com', 'RF346286', '$2y$10$WenOCQbShmYXKFpD4nXd5exIhsB.h5u4nLuo4gOGJVRdPHdmxwgLa', 295, 367, '6394454044', 'Left', NULL, 0.00, 'Pending', '2023-12-25', 5, '$2y$10$DU5JKUuam5x072WVQl7Rlu5HYIK2yVTgut/fzFVRrENnnEQ3V2p6e', NULL, 0, NULL, '123456', '62673', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 08:22:42', '2023-12-25 08:22:42', 'Male', NULL, NULL, NULL, NULL),
(369, 'Szaki', 'shariqzaki2008@gmail.com', 'RF637707', '$2y$10$6lNPv4C4XL1HkREeAqzjeeSqJE.veoKKbAJhcBhSWRX5rKRwAHwke', 295, 368, '6394454044', 'Left', NULL, 0.00, 'Pending', '2023-12-25', 5, '$2y$10$DCpnL1mGdbQt8UrVcU9cQO8Rsm0J/zz/nnFBjWm./LwjbrioeDn4u', NULL, 0, NULL, '123456', '77009', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 08:22:57', '2023-12-25 08:22:57', 'Male', NULL, NULL, NULL, NULL),
(370, 'Szaki', 'shariqzaki2008@gmail.com', 'RF816414', '$2y$10$XqWYZG0rWQu6QcCh4HtNHuPQCHhTIu.AAKCUSwwaKRD.b/QJAI9j6', 295, 360, '6394454044', 'Right', NULL, 0.00, 'Pending', '2023-12-25', 5, '$2y$10$Ye7zmchhnxEPzPGhAbaw3OSKfnpD5B9.3ENLHqu5znii/Ybfw5MTy', NULL, 0, NULL, '123456', '64621', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-25 08:34:25', '2023-12-25 08:34:25', 'Male', NULL, NULL, NULL, NULL),
(371, 'N K BABU', 'manbabupal16@gmail.com', 'RF282674', '$2y$10$YFkSd/X5.q9jUDtJwmBMG.9h5LpMPpVYsDhufvUwwktZ70wzxXS8S', 349, 355, '6387699448', 'Right', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$wAgKdfd9/miW20JFuvtOv.QALPzQDPWviaeuxHUxXhWPYMj3Sqknm', NULL, 0, NULL, '123456', '26062', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:45:26', '2023-12-26 10:45:26', 'Male', NULL, NULL, NULL, NULL),
(372, 'N K BABU', 'manbabupal16@gmail.com', 'RF089326', '$2y$10$5btKMx.O1AHup5/CBwmQ.OcB7Q7Z4ojPGWQhJrecEdjP1k0X/WltK', 349, 371, '6387699448', 'Right', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$zYZaHPqc0VDRAcsBqlMx.OeIOmUr9tWLdHu5IsEwwHmlX9w01VNzG', NULL, 0, NULL, '123456', '93043', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:46:33', '2023-12-26 10:46:33', 'Male', NULL, NULL, NULL, NULL),
(373, 'N K BABU', 'manbabupal16@gmail.com', 'RF010946', '$2y$10$KmQX2ZoXpBnokMU6NQj9U.1oT61mq0Hc8efW1E.rShlncjeqRTjLS', 349, 372, '6387699448', 'Right', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$ZpDElKFhMXSTbMgYZNkBu.u.kLRBII5AFVURKPAuaI8991QSvdq5K', NULL, 0, NULL, '123456', '09328', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:46:50', '2023-12-26 10:46:50', 'Male', NULL, NULL, NULL, NULL),
(374, 'N K BABU', 'manbabupal16@gmail.com', 'RF114428', '$2y$10$yYwH/rO5sGdU9B2Ey.HeaOrqgLkLpP5LEArejhWRZtOc5RL0NzqfC', 349, 373, '6387699448', 'Right', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$oh71iBKCBMRWefbfPdGUf.m66RptGHjOYV21vqo.S/NuX1tx15kSG', NULL, 0, NULL, '123456', '44043', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:47:24', '2023-12-26 10:47:24', 'Male', NULL, NULL, NULL, NULL),
(375, 'N K BABU', 'manbabupal16@gmail.com', 'RF015306', '$2y$10$l.ioonZqCBatyAlxUoYBouLHat.nWPVPpoeQf79mpYnKQdVg6f2oG', 349, 374, '6387699448', 'Right', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$nm5vbodgzpE..jWa5iZhVeMp/zj2GpDiGoNj6dhdAA8F2M7TE8.BK', NULL, 0, NULL, '123456', '53914', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:47:33', '2023-12-26 10:47:33', 'Male', NULL, NULL, NULL, NULL),
(376, 'N K BABU', 'manbabupal16@gmail.com', 'RF526579', '$2y$10$6zFR.kPVspIaWpwohU2WTesSPDBNanKbitRWfbXmLkUyBJi3FUXUa', 349, 375, '6387699448', 'Right', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$sUKapV9gtCc01jC6cAZ0Qebe0pX/U1qAvGDOdsjKScvweY.uowLWG', NULL, 0, NULL, '123456', '65653', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:47:45', '2023-12-26 10:47:45', 'Male', NULL, NULL, NULL, NULL),
(377, 'N K BABU', 'manbabupal16@gmail.com', 'RF427386', '$2y$10$o67t1chWpM/1SetmB/sqLuFIn73iUP7T8YokCoDusPaM5vEEK4t0.', 349, 349, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$hIauDnab5QE2a9XAPwQfW.Au7E0rW3gvDFiaPHB8jJlP85c5Jzzyu', NULL, 0, NULL, '123456', '73336', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:47:53', '2023-12-26 10:47:53', 'Male', NULL, NULL, NULL, NULL),
(378, 'N K BABU', 'manbabupal16@gmail.com', 'RF821121', '$2y$10$a0l3bGbJkl2AtjKys4HgSOos411sqoEhDMqsvhs93p24CMyjVhj9i', 349, 377, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$xfBztWpcN14SV1M5euq3Fe4KaxNxGnpr/W/ciGIT1szeLLRf5mAx.', NULL, 0, NULL, '123456', '11296', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:48:31', '2023-12-26 10:48:31', 'Male', NULL, NULL, NULL, NULL),
(379, 'N K BABU', 'manbabupal16@gmail.com', 'RF272529', '$2y$10$g75dtgEKoJgDKp/yL0k5IuAwKOwvd7BSPX2AHcrhVCydNIMBxStxi', 349, 378, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$lVQ7D54oAClXEGtywU5zjeIswFB0aYH7XueqlE1v3IjQXNtkoXVaa', NULL, 0, NULL, '123456', '25973', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:48:45', '2023-12-26 10:48:45', 'Male', NULL, NULL, NULL, NULL),
(380, 'N K BABU', 'manbabupal16@gmail.com', 'RF303431', '$2y$10$cbrKKoltLYPcU60AUQ2l9ec3W2LZDiqrXGpC8ZHSgy8Dj62Nqd.Oi', 349, 379, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$sbkD/GWunmF6Z/NAT3Rt9umTtDlkgbeS.emcucPyuR976xB.VW5W.', NULL, 0, NULL, '123456', '34659', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:48:54', '2023-12-26 10:48:54', 'Male', NULL, NULL, NULL, NULL),
(381, 'N K BABU', 'manbabupal16@gmail.com', 'RF894499', '$2y$10$cBPNs0i5qjef.wHtzMwQLOLcBWJqwSgGE8nIuGsSooTBlhbl1m42.', 349, 380, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$8Wm10GrpGgIohNaBoenYm.lhQyMTws0/OxFR2FgKNe7vsamv9Z2lO', NULL, 0, NULL, '123456', '44511', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:49:05', '2023-12-26 10:49:05', 'Male', NULL, NULL, NULL, NULL),
(382, 'N K BABU', 'manbabupal16@gmail.com', 'RF835394', '$2y$10$Br4lB/r052qT4Qq8IMBLP.dy9Ooe./748NgMVnMbyDxnOidxNh6Ye', 349, 381, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$.BXVh0.6plKhypYv/vpMY.OVZamWrC0nVhkiBlrY/noeoeZ3.W/iq', NULL, 0, NULL, '123456', '53970', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:49:13', '2023-12-26 10:49:13', 'Male', NULL, NULL, NULL, NULL),
(383, 'N K BABU', 'manbabupal16@gmail.com', 'RF758230', '$2y$10$mtAEj7EE8CW4OvyUiL9HT.e5KQTgLhYF6tY5Mca0sZikHIJRrDG4S', 349, 382, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$WF8uvvLLDiPk15NYCt11pe7AyIXfMaf/Gm1Odwj18X0e53m86NwFC', NULL, 0, NULL, '123456', '82939', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:49:42', '2023-12-26 10:49:42', 'Male', NULL, NULL, NULL, NULL),
(384, 'N K BABU', 'manbabupal16@gmail.com', 'RF780886', '$2y$10$LPk9mbJG.gM821VthuJtce3BmBnGRmpFI/hD0B4LjtJ6fdM8AqRP2', 349, 383, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$NTg9bzQhCIW1ryWfwZisB.le.ghZOPnUYYvoGGEl.gdiHTp6BDyzO', NULL, 0, NULL, '123456', '08542', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:50:08', '2023-12-26 10:50:08', 'Male', NULL, NULL, NULL, NULL),
(385, 'N K BABU', 'manbabupal16@gmail.com', 'RF633223', '$2y$10$bvaataFts1ptu6lJX4w6AOxVTkvNqRHKdSlqwCcddfRTU7Ctp9hl2', 349, 384, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$gPJgWjA8Rk9dzVCAyL6ZBO.GFUk4W4gGwUc90Zlq1YUj8FOysS6eO', NULL, 0, NULL, '123456', '32675', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:50:33', '2023-12-26 10:50:33', 'Male', NULL, NULL, NULL, NULL),
(386, 'N K BABU', 'manbabupal16@gmail.com', 'RF864712', '$2y$10$I1PbJr9W/LjPP5GxL2vv0e4fb2u5gWg.2ncjCK1p.kzphH.G4Uy7C', 349, 385, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$HWj7VtflHlVnJvfp1HbyTuzA/cyoVJRr.t6YWEyJ2xdjhMqBm34Wy', NULL, 0, NULL, '123456', '47515', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:50:47', '2023-12-26 10:50:47', 'Male', NULL, NULL, NULL, NULL),
(387, 'N K BABU', 'manbabupal16@gmail.com', 'RF415233', '$2y$10$Ou2ajWDS57jLVfQpdQdxZOcRw5qM832gLFQG1Q06MD2kgp61zzxym', 349, 386, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$Me.TUfzzTr6Df5yNDrsWo.w4kNN/bLozYD9abjcUCghKD62dWce52', NULL, 0, NULL, '123456', '52236', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:50:52', '2023-12-26 10:50:52', 'Male', NULL, NULL, NULL, NULL),
(388, 'N K BABU', 'manbabupal16@gmail.com', 'RF795602', '$2y$10$0z8qPnoCX4m0.KKPDpLWbOvQgoDl123zGBPfO5NGbHzWLsiB7IBXu', 349, 387, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$RkN5TI7iVpycW1thzUvfBucMT9l0a.i6qi61u6YMzRfNfDbBk9Ql.', NULL, 0, NULL, '123456', '56925', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:50:56', '2023-12-26 10:50:56', 'Male', NULL, NULL, NULL, NULL),
(389, 'N K BABU', 'manbabupal16@gmail.com', 'RF606155', '$2y$10$O0EbeRYSn2uiMPM0EdgYyuibp4ueNYmq5f7XJSK3msvGFaAwvp3LS', 349, 388, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$p6/3Q2VpeDIOQcWmcjszxukwvwhj8v7Afn2LuSAPb/ud2N3eIC6i.', NULL, 0, NULL, '123456', '61961', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:51:01', '2023-12-26 10:51:01', 'Male', NULL, NULL, NULL, NULL),
(390, 'N K BABU', 'manbabupal16@gmail.com', 'RF306780', '$2y$10$VeaeWAspSXRzmq9sqyg4ZuCEgc8IW.91BcwPGWnGjcd95ZK0YCMfC', 349, 389, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$aA2IiomuTGL3pcJtMruiKeB8hvY9WLYk9cResHwZEz2AkKUHxbLEO', NULL, 0, NULL, '123456', '67867', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:51:07', '2023-12-26 10:51:07', 'Male', NULL, NULL, NULL, NULL),
(391, 'N K BABU', 'manbabupal16@gmail.com', 'RF938095', '$2y$10$N85QvobprxW1EbcoBOTpful5XaHW/BYGl9pV0QCRimAww9jWKe06G', 349, 390, '6387699448', 'Left', NULL, 0.00, 'Pending', '2023-12-26', 5, '$2y$10$w8smKtFxMALiPrdiWVfwa.h8kEl4BCd76z5E6S6Izp.QadIqjTdAW', NULL, 0, NULL, '123456', '80925', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:51:20', '2023-12-26 10:51:20', 'Male', NULL, NULL, NULL, NULL),
(392, 'JS PAL', 'manbabupal16@gmail.com', 'RF258934', '$2y$10$uSBn18myLviqXgQvGOB9U.tJrylQOMrWQIG1k7iZga6S1QEsi.uAS', 349, 391, '6387699448', 'Left', 100.00, 0.00, 'Active', '2023-12-26', 5, '$2y$10$22OiZcocOEbsB4wAUI3MOOW7Rwk4SEbS.Wv3vof.1OtZiA9DQEMHu', '2024-01-01 14:58:34', 0, NULL, '123456', '89429', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-26 10:51:29', '2024-01-01 14:58:34', 'Male', NULL, NULL, NULL, NULL),
(393, 'LALAN Nishad', 'manbabupal16@gmail.com', 'RF911845', '$2y$10$jGT6Xhraqmbwlb0l7mHQxedsMy7yZjU7EEM/ImeMbmLoJ6pVtngnC', 351, 351, '6357969448', 'Left', NULL, 0.00, 'Pending', '2023-12-27', 5, '$2y$10$WZZIlxsonKPghCpPRch3KOzxQf/Q75UZOVkPbbpjoQJbdQn.lWl/6', NULL, 0, NULL, '123456', '18275', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-27 09:58:38', '2023-12-27 09:58:38', 'Male', NULL, NULL, NULL, NULL),
(394, 'LALAN Nishad', 'manbabupal16@gmail.com', 'RF403077', '$2y$10$.HtLUqTZ7X9yqQ4G4EdhNOoMl8zIr2ow7yoaM.sgcs4Py7i9r95Q6', 351, 376, '6357969448', 'Right', NULL, 0.00, 'Pending', '2023-12-27', 5, '$2y$10$MWc8ybDgUyXqMC0fbyxTNezdrRD0YU1Ng.M8wz5A8AH228brGJ7pi', NULL, 0, NULL, '123456', '30386', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-27 09:58:50', '2023-12-27 09:58:50', 'Male', NULL, NULL, NULL, NULL),
(395, 'LALAN Nishad', 'manbabupal16@gmail.com', 'RF595366', '$2y$10$OEoPyetlGv1ns34wyfyD..ns48gIP2NsNWOIBfgUEhgKnfdXZ93rS', 351, 393, '6357969448', 'Left', NULL, 0.00, 'Pending', '2023-12-27', 5, '$2y$10$aHJfHT8d/yjRfjPaEKcLM.S/fxvkpYQaJYmCXJKK9AHzmjWxM3T1q', NULL, 0, NULL, '123456', '53544', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-27 09:59:13', '2023-12-27 09:59:13', 'Male', NULL, NULL, NULL, NULL),
(396, 'LALAN Nishad', 'manbabupal16@gmail.com', 'RF365799', '$2y$10$Pep4.DJmDShIbR8Gpr4d8u4YyX61cGPYOx7yodhRXucpdPvdP5cCC', 351, 395, '6357969448', 'Left', NULL, 0.00, 'Pending', '2023-12-27', 5, '$2y$10$Wcej9Eryi8XHUVlYo.8HQeR6FiLJ4y2VQKh888Z8yLoaOLnSBGnpi', NULL, 0, NULL, '123456', '57477', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-27 09:59:17', '2023-12-27 09:59:17', 'Male', NULL, NULL, NULL, NULL),
(397, 'LALAN Nishad', 'manbabupal16@gmail.com', 'RF826249', '$2y$10$d51wamXIN5Xc8HXQqawCZOJcB9nF5eS.VhuOGSypp9QU8LVAADLTG', 351, 396, '6357969448', 'Left', NULL, 0.00, 'Pending', '2023-12-27', 5, '$2y$10$uMdo4AudQ6uJD1eOmH10jefHfsv6Y71q7rsWTlzSUsrfnuaZg7CWW', NULL, 0, NULL, '123456', '62534', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-27 09:59:22', '2023-12-27 09:59:22', 'Male', NULL, NULL, NULL, NULL),
(398, 'LALAN Nishad', 'manbabupal16@gmail.com', 'RF166703', '$2y$10$rqqfg3Cx2698eGwuUSwca.iWOvoClM2kH.Qg2WheRkLsVKNHCyt1i', 351, 397, '6357969448', 'Left', NULL, 0.00, 'Pending', '2023-12-27', 5, '$2y$10$iaV/xDK4iarmMSbCx8.CMu.0Orp8REZ.iqDdcCT9BddHImJ1SFGcW', NULL, 0, NULL, '123456', '67385', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-27 09:59:27', '2023-12-27 09:59:27', 'Male', NULL, NULL, NULL, NULL),
(399, 'LALAN Nishad', 'manbabupal16@gmail.com', 'RF847176', '$2y$10$3N5j4grcuC7pdjSxxEgdIOI58CApacdnapVNUBMmZ7Qd14a6hKoWy', 351, 398, '6357969448', 'Left', NULL, 0.00, 'Pending', '2023-12-27', 5, '$2y$10$/y0bT70Dh7ySJYCKPtmmVuR5XzD3cirUt3VbOJ7oB9bSvV6SLs/W2', NULL, 0, NULL, '123456', '71125', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-27 09:59:31', '2023-12-27 09:59:31', 'Male', NULL, NULL, NULL, NULL),
(400, 'LALAN Nishad', 'manbabupal16@gmail.com', 'RF967468', '$2y$10$KjAOlA14B.zBfrv3E7uw5eZYkBCUsd7RIP/jA9NLvny94.zqE5n1.', 351, 399, '6357969448', 'Left', NULL, 0.00, 'Pending', '2023-12-27', 5, '$2y$10$Rz5zHTrqc1qdjolFo1lLO.Crtk9xe7k/4tx7I5xeT3J4bYOz33nXm', NULL, 0, NULL, '123456', '74182', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-27 09:59:34', '2023-12-27 09:59:34', 'Male', NULL, NULL, NULL, NULL),
(401, 'LLAN NISHAD', 'lallannishadlallan@gmail.com', 'RF593125', '$2y$10$NJ3VlcZx6n.OnJ2Kfi4ILObhFqOkzOz5KockO4dWauHQg1Jg4Ro2m', 393, 393, '9794989289', 'Right', NULL, 0.00, 'Pending', '2023-12-27', 6, '$2y$10$19eqfITMhGnjVCF5Ddu6AuLUaptG/tyCnTOe1zReb5iPjlW8GfX.G', NULL, 0, NULL, '123456', '31514', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-27 15:50:31', '2023-12-27 15:50:31', 'Male', NULL, NULL, NULL, NULL),
(402, 'SANJAY SONKAR', 'sanjaysonkar88959@gmal.com', 'RF932260', '$2y$10$qt/aIwlnQSSsRamW6En2m.BWDdaQSJwTspHV5I5XX4p32rLcoZfHu', 299, 370, '7523988814', 'Right', 100.00, 0.00, 'Active', '2023-12-31', 5, '$2y$10$6MNLSJMPj5cRkG9ulCB.e.i6JKPMQKgOc0liZAPNSTvMyoyw4StHW', '2023-12-31 21:59:04', 0, NULL, '123456', '22033', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-31 16:25:22', '2023-12-31 21:59:04', 'Male', NULL, NULL, NULL, NULL),
(403, 'SANJAY SONKAR', 'sanjaysonkar88959@gmal.com', 'RF277043', '$2y$10$CsIMzCOtAoOfQOIHUHTk4uL/qtyS88v8BOJu73xd8OWSf7lKShYZ.', 299, 299, '7523988814', 'Left', 100.00, 0.00, 'Active', '2023-12-31', 5, '$2y$10$rwp0NBGaFIEptyholt3ML.Oq2eP1x2coCiLuDmwRcHD0urmwX9LD2', '2023-12-31 21:59:57', 0, NULL, '123456', '70726', 0, '0', '0', 0.00, 'India', NULL, NULL, '2023-12-31 16:26:10', '2023-12-31 21:59:57', 'Male', NULL, NULL, NULL, NULL),
(404, 'BABU RAM', 'Bro277095@gmal.com', 'RF283461', '$2y$10$pbqTqWGq7X79fbFQw8KfLu4OGp/MQMY0j8RtU5/MODLYAm8/.FtzC', 66, 66, '9369117339', 'Right', 500.00, 0.00, 'Active', '2024-01-01', 4, '$2y$10$mwpuL5t5k9qaw2ETu9kTVOh5e8SRFbQO4L1vOhwLmW8jzPfjREQ3u', '2024-01-01 12:56:40', 0, NULL, '123456', '34605', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-01 07:12:14', '2024-02-20 06:42:05', 'Male', NULL, NULL, NULL, NULL),
(405, 'BABU RAM', 'Bro277095@gmal.com', 'RF380836', '$2y$10$Z0iXA7ejdwY23pYHV9vud.kGtXyOCCrNjSs9OjSjdY01G7X5nGGMy', 66, 348, '9369117339', 'Left', 100.00, 0.00, 'Active', '2024-01-01', 4, '$2y$10$ae8G67wP2x0CUgxHXcH8seFFYTr3hPygsB6AZv.6mTOKEd7Hue3KK', '2024-01-01 12:55:30', 0, NULL, '123456', '08524', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-01 07:13:28', '2024-01-01 12:55:30', 'Male', NULL, NULL, NULL, NULL),
(406, 'BABU RAM', 'Bro277095@gmal.com', 'RF841691', '$2y$10$cOmXH2gP/REL8ox5EskJre3D.cLt7XzljN3zLd9pn0OhVBMQuxgca', 404, 404, '9369117339', 'Left', 400.00, 0.00, 'Active', '2024-01-01', 5, '$2y$10$OYYPyNi5jyzxr34StgrFAOCkRxnwopuchMlym.Xw7khwXWkbiAQKm', '2024-01-01 13:01:39', 0, NULL, '123456', '16239', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-01 07:18:37', '2024-01-01 13:01:39', 'Male', NULL, NULL, NULL, NULL),
(407, 'AJAY SINGH DR.', 'Bro277095@gmal.com', 'RF454511', '$2y$10$dRBCPtC8SVltYBNc.WiNNOkYp78KFidLWUvfw5d.Qfl0DSVxZ8Nuq', 404, 404, '9369117339', 'Right', 100.00, 0.00, 'Active', '2024-01-01', 5, '$2y$10$y8hHZyjecSgo5AOKJMyCSegRuM1jaXdvgS81OUNPcBc.ELd26s9q2', '2024-02-20 16:07:39', 0, NULL, '123456', '45036', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-01 07:20:45', '2024-02-20 16:07:39', 'Male', NULL, NULL, NULL, NULL),
(408, 'BABU RAM', 'Bro277095@gmal.com', 'RF577176', '$2y$10$LV8dKWBK.SFV8FtL4apOwO/iWbTcX96Ia8vJUgLS8gbtAAR5BnrMi', 404, 407, '9369117339', 'Right', NULL, 0.00, 'Pending', '2024-01-01', 5, '$2y$10$CPMBhVq6DIC0LYyt62ZAjuiQP7XFBsgGw8qmkQ2gOI6Zg2aqvTiJm', NULL, 0, NULL, '123456', '71067', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-01 07:21:11', '2024-01-01 07:21:11', 'Male', NULL, NULL, NULL, NULL),
(409, 'BABU RAM', 'Bro277095@gmal.com', 'RF698338', '$2y$10$s5yMG2lrXVKQEDULLLToVu954BSMygkzqas61G3v3tGwGvZPlnJTa', 404, 408, '9369117339', 'Right', NULL, 0.00, 'Pending', '2024-01-01', 5, '$2y$10$mxdUNgy5tyGvbsAULa7vKu.qKwFnbyrsRQ1Q245CtuMA2v.e74Suu', NULL, 0, NULL, '123456', '83526', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-01 07:21:23', '2024-01-01 07:21:23', 'Male', NULL, NULL, NULL, NULL),
(410, 'BABU RAM', 'Bro277095@gmal.com', 'RF718837', '$2y$10$65wDTQIpVbvWBRJjGfhoGOPdQ6w8lCO8SBu/bVCMFNtUl.dhrJO1q', 404, 409, '9369117339', 'Right', NULL, 0.00, 'Pending', '2024-01-01', 5, '$2y$10$Aq2HARFCpndEQWdjkuTDBeebdFKEWtNMSoVHtNtpuy/J2P0OhLiii', NULL, 0, NULL, '123456', '88977', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-01 07:21:28', '2024-01-01 07:21:28', 'Male', NULL, NULL, NULL, NULL),
(411, 'BABU RAM', 'Bro277095@gmal.com', 'RF209399', '$2y$10$zhKAF2Lt2yCTPQk1WFbMEuOI8H6OwAW1TfMZL4VrvbUnmoGye./Bq', 404, 410, '9369117339', 'Right', NULL, 0.00, 'Pending', '2024-01-01', 5, '$2y$10$2i8t3hw2xhhMPTUwcTdqzO4PxaBQMVqXhq/puVODnjf5MkdTtO8U.', NULL, 0, NULL, '123456', '93502', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-01 07:21:33', '2024-01-01 07:21:33', 'Male', NULL, NULL, NULL, NULL),
(412, 'BABU RAM', 'Bro277095@gmal.com', 'RF750108', '$2y$10$QxLfca.FOJS9vmoq/M1ZB.NcmWbKgtmeCvBnNstc6qpyNGRFsXS6q', 404, 411, '9369117339', 'Right', 400.00, 0.00, 'Active', '2024-01-01', 5, '$2y$10$t4xK35eHDMIyx.84RYZqPO8nYo3rN8BDE8b1aeVF6dPEZDChu3zPO', '2024-01-01 12:57:42', 0, NULL, '123456', '01060', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-01 07:21:41', '2024-01-01 12:57:42', 'Male', NULL, NULL, NULL, NULL),
(413, 'BABU RAM', 'Bro277095@gmal.com', 'RF576309', '$2y$10$T2QpYFIwujBvXxSwCH8YzuNlrkGXQRGrOHqLRtocqEtSj2G2LBngS', 404, 412, '9369117339', 'Right', 100.00, 0.00, 'Active', '2024-01-01', 5, '$2y$10$Lowvtvegmu0zW52eaKv9z.1XG/h8PnYemtMLF6vId8zUybek1J5s6', '2024-01-01 12:58:39', 0, NULL, '123456', '63663', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-01 07:22:43', '2024-01-01 12:58:39', 'Male', NULL, NULL, NULL, NULL),
(414, 'ARUN KUMAR', 'Dk82091@gmail.com', 'RF552567', '$2y$10$YVJz45UDNB3JXR7R6YofBuohz/GKcD559nlLbiK7bwC0sg46pf8AK', 392, 392, '8840871801', 'Left', 100.00, 0.00, 'Active', '2024-01-01', 6, '$2y$10$9JlNVZHqvFOIv0zWQpgWjOUMPXGWKcgkHwxMudzdqjKqnSr5k.Hrm', '2024-01-01 15:06:41', 0, NULL, '123456', '25295', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-01 09:33:45', '2024-01-01 15:06:41', 'Male', NULL, NULL, NULL, NULL),
(415, 'ARUN KUMAR', 'Dk82091@gmail.com', 'RF175988', '$2y$10$hhp6xRo3pgHbS7RbZasDbeW0zT9/0A3ArIGDgY1Zx1MVT7NS.jXCS', 392, 392, '8840871801', 'Right', NULL, 0.00, 'Pending', '2024-01-01', 6, '$2y$10$TwGfVjCuMUFVoa20I9AtxOnonWdPHaVEzPb8TUrlkpL2EvtvyfStq', NULL, 0, NULL, '123456', '59163', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-01 09:34:20', '2024-01-01 09:34:20', 'Male', NULL, NULL, NULL, NULL),
(416, 'BIHARI', 'manbabupal16@gmail.com', 'RF941373', '$2y$10$yOVl2AU9pDyhLToyyJ3Y9.eH/twIyPB.4qHAAdnH/EXxKd2mBZOP.', 349, 394, '9721216290', 'Right', 100.00, 0.00, 'Active', '2024-01-01', 5, '$2y$10$Sry2Ilc6d8u0aEzrnlVU.OwsSyLwfF86jkD4RJCUGu1zUN0ZQeUHG', '2024-01-01 15:13:11', 0, NULL, '123456', '13289', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-01 09:41:53', '2024-01-06 10:42:33', 'Male', NULL, NULL, NULL, NULL),
(417, 'SABINA KHATOON', 'sabinakhatoon70289@gmal.com', 'RF145052', '$2y$10$YYg05m.Adwd5AZ1m1Y.v2eHc0/6.SSN/EypYARubeCt.3bu.JKVF6', 404, 413, '8917882922', 'Right', 100.00, 0.00, 'Active', '2024-01-04', 5, '$2y$10$C8RBrpy23CsL10c/Rxq3WeXjHeOaZzjohouoEkqJ9uHQgYaTt1Mx6', '2024-01-04 08:56:09', 0, NULL, '123456', '50538', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-04 03:24:10', '2024-01-04 08:56:09', 'Male', NULL, NULL, NULL, NULL),
(418, 'JEETU BHAI', 'REJOICEFX@gmail.com', 'RF701198', '$2y$10$SbqughQaH1mJyT6VxIoKMuKlfblQhkeyKyP5pL6CY30431HS2gHue', 1, 251, '1234567890', 'Right', 100.00, 0.00, 'Active', '2024-01-06', 1, '$2y$10$cP45YI83iUBjK8GFQ7LWh.HyZcjI0onyL1vBd.jmfUsQQZRS8d8EK', '2024-03-03 15:04:05', 0, NULL, '123321', '11451', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:31:51', '2024-03-03 09:36:27', 'Male', NULL, NULL, NULL, NULL),
(419, 'SHAILENDRA SINGH', 'REJOICEFX@gmail.com', 'RF731641', '$2y$10$nUqvnCSeKdk8V2SkTvsgpuR8lxH1duRBkY7RwuycFLqsGb.erQdVm', 1, 418, '9757366308', 'Right', 100.00, 0.00, 'Active', '2024-01-06', 1, '$2y$10$N4T6VlZeGLX0gIwO1tecyO3hXvoA9RpRDHRrLNYxG2NCHd9XRC.Vu', '2024-03-03 15:04:35', 0, NULL, '123321', '16072', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:31:56', '2024-03-03 11:25:39', 'Male', NULL, NULL, NULL, NULL),
(420, 'REJOICE', 'REJOICEFX@gmail.com', 'RF992189', '$2y$10$ecuTe/NBlZoZ4FE5JhcpXuhiUXZEKfEXfK/ixejBNobOjqUWf1tMG', 1, 419, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$yDqiZlwVi3yHp8AkJ0Y1Sen0Iokvb.ywFmnooW795K/mSCEla67c.', NULL, 0, NULL, '123321', '21449', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:32:01', '2024-01-06 06:32:01', 'Male', NULL, NULL, NULL, NULL),
(421, 'REJOICE', 'REJOICEFX@gmail.com', 'RF242560', '$2y$10$SGbuIygkFfSON0St3IPNfOPhV9HupMgON1ZTpmh2J.HXAyO37KtIa', 1, 420, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$rilZPvwLjaZodDQSjOBi2O3sDi3Io7JNnPzsbBCqbDqM4Wu.JuhrK', NULL, 0, NULL, '123321', '25616', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:32:06', '2024-01-06 06:32:06', 'Male', NULL, NULL, NULL, NULL),
(422, 'REJOICE', 'REJOICEFX@gmail.com', 'RF693277', '$2y$10$sP9LXmAFc7HdJQBB4EN44uR3pUtnvYIJf62vE/JrzNtPc3ofa8fIG', 1, 421, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$4o63KzZ6bh7enSTynedrwu/TkmIY6SxjF7EqttqvQcC0d9gdpRGKK', NULL, 0, NULL, '123321', '32735', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:32:12', '2024-01-06 06:32:12', 'Male', NULL, NULL, NULL, NULL),
(423, 'REJOICE', 'REJOICEFX@gmail.com', 'RF003481', '$2y$10$m.OVgDwGBku0l.cQ56v5RO9ryNPGVedDRct7YYb.xTzn7sspEV3Sq', 1, 422, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$sjNaSisT2wyZwpI4iIt3N.85YEI0g9MQIFioloDvJLLTaAKsvKK2C', NULL, 0, NULL, '123321', '34087', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:32:15', '2024-01-06 06:32:15', 'Male', NULL, NULL, NULL, NULL),
(424, 'REJOICE', 'REJOICEFX@gmail.com', 'RF993768', '$2y$10$LCCcRajtU5.dL5F.fs0Gte.lbIYi4oS6pIJtSgkLNPgwVGfIQEVNu', 1, 423, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$r9Y8gE8nqsZm7Iq0ZrifF.9E.Kp1SBTV54GEGQbyHjZxVH9dArxHq', NULL, 0, NULL, '123321', '37147', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:32:17', '2024-01-06 06:32:17', 'Male', NULL, NULL, NULL, NULL),
(425, 'REJOICE', 'REJOICEFX@gmail.com', 'RF373939', '$2y$10$v5ONoFxZxdHUN9NGj.AhCezZlwtXFx5Gei8MRyL3Mp1ybhv/rSz3m', 1, 424, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$DeCzWqP06XPnRskMQH9yHOGkFAsiLA9rTZgLI6oHWiVQA95huX9yq', NULL, 0, NULL, '123321', '39632', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:32:19', '2024-01-06 06:32:19', 'Male', NULL, NULL, NULL, NULL),
(426, 'REJOICE', 'REJOICEFX@gmail.com', 'RF434208', '$2y$10$nzHQYTgFT0oxj5XJwLGyQOL8EVft5ZkaaQAU/Duqo1QBuoBasQ16q', 1, 425, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$JBAaxvIAHaxaNsMF5x2VnOFqo9PhhWCNS5cg0TVPMWjhXhFn3uxKK', NULL, 0, NULL, '123321', '42006', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:32:22', '2024-01-06 06:32:22', 'Male', NULL, NULL, NULL, NULL),
(427, 'REJOICE', 'REJOICEFX@gmail.com', 'RF914440', '$2y$10$Als10q94ZodNQxZRIcwoWuDN5rZPxghY8sxfkWJ69PXSBcvmYZrzW', 1, 426, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$5yFyScU9Uoms.pROE.XLKuicdSb2.raNcviC3S7YyjnnDjd6yJeIy', NULL, 0, NULL, '123321', '44901', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:32:25', '2024-01-06 06:32:25', 'Male', NULL, NULL, NULL, NULL),
(428, 'REJOICE', 'REJOICEFX@gmail.com', 'RF634773', '$2y$10$sihjyraPKaaqmyITKD7BTO309w/8w3khREWmjnzitkcwnp1hUhw8e', 1, 427, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$jO18lfHQtb3f1f2WFnhDreEfq6T9fxBlyu5spJmItKccHXb9afGAK', NULL, 0, NULL, '123321', '47572', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:32:27', '2024-01-06 06:32:27', 'Male', NULL, NULL, NULL, NULL),
(429, 'REJOICE', 'REJOICEFX@gmail.com', 'RF555196', '$2y$10$T0L2m2gzq5.eBW1DRo/gwe.Xy6S/L/rt7hrpUh1lIw58HQIimlDje', 1, 428, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$fsgFqsWrI2NdrU5bp1/0OuLGW3gMNdGDkPvJ.m0976c9uhWQW3Lpu', NULL, 0, NULL, '123321', '51249', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:32:31', '2024-01-06 06:32:31', 'Male', NULL, NULL, NULL, NULL),
(430, 'REJOICE', 'REJOICEFX@gmail.com', 'RF175669', '$2y$10$x9AKQ8DkkNmqUyiyO8ugm.SciGDcf4hulLX5OQ68zB1AfizF9hbLK', 1, 429, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$KNpNdFg2Nom8reed4PCFoeUoHz6QoX.TLVPdjBT7U3scEOK4II/jm', NULL, 0, NULL, '123321', '56390', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:32:36', '2024-01-06 06:32:36', 'Male', NULL, NULL, NULL, NULL),
(431, 'REJOICE', 'REJOICEFX@gmail.com', 'RF980437', '$2y$10$TyJIR6u64IN9W/ow5duWSOt/alyh0MoJGo4itbIhhu0YtSE9VHKF6', 1, 430, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$fUf1mH.rYKqvJaQscqeu4eOGanMOezm2UT/RPKdtG8AEMT95y4HIi', NULL, 0, NULL, '123321', '04802', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:33:24', '2024-01-06 06:33:24', 'Male', NULL, NULL, NULL, NULL),
(432, 'REJOICE', 'REJOICEFX@gmail.com', 'RF350813', '$2y$10$6c/8e4vEwGWCh5OQifXnY.8ykukdl5Ov7nXBBQWe54vb2dL4Nw6sO', 1, 431, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$bdGh.xCo1KD5JuTvGD5YX.8GcXwdIRF2Xms93b.FFzHlSmn7RePQu', NULL, 0, NULL, '123321', '08146', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:33:29', '2024-01-06 06:33:29', 'Male', NULL, NULL, NULL, NULL),
(433, 'REJOICE', 'REJOICEFX@gmail.com', 'RF741241', '$2y$10$aV8f0.KMi22w8WcimQ0OZ.jporV03sBLyV06THhhP7a1x1wzewlW2', 1, 432, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$nqpcO97kaHULxkfXKhYMo.s.5hx/J0tbygmTtrrCiW6owhSBj598O', NULL, 0, NULL, '123321', '12885', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:33:32', '2024-01-06 06:33:32', 'Male', NULL, NULL, NULL, NULL),
(434, 'REJOICE', 'REJOICEFX@gmail.com', 'RF751516', '$2y$10$pNUKMCc1EbFepDTDiaXq6uKmQ8bsSznw9rEv3ljb2OF3I2INYHyxy', 1, 433, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$XJqsZSNsjRqKwoMfmjBkceV7349Rf0WbROEb3LPwjimwTcWDSkqEC', NULL, 0, NULL, '123321', '15569', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:33:35', '2024-01-06 06:33:35', 'Male', NULL, NULL, NULL, NULL),
(435, 'REJOICE', 'REJOICEFX@gmail.com', 'RF831749', '$2y$10$X43DzrDQBiCruqX2f22YnuTtJuRGfDnUGqiC7FqfzbipUOaYelkrq', 1, 434, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$QJJfK5t4WSVU.nu78Fv57OcJValPW4SmGcYI8Xk/twpPuOTa/MMFm', NULL, 0, NULL, '123321', '17629', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:33:38', '2024-01-06 06:33:38', 'Male', NULL, NULL, NULL, NULL),
(436, 'REJOICE', 'REJOICEFX@gmail.com', 'RF342616', '$2y$10$VlkXbo1sv7B8vTPdvD6vbO3wOdZu2tS3sPqZuYj/oGzEWt.Rd1Na2', 1, 435, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$Zt8IhkKF13jRt2gmAfBfLui/BdKqUNIPf8xMI8qsar04y.4v/fdwi', NULL, 0, NULL, '123321', '26927', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:33:46', '2024-01-06 06:33:46', 'Male', NULL, NULL, NULL, NULL),
(437, 'REJOICE', 'REJOICEFX@gmail.com', 'RF443053', '$2y$10$oEW/UyALmO0C3.NsCboKzuWjmSvumvNzgdEbV7tegEP7rIg73oHpm', 1, 436, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$LJRqRzUGDrfRTVswLkNOZu44b6G4VD33RA3ie3xLNGIxxL2/YuLM2', NULL, 0, NULL, '123321', '30515', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:33:50', '2024-01-06 06:33:50', 'Male', NULL, NULL, NULL, NULL);
INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `sponsor`, `ParentId`, `phone`, `position`, `package`, `amt`, `active_status`, `jdate`, `level`, `tpassword`, `adate`, `rank`, `trx_addres`, `PSR`, `TPSR`, `capping`, `power_leg`, `vicker_leg`, `balance`, `country`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`, `gender`, `nominee_relation`, `adhar`, `pan`, `nominee_name`) VALUES
(438, 'REJOICE', 'REJOICEFX@gmail.com', 'RF763333', '$2y$10$LmfCWiLFgKzFslRexgKbROlcCWzZCmK4cFOXu5SbP14rcLK3kUy.m', 1, 437, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$1YKHFPo1N2x0twi2tSpD3OhYxBTyYEzgtOZg8DTTe5l3Ilj3kNoCq', NULL, 0, NULL, '123321', '33615', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:33:53', '2024-01-06 06:33:53', 'Male', NULL, NULL, NULL, NULL),
(439, 'REJOICE', 'REJOICEFX@gmail.com', 'RF313685', '$2y$10$1FEOVUH7O24eqmfTFgzKrOHMZra6578DhixKfJ9S6wsc1cK80SpLm', 1, 438, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$RWhSrDhKKi7rWN4fXxsdbe8a9lnGQx19bu6O.4rXIiTDmaUNPG8jm', NULL, 0, NULL, '123321', '36869', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:33:56', '2024-01-06 06:33:56', 'Male', NULL, NULL, NULL, NULL),
(440, 'REJOICE', 'REJOICEFX@gmail.com', 'RF244093', '$2y$10$CRIqCHMxRJtTcYBMJITVH.0O3mo/HrntKFivvYaV7/CStQPXVviTK', 1, 439, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$UvJ79l6K/W50TluYsXJ7AuLsUxOmKdoPSPf0m3/r2tNeHfsM.NxXK', NULL, 0, NULL, '123321', '40246', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:34:00', '2024-01-06 06:34:00', 'Male', NULL, NULL, NULL, NULL),
(441, 'REJOICE', 'REJOICEFX@gmail.com', 'RF144665', '$2y$10$girkepvr61DEGApyjcqDeOw0wLkRQ2KhkBUR5vFnDock810jKkMTu', 1, 440, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$v9t.xmg8LeuPYGDPwZqGtOGc3gGfIs5q4wJJwmlwtGeuO2K6u2Nku', NULL, 0, NULL, '123321', '46300', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:34:06', '2024-01-06 06:34:06', 'Male', NULL, NULL, NULL, NULL),
(442, 'REJOICE', 'REJOICEFX@gmail.com', 'RF755093', '$2y$10$zHAReMb220oJglu/sK7T0OGRLELjV7SqUA6bScWojIbdbrRk9H5cG', 1, 441, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$wnGj42oHohCZG6DV.39fmOIVVcjjqkMc47v2JhWNI8IV1/4SeQice', NULL, 0, NULL, '123321', '50957', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:34:10', '2024-01-06 06:34:10', 'Male', NULL, NULL, NULL, NULL),
(443, 'REJOICE', 'REJOICEFX@gmail.com', 'RF175417', '$2y$10$CNthf.hjPutSvUzbgAhZauuEn5xM8dQ2cISvHv0ZDLb31F43D3h82', 1, 442, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 1, '$2y$10$tciZo2EctyI6CSohnSxOcuGILPoAqeiINSzUH7ZuiYmQd.SIBypTK', NULL, 0, NULL, '123321', '54228', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:34:14', '2024-01-06 06:34:14', 'Male', NULL, NULL, NULL, NULL),
(444, 'REJOICE', 'REJOICEFX@gmail.com', 'RF545924', '$2y$10$kq4F8s51eo5Eg3IWVgpEz.SrFGELF0EL455vA05qHzUmIGFcpQnSe', 1, 443, '1234567890', 'Right', 10000.00, 0.00, 'Active', '2024-01-06', 1, '$2y$10$FWzr9NcDoTxLSxqY4mtvKOwP1R8Jnow1bU9BsHIrsb8/vRGXCh/gO', '2024-01-06 12:05:26', 0, NULL, '123321', '59919', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 06:34:19', '2024-01-06 12:05:26', 'Male', NULL, NULL, NULL, NULL),
(445, 'SANDEEP KUMAR', 'sn776346@gmal.com', 'RF383133', '$2y$10$JXN9TmICV2hnIwrNIKsfbOdpmJINXs3aC5J32aXriOVBJsiZcQ402', 57, 99, '7985919533', 'Right', NULL, 0.00, 'Pending', '2024-01-06', 4, '$2y$10$Z3rRma1HlYzVF5uJrDVB1.aESKBcJDMNCzO8PehlP17LO3D3cW.Hu', NULL, 0, NULL, '123456', '31380', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-06 08:03:51', '2024-01-06 08:03:51', 'Male', NULL, NULL, NULL, NULL),
(446, 'FAHEEM JAVED', 'faheemjaved62@gmail.com', 'RF624533', '$2y$10$fLzujetRO5CYebHmUxkZsuDgFJXc5bC15jtXkcgApGZi3ZNiHGfS.', 253, 253, '9450662116', 'Left', NULL, 0.00, 'Pending', '2024-01-09', 5, '$2y$10$GuruzPYOm/EVhsRh5xo4fendmgiKx7xmbwMe4PWyXhQO4zbqTa8hO', NULL, 0, NULL, '123456', '45594', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-09 15:55:45', '2024-01-09 15:55:45', 'Male', NULL, NULL, NULL, NULL),
(447, 'FAHEEM JAVED', 'faheemjaved62@gmail.com', 'RF610202', '$2y$10$4wjM5LTfb8IJAdU8vQ6O8ut8m00mNxrlpGkV48IQPTgcW7XJ5plkC', 446, 446, '9450662116', 'Left', NULL, 0.00, 'Pending', '2024-01-09', 6, '$2y$10$GGR6h5CXhVAeqDXDRPTmMeIJmXxBEihX8JqObB2P9gRCLoAAeDqE6', NULL, 0, NULL, '123456', '02127', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-09 16:03:23', '2024-01-09 16:03:23', 'Male', NULL, NULL, NULL, NULL),
(448, 'Faheem Javed', 'faheemjaved62@gmail.com', 'RF156870', '$2y$10$7LkP1bwIKR4p.vYe2lkxZOzPSnvLKWJBate.PShlnz0VSRL2UzXrC', 446, 446, '9450662116', 'Right', NULL, 0.00, 'Pending', '2024-01-09', 6, '$2y$10$Zd155OKoSuAYTwIFRk0EX.8hHpJFwzHuq1btWNgo3Pd5dkU37GRze', NULL, 0, NULL, '123456', '68431', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-09 16:09:28', '2024-01-09 16:09:28', 'Male', NULL, NULL, NULL, NULL),
(449, 'KING OF AZAMGAD', 'REJOICEFX@gmail.com', 'RF398831', '$2y$10$8IqUTnBU07oaor9ld6n9auB4LkEVvOCZCya8YTDBeC4OStSznPEKC', 52, 444, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-10', 2, '$2y$10$EPGohL3MrBknqyFQ3cPqYuxCtxVDDZFsdUo7iLGjt7.1YV2WuA4Wa', NULL, 0, NULL, 'pankaj', '88083', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-10 08:14:48', '2024-01-10 08:14:48', 'Male', NULL, NULL, NULL, NULL),
(450, 'Malikmohsajid', 'maliksajid9792800@gmail.com', 'RF614342', '$2y$10$F7tLxb3kpzrrOmRnRnpbBOs5cPFNNWOdexHZrwpkZ4CbKUZyodsSO', 349, 414, '1234567890', 'Left', NULL, 0.00, 'Pending', '2024-01-11', 5, '$2y$10$HnuuDAx57gov3UeLXQbucuQZo0R3kZBnGg6tHccj3.uOUaBJ92efG', NULL, 0, NULL, '123123', '43461', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-11 08:17:23', '2024-01-11 08:17:23', 'Male', NULL, NULL, NULL, NULL),
(451, 'Soni.', 'mohdshabih96@gmail.com', 'RF468536', '$2y$10$mvk93UV6w.02WCQdTFiBGuK45WnIxxVtiK6w6246ecXFoX70GcBSe', 61, 402, '9140635520', 'Right', NULL, 0.00, 'Pending', '2024-01-12', 4, '$2y$10$Zj7HRLQNuy0VQpYnfoiX1.fMshxINJXM0pBwSm1jF2X8tdqc8wEvW', NULL, 0, NULL, '123456', '85153', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-12 04:06:26', '2024-01-12 04:06:26', 'Male', NULL, NULL, NULL, NULL),
(452, 'Abu Khan', 'Abu.khan20@gmail.com', 'RF269165', '$2y$10$PF0b77nEctELOV7JRQUJBe3v2zA/OtIWWS0guMtXpHnDodzvFD6ei', 61, 451, '729203652', 'Right', NULL, 0.00, 'Pending', '2024-01-12', 4, '$2y$10$cWjyHLjItFuNtTx0Ht3n9u4NLdsiCymeLqyid0BOzPi/lHZof1xZi', NULL, 0, NULL, 'Timur2023', '91662', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-12 05:38:11', '2024-01-12 05:38:11', 'Male', NULL, NULL, NULL, NULL),
(453, 'Azhar Uddin Khan', 'azharkhanngo@gmail.com', 'RF153961', '$2y$10$lhIov.CjTWNYgJzaYYI5K.flBX52569IajgmHsLH90dnDJkbqb3Si', 61, 452, '+917355541376', 'Right', NULL, 0.00, 'Pending', '2024-01-12', 4, '$2y$10$QV9oGQaK2MlD1AZbzcoTn.OxWaMHFjRXsI7twTr.HgzAPZGvgbZla', NULL, 0, NULL, 'Azhar2633', '39341', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-12 09:48:59', '2024-01-12 09:48:59', 'Male', NULL, NULL, NULL, NULL),
(454, 'Azhar Uddin Khan', 'azharkhanngo@gmail.com', 'RF913848', '$2y$10$bMYjuA7wyykHpJ0efKoqBe/N6tLwcqG3JoUM7UyoUKIVaBpojw4uK', 61, 453, '+917355541376', 'Right', NULL, 0.00, 'Pending', '2024-01-12', 4, '$2y$10$gYeMqaFJSE/wBmDzgV3WK.pRXlrd/fAW7LSxZjM0X.ZLV9NHh9IYm', NULL, 0, NULL, 'Azhar2633', '38122', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-12 09:50:38', '2024-01-12 09:52:33', 'Male', NULL, NULL, NULL, NULL),
(455, 'Anwer shadab', 'anwershadab7786@gmail.com', 'RF265211', '$2y$10$./3zYwUe7ujMyk0QHs07jeQ2at45SUtR81WJHWOpzmJABUaJ2UqbC', 61, 454, '7054117786', 'Right', NULL, 0.00, 'Pending', '2024-01-12', 4, '$2y$10$qUQAhDZCxTJzVY9eIaqTFOn2ouMakhqQk597k0feFnRGUv4XHkbAS', NULL, 0, NULL, 'anwer12345@', '52508', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-12 10:40:52', '2024-01-12 10:40:52', 'Male', NULL, NULL, NULL, NULL),
(456, 'SALONI VERMA', 'saloniverma53058@gmail.com', 'RF286467', '$2y$10$1B.Z10O/EuDPbxVGKasa2uVe4vpygqE1Jut8s.V3GIy.6ldYplHMW', 403, 403, '7800645395', 'Left', 100.00, 0.00, 'Active', '2024-01-14', 6, '$2y$10$mYLcZ4e2TRH1y3EmteID3uFAOeDf/DiYmNp5VfsOg.dwODLgmeYxu', '2024-01-14 15:10:58', 0, NULL, 'Saloni', '64943', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-14 09:34:24', '2024-01-14 15:10:58', 'Male', NULL, NULL, NULL, NULL),
(457, 'SANJAY SONKAR', 'sanjaysonkar88989@gmail.com', 'RF922473', '$2y$10$vWyBLSSceQ6JKxVmU4ye/.8awpH87dL7mxnGiCtJdOCkQ7YrQh3nO', 299, 456, '7985823230', 'Left', NULL, 0.00, 'Pending', '2024-01-14', 5, '$2y$10$fANSBVOIFRHv2n88J.hJBe3qk3A053UaSf7GuUOcACDS1z.mlNPy2', NULL, 0, NULL, '123456', '24352', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-14 10:15:24', '2024-01-14 10:15:24', 'Male', NULL, NULL, NULL, NULL),
(458, 'SANJAY SONKAR', 'sanjaysonkar88989@gmail.com', 'RF373313', '$2y$10$tY8Jctc1UEFTeM8vYUbc3OAOwiSYI5WSZOMSj/qMaTWJL0sqbQg1a', 299, 457, '7985823230', 'Left', NULL, 0.00, 'Pending', '2024-01-14', 5, '$2y$10$3rLY.vthZnTHKOcYI7rOLu.jTnpgA9pUSg90pj7uGGjLIKhwgDgXm', NULL, 0, NULL, '123456', '33042', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-14 10:15:33', '2024-01-14 10:15:33', 'Male', NULL, NULL, NULL, NULL),
(459, 'SANJAY SONKAR', 'sanjaysonkar88989@gmail.com', 'RF645480', '$2y$10$tgGtCEojUYyrjLJx6W/xcO55/S0eZBE.FcpDp7/UTFU7gDbHe3CVa', 299, 458, '7985823230', 'Left', NULL, 0.00, 'Pending', '2024-01-14', 5, '$2y$10$1aeKSwoq8YSYjwWSZOFKJumFEMSgXQ99tEs9FAqxsrupaL/3CR2aO', NULL, 0, NULL, '123456', '54289', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-14 10:15:54', '2024-01-14 10:15:54', 'Male', NULL, NULL, NULL, NULL),
(460, 'SANJAY SONKAR', 'sanjaysonkar88989@gmail.com', 'RF556200', '$2y$10$Cqb5BB0xrp4azyuWBxjVae7Hbo2VhSG.5xvtDMfRzLur62Da.hQQu', 299, 459, '7985823230', 'Left', NULL, 0.00, 'Pending', '2024-01-14', 5, '$2y$10$e5mVJng4Pl8YFG0YpjU.TeX3kertAZXgxQCA8uP3K3LKSorl6vl2S', NULL, 0, NULL, '123456', '62787', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-14 10:16:02', '2024-01-14 10:16:02', 'Male', NULL, NULL, NULL, NULL),
(461, 'SANJAY SONKAR', 'sanjaysonkar88989@gmail.com', 'RF067174', '$2y$10$ROZn6aFPCpXuOhjF7jzP2OTru7JQqNAIP.Qp87TabTHatrEwIX40m', 299, 460, '7985823230', 'Left', NULL, 0.00, 'Pending', '2024-01-14', 5, '$2y$10$r7fusBBirVB14a8mJcB46.WsDUtBwAoiWVyYwa.vAUJgVcomxflba', NULL, 0, NULL, '123456', '71491', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-14 10:16:11', '2024-01-14 10:16:11', 'Male', NULL, NULL, NULL, NULL),
(462, 'SANJAY SONKAR', 'sanjaysonkar88989@gmail.com', 'RF478141', '$2y$10$axAyYx4DnS0wVa3tzGjkaeYB2NbYJgtL.1bcLFd0REGaoOKlf.2gG', 299, 461, '7985823230', 'Left', NULL, 0.00, 'Pending', '2024-01-14', 5, '$2y$10$DXzAbN75uvhyOwKsx2jG5e3Glq8Cry7mFHQohV2LKpw3ockRl92VG', NULL, 0, NULL, '123456', '81349', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-14 10:16:21', '2024-01-14 10:16:21', 'Male', NULL, NULL, NULL, NULL),
(463, 'SANJAY SONKAR', 'sanjaysonkar88989@gmail.com', 'RF089275', '$2y$10$dP9r3dAWCBddtR4Me7Lk5ObxAVi5esre.k9af9HB7FFkg4aH7pTOq', 299, 462, '7985823230', 'Left', NULL, 0.00, 'Pending', '2024-01-14', 5, '$2y$10$DqmetNPhd4HTtp4j5oRKT.KO2SLxLoARZ0c0Dpc./k.V/DFutoVWW', NULL, 0, NULL, '123456', '92229', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-14 10:16:32', '2024-01-14 10:16:32', 'Male', NULL, NULL, NULL, NULL),
(464, 'SANJAY SONKAR', 'sanjaysonkar88989@gmail.com', 'RF380548', '$2y$10$LKkTJgiiQ1ZFFIvAXtcOnOxZxbztV/HaJOopbkd1u4p70AakWpP3q', 299, 463, '7985823230', 'Left', NULL, 0.00, 'Pending', '2024-01-14', 5, '$2y$10$VqzNn4AlEmJwQAhiM8GwYuMDIntAuDoSrTomZxFIe9LzP7GCll1tK', NULL, 0, NULL, '123456', '05345', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-14 10:16:45', '2024-01-14 10:16:45', 'Male', NULL, NULL, NULL, NULL),
(465, 'SANJAY SONKAR', 'sanjaysonkar88989@gmail.com', 'RF401563', '$2y$10$tAol5UUpW82/EWED/EwAFuMRfyQpFFyiL9ZxofqB2N0Mj2QPLcDJ.', 299, 464, '7985823230', 'Left', NULL, 0.00, 'Pending', '2024-01-14', 5, '$2y$10$wD5BHa/Uy1VHhlXO.MnB3u.NqcKFI7hLVRorB6FFCtmtvwiGgStVu', NULL, 0, NULL, '123456', '15952', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-14 10:16:55', '2024-01-14 10:16:55', 'Male', NULL, NULL, NULL, NULL),
(466, 'SANJAY SONKAR', 'sanjaysonkar88989@gmail.com', 'RF112365', '$2y$10$RYrkkESMhywAk2TZRDS68uLhAB2fPaa7q2Ipnm4ZrDqhwazhWioCS', 299, 465, '7985823230', 'Left', NULL, 0.00, 'Pending', '2024-01-14', 5, '$2y$10$/IC0ockBT4j3VHQN8G/7gOuHpb1ykBL6zvGOz8FRESj0l0Y89zqhS', NULL, 0, NULL, '123456', '23909', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-14 10:17:03', '2024-01-14 10:17:03', 'Male', NULL, NULL, NULL, NULL),
(467, 'BABU RAM', 'Jeet.exporter@gmail.com', 'RF836248', '$2y$10$xg26QVr5o8TTFgIYjzuv1uMiXLAUsFAJtl7rlLF1tfOw8jvb09d12', 404, 406, '9936422727', 'Left', 600.00, 0.00, 'Active', '2024-01-16', 5, '$2y$10$ovLBttGg7znL0lVi8owvfugGzpO/S8mbTOn1tce3K1PMMu0CaUSMi', '2024-01-16 13:55:19', 0, NULL, '123456', '62977', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-16 08:22:42', '2024-01-16 13:55:19', 'Male', NULL, NULL, NULL, NULL),
(468, 'Mohammad Akram', 'akram.khan3210@gmail.com', 'RF716544', '$2y$10$oyEY9CHF97sMib1kfK7t5e5qxdIxs5IFD/LE6ziZvLYOuJVtan89K', 295, 369, '9889493781', 'Left', NULL, 0.00, 'Pending', '2024-01-18', 5, '$2y$10$WTrzIs439ohTxCmitHL8bO7.HLYfsen97ZqjCTfNmpgntAMOH71ga', NULL, 0, NULL, '9889493781', '65674', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-18 07:44:25', '2024-01-18 07:44:25', 'Male', NULL, NULL, NULL, NULL),
(469, 'MUNEER AHMAD', 'muneerahmad1909@gmail.com', 'RF598655', '$2y$10$0R3ZyfkcPgDbfShFPAyJ3.Dser6pEFMZ.UER0laLqIpSFvkyR9fZe', 61, 455, '9935008234', 'Right', 100.00, 0.00, 'Active', '2024-01-18', 4, '$2y$10$U6ZcufsWkrEAcZAOrxlldeEcwpIWs5vLJwwsyF8w5aB17Uswzkwk6', '2024-01-18 14:53:15', 0, NULL, '123456', '86155', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-18 08:48:07', '2024-01-18 14:53:15', 'Male', NULL, NULL, NULL, NULL),
(470, 'MUNEER AHMAD', 'muneerahmad1909@gmail.com', 'RF131144', '$2y$10$HN2ci.vYmBwNJ.kLalwqdONJ4gyYw2i2jXn8Eea7WteuSIEUKlrTm', 469, 469, '9935008234', 'Left', 100.00, 0.00, 'Active', '2024-01-18', 5, '$2y$10$NysTkisiQLLQU2oFkg/nke22cectIKV/OZdU/y5.S2PaeRoIX20TW', '2024-01-18 14:53:47', 0, NULL, '123456', '11371', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-18 08:55:11', '2024-01-18 14:53:47', 'Male', NULL, NULL, NULL, NULL),
(471, 'MUNEER AHMAD', 'muneerahmad1909@gmail.com', 'RF587291', '$2y$10$QTmnUalzf/gt2KUNvP1cFOPYw04/3BTaCAzq3bK7G3acSnk3aV5Dy', 469, 469, '9935008234', 'Right', 100.00, 0.00, 'Active', '2024-01-18', 5, '$2y$10$SuZIpUq/rghvFRwkKANUdOTpdq5AGYuth3njnOz3lbmirmqLf1QFm', '2024-01-18 14:54:30', 0, NULL, '123456', '72054', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-18 08:57:52', '2024-01-18 14:54:30', 'Male', NULL, NULL, NULL, NULL),
(472, 'Mohammad Akram', 'akram.khan3210@gmail.com', 'RF722629', '$2y$10$igfKh7JpNb6SREa5lg4kUexdvbFN8UILM6LovMVa3XCxIP/X9S5QC', 468, 468, '9889493781', 'Left', NULL, 0.00, 'Pending', '2024-01-18', 6, '$2y$10$y1vJhExmarTvByiAafLLueA0TDdM6H0Aoi0JPAOg879c4k98XAmja', NULL, 0, NULL, '9889493781', '26348', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-18 10:35:26', '2024-01-18 10:35:26', 'Male', NULL, NULL, NULL, NULL),
(473, 'Manish Chandra', 'manishchandra0702@gmail.com', 'RF006938', '$2y$10$icxmVIbQU6rhR407UDYq3unhPceeA/Cp1ZInyE0s13CWO4eBGGDNm', 56, 152, '07905243414', 'Right', NULL, 0.00, 'Pending', '2024-01-19', 4, '$2y$10$GFm8b.GMZGdYEd5P/j9/1u9n/8SdKormw6xBn899aDnPIMuVKCRpG', NULL, 0, NULL, '123456', '69624', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-19 05:21:09', '2024-01-19 05:54:49', 'Male', NULL, NULL, NULL, NULL),
(474, 'MURLIDHAR TRIPATHI', 'REJOICEFX@gmail.com', 'RF285740', '$2y$10$fUbh1JphjSLFv8ZWuvD3UOjTXDQRMNdMbSkrH.0xG2g6TMWE/22ke', 71, 405, '1234567890', 'Left', 100.00, 0.00, 'Active', '2024-01-21', 4, '$2y$10$gxkaDKYlNngRoaYwI/gW7ulM.ymcv9QMV/Ejp8PSEX0dDA5KHqSM.', '2024-03-02 11:36:36', 0, NULL, '123456', '57639', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-21 05:52:37', '2024-03-02 11:36:36', 'Male', NULL, NULL, NULL, NULL),
(475, 'MURLIDHAR TRIPATHI', 'REJOICEFX@gmail.com', 'RF468852', '$2y$10$YBi/cn0/xwTYdf6NXqhMU.u3ss4NAvcUBDzZYYH3PO6GDgpQmXJai', 71, 71, '1234567890', 'Right', 100.00, 0.00, 'Active', '2024-01-21', 4, '$2y$10$rF6/6HvyEQXIoYvSixvuM.KG67PxQ9MNB0iEgD/yS8Yfs69PAjlb6', '2024-03-02 11:35:22', 0, NULL, '123456', '88884', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-21 05:53:08', '2024-03-02 11:35:22', 'Male', NULL, NULL, NULL, NULL),
(476, 'MURLIDHAR TRIPATHI', 'REJOICEFX@gmail.com', 'RF251228', '$2y$10$Qvj/Q/Lu0O6z.VukvUIHb.orouoW5btD1c.yPKPnkrTIbExA5crjS', 475, 475, '1234567890', 'Left', NULL, 0.00, 'Pending', '2024-01-21', 5, '$2y$10$oVwPXZ3X2AKVEnISgHto2Ob5chX6L2GAQUImJnGXCQpDq8RWJoWPe', NULL, 0, NULL, '123456', '12426', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-21 05:55:13', '2024-01-21 05:55:13', 'Male', NULL, NULL, NULL, NULL),
(477, 'MURLIDHAR TRIPATHI', 'REJOICEFX@gmail.com', 'RF262935', '$2y$10$YkR68BE8JaRIAvnNMLTnjuopkLBQsAT21NTN2jyt41thiBwhgzn/i', 475, 476, '1234567890', 'Left', NULL, 0.00, 'Pending', '2024-01-21', 5, '$2y$10$z81AUPwrcCa1cbefSynAZ.t5Ep5dEbmLm3kPIEQFMKucCtaKTpR1C', NULL, 0, NULL, '123456', '29248', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-21 05:55:29', '2024-01-21 05:55:29', 'Male', NULL, NULL, NULL, NULL),
(478, 'MURLIDHAR TRIPATHI', 'REJOICEFX@gmail.com', 'RF853682', '$2y$10$Rx.Pkp.72ccjX8SKTFqJUOJPbKrfmAdYv3bu0nwC64XgpWfFpgyL2', 475, 477, '1234567890', 'Left', NULL, 0.00, 'Pending', '2024-01-21', 5, '$2y$10$NSJQ.BLdRAr05r8pFqKAC.Dp/k6ybd2HQIKDG75gNy66bSDZDas0q', NULL, 0, NULL, '123456', '36329', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-21 05:55:36', '2024-01-21 05:55:36', 'Male', NULL, NULL, NULL, NULL),
(479, 'MURLIDHAR TRIPATHI', 'REJOICEFX@gmail.com', 'RF784406', '$2y$10$Ge5NwbP7Rbo3D7fvkhaZbeL9JoX15R.VO1eff0kPaV2ZGDCPrfzOi', 475, 478, '1234567890', 'Left', NULL, 0.00, 'Pending', '2024-01-21', 5, '$2y$10$z0xKUyMywyQEKMgYdGexauCnoCn5fAxJVcIPSb957bio4YtG7QY6a', NULL, 0, NULL, '123456', '44331', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-21 05:55:45', '2024-01-21 05:55:45', 'Male', NULL, NULL, NULL, NULL),
(480, 'MURLIDHAR TRIPATHI', 'REJOICEFX@gmail.com', 'RF605560', '$2y$10$R897CyoDZMGD23UcN77Elu6Ttb2x1/QJV0lB8bCweWIiiS2VAjjrK', 475, 479, '1234567890', 'Left', NULL, 0.00, 'Pending', '2024-01-21', 5, '$2y$10$cbyvPafLN0yS08m9jadWTeBwdCq1lDKZ/ywNqg0D7wahGcz4eJGx2', NULL, 0, NULL, '123456', '55209', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-21 05:55:55', '2024-01-21 05:55:55', 'Male', NULL, NULL, NULL, NULL),
(481, 'MURLIDHAR TRIPATHI', 'REJOICEFX@gmail.com', 'RF126628', '$2y$10$IpolvOV5GuV/QXn785tR2eN0fODBS1A6Yzk8T3YIvsDZxZgTN7jL.', 475, 475, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-21', 5, '$2y$10$M2ZKnO5cq277H7EKDtFAKevwiokbZBSFosUhjkBA/VPJJJN0VaSra', NULL, 0, NULL, '123456', '66272', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-21 05:56:06', '2024-01-21 05:56:06', 'Male', NULL, NULL, NULL, NULL),
(482, 'MURLIDHAR TRIPATHI', 'REJOICEFX@gmail.com', 'RF887477', '$2y$10$aOPMrFyYUEFYhme8ix3dDeTDCr0ohU0u5A6qvaIU08ZRFsWNK7TuC', 475, 481, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-21', 5, '$2y$10$cad6UNP9ffDNu4CG9YRaF.NbiCSilkvI9H/dOUCGJJeT5wS7d6Gpi', NULL, 0, NULL, '123456', '74880', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-21 05:56:14', '2024-01-21 05:56:14', 'Male', NULL, NULL, NULL, NULL),
(483, 'MURLIDHAR TRIPATHI', 'REJOICEFX@gmail.com', 'RF218501', '$2y$10$iUWCHiHTz4NO.mBm7KtAaedVl.HIOcbbHjzFesse2go/oYru2jGDu', 475, 482, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-21', 5, '$2y$10$bvbvhxyNTGMJyNsu0sygrOj9PATA27UpPdKX1Cqp.t2FltAVHMwdq', NULL, 0, NULL, '123456', '85620', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-21 05:56:25', '2024-01-21 05:56:25', 'Male', NULL, NULL, NULL, NULL),
(484, 'MURLIDHAR TRIPATHI', 'REJOICEFX@gmail.com', 'RF129528', '$2y$10$H6yQgiSrlg.6p/E1aaUI6uKuTCFPigX4A9f3jMt9Uky5S2FzSBOqi', 475, 483, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-01-21', 5, '$2y$10$MOdhZbEBd/N/1FzbxIY24uk4V0KYFmjXRNwYQVQuGDwX6MvPP2NMC', NULL, 0, NULL, '123456', '95082', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-21 05:56:35', '2024-01-21 05:56:35', 'Male', NULL, NULL, NULL, NULL),
(485, 'MURLIDHAR TRIPATHI', 'REJOICEFX@gmail.com', 'RF610245', '$2y$10$PfHU2UDPnYmByWuxRrRdGevqsPyShnLtEWUUPrAx2fmX0J2u/NqQW', 475, 484, '1234567890', 'Right', 100.00, 0.00, 'Active', '2024-01-21', 5, '$2y$10$MEm1AGBB6VniZ6iKcAWwvOMcnzpzp/d6lrvFu5hKJQYghAgQxcDSW', '2024-03-02 11:36:01', 0, NULL, '123456', '02663', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-21 05:56:42', '2024-03-02 11:36:01', 'Male', NULL, NULL, NULL, NULL),
(486, 'Nikhil Nishad', 'nikhilnishad034@gmail.com', 'RF295813', '$2y$10$uKLktpvZm0qJz/w9ptW9b.SunmdxxwRmuPE231vcrAJ1rjsFwUXZS', 299, 466, '9335530317', 'Left', NULL, 0.00, 'Pending', '2024-01-21', 5, '$2y$10$2QUIhev/czxAg.v6qR17WugkC7xze.KKAM1mnfzprPX9LLC77r6.S', NULL, 0, NULL, 'Nishad@046', '58006', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-01-21 09:49:18', '2024-01-21 09:49:18', 'Male', NULL, NULL, NULL, NULL),
(487, 'Satyabhan', 'Satyabhankori73@gmail.com', 'RF891347', '$2y$10$SWlqN8By0WoBqPM2M78ekOGeYyvHxoOt7djfoTUyOZY02AlZn6pLe', 52, 449, '9516730139', 'Right', NULL, 0.00, 'Pending', '2024-02-01', 2, '$2y$10$Dwx0nfF8a/Lkrng5uvdj4exLihoTDrn3xprtSrPZMEl1WIdlJqClm', NULL, 0, NULL, 'satya', '13215', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-01 14:35:14', '2024-02-01 14:35:14', 'Male', NULL, NULL, NULL, NULL),
(488, 'YOGENDRA PRASAD', 'prasadyogendra018@gmail.com', 'RF225339', '$2y$10$ypJ9u8A6u6hhWJBc9RK6V.EA7hu1as7tnC9Vc/f.uqLFs2AYys.KO', 63, 284, '9129372956', 'Right', 100.00, 0.00, 'Active', '2024-02-03', 4, '$2y$10$y4ClvV1DHExtWGzS1jQp0.Dp2w7kWGAMyA53l8rmTJwkuwtQt0HtG', '2024-02-06 12:51:27', 0, NULL, '123456', '53383', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-03 08:05:54', '2024-02-28 09:08:27', 'Male', NULL, NULL, NULL, NULL),
(489, 'KARAM SINGH', 'Ksingh8825@gmail.com', 'RF344811', '$2y$10$1cTTKCxvTXAK5n9NXWQePe6c5hm/lndNjEZeet.n2367S0pfEL0l.', 284, 284, '9696651981', 'Left', 600.00, 0.00, 'Active', '2024-02-03', 6, '$2y$10$zm.fWNjseQjhGa7Iqv33ueRaVoEY19RuQQ7CsxK1M3VXeh03fC6Ey', '2024-02-03 16:09:41', 0, NULL, '123456', '48316', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-03 10:20:48', '2024-02-03 16:09:41', 'Male', NULL, NULL, NULL, NULL),
(490, 'KARAM SINGH', 'Ksingh8825@gmail.com', 'RF107104', '$2y$10$9.4NiRMQ2kCBbHzrRsdYVuLoXdjA.gKyGwbTdaV5Xl5TYZ1XZjmfS', 284, 488, '9696651981', 'Right', 500.00, 0.00, 'Active', '2024-02-03', 6, '$2y$10$TQxhcpp/tHEbrwj7TT5ATObxLiSTnbOixPhdrveSMfPY/k7IYwGuC', '2024-02-03 16:10:23', 0, NULL, '123456', '71817', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-03 10:21:11', '2024-02-03 16:10:23', 'Male', NULL, NULL, NULL, NULL),
(491, 'KARAM SINGH', 'Ksingh8825@gmail.com', 'RF718916', '$2y$10$DbPKNAkLuGQibeHi1lLbTeitfkA6K8oygTeU9RA0pfk2US/SQRik2', 284, 490, '9696651981', 'Right', 100.00, 0.00, 'Active', '2024-02-03', 6, '$2y$10$0/o1W2BEAKTnrHKfi1PsQebCV19Ga1G.wubol6/dORlQxFNh3491a', '2024-02-03 16:11:09', 0, NULL, '123456', '89487', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-03 10:21:29', '2024-02-03 16:11:09', 'Male', NULL, NULL, NULL, NULL),
(492, 'MUNEER AHMAD', 'muneerahmad1909@gmail.com', 'RF451629', '$2y$10$OJqzXciz3vMzDc7iEqOCn.3ZCWG7VVk0EKWFJ2.nNPHzpKbO02CyO', 469, 470, '9935008234', 'Left', 100.00, 0.00, 'Active', '2024-02-04', 5, '$2y$10$XyMvJO/Ztqo6vk/y2jcLO.mhFKaBKTrnBHAFQ1BirJsGBtMr1znI2', '2024-02-04 11:19:51', 0, NULL, '123456', '16850', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-04 05:23:37', '2024-02-04 11:19:51', 'Male', NULL, NULL, NULL, NULL),
(493, 'KALAWATI DEVI', 'laxmikumari05aug@gmail.com', 'RF389035', '$2y$10$mY685Whp4xuGgEhpS9xwUOiP0YTtfM4lVQ6KykW9acJqKyIc2Z3xi', 67, 474, '1234567890', 'Left', 100.00, 0.00, 'Active', '2024-02-05', 4, '$2y$10$BvfgXH.QLzmbjRXaWjt4fOid3lzfL3VGB0kPlwXP7DBKgMcaSDNV.', '2024-02-05 17:14:19', 0, NULL, '123456', '90571', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-05 11:43:10', '2024-02-05 17:14:19', 'Male', NULL, NULL, NULL, NULL),
(494, 'KALAWATI DEVI', 'laxmikumari05aug@gmail.com', 'RF819387', '$2y$10$4h8LnUumvdWPvF.p7q8c4OkXrLgXgD2pyYUSy9Uj/HNGeb6RyxUT.', 67, 67, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-02-05', 4, '$2y$10$J0FX9M.dA5zUZa0Bdbx1k.IF9WqovmkzqkAdggqIAajNs69x8iPXK', NULL, 0, NULL, '123456', '93271', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-05 11:44:54', '2024-02-05 11:44:54', 'Male', NULL, NULL, NULL, NULL),
(495, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF002629', '$2y$10$Ot8PTNADhqGUwIORdGXj8epAI5AjFWm2uUM4ybbHb4h2MoWCyWi3S', 67, 494, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$W4mOtpu41fEhFZwVoN3iB.z5qx4Cb0lZH5E8q.cK5KCO7/J08nJqi', NULL, 0, NULL, '123456', '26583', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:10:27', '2024-02-06 02:10:27', 'Male', NULL, NULL, NULL, NULL),
(496, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF493573', '$2y$10$9qwg8Q65PkYq9tNLl6DrFO7bAkESETChBOoN3cXaf/OCV5jbn6kSG', 67, 495, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$YlOwjTBEWB7YX9z6RPKMQO1gUtKawjLiluFwgPbJBhgzYyIXcLZt.', NULL, 0, NULL, '123456', '35341', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:10:35', '2024-02-06 02:10:35', 'Male', NULL, NULL, NULL, NULL),
(497, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF044202', '$2y$10$A1AtheK.88XBTgNfUcR14eSjl.cv0J8Dmw1RhXokAPjkiDxKjRaq.', 67, 496, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$fHh7gXqsqcMvMsGeGyUupeu2zKRXpYDP9BAtDn1Zr7AJwne8u5NCK', NULL, 0, NULL, '123456', '42359', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:10:42', '2024-02-06 02:10:42', 'Male', NULL, NULL, NULL, NULL),
(498, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF244915', '$2y$10$4GyBlAmSx316U4bYxlwwmenR3V6w0GR0.vZQsl3CL6RSGovHe5aNC', 67, 497, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$D8HmFrbV6P8hjsA.MyBu4.or5Udnq.yaeuU4tf.dE32syuiNaGJLS', NULL, 0, NULL, '123456', '49864', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:10:49', '2024-02-06 02:10:49', 'Male', NULL, NULL, NULL, NULL),
(499, 'SHARDA PAL', 'amarpal1733@gmal.com', 'RF605487', '$2y$10$YPFFl9/zQzHKadBJA9qgf.AAkBqEcavFF32lPoB02YyPvvBGZJ9Su', 67, 498, '9936422727', 'Right', 100.00, 0.00, 'Active', '2024-02-06', 4, '$2y$10$tqp6wy86JeFz6AMkmehQguJ0C8cC9RRTZ8r3Vut7frqkVWYmycwVu', '2024-02-22 12:46:37', 0, NULL, '123456', '54215', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:10:54', '2024-02-22 12:46:37', 'Male', NULL, NULL, NULL, NULL),
(500, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF156193', '$2y$10$y4iuef5QWW2s3BQMZiB.3eJ.X9CApFX6WmysSoq2FJnFPzgPt4BBm', 67, 499, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$GZRspf2Rk8eu0P6//XMJteXPl0/DTQ8pDzPzddmJfunbNQB1VSxbG', NULL, 0, NULL, '123456', '61895', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:11:01', '2024-02-06 02:11:01', 'Male', NULL, NULL, NULL, NULL),
(501, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF966616', '$2y$10$nEVes5OXPYE0xhoTBX7lgOooJlYkd7YMGo/J3Us83jkHCt/hMhyOW', 67, 500, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$uAhELVXUjn.ebHhUpOknTOyeHNQd386yrFfnh3euYKouvne4lpd1.', NULL, 0, NULL, '123456', '66107', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:11:06', '2024-02-06 02:11:06', 'Male', NULL, NULL, NULL, NULL),
(502, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF287363', '$2y$10$ITtiUi3/v0GjZhN6a2Ib5.ydy41m/QnfyfExThcnECG7whb4HBC4u', 67, 501, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$Y7bkvA0JhYLm5UUfWsPhIO1CRv96yE3gU6ES5AYSq/MECuC0Qjimq', NULL, 0, NULL, '123456', '73660', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:11:13', '2024-02-06 02:11:13', 'Male', NULL, NULL, NULL, NULL),
(503, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF987973', '$2y$10$Wt8rVz4Yvs83P5gm57020.oo62O3fxFCcFc6WQDuXTgODp.R1zywi', 67, 502, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$ZpzOAHS1.idjHfzvaaIlSOSEBBUjARRJWi5ycv8gZZhzkbh.WHBJG', NULL, 0, NULL, '123456', '79172', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:11:19', '2024-02-06 02:11:19', 'Male', NULL, NULL, NULL, NULL),
(504, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF578561', '$2y$10$wYjoNZgcYjX6ZSK42Lya1.oBZEWllyoKD9XCRwp3Tl0aFAKGKTQD6', 67, 503, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$JwuAYDvzhcGSqjvO90c1IebTS4YNEqVNmNUeMdDEvd30WqCJOls4G', NULL, 0, NULL, '123456', '85265', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:11:25', '2024-02-06 02:11:25', 'Male', NULL, NULL, NULL, NULL),
(505, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF759113', '$2y$10$lZyRAC6ZhLYpNRcnWUTSWe2QGRor8mR0ywWx4.ajLG.xWhvRDIlGO', 67, 504, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$sIbVDeRpFAHANzyfp0L..OumJmpSkzQlIOar.q/zHWFRBkYVBrcAq', NULL, 0, NULL, '123456', '91886', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:11:31', '2024-02-06 02:11:31', 'Male', NULL, NULL, NULL, NULL),
(506, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF919874', '$2y$10$NfT1tRpIbIWhjddESvhUzOHac3yVCSW0fO/vzRL1fyfuvC5M/c11G', 67, 505, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$J0JADtsIRyXxzPBOUYhAweW0w1IryTUYPuOf4XDEetm9LmkLA9ZjS', NULL, 0, NULL, '123456', '98597', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:11:38', '2024-02-06 02:11:38', 'Male', NULL, NULL, NULL, NULL),
(507, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF780499', '$2y$10$zKrpWPKRZ4t1U2FzPzgo5eT9vsekVyCN0XZmCRl6Fgs4pAUtLtJ3a', 67, 506, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$ZZssUCRCwfE9gplIeU9h.e2GngadNYtrCzZA1xYIfBRcApTvLWynW', NULL, 0, NULL, '123456', '04805', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:11:44', '2024-02-06 02:11:44', 'Male', NULL, NULL, NULL, NULL),
(508, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF200928', '$2y$10$2Fr7qaYEWp/vEtnNMcBrYO1ulBqXTZPl5oMK0dg.8SD6vAK9HCt0W', 67, 507, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$uANP5r3C3.UgeJxMQ7QuZuH7gmYkC91p0v/vsrk.Rw0fQqwh1T/36', NULL, 0, NULL, '123456', '09785', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:11:49', '2024-02-06 02:11:49', 'Male', NULL, NULL, NULL, NULL),
(509, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF941441', '$2y$10$/ok1cvOssO52vXYe3geaLu7qubrrjX47I/NOhPiF4IKxKaitNNxAO', 67, 508, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$n/9n0BfuxXs2lbDMeWAOWu5B2up3rvDIpjDr8Awr76aJoZeGIhHz.', NULL, 0, NULL, '123456', '14171', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:11:54', '2024-02-06 02:11:54', 'Male', NULL, NULL, NULL, NULL),
(510, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF062049', '$2y$10$kf5VVPB8TjWUvF6IUIgJ9.DBelDSKL9ws2yNiehfIS1sKTROeYFa.', 67, 509, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$LdFOHmQ9fPRYDgLe1EEeKuX3oAk6WBvBxhESMZtg9oKUA/NnAMps.', NULL, 0, NULL, '123456', '20031', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:12:00', '2024-02-06 02:12:00', 'Male', NULL, NULL, NULL, NULL),
(511, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF732650', '$2y$10$B6U7bJq2h3n9kPxjKekupOhOyDQaVveOmVYhjqZ9FJcqjFQEEAOe6', 67, 510, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$qv9vxZvOhgiR/ZS.Sju/O.SgtKCA1Tv8JBt7bq0Qf3WF.qYNJDYsu', NULL, 0, NULL, '123456', '26221', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:12:06', '2024-02-06 02:12:06', 'Male', NULL, NULL, NULL, NULL),
(512, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF803255', '$2y$10$43egMQgDRiJujk0E1vFpuOYXtaskqgSFq4hc51ShT0u0yyGoZNRsa', 67, 511, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$2HIF.H3WgSsDAMX/84jnZeQHINLgYPXO3GsNGXr2tK7e4jGr/PQoG', NULL, 0, NULL, '123456', '32826', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:12:12', '2024-02-06 02:12:12', 'Male', NULL, NULL, NULL, NULL),
(513, 'KALAWATI DEVI', 'amarpal1733@gmal.com', 'RF903784', '$2y$10$fLOVdRAd49fQYqu2fQ1rAe2NwY6ywXjLtoAZ7XkbZSFl2H9KKQ0jO', 67, 512, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 4, '$2y$10$Pk6HoQUtxbvm4FbcUv0mUeH6dE4xgMeNvsqXsxyIlobA.dUWrThVS', NULL, 0, NULL, '123456', '37545', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 02:12:17', '2024-02-06 02:12:17', 'Male', NULL, NULL, NULL, NULL),
(514, 'KARAM SINGH', 'ksingh8825@gmail.com', 'RF993390', '$2y$10$.vhfxpGW3dBOtIkakKtBCuyFuQ6Zqj8jBEwpYGyakHRbnjzzCU7dq', 489, 489, '9696651981', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 7, '$2y$10$69d9E0imFW1/gcydL.WAGeVPfDaKUwexy9iU71Pr4pkmHxZledVwa', NULL, 0, NULL, '123456', '33171', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 08:08:53', '2024-02-06 08:08:53', 'Male', NULL, NULL, NULL, NULL),
(515, 'KARAM SINGH', 'ksingh8825@gmail.com', 'RF654871', '$2y$10$XdfebshZY6FMxDZbYZO7P.OM/oExGu2H7QBh1ux/Q9fKcJ6lBroR6', 489, 514, '9696651981', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 7, '$2y$10$e6Es.tXBKq1rD3gI3MSz/eiHqbNDt7NiCbI6YeidDt/5lb6XaHHnG', NULL, 0, NULL, '123456', '48539', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 08:09:08', '2024-02-06 08:09:08', 'Male', NULL, NULL, NULL, NULL),
(516, 'KARAM SINGH', 'ksingh8825@gmail.com', 'RF918782', '$2y$10$xs5I.VQORX/3azV0EORyJe8f7jaJCJqwQluMSOSzZ1P437vHyoIR2', 489, 489, '9696651981', 'Left', 1000.00, 0.00, 'Active', '2024-02-06', 7, '$2y$10$NqLAumG25XMp8Rnyzd2RFOyh40ogl8kIhIwPW3M56.PNlJEkSqQYS', '2024-02-06 13:59:07', 0, NULL, '123456', '87632', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 08:11:27', '2024-02-06 13:59:07', 'Male', NULL, NULL, NULL, NULL),
(517, 'KARAM SINGH', 'ksingh8825@gmail.com', 'RF848448', '$2y$10$JbTa2vpFJWR40UDGa2Vpm.wGVQfX1Y3a/274HMRaQ7yTRaDYt8qEW', 284, 491, '9696651981', 'Right', 300.00, 0.00, 'Active', '2024-02-06', 6, '$2y$10$VgHCTpycbeHdzBkNyd8jdukbqmLpoVD.5rHrO0eqTy931zCozdfqS', '2024-02-06 13:58:06', 0, NULL, '123456', '84245', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 08:18:04', '2024-02-06 13:58:06', 'Male', NULL, NULL, NULL, NULL),
(518, 'MANOJ KUMAR SRIVASTAVA', 'srivastavamanojkumar@gmail.com', 'RF511647', '$2y$10$KB94tYM4dKTg.kQAMsTsZ.HtdVPnL0PmldCbyoUoNSyUnop6cmF3e', 488, 488, '8318190412', 'Left', 100.00, 0.00, 'Active', '2024-02-06', 5, '$2y$10$ygsvotcJrRsShEtWJzvb1uQk0Y61Zw5a/SvE/5C/JYLyGkNztliEy', '2024-02-20 12:15:31', 0, NULL, '123456', '16064', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 16:23:36', '2024-02-20 12:15:31', 'Male', NULL, NULL, NULL, NULL),
(519, 'MANOJ KUMAR SRIVASTAVA', 'srivastavamanojkumar@gmail.com', 'RF445713', '$2y$10$StlGkLu/ZzF12b9eKRKVuuGLv7CbwI2.C4JZVxLHVb5hi2q8pl3wK', 518, 518, '8318190412', 'Left', NULL, 0.00, 'Pending', '2024-02-06', 6, '$2y$10$Mwm9NATTrZ2KrZPiFZpzJ.zTi7StFZrHA1nDjTQ6vw3i2zEEf2Tby', NULL, 0, NULL, '123456', '57241', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 16:29:17', '2024-02-06 16:29:17', 'Male', NULL, NULL, NULL, NULL),
(520, 'MANOJ KUMAR SRIVASTAVA', 'srivastavamanojkumar@gmail.com', 'RF081597', '$2y$10$.WbofqMJ0a2mJLtwEHZe5eGFiYU8nwye5pp7Y1nTOY/gMlvuZs7z2', 518, 518, '8318190412', 'Right', NULL, 0.00, 'Pending', '2024-02-06', 6, '$2y$10$VnYDp2OmNqu3XZXI2AAfr.muun3RIZ8lmjscGSnbEEdW6GyzZYvIe', NULL, 0, NULL, '123456', '15300', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-06 16:33:35', '2024-02-06 16:33:35', 'Male', NULL, NULL, NULL, NULL),
(521, 'POONAM', 'amarpal1733@gmal.com', 'RF947570', '$2y$10$Gi5PaqBYjnK3cxl7hY0MjOXK8ALFTjkUIYhCVfpgAKDjNadnIMeZq', 66, 493, '9936422727', 'Left', 100.00, 0.00, 'Active', '2024-02-07', 4, '$2y$10$uidma/Yov3vnrQ5mYfUPi.yGj9MaTF9a/6dt.Hx7Ffz52bolaeHCe', '2024-02-07 21:02:32', 0, NULL, '123456', '75469', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-07 15:27:55', '2024-02-07 21:02:32', 'Male', NULL, NULL, NULL, NULL),
(522, 'PUTTAM', 'uttampriya39@gmail.com', 'RF414751', '$2y$10$ckFd1.qUXZimnh.Btt7d/OBgussOToHo82Mi.3hAJ1I35MVB02uC.', 58, 153, '08423634232', 'Right', NULL, 0.00, 'Pending', '2024-02-08', 4, '$2y$10$eRGKd6trADOY8dpCWxaldOkM186MTMbc3R85zj7Zrcdc.VdsObJdm', NULL, 0, NULL, 'Rajesh@123', '47541', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-08 13:45:47', '2024-02-08 13:45:47', 'Male', NULL, NULL, NULL, NULL),
(523, 'Arun Kumar Trivedi', 'trivediarun568@gmail.com', 'RF937581', '$2y$10$Odtma9eFrMrA0dp3ay4vI.FPfQY9Tx3LmKX7gC4W9Xr8TJE4DyAeW', 135, 522, '8887958210', 'Right', 200.00, 0.00, 'Active', '2024-02-08', 5, '$2y$10$KsQDDkrOKcaMKCnBXVHh2eSwmwfahfATs8JfEPQBAMTMbAM6ny9wm', '2024-02-08 21:46:15', 0, NULL, 'Arun@123', '75242', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-08 15:51:15', '2024-02-08 21:46:15', 'Male', NULL, NULL, NULL, NULL),
(524, 'PUTTAM', '*******', 'RF423154', '$2y$10$1psTRErbO.rDwZ0IZQmA9uSpuvFKurlSFU9pjCkXzJ56jLX9uC6Ae', 135, 135, '08423634232', 'Left', 100.00, 0.00, 'Active', '2024-02-08', 5, '$2y$10$BKP358MCAKSMlAqp.YY8puqXZ4AMIrd/WVbUEt6qh.lj1DLn11joC', '2024-02-08 22:01:42', 0, NULL, 'rajesh@123', '31149', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-08 16:25:31', '2024-02-08 22:01:42', 'Male', NULL, NULL, NULL, NULL),
(525, 'PUTTAM', '**********', 'RF712670', '$2y$10$SfY/ibw1mUiqTTUbcAq7peEkAeytN0sAsAs1S3Ch9Ela1cN3zfK46', 58, 521, '08423634232', 'Left', 100.00, 0.00, 'Active', '2024-02-09', 4, '$2y$10$M0XWW3NUplI9uNxREpmcjuLLygOk/fbKVZQfHIkYUqdqrkxUvsbwq', '2024-02-09 12:46:08', 0, NULL, 'rajesh@123', '26628', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-08 23:50:27', '2024-02-09 12:46:08', 'Male', NULL, NULL, NULL, NULL),
(526, 'ASHISH PAL', 'ashishpal94150@gmail.com', 'RF395176', '$2y$10$Rf1J4E9jH9cOVI7aLhG5oeCNJU9oY.Sdx6oGg7l/WUOMy3pjYHH2y', 62, 525, '+919415070881', 'Left', NULL, 0.00, 'Pending', '2024-02-09', 4, '$2y$10$dWcEbGqcFpscT57cvAWT6OrocMvpYbA//8J9I2k7GA9Yz4glN/FNi', NULL, 0, NULL, '3112114', '51836', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-09 02:27:31', '2024-02-09 02:27:31', 'Male', NULL, NULL, NULL, NULL),
(527, 'Akhilesh Dixit', 'akhileshdixit207@gmail.com', 'RF780105', '$2y$10$ZiQywiSw3cvKxRDBWVsQaehw5f49XG7Pn0VUiHzcXUCfD1Klf63yi', 135, 524, '9336201099', 'Left', 100.00, 0.00, 'Active', '2024-02-09', 5, '$2y$10$mOovCw0Mfa9mTXqwmO62Ru2aqp3BRvqswS8s4FA6VOoFG4ckWp4Hi', '2024-02-20 19:19:51', 0, NULL, '123123', '01867', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-09 08:48:22', '2024-02-20 19:19:51', 'Male', NULL, NULL, NULL, NULL),
(528, 'SUSHIL CHANDRA', 'Helping05mukesh@gmail.com', 'RF293002', '$2y$10$QeiGtp9i12GEoDDx3hnEeO35Gc3OjUszCJPUnK7c0YAJRcTkXMlcO', 56, 473, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-02-11', 4, '$2y$10$YdgJRttWCBh1hyLGcSB/0eNt0N/5CEAByQ79b1YEfMReU9PBQu6Hy', NULL, 0, NULL, '123123', '30892', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-11 08:33:50', '2024-02-11 08:33:50', 'Male', NULL, NULL, NULL, NULL),
(529, 'SUSHIL CHANDRA', 'Jeet.exporter@gmail.com', 'RF412910', '$2y$10$68QknKp3n3zeD0u3xp4q5.IcLqGQ096sPOPzofzaI7AUGAR.SGMaS', 528, 528, '7523988814', 'Left', NULL, 0.00, 'Pending', '2024-02-11', 5, '$2y$10$U4LmktRzQ.BQABZ0GrmhI.I9J3yxaHblVOzrNaKXT/H/K0w/J7R3a', NULL, 0, NULL, '123123', '29574', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-11 08:40:29', '2024-02-11 08:40:29', 'Male', NULL, NULL, NULL, NULL),
(530, 'SUSHIL CHANDRA', 'Jeet.exporter@gmail.com', 'RF606974', '$2y$10$b5O55SJ73oDEKYJW82BVD.i3vEFWgeI2fyLdEowLLQ3PASG5HAHs.', 528, 528, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-11', 5, '$2y$10$XNgEvMWti1SI1L3ilaXcVuAW6Afddx0P5qNOhODFUq.1UelLRkg2q', NULL, 0, NULL, '123123', '69300', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-11 08:41:09', '2024-02-11 08:41:09', 'Male', NULL, NULL, NULL, NULL),
(531, 'Ram narain', 'rnkamal1981@gmail.com', 'RF093822', '$2y$10$aoEwUrtoZqToEHbUFGOKae5TbQzezAb5JWJqalnQnblWVhhOS9mPm', 523, 523, '9336580140', 'Left', 200.00, 0.00, 'Active', '2024-02-11', 6, '$2y$10$1EWBnrNJOmPKfEI940YQY.90NH5RDnNT8UdqER3ZkIc6/PHds0Q8O', '2024-02-11 20:23:28', 0, NULL, 'Ram#1234', '38814', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-11 14:00:38', '2024-02-11 20:23:28', 'Male', NULL, NULL, NULL, NULL),
(532, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF302365', '$2y$10$.dplTcPfH5XsYWUuGzo9OOkXa2/SXXBzStIR0BkaTcZhxbpt5qwje', 55, 526, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$QQ2lRum3TWopXgFtnbW6wOuKvcIp.EVjUiQaF.zaPeRXbL1o75dw.', NULL, 0, NULL, '123456', '23330', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:20:23', '2024-02-13 04:20:23', 'Male', NULL, NULL, NULL, NULL),
(533, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF802912', '$2y$10$/68y1Sw5c/pKXhTrd3F3WeN0BbR0HmzJEy.rB9I5wi7.XxFt4ALfq', 55, 532, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$TuTRQ1.D8mW7Ij1bDjBMT.9qILfw1aZXsZlzbkwRt8viKb2gQB9tC', NULL, 0, NULL, '123456', '29078', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:20:29', '2024-02-13 04:20:29', 'Male', NULL, NULL, NULL, NULL),
(534, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF563505', '$2y$10$jbaYmVnCjbyLiyDlfPgX7OG2ugjd.BvrQF1yWA2DQXtuf17lPA/o2', 55, 533, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$WR7imk/6gFe0hYF1EJIaueOID93R6Kuh8nhhMI5Lk9c4rNG8d2W7K', NULL, 0, NULL, '123456', '35198', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:20:35', '2024-02-13 04:20:35', 'Male', NULL, NULL, NULL, NULL),
(535, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF384160', '$2y$10$Nlg1nW9woRqMgj1ehb.QwumvzLC3v7bPtUPrrpvY8WTaAhfvEPKcq', 55, 534, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$Gon8VhoZssgURD8KQlgmpOE1TnuyHC4QxH0K5SPZo9v88zdz.gtNC', NULL, 0, NULL, '123456', '41361', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:20:41', '2024-02-13 04:20:41', 'Male', NULL, NULL, NULL, NULL),
(536, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF764671', '$2y$10$Cl4UoIh5XKxUbp/UWCPFpub9yyrz.rQ/seDfoLTJhixzzqS/uxWuu', 55, 535, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$xGsVYaYAFQoJbXUm44ko3OzTpSqUJvvZTS87dBfK2cPI3.xOk/98a', NULL, 0, NULL, '123456', '46153', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:20:46', '2024-02-13 04:20:46', 'Male', NULL, NULL, NULL, NULL),
(537, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF505188', '$2y$10$ZlhWsfYAfQ8niRZv1TqBN.38xo4XAoetkeahiTsVWl70nHpUT2kC2', 55, 536, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$P6bBLk6vIfwdhUzwUEufi.syCehpocYhplRtyE5HW77.QKHiT2Je2', NULL, 0, NULL, '123456', '51494', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:20:51', '2024-02-13 04:20:51', 'Male', NULL, NULL, NULL, NULL),
(538, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF885738', '$2y$10$zfd4jiPnY9sjVh1kMLhCw.Rx.AkCbG5koaw.v6UMgAIrAY0.4cBi2', 55, 537, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$YTDCRyx1F.8YoTS5CEyNmerWEWtbEnpTgvMndRAIMKk9bvz0/zgk.', NULL, 0, NULL, '123456', '57765', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:20:57', '2024-02-13 04:20:57', 'Male', NULL, NULL, NULL, NULL),
(539, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF416253', '$2y$10$KwHZ.uBhbWzwsPY4fJIh.OQgsfPspN4y4hSLv6AB.F5/k7Tv6.REK', 55, 538, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$wfU4VZo1qicFLvIulEQGgexzf1lFA6VPJzNkOgqJHfCjO4oo.QtTq', NULL, 0, NULL, '123456', '62885', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:21:03', '2024-02-13 04:21:03', 'Male', NULL, NULL, NULL, NULL),
(540, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF156888', '$2y$10$dositpuwcC9RNeHJo4BF5ufkjurCrX65Ezr5HwnuzGea73hfgz5iS', 55, 539, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$fcm1196vKf2PYhWEU.Lfg.L6ZAiYBCJO06HNxMRp8gpa4fjsYGGzW', NULL, 0, NULL, '123456', '68184', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:21:08', '2024-02-13 04:21:08', 'Male', NULL, NULL, NULL, NULL),
(541, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF897332', '$2y$10$VOvRcan7/7hq4ZxB.0n/VuAnxqDzULnWpicNGNgSPAlLK/s99r.jm', 55, 540, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$1gqltTc7X2u60f0DjjxWRuDUnRdv9UpLrS8xkiatmcoiwv2H3jl..', NULL, 0, NULL, '123456', '73944', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:21:13', '2024-02-13 04:21:13', 'Male', NULL, NULL, NULL, NULL),
(542, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF607903', '$2y$10$GA2yhce8iOCF3ozbEBeEnOxjlzCgHDgiv0OYdR9mBEPWvQRkfEmeq', 55, 541, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$4BDYGt4XQ1IY/TMcDVnf8.aGUvi/VAwmhJ3LmPI6LHezNol3UVOfS', NULL, 0, NULL, '123456', '79771', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:21:19', '2024-02-13 04:21:19', 'Male', NULL, NULL, NULL, NULL),
(543, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF898501', '$2y$10$.APjDWEZbaRkXKmkYK5hj.5CfefSR6riCk4v0XGRcbbqgZeDCwlsS', 55, 542, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$AhP5nnKZS1mTN9PiWc6izeu0t.jaUDHsAAfA7R9TvrmzLH4TKG4vS', NULL, 0, NULL, '123456', '85530', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:21:25', '2024-02-13 04:21:25', 'Male', NULL, NULL, NULL, NULL),
(544, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF889270', '$2y$10$XQhn7.jPBoM1HODs8raVxOvmZ74iiqAsrjRZXhIKGpYAUcLaHjILG', 55, 543, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$4DXb7d0ix0D8fyW47Rt2EuGvCBahq1rQukRvEGDcwN3I5T7CowLK6', NULL, 0, NULL, '123456', '92652', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:21:32', '2024-02-13 04:21:32', 'Male', NULL, NULL, NULL, NULL),
(545, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF299716', '$2y$10$X0.MF0oZCeeFswayrTVh0emKOryDWBqQBAWcwmghCfR9nDwjss1GO', 55, 544, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$UOPKNE4QaMV2Z2UlcUxw7.HzfcmYyo0f9XjGtlVRQt0TNTEgAmruO', NULL, 0, NULL, '123456', '97329', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:21:37', '2024-02-13 04:21:37', 'Male', NULL, NULL, NULL, NULL),
(546, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF960392', '$2y$10$CSkD5apNrDX5.pwUg96zUOuzoRhYu7l3O75wePj9ospLDQKcGWB/u', 55, 545, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$3q.FKYYx2wcYEw/u2rlwiumqloQd6TE4OyWVhpT.dJB5/UbFlX0ge', NULL, 0, NULL, '123456', '03144', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:21:43', '2024-02-13 04:21:43', 'Male', NULL, NULL, NULL, NULL),
(547, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF660868', '$2y$10$F6YDQeL/Do28IEwa9y54zeykW78Da2HZ.m7VZaJbzFhgEIhpRaloO', 55, 546, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$rK9dkBhEVgXBEqv3fFvJdOUZ2cOzXinCz8KbuSvY5k4sDCoK5TWmS', NULL, 0, NULL, '123456', '08696', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:21:48', '2024-02-13 04:21:48', 'Male', NULL, NULL, NULL, NULL),
(548, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF411434', '$2y$10$x.ToOo8/G7NZTxKgMvzgDOaPvlydCgTJWkmDd8vAP6d2MXq8Qo64m', 55, 547, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$YvtTMCgmm.Ait9URmuJR9OeUQUzn/Lnd1HBregu2HXBcdnR0g7QC2', NULL, 0, NULL, '123456', '14192', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:21:54', '2024-02-13 04:21:54', 'Male', NULL, NULL, NULL, NULL),
(549, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF612133', '$2y$10$NyltV629IScfqqIrUs0QBeiNhewoVETfnuGCnVTUNWU3kBTeq0XGS', 55, 548, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$OfwD3Me5zZDwX.NyeZIMqef66TqLGXE6MJfqAj7W7VR0VP54WPcky', NULL, 0, NULL, '123456', '21677', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:22:01', '2024-02-13 04:22:01', 'Male', NULL, NULL, NULL, NULL),
(550, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF222624', '$2y$10$O6K3xOKtQ/Zl4stjoK50ieVNN2u5ttW8uwBcsgXzpLxJxxu4aGn4m', 55, 549, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$u4IqQNI8xBpSAlP7zpMLmO1TzfKntp6uw.yLdoI2fl1hWiniSXSIi', NULL, 0, NULL, '123456', '26220', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:22:06', '2024-02-13 04:22:06', 'Male', NULL, NULL, NULL, NULL),
(551, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF253206', '$2y$10$D5.LB5XP1US2KNB1PiDJjuUlNEG0duC5bYcAgcvxNTa6bknikfhye', 55, 550, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$tl/HITpu6sRoZ0nBbunVgu8LKIqERBoWQU3bBaedi7k1YYKfuwT8.', NULL, 0, NULL, '123456', '32810', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:22:12', '2024-02-13 04:22:12', 'Male', NULL, NULL, NULL, NULL),
(552, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF783820', '$2y$10$ubTsDROsBVKO321xJ/hlFe6AKUbxVBCX0if0zM/FzFrQlBr9Y.geG', 55, 551, '9936422727', 'Left', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$FTM6K5jOsGEvxDUq5VFMVegp8F0bQntyaOOjOP03b4./5EYasSwwm', NULL, 0, NULL, '123456', '38053', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:22:18', '2024-02-13 04:22:18', 'Male', NULL, NULL, NULL, NULL),
(553, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF184757', '$2y$10$mDIOW9qN9bdl4f2tYCljguoB1ltLecG49pqLzj1lX45LChqo9SnEi', 55, 341, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$JvGl/teIE.LHXzUrCgIv1.UX/PgYOyCAB/yCK4skge0zNvHwy24zq', NULL, 0, NULL, '123456', '47182', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:22:27', '2024-02-13 04:22:27', 'Male', NULL, NULL, NULL, NULL),
(554, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF235248', '$2y$10$9H6WYDE4OVjGRwjxiZhrV.7KZxWsgT7zyDiVGlPj5Hkpc3m.e.kJ.', 55, 553, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$gEnP3W5GOPwgGLhaOLnQH.m9sviwClwsJ/zhazSoB5szWF9NmTDVm', NULL, 0, NULL, '123456', '52738', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:22:32', '2024-02-13 04:22:32', 'Male', NULL, NULL, NULL, NULL),
(555, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF615846', '$2y$10$bqYdI15CexUb6fCC5uyIJOER7qAdInTzHHXR4of2eR.zJC0Ac4FjG', 55, 554, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$a97ZBZyTf9TNbsRZ.I7EzeNQojEg51WEOHwGH0..DG.UqS4jHRb0.', NULL, 0, NULL, '123456', '58518', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:22:38', '2024-02-13 04:22:38', 'Male', NULL, NULL, NULL, NULL),
(556, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF656579', '$2y$10$BSXYN7SUjZDXNoSkLLqcOusG/LYBAmZC2Mx5YkqcTmuue/QjDQeDO', 55, 555, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$kk3jg4HgeHe7u4Egw1blhese2wvvbvSgLoq9AiH6KWSvXRFVpbAUS', NULL, 0, NULL, '123456', '65372', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:22:45', '2024-02-13 04:22:45', 'Male', NULL, NULL, NULL, NULL);
INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `sponsor`, `ParentId`, `phone`, `position`, `package`, `amt`, `active_status`, `jdate`, `level`, `tpassword`, `adate`, `rank`, `trx_addres`, `PSR`, `TPSR`, `capping`, `power_leg`, `vicker_leg`, `balance`, `country`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`, `gender`, `nominee_relation`, `adhar`, `pan`, `nominee_name`) VALUES
(557, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF937182', '$2y$10$dqjwRA9y1BoknUJ0oS9fq.3yDhemyqXYz/iRe/mmxSZ9Lt10TyUcO', 55, 556, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$s1nnZVfTcoOIA4e0WRMD4u4WqQp4Dm4sPCO0noPZGAmm7y.Trp.Lu', NULL, 0, NULL, '123456', '71756', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:22:51', '2024-02-13 04:22:51', 'Male', NULL, NULL, NULL, NULL),
(558, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF277769', '$2y$10$n1gGl78KAcBhZa0PDxph6O8cvRlYpsqc6gY5HXOLlNUQUzpbgjvzi', 55, 557, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$4kBWWSYZTBQpHDZ0idanSuPppcG3RgDVw/jZBYmJu71uHNcN1YcDK', NULL, 0, NULL, '123456', '77233', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:22:57', '2024-02-13 04:22:57', 'Male', NULL, NULL, NULL, NULL),
(559, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF778275', '$2y$10$1lWtI.vUB/W.LTplHF/AMuLmVTCkjxXUE8nJ4avNgcrGD/7DYcBCu', 55, 558, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$OjLvf5qaJwuHvfB0Jcs3SOOK2AKencBSEVv.K2cBfykNpKx4icXam', NULL, 0, NULL, '123456', '82090', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:23:02', '2024-02-13 04:23:02', 'Male', NULL, NULL, NULL, NULL),
(560, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF448873', '$2y$10$bnuZyF0bFDzyg8S8oXi/9.H6rlQcQkBNx3YCdw3StaQz8FH0HF.Wa', 55, 559, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$2m2vi7LuvQ0e7L0zpLk8J.7/6RbRLhnw4LTS2Ox7PZDMClZLpW21G', NULL, 0, NULL, '123456', '88091', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:23:08', '2024-02-13 04:23:08', 'Male', NULL, NULL, NULL, NULL),
(561, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF149429', '$2y$10$PP3LPNQ87PbLj5S4ckIfH.8IDuLt03wxcWwMamV.sAxGN1xLbYrRi', 55, 560, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$uG3S5RJtb94neydqM4VWOu1q59IboyOXjxddw1to6vQS.WkX7DOGW', NULL, 0, NULL, '123456', '94279', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:23:14', '2024-02-13 04:23:14', 'Male', NULL, NULL, NULL, NULL),
(562, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF369855', '$2y$10$4aKiJ0s7Axy9aQVZcxtjXux1K8WmWIzok8TS8CY1ykPpwaagY5zqq', 55, 561, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$SMaHzdhmO9vPrZIs8m/x1.2ZoE1k192MIQIwcljwX1vksBX7yHbA6', NULL, 0, NULL, '123456', '98729', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:23:18', '2024-02-13 04:23:18', 'Male', NULL, NULL, NULL, NULL),
(563, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF410496', '$2y$10$WxxuMLbWZpuG3yWndDXAbeTIDLCZsNSyBpf1AI3QxvP2k4/TBFhuW', 55, 562, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$nr0u/hMzJvCOKIGdZ/8on.9zu/8W/nuEUhY8b4AhOdclzJJHb283K', NULL, 0, NULL, '123456', '04512', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:23:24', '2024-02-13 04:23:24', 'Male', NULL, NULL, NULL, NULL),
(564, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF540976', '$2y$10$gytMhXWhs5REr7XHqvLd6eg9SsSPyu3suOfM30CY2Qmlq/wauynEq', 55, 563, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$TRFZqCssi/j98lH5Oq5Zh.4MKpcbVdXIo.3MYh6eO/rNpDU.EB4Cy', NULL, 0, NULL, '123456', '09405', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:23:29', '2024-02-13 04:23:29', 'Male', NULL, NULL, NULL, NULL),
(565, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF031676', '$2y$10$hHZrvCMP6hqkINDlqd/bOe9EKWgeu0Wzk/gLxpVulTMrSpikhXqCi', 55, 564, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$A/frworUvy/L8YgsCWMsjeiGPAB8Dvua40/GwvTX5j2lRrK3hceiu', NULL, 0, NULL, '123456', '16691', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:23:37', '2024-02-13 04:23:37', 'Male', NULL, NULL, NULL, NULL),
(566, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF602327', '$2y$10$3sLoSXtEfJDILqySRGavIOWMm2CeZIXS8Ic3VcCmZS9UFpAYgYJWq', 55, 565, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$8qua6TQN0w2E9WRZBHRzNujyjWbLeFO1f/Tf3bZHLuJ1M9xIC9dyS', NULL, 0, NULL, '123456', '23673', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:23:43', '2024-02-13 04:23:43', 'Male', NULL, NULL, NULL, NULL),
(567, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF042866', '$2y$10$/kB15w1.wD7XvbE01gGxwenzk4i/P9MnRT8c5EB6nrJ1Yt6lLlZ9u', 55, 566, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$EOr.C7p46YlfgAL9JTgkZ.rue/89UZQDAqaIeGUqXqkhP9Lc8MOtC', NULL, 0, NULL, '123456', '28007', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:23:48', '2024-02-13 04:23:48', 'Male', NULL, NULL, NULL, NULL),
(568, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF323315', '$2y$10$urYTWytbBKm7ka7L40B7J.MEcdxGINGqTKRz4JVU5vAsKhrK9eVxa', 55, 567, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$fiw9v46/fmjM.m23qmAoqOTThHmW6ewE55/thaVY9IlWmDuU1BNmq', NULL, 0, NULL, '123456', '33938', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:23:53', '2024-02-13 04:23:53', 'Male', NULL, NULL, NULL, NULL),
(569, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF014082', '$2y$10$oj3yNEB8StFRG.FmkGYy2uJe2T2Ux1d8xKHdqs0036i5a2gG.XOuy', 55, 568, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$VjtFxxeFAkbDfjqsBamqLe5UPHgkubnuiZv7jBfyqLyTnZvKdTp/O', NULL, 0, NULL, '123456', '40068', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:24:00', '2024-02-13 04:24:00', 'Male', NULL, NULL, NULL, NULL),
(570, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF174570', '$2y$10$WDyvZe1zheMA9UwvDjQ43eRaZHpAXkVALznLj.6ob4Sz/rG38g8Vi', 55, 569, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$9CLnrepAnoQ52GalhAViDemwz1rq5wtVaCTyRVClXWjGAkvwnbrfO', NULL, 0, NULL, '123456', '45042', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:24:05', '2024-02-13 04:24:05', 'Male', NULL, NULL, NULL, NULL),
(571, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF215099', '$2y$10$nJ3FAAF8yOilAD6X3kw13Ow5gLB7p2iiO8ILmKFFCiru.Ypw/0uOG', 55, 570, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$7rXZqrgoUGaucUthi.Vcx.fEymemvGJsRk1qRdBZQ/.p9iacFj922', NULL, 0, NULL, '123456', '50509', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:24:10', '2024-02-13 04:24:10', 'Male', NULL, NULL, NULL, NULL),
(572, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF865736', '$2y$10$BhKxyiawqt/QnQo65I6z8euhsgJGEQvf2FM5iBtBByUWn9Svg2O2u', 55, 571, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$1vS0IK83vmraJTEvYmC3ZOb6gIvdqSTE0FFtVTigU4l6mrcx/uAkK', NULL, 0, NULL, '123456', '57118', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:24:17', '2024-02-13 04:24:17', 'Male', NULL, NULL, NULL, NULL),
(573, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF876395', '$2y$10$pJ2MkwNFwYS72hqoRBNM4.BnX/6wKRG70J2IDxkgkEwIUI6hpiXzm', 55, 572, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$PB40clw2o0D.RZtokCMxreKc0MhnK5J2vf7.pWl63AsMS03103jMW', NULL, 0, NULL, '123456', '63880', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:24:23', '2024-02-13 04:24:23', 'Male', NULL, NULL, NULL, NULL),
(574, 'RAMA PAL', 'amarpal1733@gmail.com', 'RF577582', '$2y$10$M.3k02j6zNphp.UuWVYjtOiqh/bE4ICX4KBw4LOegiEJS5FuWr1na', 55, 573, '9936422727', 'Right', NULL, 0.00, 'Pending', '2024-02-13', 4, '$2y$10$7fR18yreXst/IVbLtgWqheQedF3OWkdsD5VYN6PwgRO7xEx/j/hbu', NULL, 0, NULL, '123456', '75799', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-13 04:24:35', '2024-02-13 04:24:35', 'Male', NULL, NULL, NULL, NULL),
(575, 'Ram Narain', 'rnkamal1981@gmail.com', 'RF825134', '$2y$10$oJCtUhP9FRx2.OVaz3Z/Je6FbzxsWffZNKs59Inbnm92dSAwPPZNa', 531, 531, '9336580140', 'Right', 200.00, 0.00, 'Active', '2024-02-18', 7, '$2y$10$PaDuey9zT8m2Jf72EKCHEOp3jUqiwssaYWt8Oqmga3lzne.BbywXK', '2024-02-18 15:08:38', 0, NULL, 'Ram#1234', '51587', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 09:25:51', '2024-02-18 15:08:38', 'Male', NULL, NULL, NULL, NULL),
(576, 'MUNEER AHMAD', 'muneerahmad1909@gmail.com', 'RF800172', '$2y$10$csE2GQqpwzLfdt5Yne8a5uSJhxPfbi6paAhZmU8qkqjXdeACPTJcO', 470, 470, '9935008234', 'Right', 100.00, 0.00, 'Active', '2024-02-18', 6, '$2y$10$gblRmjukAo9NNkPD5LvoTehieFm/OQnPnWYcucsaha.JKNfpVx4Va', '2024-02-18 21:46:01', 0, NULL, '123456', '01892', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 11:08:21', '2024-02-18 21:46:01', 'Male', NULL, NULL, NULL, NULL),
(577, 'MUNEER AHMAD', 'muneerahmad1909@gmail.com', 'RF581044', '$2y$10$gldGps6cgKPl4jobKCDrTO/f4/Vx64P5Kj/Xaph5ZRmKJd52j0GRG', 470, 576, '9935008234', 'Right', 100.00, 0.00, 'Active', '2024-02-18', 6, '$2y$10$w4iTuMyX.VB9OdhHMz7sI.jwt0zkCXxQQ7ijQR.NYHslUUbThRw9y', '2024-02-18 22:01:15', 0, NULL, '123456', '10934', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 11:10:10', '2024-02-18 22:01:15', 'Male', NULL, NULL, NULL, NULL),
(578, 'MUNEER AHMAD', 'muneerahmad1909@gmail.com', 'RF186780', '$2y$10$yCACs2tBLQnULWT4zxEjWuat2ZkNYz4VahMrBE9uBQe9Pt2RYQjgu', 470, 577, '9935008234', 'Right', 100.00, 0.00, 'Active', '2024-02-18', 6, '$2y$10$PRlQ6eOxXQc8NUtrIhUUTeOEfE/UzJNmEGRC5i1Z4qQ.PpmQFSS2a', '2024-02-18 22:01:55', 0, NULL, '123456', '67018', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 11:11:07', '2024-02-18 22:01:55', 'Male', NULL, NULL, NULL, NULL),
(579, 'MUNEER AHMAD', 'muneerahmad1909@gmail.com', 'RF582579', '$2y$10$McTBXG2ZXdF2.dPTIv4ytuXEMVfJVoHIH71lzbFUis7sTgN4cYB1.', 470, 492, '9935008234', 'Left', 100.00, 0.00, 'Active', '2024-02-18', 6, '$2y$10$d/2XG4hwRYngGFtYGVuWtergmFjskJhVDLgA.nlUwKONkJE93qt/a', '2024-02-18 21:59:52', 0, NULL, '123456', '25979', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 11:12:05', '2024-02-18 21:59:52', 'Male', NULL, NULL, NULL, NULL),
(580, 'MUNEER AHMAD', 'muneerahmad1909@gmail.com', 'RF556613', '$2y$10$peDEHuMAxxeXK3LDJ.3e/OQy4xDQqMTFUsRX3WkOam800VwVB771.', 470, 579, '9935008234', 'Left', 100.00, 0.00, 'Active', '2024-02-18', 6, '$2y$10$QKY0RATnHgtwBHSAZhCMsuduhTQwt8dS7aIQ4a0EBs1FuL1qE/2Ui', '2024-02-18 22:00:33', 0, NULL, '123456', '66751', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 11:12:46', '2024-02-18 22:00:33', 'Male', NULL, NULL, NULL, NULL),
(581, 'RAVI KUMAR VISHWAKARMA', 'speakravi12@gmail.com', 'RF866482', '$2y$10$YU8IMvoUmyc/8s98Q45IV.S3OCtAhU.YUkkhxCS8SU4.3h9E7jesu', 116, 116, '+919838584312', 'Left', NULL, 0.00, 'Pending', '2024-02-18', 5, '$2y$10$xPx.sQampir/Xb2NRoeWb.lkSZXXro3SibqmgDNt.ZGM6lQrcSP2O', NULL, 0, NULL, '123456', '64766', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 13:27:44', '2024-02-18 13:27:44', 'Male', NULL, NULL, NULL, NULL),
(582, 'RAVI KUMAR VISHWAKARMA', 'speakravi12@gmail.com', 'RF362225', '$2y$10$.zPB7b3etolPxkjleso3LuW07skwY7oHbF5C/R9Kaql3tLq8ngSmW', 116, 581, '+919838584312', 'Left', NULL, 0.00, 'Pending', '2024-02-18', 5, '$2y$10$Grp3LQOiIB0QHjMyYJkCFek1j/5c3ckeMufR1EZO74cRPLFSmlTV2', NULL, 0, NULL, '123456', '22401', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 13:28:42', '2024-02-18 13:28:42', 'Male', NULL, NULL, NULL, NULL),
(583, 'RAVI KUMAR VISHWAKARMA', 'speakravi12@gmail.com', 'RF993879', '$2y$10$bQZwph90.BGoVVLe.icSd.iZMSMq9.2le./nBjwbOsETrPAjipXR2', 116, 582, '+919838584312', 'Left', NULL, 0.00, 'Pending', '2024-02-18', 5, '$2y$10$b93jDOzSPoctL1SVW3nwuOIuxJA3ym0xKZ6olreOriIiq.U4YZfgS', NULL, 0, NULL, '123456', '38773', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 13:28:59', '2024-02-18 13:28:59', 'Male', NULL, NULL, NULL, NULL),
(584, 'RAVI KUMAR VISHWAKARMA', 'speakravi12@gmail.com', 'RF074743', '$2y$10$rMbm1CxRGweVVRfeozuru.hp1//SAF65Noz3C2NHb3uowk3LPO7ay', 116, 583, '+919838584312', 'Left', NULL, 0.00, 'Pending', '2024-02-18', 5, '$2y$10$N9becFt/wCeWL2MvHJhym.fUzeRdFSzKvYSsdCXv7e/nAFvOmpqAO', NULL, 0, NULL, '123456', '47683', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 13:29:07', '2024-02-18 13:29:07', 'Male', NULL, NULL, NULL, NULL),
(585, 'RAVI KUMAR VISHWAKARMA', 'speakravi12@gmail.com', 'RF865674', '$2y$10$7vk4WKaYF87.inu0XtOJ.en13dNLDmWhdC1K/NPn/LGZ/nQKN0QwC', 116, 584, '+919838584312', 'Left', NULL, 0.00, 'Pending', '2024-02-18', 5, '$2y$10$utu5tbM60PoC4vgH0DFj1eZL4BYDELj/rpsizB3luubQoaMFmpOMe', NULL, 0, NULL, '123456', '56110', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 13:29:17', '2024-02-18 13:29:17', 'Male', NULL, NULL, NULL, NULL),
(586, 'RAVI KUMAR VISHWAKARMA', 'speakravi12@gmail.com', 'RF426181', '$2y$10$4DkCeh1ZxdMLWPD.ZHMcFeS1zRMMxJG21nfk3IE8KI6rDnlL8PpPm', 116, 585, '+919838584312', 'Left', NULL, 0.00, 'Pending', '2024-02-18', 5, '$2y$10$QrO.oqMZ/GJHaBk2pVWwvu4vK6RZb2Es9dnfgGaYpKagOE78gjp.S', NULL, 0, NULL, '123456', '61734', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 13:29:21', '2024-02-18 13:29:21', 'Male', NULL, NULL, NULL, NULL),
(587, 'RAVI KUMAR VISHWAKARMA', 'speakravi12@gmail.com', 'RF016518', '$2y$10$3i.SYzii4d7BHqZJztEXZ.QB2n70DqhLahlwqQsW9nEaeou3w6hCC', 116, 586, '+919838584312', 'Left', NULL, 0.00, 'Pending', '2024-02-18', 5, '$2y$10$ynreEekFYlBRnghd6QzJxObZ2qd9kKnoHep4Hk9elpBRKOI6qiTZS', NULL, 0, NULL, '123456', '65603', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 13:29:25', '2024-02-18 13:29:25', 'Male', NULL, NULL, NULL, NULL),
(588, 'RAVI KUMAR VISHWAKARMA', 'speakravi12@gmail.com', 'RF989117', '$2y$10$0aY0bc/1lv9QHBg5SlTRb.LDBxIIRY9xSvwgmWPLGBWuScb8b/h86', 116, 587, '+919838584312', 'Left', NULL, 0.00, 'Pending', '2024-02-18', 5, '$2y$10$cy4uqJckXb/dNCNktC7vgeTnIBG3Q6M3oixCO8vnbdwUR4o6HO6H6', NULL, 0, NULL, '123456', '91831', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 13:29:51', '2024-02-18 13:29:51', 'Male', NULL, NULL, NULL, NULL),
(589, 'RAVI KUMAR VISHWAKARMA', 'speakravi12@gmail.com', 'RF695755', '$2y$10$bF6DsZiFLkhic3ztUDnaLO4KXf48B.gNZNrPmNwaQCCZ8SYHxsFK6', 116, 588, '+919838584312', 'Left', NULL, 0.00, 'Pending', '2024-02-18', 5, '$2y$10$nFokAqYDvAJRUZqdLGgey.U.VFXWUibvV6FAIIC26nkyL/EQ7btBi', NULL, 0, NULL, '123456', '57987', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 13:30:57', '2024-02-18 13:30:57', 'Male', NULL, NULL, NULL, NULL),
(590, 'RAVI KUMAR VISHWAKARMA', 'speakravi12@gmail.com', 'RF037600', '$2y$10$1/FYrdJyzPuvCbMpuUmjVuKdtzLxBexwWFFLPP1jO1KW3ftVnb7zG', 116, 589, '+919838584312', 'Left', NULL, 0.00, 'Pending', '2024-02-18', 5, '$2y$10$O2Bm02PKLVBO9bdhNNhYXOqxCVcVLRaJfiRZvc8bV1JTKdaSrxGhu', NULL, 0, NULL, '123456', '76454', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 13:31:16', '2024-02-18 13:31:16', 'Male', NULL, NULL, NULL, NULL),
(591, 'Rajnish Sharma', 'rajnishs708@gmail.com', 'RF943014', '$2y$10$U33QsNJZSm9IaLRvEElX9ejt.uYgBrg9f5JKwgUhvl1cslujUIT2W', 116, 590, '9335616397', 'Left', NULL, 0.00, 'Pending', '2024-02-18', 5, '$2y$10$ZnvsOMv5.FDg0hPVt6yrc.M6j1JrC7oB5k.ccYBG2IkCD88.hJNEK', NULL, 0, NULL, '123456', '30146', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 13:32:10', '2024-02-18 13:32:10', 'Male', NULL, NULL, NULL, NULL),
(592, 'Rajnish Sharma', 'rajnishs708@gmail.com', 'RF183561', '$2y$10$Y85hpbyITfAzrBpCCNchz.p.D1LLksYdzt/mcqZrCrFu/xKBc2Nmi', 591, 591, '9335616397', 'Left', NULL, 0.00, 'Pending', '2024-02-18', 6, '$2y$10$93nG0YhQE74yQZATEit0luoHpzPxTUmGG.2.RqQ8AsKCd36GS/NoS', NULL, 0, NULL, '123456', '35480', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 13:35:35', '2024-02-18 13:35:35', 'Male', NULL, NULL, NULL, NULL),
(593, 'SANJAY SONKAR', 'sanjaysonkar88959@gmail.com', 'RF417768', '$2y$10$wn5zxdXWL/Cm0LmzAU/zmOxwa9rJx2v7ERKFw99agQb6MUFQZCgsi', 403, 403, '7985823230', 'Right', 100.00, 0.00, 'Active', '2024-02-18', 6, '$2y$10$BS5KY/6BI8N2pumPuoZ/muclL0dHP22/YCxr9QY5wW.YbM84BOKeK', '2024-02-18 19:49:07', 0, NULL, '123456', '77230', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-18 13:44:38', '2024-02-18 19:49:07', 'Male', NULL, NULL, NULL, NULL),
(594, 'BABU RAM', 'Jeet.exporter@gmail.com', 'RF253776', '$2y$10$DXOnfuvbju0C9zI8dH9kreZSHtdayk09KAr6qfNnO/D40bm7NgowG', 66, 552, '7523988814', 'Left', 5600.00, 0.00, 'Active', '2024-02-19', 4, '$2y$10$pEotB6w1O6yBOSG8vxb4WuYlqCtxBAp7AwDTC6p2q2Fw3dd9blH3C', '2024-02-19 17:29:04', 0, NULL, '123456', '37806', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-19 11:48:57', '2024-02-19 17:29:04', 'Male', NULL, NULL, NULL, NULL),
(595, 'BABU RAM', 'rejoicefx@gmail.com', 'RF446036', '$2y$10$xh0bZOMfcaDxfrtX6JEAdetyMMgvO6H2sf.fpZ7gPJGes/es0.BAe', 404, 467, '1234567890', 'Left', 5600.00, 0.00, 'Active', '2024-02-19', 5, '$2y$10$2ccOkLqC.YYjpKFFj9n0EeEztmf2XK5MBiNMvJxal7CwuorgXtRg.', '2024-02-20 06:23:19', 0, NULL, '123456', '60123', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-19 12:21:00', '2024-02-20 06:23:19', 'Male', NULL, NULL, NULL, NULL),
(596, 'BABU RAM', 'rejoicefx@gmail.com', 'RF768130', '$2y$10$u2zV6poRbjFZ1XkwOGeJMOmFLEA81kGDz0sgdeqpXoaJKPB0xY.vS', 404, 417, '1234567890', 'Right', 5500.00, 0.00, 'Active', '2024-02-19', 5, '$2y$10$k9MfQ1vvv9Hj5rvXiRmS..84LFaZ42idPD.kptTCUmiIrHa2ZCbYK', '2024-02-20 06:19:53', 0, NULL, '123456', '81105', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-19 12:21:21', '2024-02-20 06:19:53', 'Male', NULL, NULL, NULL, NULL),
(597, 'REJOICE', 'REJOICEFX@gmail.com', 'RF613529', '$2y$10$YHqEYHb5naSFYcPJ.hQQCOm83Sc0jRgMD0G7gpkBufWr9aX1qGphu', 52, 487, '1234567890', 'Right', NULL, 0.00, 'Pending', '2024-02-20', 2, '$2y$10$wFhSlTSjk1T9ywEBJCrzte.WJ9JAD0aupbg59Cg2HrwGVxg4FxHwe', NULL, 0, NULL, '123456@1', '35207', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-20 10:30:35', '2024-02-20 10:30:35', 'Male', NULL, NULL, NULL, NULL),
(598, 'REJOICE', 'REJOICEFX@gmail.com', 'RF843621', '$2y$10$6SvfIcCvkBtE7/FjX2U9JuZXPkm8IuZgwu8T0ylaFkBW09GanXlSe', 52, 597, '1234567890', 'Right', 50000.00, 0.00, 'Active', '2024-02-20', 2, '$2y$10$89pKUOzz/rhv/2jd90repedEpUZFjp7emtQ71i0x0cTinwxRbkS0C', '2024-02-20 16:02:23', 0, NULL, '123456@1', '36295', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-20 10:30:36', '2024-02-20 16:02:23', 'Male', NULL, NULL, NULL, NULL),
(599, 'Arun Kumar Trivedi', 'trivediarun568@gmail.com', 'RF181337', '$2y$10$qcULWs6871qvBTqyIyt6Y.hr9w244D4ppoP2ISCfSTje3FeKASVdO', 523, 523, '8887958210', 'Right', 200.00, 0.00, 'Active', '2024-02-21', 6, '$2y$10$YP1ltUm2JRfSZHlh5qCmCOusgwdHv5Zq/y9h/dHlVifhmd1Bxrsua', '2024-02-21 19:17:56', 0, NULL, 'Arun@123', '13878', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-21 13:28:34', '2024-02-21 19:17:56', 'Male', NULL, NULL, NULL, NULL),
(600, 'Arun Kumar Trivedi', 'trivediarun568@gmail.com', 'RF261065', '$2y$10$Z/SbxkmoJj3oP7aDOASDgehszxUqKXG0ydHx5PNgFIOCRJTE0YqY6', 599, 599, '8887958210', 'Left', 500.00, 0.00, 'Active', '2024-02-21', 7, '$2y$10$Kb4XKkCri/E.MgK1dQCaQeXZWU3cqwidtgEiGtRnRjpcpsasIgqeG', '2024-02-21 20:02:08', 0, NULL, 'Arun@123', '10321', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-21 13:53:30', '2024-02-21 20:02:08', 'Male', NULL, NULL, NULL, NULL),
(601, 'Arun Kumar Trivedi', 'trivediarun568@gmail.com', 'RF277533', '$2y$10$0e52TFPd2Hrk6fbjSiLBCenCHJg8OL2DxweuScUh2LHRkmkABNz5e', 599, 599, '8887958210', 'Right', 100.00, 0.00, 'Active', '2024-02-21', 7, '$2y$10$wNnIhZoMV2ogZJyeWBVomOdtjHoKsQG5aJ81oXvXwO5SfJhWDsPs6', '2024-02-22 13:55:57', 0, NULL, 'Arun@123', '75826', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-21 13:57:55', '2024-02-22 13:55:57', 'Male', NULL, NULL, NULL, NULL),
(602, 'SONI', 'mohdshabih96@gmail.com', 'RF732129', '$2y$10$aWEMbiq3JNIuJP/MXDrST.AgH1jhpuP5UhnlF/7q9qsjOjEGZtuwC', 451, 451, '9140635520', 'Left', NULL, 0.00, 'Pending', '2024-02-22', 5, '$2y$10$ntaY3ZjVQuM3VcVxI/6eEO4AccPNbQUgtZxyjtoiWIVf9odf8UMmq', NULL, 0, NULL, '148223', '21725', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-22 11:40:21', '2024-02-22 11:40:21', 'Male', NULL, NULL, NULL, NULL),
(603, 'SONI', 'mohdshabih96@gmail.com', 'RF106675', '$2y$10$wY6bHWZHkqK0zf2kypGQsOtpUlDjCAZEyK7r5Sxq8EBPeXaqs/D/u', 451, 602, '9140635520', 'Left', NULL, 0.00, 'Pending', '2024-02-22', 5, '$2y$10$Db8uxCTLaGA52p03OAGkhuQy.MDNnrYBTVOON8uWo4zDWuTMF45eC', NULL, 0, NULL, '148223', '66507', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-22 11:41:07', '2024-02-22 11:41:07', 'Male', NULL, NULL, NULL, NULL),
(604, 'SONI', 'mohdshabih96@gmail.com', 'RF666232', '$2y$10$SO2JyHSm9ZaXx3GW62E67ulDqvlVUzc0vkF0LCZmUGmdyhfhlt4we', 451, 471, '9140635520', 'Right', NULL, 0.00, 'Pending', '2024-02-22', 5, '$2y$10$YGp7gEIDJGga7qXLImq1DeC5JUsO341je/pYwCeuVCu39Q7sS2OQ2', NULL, 0, NULL, '148223', '62218', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-22 11:42:42', '2024-02-22 11:42:42', 'Male', NULL, NULL, NULL, NULL),
(605, 'SONI', 'mohdshabih96@gmail.com', 'RF496773', '$2y$10$Y9XO1p0RsyJaL42NiqEckeYeIVW8u9S.w0lSLlnJTYQtP9.i6Xc/u', 602, 603, '9140635520', 'Left', NULL, 0.00, 'Pending', '2024-02-22', 6, '$2y$10$Fkz94/rFOzOjdO5eQbkHc.pU4ZSxBRzLtrVgvZSb72CFluYggM8v6', NULL, 0, NULL, '148223', '67191', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-22 11:56:07', '2024-02-22 11:56:07', 'Male', NULL, NULL, NULL, NULL),
(606, 'SONI', 'mohdshabih96@gmail.com', 'RF061000', '$2y$10$4krlvBXmO.8lM8bvE/NPqeCx5J2xLyxiDT8iD80ld6WUby98FwQb.', 602, 602, '9140635520', 'Right', NULL, 0.00, 'Pending', '2024-02-22', 6, '$2y$10$YFK2zTn.2Nu5f1pAUGP14ev5IwXsSuj5gYRGshfu2vjZVIoXrY4i2', NULL, 0, NULL, '148223', '10375', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-22 11:56:50', '2024-02-22 11:56:50', 'Male', NULL, NULL, NULL, NULL),
(607, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF009788', '$2y$10$ITsJ/1cNMjZ3pg3DS6m.i.P3RSWyiYby15i99UnpxKCGi0N2cfxvy', 57, 445, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$lpKWmIAMg3Y95rc98.eGfefMADi9bdZqhM7QI4frqMVDV.NO11LEu', NULL, 0, NULL, '123123', '97916', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:13:17', '2024-02-25 04:13:17', 'Male', NULL, NULL, NULL, NULL),
(608, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF400755', '$2y$10$KgL/jmQNHcbiSWLbNQDHvumz2soIDr8f/pP5T.SwQwZan4t1.7eJK', 57, 607, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$vstfEUMf.qQiJVTRIK3WmuHb4Wv6PKjWOrI98MjLtmzlidunMy08W', NULL, 0, NULL, '123123', '07286', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:13:27', '2024-02-25 04:13:27', 'Male', NULL, NULL, NULL, NULL),
(609, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF981385', '$2y$10$mOrf45d8EvOlRrMHHl7d6ORdf6dndi8a1Q2EsLjYuCpEMj1KUudna', 57, 608, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$ufHJDmHuJxuaovretZYL1eZpFqLJpYbYuORJoaMWrOFQhwojFye0y', NULL, 0, NULL, '123123', '13041', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:13:33', '2024-02-25 04:13:33', 'Male', NULL, NULL, NULL, NULL),
(610, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF412043', '$2y$10$wDDOPPfQT/eNkJg2C1UX6ujlxwubei4S5w/3psZSweuIFAwbdPCfO', 57, 609, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$lIkxSPi2pNJ0rQCk0InQtu1mr10/Qo67d.dT7cBOdVE2sqwrFPNmK', NULL, 0, NULL, '123123', '20220', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:13:40', '2024-02-25 04:13:40', 'Male', NULL, NULL, NULL, NULL),
(611, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF002690', '$2y$10$7C0Q3RXGYXTMgVtJloozKu7jMBpcnc7mS69hinKENxQzvd5DStFh6', 57, 610, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$AIJIxKf2aZvmRXX1A20nwOlLYMXE/jMyNuKnRzpW6ejHYt6RPPuYq', NULL, 0, NULL, '123123', '26662', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:13:46', '2024-02-25 04:13:46', 'Male', NULL, NULL, NULL, NULL),
(612, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF053325', '$2y$10$VKF9w8JL/90oscVwFUPA0.d9Ce327YCkJu53kZUzCTIPO4p6kNzxS', 57, 611, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$R.uzbkENvTNczCo.wpBCkOGtjW0NndXyij8G1xjBSB3DHSZRlr1Ee', NULL, 0, NULL, '123123', '33801', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:13:53', '2024-02-25 04:13:53', 'Male', NULL, NULL, NULL, NULL),
(613, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF493975', '$2y$10$OUDq.nY.zF0e6Uq6Dg5e8u3mp9XHXeWl9GHGqRh8ei.VIh3KLfQs.', 57, 612, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$fLB8bWKp8kaiZHB0HmLtqemMVHWb6VAkB2QiXRl6bPTGZeTH3Frxm', NULL, 0, NULL, '123123', '39441', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:13:59', '2024-02-25 04:13:59', 'Male', NULL, NULL, NULL, NULL),
(614, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF754505', '$2y$10$YxY07wR7JkOx5Ni2yCpJguoCE8m/aTDB51CC02A7Tv4Y4ywNWrjbe', 57, 613, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$M3IlE41isnpf.HReP63IPOl6GbCSAuBrcsaJMScnEgepRdrrNmTW6', NULL, 0, NULL, '123123', '45400', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:14:05', '2024-02-25 04:14:05', 'Male', NULL, NULL, NULL, NULL),
(615, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF965080', '$2y$10$8JVLOjAdbNK0Jyr2QLUkUuiOxOtfrSJz/BDoPe5g8QhoNnFyqgrb6', 57, 614, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$htAkL4kyEXuxyrr.L.HKjOLJV0PGk5pB80UKvw1o6ZPeTn4o/tUte', NULL, 0, NULL, '123123', '50967', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:14:11', '2024-02-25 04:14:11', 'Male', NULL, NULL, NULL, NULL),
(616, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF925654', '$2y$10$.wBj/bmCeAbITXuTBseZneVIY5vvkmzkiTbl639W/rg/cMYhMXSEq', 57, 615, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$ZPyMqsqHvQNb4EcOq12D6OmUBRNRHHzLbJmM99j2/Tu5FZxWCreh2', NULL, 0, NULL, '123123', '56237', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:14:16', '2024-02-25 04:14:16', 'Male', NULL, NULL, NULL, NULL),
(617, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF946272', '$2y$10$YJYZMsmxaTYjlny19A1avOLPeH8U6xOUzQTUKkp0UaQaLb0RSUYWy', 57, 616, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$vNZegYC9yyJbm1hVeiiVaew73/S.Ofx226k5C3v9tBM/E9sQAsUee', NULL, 0, NULL, '123123', '62719', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:14:22', '2024-02-25 04:14:22', 'Male', NULL, NULL, NULL, NULL),
(618, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF136859', '$2y$10$cCy2s5QrR7Ni58bS1KsXGub4hj7mxoXLbiKE0MOhYVhIgdVCOF2DO', 57, 617, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$TMuz9lCeE4MuCeBdSG.t6.2xnc7uYC73Ipgl/FNwmiZ7wnJfT9tZW', NULL, 0, NULL, '123123', '68892', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:14:28', '2024-02-25 04:14:28', 'Male', NULL, NULL, NULL, NULL),
(619, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF627379', '$2y$10$e70SlVk6NqRDA8nHhyWi8OZUAgkAl2XrVqLzuAdXtn0YjQH5OsRn2', 57, 618, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$14U62nCBwAsCuLw3az/ODu2.ByfAQRgbRf.VRhet2UucgtKBICrBu', NULL, 0, NULL, '123123', '73816', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:14:33', '2024-02-25 04:14:33', 'Male', NULL, NULL, NULL, NULL),
(620, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF667895', '$2y$10$WBwRqtI7q35bosH3DCIrn.g28gyw1AC6ZRZzswm4WvljQ.k.Ce3YC', 57, 619, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$nYnK.hyKHJk4udLZjznlYuUiKNqNn4euVhWRrJlxgZ2fXrOHlHIlu', NULL, 0, NULL, '123123', '78865', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:14:38', '2024-02-25 04:14:38', 'Male', NULL, NULL, NULL, NULL),
(621, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF078322', '$2y$10$xcRadYkg1poUgAqvownJk.NimlCYF.BQwe0nBVH5ts8ftEywx1Yha', 57, 620, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$TE0mW1rQ9lSKm1dZKdhsYe4Hp7SKq23tisIBeuna7KSvyJHKauIHi', NULL, 0, NULL, '123123', '83914', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:14:43', '2024-02-25 04:14:43', 'Male', NULL, NULL, NULL, NULL),
(622, 'ABISHAK UTTAM', 'amarpal1733@gmail.com', 'RF158942', '$2y$10$xb7lsPgRs/00gdkZg.wTtuyFABlEx9HaW/UXtNt1PV4Xo/nyYdMkG', 57, 621, '7523988814', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$8Gc1MfmIRuKN1E9LqZKSuO8LLiABPyiZuAzUw/t5fhjPEoPWFz6cS', NULL, 0, NULL, '123123', '89115', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 04:14:49', '2024-02-25 04:14:49', 'Male', NULL, NULL, NULL, NULL),
(623, 'SEEMA YADAV', 'amarpal1733@gmail.com', 'RF331335', '$2y$10$kh6TorzJbyxFPYEQAc77xeikjxg6.jyVUA5BDPi7RsU8p5YyCpxO6', 59, 59, '9565768283', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$FvawmpXDLbGr4OKhveByO.WUyzwO.p8Hs.1.3FUFL0dPvHwJLQST.', NULL, 0, NULL, '123456', '13142', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 07:13:33', '2024-02-25 07:13:33', 'Male', NULL, NULL, NULL, NULL),
(624, 'SEEMA YADAV', 'amarpal1733@gmail.com', 'RF242236', '$2y$10$h1yB2FEgW3T/N7lTmifrzeCLjjdhwFMwkkVJp9FbtCa/lBCVe1fYS', 59, 623, '9565768283', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$12UT6GJLwGQdP2OdUoC8dOR4GjfHFF5gfBGP7kGLJkr1hXtpISHIm', NULL, 0, NULL, '123456', '22875', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 07:13:42', '2024-02-25 07:13:42', 'Male', NULL, NULL, NULL, NULL),
(625, 'SEEMA YADAV', 'amarpal1733@gmail.com', 'RF753506', '$2y$10$..W4ym.NmK8ETFENpOpahOT10FM.PrEoqjLphMKNsIO.M8J6ezFbi', 59, 624, '9565768283', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$Ppkj8E6lf7LgkQmz0M2CcOL2CJhqMWLQqChNBKvLR2KHGg3QuIA5K', NULL, 0, NULL, '123456', '35842', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 07:13:55', '2024-02-25 07:13:55', 'Male', NULL, NULL, NULL, NULL),
(626, 'SEEMA YADAV', 'amarpal1733@gmail.com', 'RF104105', '$2y$10$n2u3ccxq2h.jUFtEV9Jv4.GY9wQ13SN7ribQNOIYAZNJqEkXm9aCa', 59, 625, '9565768283', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$/CnBNzZyA5iflZugsb21zugq2szfUP/lliDRmwbMQ4mP9oFLkUo6q', NULL, 0, NULL, '123456', '41687', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 07:14:02', '2024-02-25 07:14:02', 'Male', NULL, NULL, NULL, NULL),
(627, 'SEEMA YADAV', 'amarpal1733@gmail.com', 'RF104959', '$2y$10$9vtSf4aedRU8lagYn2LEi.1G0EIxUjBwtwaXVymyg/wUzneKuv.vq', 59, 626, '9565768283', 'Right', NULL, 0.00, 'Pending', '2024-02-25', 4, '$2y$10$enHR8cD8x.xVdZYtr4I00./VPVR.kd6iFVvTw96SpLFvvSzHR2nhm', NULL, 0, NULL, '123456', '49307', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 07:14:09', '2024-02-25 07:14:09', 'Male', NULL, NULL, NULL, NULL),
(628, 'DURGAR TIWARI', 'amarpal1733@gmail.com', 'RF449980', '$2y$10$0flkC2R2FfwcCTbiU3V/yuGoIBIFp0g9DCYSgz.769YC2NzOl4AeC', 59, 627, '9565768283', 'Right', 100.00, 0.00, 'Active', '2024-02-25', 4, '$2y$10$EqpJ3bMPz6s8zdnLB.QleehxDSUbX491W.QuX.T4pzRW/13Afdjvi', '2024-02-25 12:52:15', 0, NULL, '123456', '99527', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 07:14:59', '2024-02-25 12:52:15', 'Male', NULL, NULL, NULL, NULL),
(629, 'VED PRAKASH', 'umrao15479@gmail.com', 'RF511453', '$2y$10$dCASkiCwZDlACr9bAYJD6On8y5DYLnTBCm0il03T23RSnDIZeUZhC', 57, 622, '7388298002', 'Right', 100.00, 0.00, 'Active', '2024-02-25', 4, '$2y$10$GnJOQORDPvdgX9Wb4oWHJO2pol5z/2eJ7lgvlBrmR.Pyz6S8R/M1m', '2024-02-27 16:04:30', 0, NULL, '123123', '14283', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 10:48:34', '2024-02-27 16:04:30', 'Male', NULL, NULL, NULL, NULL),
(630, 'MUNEER AHMAD', 'muneerahmad1909@gmail.com', 'RF411680', '$2y$10$LmVL5ufbQE7DXDf45tPHcO/0vkJHi8ZR/GyEGZ3altbqRXrtcVgje', 471, 471, '9935008234', 'Left', 100.00, 0.00, 'Active', '2024-02-25', 6, '$2y$10$q3L7rDWChELIQAHYEJkWWeSN57TrnqK55/qMTVkExp3xXKYd.PbB6', '2024-02-25 16:46:53', 0, NULL, '123456', '16396', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-25 11:10:16', '2024-02-25 16:46:53', 'Male', NULL, NULL, NULL, NULL),
(631, 'KAMLENDRA KUMAR DWIVEDI', 'helping05mukesh@gmail.com', 'RF528693', '$2y$10$fyN4iUuD8jddRe2Pj/c9SuWSx4oOzaLtRK3NF2i3zSuyYaRUrOLT2', 56, 530, '9450486792', 'Right', NULL, 0.00, 'Pending', '2024-02-26', 4, '$2y$10$e9VMhyQzTkLNDtZcVXJlYO0bXlTdC7A3U8ZRLL3gYgyOcR5LuTsw6', NULL, 0, NULL, '123456', '86024', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-26 06:18:06', '2024-02-26 06:18:06', 'Male', NULL, NULL, NULL, NULL),
(632, 'RAJU YADAV', 'helping05mukesh@gmail.com', 'RF717711', '$2y$10$WOXS1OhEmbaWXPN/q4HlLuw8Povn/VFieyTwXYIvwV7t4/MUhj58W', 56, 631, '9450486792', 'Right', NULL, 0.00, 'Pending', '2024-02-26', 4, '$2y$10$vepeJ4wTLjKVl9a16EwhwO2QrgBuMxJ1py3/eVEgoLlRzQktUx0S6', NULL, 0, NULL, '123456', '77954', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-26 06:19:37', '2024-02-26 06:19:37', 'Male', NULL, NULL, NULL, NULL),
(633, 'SHYAM PRAKASH DIXIT', 'badaldixit@gmail.com', 'RF766653', '$2y$10$rGRmrIo719W8ooNqIpxnsOtHONU74MYio1vE6YP1AzN3Ws2EeYopu', 57, 629, '6386320613', 'Right', 100.00, 0.00, 'Active', '2024-02-27', 4, '$2y$10$qeqBR.e3nQgc7ouio27dMu8oiXhhA7Z/IU5QQlTJ/oULD/jV/M.26', '2024-02-27 16:05:59', 0, NULL, '123456', '66613', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-27 03:14:26', '2024-02-27 16:05:59', 'Male', NULL, NULL, NULL, NULL),
(634, 'AJAY KUMAR VERMA', 'ajayverma22091970@gmail.com', 'RF237228', '$2y$10$Y45cZOfIuQ3lXEZmudfieuBX1bI46S2O0ne4z3zXg4uUiW7IeMZSq', 57, 633, '9839727599', 'Right', NULL, 0.00, 'Pending', '2024-02-27', 4, '$2y$10$7W3QR1PJIfEDrSKkBJ017O0OFq3JVcxAxWNVLPPmHqNsIggtBAasy', NULL, 0, NULL, '123456', '72511', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-27 03:17:52', '2024-02-27 03:17:52', 'Male', NULL, NULL, NULL, NULL),
(635, 'MUSHTAKIM BABA', 's.m.mustkeem555@gmail.com', 'RF410329', '$2y$10$aPF6by1aUUov/DnSdizTwu/kZgPfiPOXEEzrmPiTiwqnOy3P/vCLW', 57, 634, '07499555152', 'Right', 100.00, 0.00, 'Active', '2024-02-27', 4, '$2y$10$nPZsVopWtN8Lq2ybe2uvTeaRDGiKJZcFjD8LDa2eBpSnXlqVOWB5K', '2024-02-27 16:05:16', 0, '45-maksudabad tikra kanpur nagar', '123456', '244343', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-27 03:21:43', '2024-02-27 10:45:55', 'Male', NULL, NULL, NULL, NULL),
(636, 'ANSHU UTTAM', 'abhishekuttam143@gmail.com', 'RF976458', '$2y$10$u1Eb.R8yp1PTijoV23HrIuzKY9.oIkMQK4Y2.qtYfYHqIeXbpeJRy', 57, 594, '9198989858', 'Left', 100.00, 0.00, 'Active', '2024-02-27', 4, '$2y$10$8eQ3FIu3hzZMp9nlxStRIO4HODTKVNcHtt4M.I1kVZJr0yquZJUue', '2024-02-27 16:00:04', 0, NULL, '123@123', '64347', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-27 09:59:24', '2024-02-27 16:00:04', 'Male', NULL, NULL, NULL, NULL),
(637, 'SUMIT KUMAR SAINI', 'sumit123kumarsaini@gmail.com', 'RF059635', '$2y$10$tbCqoCygNpZsjkDgxxUIDujIOAvZW.tGbHSLY3pWCgpCWWM9UOm3W', 57, 635, '9721512297', 'Right', 100.00, 0.00, 'Active', '2024-02-27', 4, '$2y$10$o8mKW4cMhUXkqs8TALF92eoOnizHO2S5DYd2hLvPysgNmKUem4.fq', '2024-02-27 16:07:25', 0, NULL, '123456', '96077', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-27 10:24:56', '2024-02-27 16:07:25', 'Male', NULL, NULL, NULL, NULL),
(638, 'UMESH CHANDRA', 'Jeet.exporter@gmail.com', 'RF286715', '$2y$10$D6ojknBqSTxb0BADhzt1zujveSsqbRk.Yft029sZBW96FSiRzJDGe', 117, 117, '7523988814', 'Left', 100.00, 0.00, 'Active', '2024-02-27', 5, '$2y$10$jTisHTLSqWJGExkQEn7eDe2CeYX.Kc5gEe33Q1XGNt4xPxIaKTKda', '2024-02-27 16:13:31', 0, NULL, '123456', '67675', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-27 10:39:27', '2024-02-27 16:13:31', 'Male', NULL, NULL, NULL, NULL),
(639, 'UMESH CHANDRA', 'Jeet.exporter@gmail.com', 'RF671038', '$2y$10$mEo9e/dgEGuCNtB2JMZBceqaV/ZKDVqj.cVqfFjLvSqfXSOw/s3ia', 117, 632, '7523988814', 'Right', 100.00, 0.00, 'Active', '2024-02-27', 5, '$2y$10$ro9qUFrVqGfZ0WbOeEr4i.w2hgn4p8zApMJws3CY92uyQG/JI0GLa', '2024-02-27 16:14:07', 0, NULL, '123456', '10282', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-27 10:40:10', '2024-02-27 16:14:07', 'Male', NULL, NULL, NULL, NULL),
(640, 'ANIL KUMAR KATIYAR', 'Shivani associates.katiyar99@gmai.com', 'RF882343', '$2y$10$/PreAxr.IHsEloVBD4YGyufblLL0Bnxteb8Q0BsY/ufYepCwK72Hi', 629, 629, '9889938380', 'Left', NULL, 0.00, 'Pending', '2024-02-29', 5, '$2y$10$GXNzw4qy5ooNwrjZiT6pJeb/AxHfMbpKZ49aPPOJPuQLNAP/12bw6', NULL, 0, NULL, '123456', '23709', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-02-29 13:25:23', '2024-02-29 13:25:23', 'Male', NULL, NULL, NULL, NULL),
(641, 'JAY VIKRANT', 'varma786lakhan@gmail.com', 'RF683526', '$2y$10$i6hQG6epDcWkuo3fX9yfbOeJo8K2Klj/DuJu8gxVL6c/pj5LiPlsG', 57, 637, '7007290912', 'Right', 100.00, 0.00, 'Active', '2024-03-01', 4, '$2y$10$2NMtB/5W8NUC31jc/jBBhesRxm2idHb30fcHoi66.8fIxTo0jDYpe', '2024-03-01 18:41:27', 0, NULL, 'Saksheejay@123', '35288', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-01 13:08:55', '2024-03-01 18:41:27', 'Male', NULL, NULL, NULL, NULL),
(642, 'Suman Katheriya', 'santoshxyz1979@gmail.com', 'RF387126', '$2y$10$C/riK.VGqEyg/QfEKjYU1uEYF0m.nIg3./tenF7oHVu60yio07EZW', 629, 640, '9795086314', 'Left', NULL, 0.00, 'Pending', '2024-03-02', 5, '$2y$10$RxHguocLhjg0PxPTAq0fx.etTVXKlp8aeSa52SBxBpmWe4oNglniO', NULL, 0, 'TDBaVZDxKLzXYfE5wgTHiMd311uU2GK5ZZ', 'S123123', '71274', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-02 07:19:31', '2024-03-02 07:33:52', 'Male', NULL, NULL, NULL, NULL),
(643, 'MANISH KUMAR', 'aditya.pratap74@gmail.com', 'RF795691', '$2y$10$WH9qlbNTMpBNF0AMjLIi8ulXZnmsp7h51ibJZgpUImhgEN/slk76e', 57, 641, '9336446556', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$fh7gq5GxVQIGmMH10gDmI.OuSVhjr0dOO/1Wk3rlcUVRLgDxc01f6', NULL, 0, NULL, '123@123', '56765', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:15:56', '2024-03-03 09:51:30', 'Male', NULL, NULL, NULL, NULL),
(644, 'DEEPAK', 'anshuuttam143@gmail.com', 'RF690385', '$2y$10$s/tMMRqwcrdMQMNk/uck3.PjRmHAABepZmHT1k741Sb.0wTUGgLpi', 57, 643, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$c9EQWA.qFwBkjQ73BWSGue47nRHbpU8mYqqX6zeKxa0TSsvIbxw1a', NULL, 0, NULL, '123@123', '03148', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:16:43', '2024-03-03 05:16:43', 'Male', NULL, NULL, NULL, NULL),
(645, 'KARAN', 'anshuuttam143@gmail.com', 'RF105301', '$2y$10$1C2NMY1O3qgOWhpz0x9Re.GJMhumTzpGTiTMbvVqUiZFtr36iyKxy', 57, 644, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$ViwDFMLyDkzzzdZPObnJtua0sBi3p2NxBl.WksOIjx9sgGxWWHQZi', NULL, 0, NULL, '123@123', '53892', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:17:33', '2024-03-03 05:17:33', 'Male', NULL, NULL, NULL, NULL),
(646, 'PANKAJ', 'anshuuttam143@gmail.com', 'RF069415', '$2y$10$Fd.WiyggW8cgWp6Dsxpi/OkY7bPCJSIHhr3z8i7quEXHWcP.goj5a', 57, 645, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$0KzCiHe2aJAcYeh5EBd34OdYKdCfOXKV/3Y.XEpN8/ofPVvuo5k1G', NULL, 0, NULL, '123@123', '94635', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:18:14', '2024-03-03 05:18:14', 'Male', NULL, NULL, NULL, NULL),
(647, 'DhIRENDRA', 'anshuuttam143@gmail.com', 'RF324137', '$2y$10$FruMeBn.zHWRrcS/wUpgqu85qR1NciUXMFAoHnKdcPhHz.7mpjBi.', 57, 646, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$eNRQ2RtGy/CEHNsoOZG9FO60h/W4OZ2X7fDY2Qd7ZV5Kk8N9AZFky', NULL, 0, NULL, '123@123', '41552', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:19:01', '2024-03-03 05:19:01', 'Male', NULL, NULL, NULL, NULL),
(648, 'AMIT', 'anshuuttam143@gmail.com', 'RF887959', '$2y$10$MbSOWhZm13QtL9oh0fVxYenJqAyB85bYuw/dhQQeQv5M4cpmMdQl6', 57, 647, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$Cq3CNbBuW8Wjo3O5tWQI/.E9StDeMvZAGo1WMnGbZEnFpSPzN9M.W', NULL, 0, NULL, '123@123', '79152', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:19:39', '2024-03-03 05:19:39', 'Male', NULL, NULL, NULL, NULL),
(649, 'RAJA', 'anshuuttam143@gmail.com', 'RF971996', '$2y$10$ncwMafoI2DznOR7I21iFuusSD8ClMa6MkDI.0xu3B7fYWHN/wjowq', 57, 648, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$vpXScYFVOdHUhxP26.Esqe7q5clTiNcAeVd65SnQsYVdw80Yf9njm', NULL, 0, NULL, '123@123', '19045', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:20:19', '2024-03-03 05:20:19', 'Male', NULL, NULL, NULL, NULL),
(650, 'ATUL', 'anshuuttam143@gmail.com', 'RF585771', '$2y$10$DL1YNxuykx83v36uatDNn.Q1fwNNPIQqQxEjOqSa3h9gz7b8RIGkG', 57, 649, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$Tq95vcv4BG.1WbQWJv/zPun3saDcDdgKI00R9D8GYQC5h/hkwfN6K', NULL, 0, NULL, '123@123', '57633', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:20:57', '2024-03-03 05:20:57', 'Male', NULL, NULL, NULL, NULL),
(651, 'KAPIL', 'anshuuttam143@gmail.com', 'RF150109', '$2y$10$t/CpozGeXA1vGgGENS59WO80U0iDQRdgzzQ9zj9L2aLUhM1cGYD2y', 57, 650, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$7GJW7HSjxXz1.9zVWCU7NeRAnp6n3/ivwD74gJ2sKzKqjMKHJ4snK', NULL, 0, NULL, '123@123', '01595', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:21:42', '2024-03-03 05:21:42', 'Male', NULL, NULL, NULL, NULL),
(652, 'ANIL KATIYAR', 'anshuuttam143@gmail.com', 'RF634881', '$2y$10$O/1ztibKuX2ynMpoP9U2EeqGyqqNXAyX3B.ELBY14.hX0q7fujYPK', 57, 651, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$Rn9Ugut8Cdk55.BuOE3vue4SvJiLENDPXr0QyGsY2lWWukzDeTNr2', NULL, 0, NULL, '123@123', '48587', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:22:29', '2024-03-03 05:22:29', 'Male', NULL, NULL, NULL, NULL),
(653, 'arun', 'anshuuttam143@gmail.com', 'RF159040', '$2y$10$Cra2.Vzc.Sy8wSgEDdNTKuBGuHljgET45gkpjDes5G6t2h9ypqZ1O', 57, 652, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$bNc.DlEXN28ZuOU.F5QQMOhmT41DoxA8Oof10DbMmVnkofUeNMm.e', NULL, 0, NULL, '123@123', '90091', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:23:10', '2024-03-03 05:23:10', 'Male', NULL, NULL, NULL, NULL),
(654, 'GANSESH', 'anshuuttam143@gmail.com', 'RF672707', '$2y$10$yziOLmoO9YIx9WW/KxDJi.rK3AWvVaQqFY81k45xZqd9YhoMoruCq', 57, 653, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$TS7zN2qEQAjOHVwiSxwnhOfzKS.m9StydxlvoaiugMG66NDV2WkL.', NULL, 0, NULL, '123@123', '27303', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:23:47', '2024-03-03 05:23:47', 'Male', NULL, NULL, NULL, NULL),
(655, 'AMITA', 'anshuuttam143@gmail.com', 'RF746750', '$2y$10$sNPESIi47Tw5yCpEZ590s.Py1rO70kwUQiVEMsMcyGIqO8MZ0eopK', 57, 654, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$nc7BTXwET7Qvx3tnorOPuu2a0OdPpoOwbVLq/kUblb7QuUPitNUtO', NULL, 0, NULL, '123@123', '67148', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:24:27', '2024-03-03 05:24:27', 'Male', NULL, NULL, NULL, NULL),
(656, 'BIHARI', 'anshuuttam143@gmail.com', 'RF960231', '$2y$10$LaXdNDbMHKnnPxAsMOQ64uj4zlWuV8dgPdOSLlP/DWBGVcSgFSNJm', 57, 655, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$WZj6WcZHppfuosrattbtFuMQJQBWKWf.Ba0j7kOAnVft2ATHm4O2u', NULL, 0, NULL, '123@123', '02005', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:25:02', '2024-03-03 05:25:02', 'Male', NULL, NULL, NULL, NULL),
(657, 'RAJESH', 'anshuuttam143@gmail.com', 'RF024652', '$2y$10$fBhAryWp98jUSOaNx3YLP.S7Ba8h4yy7ajuhJc3pCDDYb7Z/sUYTu', 57, 656, '9335239874', 'Right', NULL, 0.00, 'Pending', '2024-03-03', 4, '$2y$10$orNolaA/XaDCcU8lC.lWdeYOeCu9bvlyRwPmWywqBymzSt/Jd6nIi', NULL, 0, NULL, '123@123', '46214', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 05:25:46', '2024-03-03 05:25:46', 'Male', NULL, NULL, NULL, NULL),
(658, 'MANOJ V', 'anshuuttam143@gmail.com', 'RF151183', '$2y$10$LaXdNDbMHKnnPxAsMOQ64uj4zlWuV8dgPdOSLlP/DWBGVcSgFSNJm', 57, 657, '9335239874', 'Right', 25000.00, 10000.00, 'Active', '2024-03-03', 4, '$2y$10$CwlIK8EkAKk6BIUPh6cbr.7J1iTXdk2PnZk2suVJ/kNgjYTzmlPyC', '2024-03-03 15:00:21', 0, NULL, 'sachin', '11863', 0, '0', '0', 10000.00, 'India', NULL, NULL, '2024-03-03 05:28:31', '2024-03-21 12:22:38', 'Male', NULL, NULL, NULL, NULL),
(659, 'Anurag Singh', 'anuragsingh1280@gmail.com', 'RF146529', '$2y$10$BqV1BcfR0RRxG2aV0R57UuiPmV8X4oKVOM3R6CdFCIorP1Tew6bxC', 601, 601, '9336166624', 'Right', 100.00, 0.00, 'Active', '2024-03-03', 8, '$2y$10$S9Dnkc6K2teJIiBWFWFZoOdHjcWVsK.a4SgeOPe0d.UcE8d0zT5YC', '2024-03-03 19:10:48', 0, NULL, 'anurag', '65790', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 13:16:05', '2024-03-03 13:56:07', 'Male', NULL, NULL, NULL, NULL),
(660, 'Anuj rajput', 'anuragsingh1280@gmail.com', 'RF238614', '$2y$10$TwqwYld7W94qtr5ObRrxRu2GuqstoS7gyCKM3HqE2xiR8FnL7dL0S', 659, 659, '9336166624', 'Left', 100.00, 0.00, 'Active', '2024-03-03', 9, '$2y$10$IAsUojBK3mnzsvuJqj70A.i.x85y1ZihzmdE0vqBdFy/sBKD3V/km', '2024-03-04 04:23:25', 0, NULL, 'anuj1234', '86159', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-03-03 14:04:47', '2024-03-04 04:23:25', 'Male', NULL, NULL, NULL, NULL),
(661, 'sachin', 'sachinw3axis@gmail.com', 'RF465398', '$2y$10$LaXdNDbMHKnnPxAsMOQ64uj4zlWuV8dgPdOSLlP/DWBGVcSgFSNJm', 660, 660, '9991881540', 'Right', NULL, 0.00, 'Pending', '2024-03-20', 10, '$2y$10$AZafQO0f3jNZPoEBixnjZ.UUzTNfDuqNkXu51p93KlYUXADswWWIq', NULL, 0, NULL, 'sachin', '53104', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-20 00:22:33', '2024-03-20 00:22:33', 'Male', NULL, NULL, NULL, NULL),
(662, 'sagar', 'rockwell@gmail.com', 'RF276113', '$2y$10$ebsO/Hi8FSGpXuj/Tf8CQ.KsFZhU7aVs8zHJ2fvPE2iCsL1BzRpeC', 658, 658, '9991111549', 'Right', NULL, 0.00, 'Pending', '2024-03-23', 5, '$2y$10$0BArQpBGgY0ORkVfcLiXHeqU7h8G8wzRjAJuDd6025C.tjb33O/Ha', NULL, 0, NULL, 'sachin', '61328', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-23 02:26:01', '2024-03-23 02:26:01', 'Male', NULL, NULL, NULL, NULL),
(663, 'deep', 'rockwell@gmail.com', 'RF512628', '$2y$10$mKD2NaxbMfkAr90.f0ZEeu37XJ3ujFbqhyYJ8lCZHuH9gAjEuGD0W', 658, 662, '9991111543', 'Right', NULL, 0.00, 'Pending', '2024-03-23', 5, '$2y$10$CpfB.cEBk.rGDR6q/xyt6uMdUdZOLJ4oXY6K2OKk32d01sJ.pRhle', NULL, 0, NULL, 'sachin', '26413', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-23 02:35:26', '2024-03-23 02:35:26', 'Male', NULL, NULL, NULL, NULL),
(664, 'ankit', 'prajapati21237@gmail.com', 'RF634363', '$2y$10$hJ2lwL.BQrqYMpsg9zgQ2Oo3T7ZQbwkU2QaKCO25HqC5edNQS85Py', 658, 658, '9991881550', 'Left', NULL, 0.00, 'Pending', '2024-03-23', 5, '$2y$10$cecqpHgpFo4Q5FD.ZXZKcuWauULAvM5oy0v.QDmzBe/q9vBpJbqPq', NULL, 0, NULL, 'sachin', '43457', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-23 02:37:24', '2024-03-23 02:37:24', 'Male', NULL, NULL, NULL, NULL),
(665, 'ankit', 'ankit@gmail.com', 'RF456064', '$2y$10$eXHC1PDVfyjCYuQnP20OpeDwTH6b10eMGXi8nKbVUcYd.5MiOaWry', 658, 664, '9991881891', 'Left', NULL, 0.00, 'Pending', '2024-03-23', 5, '$2y$10$XNIVvVJBCM9Bpy0QBgnkOuarrLMBWAL4GNYm7SdpuE4IIe4VDDRAO', NULL, 0, NULL, 'sachin', '60192', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-23 02:56:01', '2024-03-23 02:56:01', 'Male', NULL, NULL, NULL, NULL),
(666, 'ankit', 'an@gmail.com', 'RF815680', '$2y$10$ZJ3LPQk7qBvgmAu3Kvw/aO5Mix2piiNnx5/AkyObr0Det/hN0fRKu', 658, 665, '9991881896', 'Left', NULL, 0.00, 'Pending', '2024-03-23', 5, '$2y$10$sH3hW60.om5bDBMAJL5K/.yI9UubWTOgKSYLRfGxPfm/N.FVFsx5a', NULL, 0, NULL, 'sachin', '56705', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-23 04:27:36', '2024-03-23 04:27:36', 'Male', NULL, NULL, NULL, NULL),
(667, 'ankit', 'sagaar@gmail.com', 'RF019064', '$2y$10$0x.qE/fmsxiH.I8hQyuZYOen3lwkK9KmHH/Mi/kzJyq1YyNI2xH9u', 658, 666, '9991111540', 'Left', NULL, 0.00, 'Pending', '2024-03-23', 5, '$2y$10$h8SbQgFNCJU1fcFmQgcBRe7.FXMqfeqt/qRE0bmaSFscxyldJnX9S', NULL, 0, NULL, 'sachin', '90646', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-23 04:28:10', '2024-03-23 04:28:10', 'Male', NULL, NULL, NULL, NULL),
(668, 'sachin', 'sachinw3axis@gmail.com', 'RF611873', '$2y$10$/ITEV2s0MhQ1BnxD8WyiG.sU7AEP9wmHlCUq9VYlhgEFoqr6f2mEq', 658, 667, '9991881890', 'Left', NULL, 0.00, 'Pending', '2024-03-25', 5, '$2y$10$Krwb.C6RcdGscaFI7VM9feWdE/KlHnUBXhY4ngO4wpRc6IgMYA2ba', NULL, 0, NULL, 'sachin', '18631', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-25 09:13:38', '2024-03-25 09:13:38', 'Male', NULL, NULL, NULL, NULL),
(669, 'sachin', 'sagar@gmail.com', 'RF089050', '$2y$10$QjyzF8husetpsDK2Be5Ese0lx4Xp1A6bl.Uo2UTwnunPPVSAPJyIm', 658, 668, '9991881784', 'Left', NULL, 0.00, 'Pending', '2024-03-25', 5, '$2y$10$kJLLxvgBzcXwr0cPM2YxoOqO3SoZC2x3jZ6QD2Bepd4ULVK3.O26y', NULL, 0, NULL, 'sachin', '90999', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-25 09:56:30', '2024-03-25 09:56:30', 'Male', NULL, NULL, NULL, NULL),
(670, 'sagar', 'sagar@gmail.com', 'RF248273', '$2y$10$1bes/CHI9cGepq1ayRjHhei/HMf4MC9vjZ9ucWVl5UFSBaTLsPr.G', 658, 669, '9991881451', 'Left', NULL, 0.00, 'Pending', '2024-03-25', 5, '$2y$10$.etzf2V5XPyHghKCwWkFZuW8NFlqLEka.qr5vQQ5LlMgx53cyFjhK', NULL, 0, NULL, 'sachin', '82479', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-25 09:58:02', '2024-03-25 09:58:02', 'Male', NULL, NULL, NULL, NULL),
(671, 'sagar', 'ankit@gmail.com', 'RF192741', '$2y$10$CNcABHapK20vtRoztMQytOcRDOidQ4hUTkAvM/q6aq5RTpvWtdSQi', 658, 670, '9991111538', 'Left', NULL, 0.00, 'Pending', '2024-03-26', 5, '$2y$10$t0YlcL4lCXdyy.1JVO/fu.EEW1ky7OaIiStmNpZnsAcEQF5SFSv/6', NULL, 0, NULL, 'sachin', '27160', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-25 23:38:47', '2024-03-25 23:38:47', 'Male', NULL, NULL, NULL, NULL),
(672, 'sagar', 'rockwll@gmail.com', 'RF349052', '$2y$10$1qCKAD3M83uBK2BcOoif3uoUeaUMWuWhnRgmzOCPdrgXYtl5iZXnq', 658, 671, '9991881545', 'Left', NULL, 0.00, 'Pending', '2024-03-26', 5, '$2y$10$.HgNkTFlMwFoIvHPI.XjY.pvsAmAcLZIxdvj6SuLgh0.EXMEAaGS2', NULL, 0, NULL, 'sachin', '90598', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-25 23:59:50', '2024-03-25 23:59:50', 'Male', NULL, NULL, NULL, NULL),
(673, 'sagar', 'prajapati2123gmail.com', 'RF545550', '$2y$10$nu0.0GYEc492.vBchIC5HOvy4NWTXH9MomxRP4jX/6ssXN7Bz8je.', 658, 672, '9991881437', 'Left', NULL, 0.00, 'Pending', '2024-03-26', 5, '$2y$10$HUUMylBYx043AfrzTZJ4HukiM2CwHeDUX4K4791hpvbMV/nXIo3se', NULL, 0, NULL, 'sachin', '55821', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:09:15', '2024-03-26 00:09:15', 'Male', NULL, NULL, NULL, NULL),
(674, 'sagar', 'prajapati2123gmail.com', 'RF435246', '$2y$10$2zTyXRZu/NHTky5uYQsrmeEEK6Ntxj4.UeTh.aXkGTWS6whm0zff6', 658, 673, '9991881437', 'Left', NULL, 0.00, 'Pending', '2024-03-26', 5, '$2y$10$l7wB4cs6SuHFRr5xtwu.BO2ctwSYNDjiM9FPQwu9.BVTjsSLIyvKq', NULL, 0, NULL, 'sachin', '52369', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:10:53', '2024-03-26 00:10:53', 'Male', NULL, NULL, NULL, NULL),
(675, 'sagar', 'prajapati2123gmail.com', 'RF086479', '$2y$10$fHfMkZVYnZerpYOh21lnwuKiQkAXHYWrQUNfcdvOeMa6NgokfTAam', 658, 674, '9991881437', 'Left', NULL, 0.00, 'Pending', '2024-03-26', 5, '$2y$10$yOOWdC51tKqy/sbhTNoLpO7Ge5qYJhryKqspTYhf2ZY87g1pCjzqC', NULL, 0, NULL, 'sachin', '64792', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:11:04', '2024-03-26 00:11:04', 'Male', NULL, NULL, NULL, NULL);
INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `sponsor`, `ParentId`, `phone`, `position`, `package`, `amt`, `active_status`, `jdate`, `level`, `tpassword`, `adate`, `rank`, `trx_addres`, `PSR`, `TPSR`, `capping`, `power_leg`, `vicker_leg`, `balance`, `country`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`, `gender`, `nominee_relation`, `adhar`, `pan`, `nominee_name`) VALUES
(676, 'sagar', 'prajapati2123gmail.com', 'RF238364', '$2y$10$/UJbWPWyfBhxFJNTR.vSuOvK/eZXGV25SmMn/b/hfzr5EJCgcbGkG', 658, 675, '9991881437', 'Left', NULL, 0.00, 'Active', '2024-03-26', 5, '$2y$10$RFwjJqwVx475TjeALHjGHOK025Tys5c30RumQv0Czpe1gSgKDfhuq', NULL, 0, NULL, 'sachin', '83502', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:11:23', '2024-03-26 00:11:23', 'Male', NULL, NULL, NULL, NULL),
(677, 'sagar', 'prajapati2123gmail.com', 'RF869682', '$2y$10$QdszV1lQYxptcvJQiUVX.e0F00mpyQEsqJLL.FiRzF7tt3Roa6n4G', 658, 676, '9991881437', 'Left', NULL, 0.00, 'Active', '2024-03-26', 5, '$2y$10$dvXltQNbXuc.9vYNx0JeT.TwYGqV/fBWkmVoZmcvjxXsxmee3YseG', NULL, 0, NULL, 'sachin', '96642', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:11:36', '2024-03-26 00:11:36', 'Male', NULL, NULL, NULL, NULL),
(678, 'sagar', 'prajapati2123gmail.com', 'RF160622', '$2y$10$iH8UP9w2JN.VDsEdVbf5Y.2ewIPug7zshFqyHP6P5meuEyWB4VeGK', 658, 677, '9991881437', 'Left', NULL, 0.00, 'Pending', '2024-03-26', 5, '$2y$10$tPD.d1eVCHqumqt.szImIOBKR/bBQy0qkyJc9VYoJ0apkbqhxiAUK', NULL, 0, NULL, 'sachin', '06102', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:11:46', '2024-03-26 00:11:46', 'Male', NULL, NULL, NULL, NULL),
(679, 'sagar', 'prajapati2123gmail.com', 'RF911683', '$2y$10$0tMmvd62rX/Yz7UJ0K7XO.52CjM.JmTexBYrCngPxwFKt.ZlGu6Ly', 658, 678, '9991881437', 'Left', NULL, 0.00, 'Pending', '2024-03-26', 5, '$2y$10$7p95iTDw9tGjPTTr4FYSmuoYIj2KlwsR/LBittOGZ4fqXHN1gedzG', NULL, 0, NULL, 'sachin', '16480', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:11:56', '2024-03-26 00:11:56', 'Male', NULL, NULL, NULL, NULL),
(680, 'sachin', 'w3axis@gmail.com', 'RF939701', '$2y$10$/lI3ma47jikwmufeCG6zbu8O7ZYfQh8wS7Tf/4qOhdgOTsa.tJbw2', 658, 679, '9991881520', 'Left', NULL, 0.00, 'Pending', '2024-03-26', 5, '$2y$10$kxbMvxigyE.GyjWlSIXSz.oYXHB2x8n/1nsGSicr8GpbpyNKFLk4y', NULL, 0, NULL, 'sachin', '97668', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:18:17', '2024-03-26 00:18:17', 'Male', NULL, NULL, NULL, NULL),
(681, 'sachin', 'w3axis@gmail.com', 'RF997547', '$2y$10$pKY/6D1DUzTM0nnk1X52EeST1CxZ6h9w2NB9hqlDkZV5yB1wUjxW6', 658, 680, '9991881520', 'Left', NULL, 0.00, 'Pending', '2024-03-26', 5, '$2y$10$oDWC1FYchXsjwEu2/Hnw3.jLh2IRl3bb/IcZ8LxegEPGV37uhFayO', NULL, 0, NULL, 'sachin', '75520', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:19:35', '2024-03-26 00:19:35', 'Male', NULL, NULL, NULL, NULL),
(682, 'sachin', 'w3axis@gmail.com', 'RF277456', '$2y$10$gfowLZ9PtFCq0Se5d119YeMPvHhnehUrk9AP9Yo9Kp0G/QwpL975q', 658, 681, '9991881520', 'Left', NULL, 0.00, 'Pending', '2024-03-26', 5, '$2y$10$Wj1/jCl7lS34mnJkm94tbOuXBBiV1vWUNnl1DXpjeSH3zhqYTWDOe', NULL, 0, NULL, 'sachin', '74025', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:24:34', '2024-03-26 00:24:34', 'Male', NULL, NULL, NULL, NULL),
(683, 'sagar', 'w3afgis@gmail.com', 'RF154195', '$2y$10$OvlCYz5JTDtgWY/ppnUrY.ejPa4r2uzfb518uLCvSsmeFMitvD8M2', 658, 682, '9991881690', 'Left', NULL, 0.00, 'Pending', '2024-03-26', 5, '$2y$10$k85mGqgmgDvvL71h.EIg1.9e7/EWZlbXuUgjn3Iz3QGs8Hw50zJ0q', NULL, 0, NULL, 'sachin', '41195', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:27:21', '2024-03-26 00:27:21', 'Male', NULL, NULL, NULL, NULL),
(684, 'sagar', 'ankprjaptit@gmail.com', 'RF456284', '$2y$10$0x9CQ31D.djvO6QjtqhzV.mnm81T.d7HMfqyZL2EuFOO7EzkuCBxC', 658, 683, '9991881453', 'Left', NULL, 0.00, 'Pending', '2024-03-26', 5, '$2y$10$dpNV/y8uOa7GUaO6JkJMW.br2pDCHapovkKr1zO90H4XIqQJrjV6W', NULL, 0, NULL, 'sachin', '62657', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:31:02', '2024-03-26 00:31:02', 'Male', NULL, NULL, NULL, NULL),
(685, 'ankit', 'sachinw3axis@gmail.com', 'RF213000', '$2y$10$o4gLxn52lA2PpEvbHAUThusGxmiJ0.j725.0SQF.Hclfp1gLEMgAa', 658, 684, '9991881550', 'Left', NULL, 0.00, 'Active', '2024-03-26', 5, '$2y$10$NLIhpDNLODmPnnvOtBSi6uE.V6uSzF.eEJfjvBSmARZvbLDOa7jui', NULL, 0, NULL, '12345', '30227', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:33:50', '2024-05-17 23:57:04', 'Male', NULL, NULL, NULL, NULL),
(686, 'ankit', 'prajapati21237@gmail.com', 'RF598864', '$2y$10$zoVqwNh.CHNGbiO3221dkujMarslJnBW.xUKDfWiirGR8ja6AR.3a', 658, 685, '9991881450', 'Left', NULL, 0.00, 'Active', '2024-03-26', 5, '$2y$10$I7m31ueUKAEwDB7tDsSHYOgOqsbKrXyUxC6XUOzLR6L2yd9UL8ELG', NULL, 0, NULL, 'sachin', '88465', 0, '0', '0', 0.00, '', NULL, NULL, '2024-03-26 00:36:28', '2024-03-26 00:36:28', 'Male', NULL, NULL, NULL, NULL),
(687, 'Sachin', 'sagars@gmail.com', '1523533', NULL, 1, 686, NULL, NULL, NULL, 0.00, 'Pending', '2024-05-07', 1, NULL, NULL, 0, NULL, NULL, '35943', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-07 06:30:35', '2024-05-07 06:30:35', 'Male', NULL, NULL, NULL, NULL),
(688, 'Sachin', 'amssssit@gmail.com', '2006704', NULL, 1, 687, NULL, NULL, NULL, 0.00, 'Pending', '2024-05-07', 1, NULL, NULL, 0, NULL, NULL, '67219', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-07 06:44:27', '2024-05-07 06:44:27', 'Male', NULL, NULL, NULL, NULL),
(689, 'ram', 'ssssagar@gmail.com', '4645333', NULL, 1, 688, NULL, NULL, NULL, 0.00, 'Pending', '2024-05-07', 1, NULL, NULL, 0, NULL, NULL, '53859', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-07 06:50:54', '2024-05-07 06:50:54', 'Male', 'sir', 1234567890, 1234567890, NULL),
(690, 'Sachin', 'sachin111w3axis@gmail.com', '8293394', NULL, 1, 689, NULL, NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '33686', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 03:48:53', '2024-05-08 03:48:53', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(691, 'hanuman', 'sagarwws@gmail.com', '4319550', NULL, 1, 690, '9991541540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '95596', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 04:43:15', '2024-05-08 04:43:15', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(692, 'sahil', 'sagqqars@gmail.com', '2782462', NULL, 1, 691, '9991881522', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '24283', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 04:53:45', '2024-05-08 04:53:45', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(693, 'sahil', 'sagqwwwqqars@gmail.com', '7228844', NULL, 1, 692, '9991881522', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '88298', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 05:18:08', '2024-05-08 05:18:08', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(694, 'Sachin', 'sac3axis@gmail.com', '7154230', NULL, 1, 693, '9991888540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '42288', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 05:22:22', '2024-05-08 05:22:22', 'Male', 'sir', 1234567890, 1234567890, 'REJOICE'),
(695, 'hanuman', 'amqit@gmail.com', '6790026', NULL, 1, 694, '9991455540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '00600', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 05:28:20', '2024-05-08 05:28:20', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(696, 'Sachin', 'wxis@gmail.com', '0188204', NULL, 1, 695, '9991441540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '82058', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 05:44:42', '2024-05-08 05:44:42', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(697, 'qwjhvdywd', 'sasssgar@gmail.com', '6530284', NULL, 1, 696, '9991811540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '02050', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 05:51:42', '2024-05-08 05:51:42', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(698, 'hanuman', 'assit@gmail.com', '2209611', NULL, 1, 697, '9991665540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '96699', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 06:04:56', '2024-05-08 06:04:56', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(699, 'hanuman', 'asst@gmail.com', '3014859', NULL, 1, 698, '9551665540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '48708', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 06:05:48', '2024-05-08 06:05:48', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(700, 'hanuman', 'attttytt@gmail.com', '2727291', NULL, 1, 699, '9551115540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '72259', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 06:07:52', '2024-05-08 06:07:52', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(701, 'qwjhvdywd', 'sklr@gmail.com', '4962947', NULL, 1, 700, '9991001540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '29983', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 06:13:49', '2024-05-08 06:13:49', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(702, 'hanuman', 'atttttt@gmail.com', '2165524', NULL, 1, 701, '9550115540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '55493', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 06:30:55', '2024-05-08 06:30:55', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(703, 'qwjhvdywd', 'tklr@gmail.com', '0782510', NULL, 1, 702, '9991901540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '25768', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 06:33:46', '2024-05-08 06:33:46', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(704, 'hanuman', 'atttt@gmail.com', '3893349', NULL, 1, 703, '9550915540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '33361', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 06:35:33', '2024-05-08 06:35:33', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(705, 'qwjhvdywd', 'tulr@gmail.com', '8513472', NULL, 1, 704, '1991901540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '34054', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 06:38:54', '2024-05-08 06:38:54', 'Male', 'sir', 1234567890, 1234567890, 'Ramesh'),
(706, 'Sachin', 'sachinxis@gmail.com', '9646426', NULL, 1, 705, '9291881540', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '64590', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 06:44:24', '2024-05-08 06:44:24', 'Male', 'mitter', 1234567890, 1234567890, 'ram'),
(707, 'ram', 'w3axiss@gmail.com', '0013436', NULL, 1, 706, '9991881541', NULL, NULL, 0.00, 'Pending', '2024-05-08', 1, NULL, NULL, 0, NULL, NULL, '34580', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-08 06:55:34', '2024-05-08 06:55:34', 'Male', 'mitter', 1234567890, 1234567890, 'ram'),
(708, 'Sachin', 'prajapati21237@gmail.com', 'MP312549', '$2y$10$U6JPmh71SRDLRHElnVR3G.OJecLrUlkUgkzazzmVIafNtOsRpOo1O', 685, 707, '9991881540', NULL, NULL, 0.00, 'Active', '2024-05-18', 6, '$2y$10$NLIhpDNLODmPnnvOtBSi6uE.V6uSzF.eEJfjvBSmARZvbLDOa7jui', NULL, 0, NULL, NULL, '30227', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-05-18 01:47:05', '2024-05-18 01:47:05', 'Male', NULL, NULL, NULL, NULL),
(709, 'deepak', 'depak@gmail.com', 'MP306202', '$2y$10$M1A2r.LN/VWmLgRJxYTAQeI1ynAjvTbrbZ1S4ODc6sX7EnA03EJOG', 685, 708, '9888777765', NULL, NULL, 0.00, 'Pending', '2024-05-21', 6, NULL, NULL, 0, NULL, NULL, '62107', 0, '0', '0', 0.00, 'India', NULL, NULL, '2024-05-21 00:47:42', '2024-05-21 00:47:42', 'Male', NULL, NULL, NULL, NULL),
(710, 'ram', 'amait@gmail.com', '1981138', NULL, 685, 709, '9991881541', NULL, NULL, 0.00, 'Pending', '2024-05-21', 6, NULL, NULL, 0, NULL, NULL, '11821', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-21 01:46:51', '2024-05-21 01:46:51', 'Male', 'mitter', 1234567890, 1234567890, 'ram'),
(711, 'sagar', 'prajajbsapati21237@gmail.com', '3068994', '$2y$10$SKZyhDMBYn1tlZhnYVjOaeSt8AUI3bg9YjOM3W0HlVZ7XWppD.m6i', 685, 710, '9991881140', NULL, NULL, 0.00, 'Pending', '2024-05-21', 6, NULL, NULL, 0, NULL, NULL, '89078', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-21 02:01:30', '2024-05-21 02:01:30', 'Male', 'miter', 1234567890, 1234567890, 'sachin'),
(712, 'sagar', 'prajajbsqqapati21237@gmail.com', '3981591', '$2y$10$6iEkLjpEDQrdkIhMrM6xp.wN4RECs2bOD9unlsIGa2Xbfmjw6IX.m', 685, 711, '9991381140', NULL, NULL, 0.00, 'Pending', '2024-05-21', 6, NULL, NULL, 0, NULL, NULL, '15195', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-21 02:03:36', '2024-05-21 02:03:36', 'Male', 'miter', 1234567890, 1234567890, 'sachin'),
(713, 'sagar', 'prapati21237@gmail.com', '2123258', '$2y$10$hz0XXoDnczXOuljlL8ELEObotfCWqaaKKuuLx2UDDkIV.YRpBZY52', 685, 712, '9991381440', NULL, NULL, 0.00, 'Pending', '2024-05-21', 6, NULL, NULL, 0, NULL, NULL, '326337', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-21 02:10:32', '2024-05-21 02:10:32', 'Male', 'miter', 1234567890, 1234567890, 'sachin'),
(714, 'sagar', 'praati21237@gmail.com', '9140295', '$2y$10$JzNYeHzWTcYnByyfUWo1herQ05ApYxYL.cFQlpHNxsd7DQKHiIFg2', 685, 713, '9993381440', NULL, NULL, 0.00, 'Pending', '2024-05-21', 6, NULL, NULL, 0, NULL, NULL, '022892', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-21 02:13:22', '2024-05-21 02:13:22', 'Male', 'miter', 1234567890, 1234567890, 'sachin'),
(715, 'sagar', 'praati237@gmail.com', '1259187', '$2y$10$TJsUqlZmwTNv6/VUVF92f.p.v4taFJ/yQINplo1Mh/ta9FhS89LoG', 685, 714, '9993381445', NULL, NULL, 0.00, 'Pending', '2024-05-21', 6, '$2y$10$E9EFmRH4WO3WPLeZdhWmpOSl/clnRqecxjnYWUVSeWWNJQwR9BDR6', NULL, 0, NULL, '913914', '910466', 0, '0', '0', 0.00, NULL, NULL, NULL, '2024-05-21 02:16:31', '2024-05-21 02:16:31', 'Male', 'miter', 1234567890, 1234567890, 'sachin');

-- --------------------------------------------------------

--
-- Table structure for table `wallet_pins`
--

CREATE TABLE `wallet_pins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_id_fk` varchar(255) DEFAULT NULL,
  `pin` varchar(255) NOT NULL,
  `allocated_date` date NOT NULL,
  `remarks` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `withdraws`
--

CREATE TABLE `withdraws` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_id_fk` varchar(255) DEFAULT NULL,
  `amount` double(8,2) NOT NULL,
  `status` enum('Approved','Pending','Failed') NOT NULL DEFAULT 'Pending',
  `wdate` date NOT NULL,
  `txn_id` varchar(255) DEFAULT NULL,
  `payment_mode` varchar(255) DEFAULT NULL,
  `account` text DEFAULT NULL,
  `paid_date` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `withdraws`
--

INSERT INTO `withdraws` (`id`, `user_id`, `user_id_fk`, `amount`, `status`, `wdate`, `txn_id`, `payment_mode`, `account`, `paid_date`, `created_at`, `updated_at`) VALUES
(2, 57, 'RF953808', 124.00, 'Approved', '2024-02-28', '3af0506003694998f65ae1fedff3456d', 'USDT', '0x5b0cac53f2f5f0dc5f97bf9c1bbea4950a31bd3f', '2024-02-28 10:15:04', '2024-02-28 06:14:21', '2024-02-28 09:15:04'),
(3, 63, 'RF346135', 10.00, 'Approved', '2024-03-02', '050a92398eb8e44067f3e40a57da1496', 'USDT', 'TLw8aBqZuvX8dNVYkFEquFnrmQJeemguxM', '2024-03-03 16:37:57', '2024-03-02 13:25:54', '2024-03-03 15:37:57'),
(4, 685, 'RF213000', 100.00, 'Approved', '2024-05-21', '8b57cc6f800fc4b16dbdf26375164612', 'USDT', NULL, NULL, '2024-05-21 04:48:01', '2024-05-21 04:48:01'),
(5, 685, 'RF213000', 10.00, 'Approved', '2024-05-21', 'c12822b66cfef41a8de68da0a7a67839', 'USDT', NULL, NULL, '2024-05-21 05:08:31', '2024-05-21 05:08:31'),
(6, 685, 'RF213000', 10.00, 'Approved', '2024-05-21', '87ef47c9182d4dd295c15539003ef6c6', 'INR', '38825655675', NULL, '2024-05-21 05:19:24', '2024-05-21 05:19:24'),
(7, 685, 'RF213000', 10.00, 'Pending', '2024-05-21', '636f76fbfa749fbeebd583e73f1c1bf6', 'INR', '$2y$10$ZtVeapNVezCr0RBE7lsS4u1YZTPlZjsjyKztu9LK5I2h8fD1v89Jm', NULL, '2024-05-21 05:25:41', '2024-05-21 05:25:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_task_limits`
--
ALTER TABLE `add_task_limits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `add_task_urls`
--
ALTER TABLE `add_task_urls`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banks`
--
ALTER TABLE `banks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `banks_user_id_foreign` (`user_id`);

--
-- Indexes for table `buy_funds`
--
ALTER TABLE `buy_funds`
  ADD PRIMARY KEY (`id`),
  ADD KEY `buy_funds_user_id_foreign` (`user_id`);

--
-- Indexes for table `dth_recharge`
--
ALTER TABLE `dth_recharge`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fundtransfers`
--
ALTER TABLE `fundtransfers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fundtranfers_transfer_id_foreign` (`transfer_id`),
  ADD KEY `fundtranfers_transfered_id_foreign` (`transfered_id`);

--
-- Indexes for table `general_settings`
--
ALTER TABLE `general_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `generate_pins`
--
ALTER TABLE `generate_pins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `generate_pins_user_id_foreign` (`user_id`);

--
-- Indexes for table `incomes`
--
ALTER TABLE `incomes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `incomes_user_id_foreign` (`user_id`);

--
-- Indexes for table `investments`
--
ALTER TABLE `investments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `investments_user_id_foreign` (`user_id`);

--
-- Indexes for table `jolo`
--
ALTER TABLE `jolo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mobile_recharge`
--
ALTER TABLE `mobile_recharge`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payouts`
--
ALTER TABLE `payouts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payouts_user_id_foreign` (`user_id`);

--
-- Indexes for table `pintransfers`
--
ALTER TABLE `pintransfers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pintransfers_user_id_foreign` (`user_id`);

--
-- Indexes for table `referrals`
--
ALTER TABLE `referrals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rewards_user_id_foreign` (`user_id`);

--
-- Indexes for table `rewards`
--
ALTER TABLE `rewards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rewards_user_id_foreign` (`user_id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tasks_user_id_foreign` (`user_id`);

--
-- Indexes for table `task_user_urls`
--
ALTER TABLE `task_user_urls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `task_user_urls_user_id_foreign` (`user_id`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `used_pins`
--
ALTER TABLE `used_pins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `used_pins_owner_foreign` (`owner`),
  ADD KEY `used_pins_user_foreign` (`user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD KEY `users_sponsor_index` (`sponsor`),
  ADD KEY `users_parentid_index` (`ParentId`);

--
-- Indexes for table `wallet_pins`
--
ALTER TABLE `wallet_pins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wallet_pins_user_id_foreign` (`user_id`);

--
-- Indexes for table `withdraws`
--
ALTER TABLE `withdraws`
  ADD PRIMARY KEY (`id`),
  ADD KEY `withdraws_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_task_limits`
--
ALTER TABLE `add_task_limits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `add_task_urls`
--
ALTER TABLE `add_task_urls`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `banks`
--
ALTER TABLE `banks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `buy_funds`
--
ALTER TABLE `buy_funds`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `dth_recharge`
--
ALTER TABLE `dth_recharge`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fundtransfers`
--
ALTER TABLE `fundtransfers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `general_settings`
--
ALTER TABLE `general_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `generate_pins`
--
ALTER TABLE `generate_pins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `incomes`
--
ALTER TABLE `incomes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3719;

--
-- AUTO_INCREMENT for table `investments`
--
ALTER TABLE `investments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `jolo`
--
ALTER TABLE `jolo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `mobile_recharge`
--
ALTER TABLE `mobile_recharge`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `payouts`
--
ALTER TABLE `payouts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pintransfers`
--
ALTER TABLE `pintransfers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `referrals`
--
ALTER TABLE `referrals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rewards`
--
ALTER TABLE `rewards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `task_user_urls`
--
ALTER TABLE `task_user_urls`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `used_pins`
--
ALTER TABLE `used_pins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=716;

--
-- AUTO_INCREMENT for table `wallet_pins`
--
ALTER TABLE `wallet_pins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `withdraws`
--
ALTER TABLE `withdraws`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
