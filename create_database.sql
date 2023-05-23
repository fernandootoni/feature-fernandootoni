CREATE DATABASE `cadastrophp` ;

USE cadastrophp;

CREATE TABLE usuario (
  nome VARCHAR(255) NOT NULL,
  endereco VARCHAR(255) NOT NULL,
  cep VARCHAR(255) NOT NULL,
  PRIMARY KEY (nome)
); 