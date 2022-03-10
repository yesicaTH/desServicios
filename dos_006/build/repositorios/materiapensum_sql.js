"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIAPENSUM = void 0;
exports.SQL_MATERIAPENSUM = {
    TODAS: 'SELECT p.nombre_pensum, m.nombre_materia, s.nombre_semestre \
    FROM materiapensum mp \
    INNER JOIN pensums p \
    ON p.cod_pensum = mp.cod_pensum \
    INNER JOIN materias m \
    ON m.cod_materia = mp.cod_materia \
    INNER JOIN semestres s \
    ON s.cod_semestre = mp.cod_semestre \
    ORDER BY mp.cod_materia',
};
