export const SQL_PROGRAMAS_BUSCAR= {

    TODAS: 'SELECT cod_programa, nombre_programa \
    FROM programas \
    ORDER BY cod_programa',

    CONFIRMAR: 'SELECT COUNT(cod_programa) AS cantidad \
                FROM programas p \
                WHERE LOWER(p.nombre_programa) = LOWER($1)',

    CARGAR: 'SELECT cod_programa, nombre_programa FROM programas WHERE cod_programa = $1',

}