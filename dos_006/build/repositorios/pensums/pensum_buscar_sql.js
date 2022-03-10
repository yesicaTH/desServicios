"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PENSUMS_BUSCAR = void 0;
exports.SQL_PENSUMS_BUSCAR = {
    TODAS: 'SELECT p.cod_pensum, pr.nombre_programa, p.nombre_pensum \
    FROM pensums p \
    INNER JOIN programas pr \
    ON p.cod_programa = pr. cod_programa \
    ORDER BY p.cod_pensum',
    CONFIRMAR: 'SELECT COUNT(cod_pensum) AS cantidad \
                    FROM pensums p \
                    WHERE LOWER(p.nombre_pensum) = LOWER($2)',
    CARGAR: 'SELECT cod_pensum, nombre_pensum FROM pensums WHERE cod_pensum = $1',
};
