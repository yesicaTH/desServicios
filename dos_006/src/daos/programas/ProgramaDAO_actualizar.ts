import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class ProgramaDAO_Actualizar {


    public static async actualizarPrograma(sqlActualizarYa: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async (consulta:any) => {
            return await consulta.result(sqlActualizarYa, parametros);
            })
            .then((respuesta) => {
                    res.status(200).json({ respuesta: 'programa actualizado'});
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: 'Error actualizando programa' })
            });
    }

}
export default ProgramaDAO_Actualizar;