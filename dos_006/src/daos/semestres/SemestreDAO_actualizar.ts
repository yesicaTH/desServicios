import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class SemestreDAO_Actualizar {


    public static async actualizarSemestre(sqlActualizarYa: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async (consulta:any) => {
            return await consulta.result(sqlActualizarYa, parametros);
            })
            .then((respuesta) => {
                    res.status(200).json({ respuesta: 'semestre actualizado'});
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: 'Error actualizando semestre' })
            });
    }

}
export default SemestreDAO_Actualizar;