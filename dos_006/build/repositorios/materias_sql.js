"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIAS = void 0;
exports.SQL_MATERIAS = {
    TODAS: 'SELECT cod_materia, nombre_materia, referencia_materia \
    FROM materias \
    ORDER BY nombre_materia',
    CREAR: 'INSERT INTO materias (nombre_materia, referencia_materia) VALUES ($1, $2) RETURNING cod_materia',
    CONFIRMAR: 'SELECT COUNT(cod_materia) AS cantidad \
                FROM materias \
                WHERE LOWER(nombre_materia) = LOWER($1)',
    CARGAR: 'SELECT cod_materia, nombre_materia, referencia_materia FROM materias WHERE cod_materia = $1',
    BORRAR: 'DELETE FROM materias WHERE cod_materia = $1'
};
