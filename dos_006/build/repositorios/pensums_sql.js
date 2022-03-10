"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PENSUMS = void 0;
exports.SQL_PENSUMS = {
    TODAS: 'SELECT p.cod_pensum, pr.nombre_programa, p.nombre_pensum \
    FROM pensums p \
    INNER JOIN programas pr \
    ON p.cod_programa = pr. cod_programa \
    ORDER BY p.cod_pensum',
    CREAR: 'INSERT INTO pensums(cod_programa, nombre_pensum) VALUES ($1, $2) RETURNING cod_programa',
    CONFIRMAR: 'SELECT COUNT(cod_pensum) AS cantidad \
                    FROM pensums p \
                    WHERE LOWER(p.nombre_pensum) = LOWER($2)',
    CARGAR: 'SELECT cod_pensum, nombre_pensum FROM pensums WHERE cod_pensum = $1',
    BORRAR: 'DELETE FROM pensums WHERE cod_pensum = $1'
};
