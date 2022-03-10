CREATE table programas (
    cod_programa SERIAL NOT NULL,
    nombre_programa VARCHAR(200) NOT NULL, 
    constraint PK_PROGRAMAS primary key(cod_programa)
);
ALTER TABLE programas owner to user_node;
CREATE UNIQUE INDEX indice_nompro ON programas (nombre_programa);

CREATE table semestres (
    cod_semestre SERIAL NOT NULL,
    nombre_semestre VARCHAR(200) NOT NULL, 
    constraint PK_SEMESTRES primary key(cod_semestre)
);
ALTER TABLE semestres owner to user_node;

CREATE table materias (
    cod_materia SERIAL NOT NULL,
    nombre_materia VARCHAR(200) NOT NULL, 
    referencia_materia VARCHAR(200) NOT NULL,
    constraint PK_MATERIAS primary key(cod_materia)
);
ALTER TABLE materias owner to user_node;

CREATE table pensums (
    cod_pensum SERIAL NOT NULL,
    cod_programa INT4 NOT NULL, 
    nombre_pensum VARCHAR(250) NOT NULL,
    constraint PK_PENSUMS primary key(cod_pensum)
);
ALTER TABLE pensums owner to user_node;

ALTER TABLE pensums 
    add constraint FK_PRO_PENSUM  foreign key(cod_programa)
    references programas(cod_programa)
    on delete restrict on update cascade;

CREATE table materiapensum (
    cod_pensum INT4 NOT NULL,
    cod_materia INT4 NOT NULL, 
    cod_semestre INT4 NOT NULL,
    constraint PK_MATERIA_PENSUM primary key(cod_pensum, cod_materia)
);
ALTER TABLE pensums owner to user_node;

ALTER TABLE materiapensum
    add constraint FK_MA_PE_SEM foreign key(cod_semestre)
    references semestres(cod_semestre)
    on delete restrict on update cascade;

ALTER TABLE materiapensum
    add constraint FK_MA_PE_PENSUM foreign key(cod_pensum)
    references pensums(cod_pensum)
    on delete restrict on update cascade;

ALTER TABLE materiapensum
    add constraint FK_MA_PE_MATERIA foreign key(cod_materia)
    references materias(cod_materia)
    on delete restrict on update cascade;
