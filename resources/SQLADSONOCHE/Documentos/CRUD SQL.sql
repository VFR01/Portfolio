-----VICTORIAFORERORODRIGUEZ---------
CREATE TABLE aprendices(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR (50) UNIQUE NOT NULL,
    correo VARCHAR(50) UNIQUE NOT NULL,
    edad INT UNSIGNED NOT NULL,
    estado ENUM ('Activo', 'Inactivo') DEFAULT 'Inactivo', 
    intereses TEXT,
    creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE estudiantes(
    id INT,
    nombre_usuario VARCHAR (50),
    correo VARCHAR(50),
    edad INT,
    estado ENUM ('Activo', 'Inactivo'),
    intereses TEXT,
    creado TIMESTAMP

);

INSERT INTO aprendices(nombre_usuario, correo, edad, estado, intereses)
VALUES ('Victoria', 'victoriaforero1@gmail.com', 33, 'activo', 'loading..');

INSERT INTO aprendices(nombre_usuario, correo, edad, estado, intereses)
VALUES ('Andres', 'andres0@gmail.com', 35, 'activo', 'basket');

INSERT INTO aprendices(nombre_usuario, correo, edad, estado, intereses)
VALUES ('Daniel', 'daniel@gmail.com', 19, 'inactivo', 'loading..');

INSERT INTO aprendices(nombre_usuario, correo, edad, estado, intereses)
VALUES ('Juan', 'juans100@gmail.com', 18, 'activo', 'loading..');

INSERT INTO aprendices(nombre_usuario, correo, edad, estado, intereses)
VALUES ('Pedro', 'pedro3@gmail.com', 20, 'inactivo', 'loading..');
