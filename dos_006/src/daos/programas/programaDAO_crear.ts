import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class ProgramaDAO_Crear {

    public static async crearPrograma(sqlConfirmar: string, sqlCrear: string, parametros: any, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                const dato = await consulta.one(sqlConfirmar, parametros);
                if (dato.cantidad == 0) {
                    return await consulta.one(sqlCrear, parametros);
                } else {
                    return { cod_programa: 0 };
                }
            })
            .then((respuesta) => {
                if (respuesta.cod_programa != 0) {
                    res.status(200).json({ respuesta: 'programa creado', nuevoCodigo: respuesta.cod_programa });
                } else {
                    res.status(402).json({ respuesta: 'Error creando registro, probablemente esta repetido' });
                }
            })
            .catch((miError) => {
                console.log('No funciona', miError);
                res.status(400).json({ respuesta: 'Error en las consultas' })
            });
    }
}
export default ProgramaDAO_Crear;