export const SQL_MATERIAS_BUSCAR= {

    TODAS: 'SELECT cod_materia, nombre_materia, referencia_materia \
    FROM materias \
    ORDER BY cod_materia',

    CONFIRMAR: 'SELECT COUNT(cod_materia) AS cantidad \
                FROM materias \
                WHERE LOWER(nombre_materia) = LOWER($1)',

    CARGAR: 'SELECT cod_materia, nombre_materia, referencia_materia FROM materias WHERE cod_materia = $1',

}