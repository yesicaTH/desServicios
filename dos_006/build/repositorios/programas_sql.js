"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PROGRAMAS = void 0;
exports.SQL_PROGRAMAS = {
    TODAS: 'SELECT cod_programa, nombre_programa \
    FROM programas \
    ORDER BY cod_programa',
    CREAR: 'INSERT INTO programas(nombre_programa) VALUES ($1) RETURNING cod_programa',
    CONFIRMAR: 'SELECT COUNT(cod_programa) AS cantidad \
                FROM programas p \
                WHERE LOWER(p.nombre_programa) = LOWER($1)',
    CARGAR: 'SELECT cod_programa, nombre_programa FROM programas WHERE cod_programa = $1',
    BORRAR: 'DELETE FROM programas WHERE cod_programa = $1'
};
