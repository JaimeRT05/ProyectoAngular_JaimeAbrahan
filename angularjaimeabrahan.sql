-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-02-2025 a las 20:46:03
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `angularjaimeabrahan`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascota`
--

CREATE TABLE `mascota` (
  `id` bigint(20) NOT NULL,
  `especie` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `raza` varchar(255) DEFAULT NULL,
  `usuario_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mascota`
--

INSERT INTO `mascota` (`id`, `especie`, `nombre`, `raza`, `usuario_id`) VALUES
(1, 'SINPELOS', 'Jaime', 'Peligrosa', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `dni` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` varchar(255) DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `nombre`, `apellidos`, `dni`, `fecha_nacimiento`, `genero`, `password`, `username`) VALUES
(7, 'Abrahan@gmail.com', 'Abrahan', 'Roldán Jiménez', '45485968G', '2004-01-27', 'Hombre', 'abrahan', 'Abrahanrj'),
(8, 'Jaime@gmail.com', 'Jaime', 'Román Tejero', '78692354Y', '1945-07-07', 'Hombre', 'Jaime', 'Jaimert'),
(9, 'Ramon@gmail.com', 'Ramón', 'Morales Pacheco', '56327892R', '1437-05-25', 'Prefiero no decirlo', 'Ramon', 'Ramonmp'),
(11, 'Pedro@gmail.com', 'Pedro', 'Sanchez Perez', '78452369T', '4365-08-27', 'Mujer', 'Uuario', 'PedroSp');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mascota`
--
ALTER TABLE `mascota`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKl0y22rai4u1su78yyucm2f31v` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mascota`
--
ALTER TABLE `mascota`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `mascota`
--
ALTER TABLE `mascota`
  ADD CONSTRAINT `FKl0y22rai4u1su78yyucm2f31v` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
