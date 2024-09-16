CREATE DATABASE bookshop;
USE bookshop;
SHOW TABLES;
CREATE TABLE customers (cId INT, cName VARCHAR(20), cAddress VARCHAR(70));

INSERT INTO customers (cId, cName, cAddress) VALUES
(1, 'Jack', '115 Old street Belfast'),
(2, 'James', '24 Carlson Rd London'),
(4, 'Maria', '5 Fredrik Rd, Bedford'),
(5, 'Jade', '10 Copland Ave Portsmouth '),
(6, 'Yasmine', '15 Fredrik Rd, Bedford'),
(3, 'Jimmy', '110 Copland Ave Portsmouth');

SELECT * FROM customers;

DELETE FROM customers WHERE cId = 3;

SELECT * FROM customers; 
