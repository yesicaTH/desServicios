INSERT INTO programas(nombre_programa) values('Ingenieria de sistemas'), ('Ingenieria Civil'), ('Derecho'), 
        ('Arquitectura'), ('Contaduria publica'), ('Negocios internacionales'),('Cultura fisica'), 
        ('Ingenieria Industrial'), ('Ingenieria Electronica'), ('Ingenieria Ambiental');

INSERT INTO semestres(nombre_semestre) values('primero'), ('segundo'), ('tercero'), ('cuarto'), ('quinto'),
        ('sexto'), ('septimo'), ('octavo'), ('noveno'), ('decimo');

INSERT INTO materias(nombre_materia, referencia_materia) values('Calculo Diferencial', 'CB'), 
('Calculo Integral', 'CB'), ('Sistemas Operativos', 'SIS'), ('Bases de datos', 'SIS'), ('Ecuaciones Diferenciales', 'CB'),
('Antropologia', 'HUM'), ('Etica', 'HUM'), ('Politica', 'HUM'), ('Calculo Metodos Numericos', 'CB'),('Quimica', 'CB');

INSERT INTO pensums(cod_programa, nombre_pensum) values(4, '2020-1'), (2, '2020-2'), (3, '2016-1'), (5, '2016-2'),
(6, '2017-1'), (7, '2017-2'), (8, '2018-1'), (1, '2018-2'), (9, '2019-1'), (10, '2019-2');

INSERT INTO materiapensum(cod_pensum, cod_materia, cod_semestre) values(1,2,3), (2,1,4), (3,4,1), (4,3,2), 
(5,6,7), (6,7,8), (7,8,9), (8,9,10), (9,10,5), (10,5,6);