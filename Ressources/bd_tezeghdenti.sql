-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 25 avr. 2024 à 18:55
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bd_tezeghdenti`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `login` varchar(25) NOT NULL,
  `passwd` varchar(25) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `date_naiss` date NOT NULL,
  `heure` time NOT NULL,
  `email` varchar(70) NOT NULL,
  `sexe` enum('H','F') NOT NULL,
  `foot` enum('O','N') NOT NULL,
  `hand` enum('O','N') NOT NULL,
  `tennis` enum('O','N') NOT NULL,
  `pays` varchar(30) NOT NULL,
  `remarques` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`login`, `passwd`, `nom`, `prenom`, `date_naiss`, `heure`, `email`, `sexe`, `foot`, `hand`, `tennis`, `pays`, `remarques`) VALUES
('BeN Miled', '123456', 'BEN MILED', 'Youssef', '2023-12-01', '09:46:00', 'BENMILED@test.tn', 'H', 'N', 'N', 'O', 'LY', 'RAS'),
('BeN Miled1', '123456', 'BEN MILED', 'Youssef', '2023-12-01', '09:46:00', 'BENMILED@test.tn', 'H', 'N', 'N', 'O', 'LY', 'RAS'),
('Derza', '0000', 'Derza', 'Mahmoud', '2003-01-24', '23:55:00', 'derza@gmail.com', 'H', 'O', 'O', 'N', 'TN', 'RAS'),
('tezeghdenti', '0000', 'Tezeghdenti', 'Oussama', '0000-00-00', '09:35:00', 'tezeghdenti@gmail.com', 'H', 'O', 'O', 'O', 'TN', ''),
('tezeghdenti1', '0000', 'Tezeghdenti', 'Ali', '1993-10-07', '09:35:00', 'tezeghdenti@gmail.com', 'H', 'O', 'O', 'O', 'AL', 'RAS'),
('tezeghdenti12', '0000', 'TOUNSI', 'Oussama', '2023-12-01', '08:56:00', '', 'H', 'N', 'O', 'N', 'TN', 'R');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`login`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
