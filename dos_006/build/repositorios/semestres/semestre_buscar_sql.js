"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SEMESTRES_BUSCAR = void 0;
exports.SQL_SEMESTRES_BUSCAR = {
    TODAS: 'SELECT cod_semestre, nombre_semestre \
    FROM semestres \
    ORDER BY cod_semestre',
    CONFIRMAR: 'SELECT COUNT(cod_semestre) AS cantidad \
                FROM semestres \
                WHERE LOWER(nombre_semestre) = LOWER($1)',
    CARGAR: 'SELECT cod_semestre, nombre_semestre FROM semestres WHERE cod_semestre = $1',
};
