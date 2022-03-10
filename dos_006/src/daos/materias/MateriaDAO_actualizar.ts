import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class MateriaDAO_Actualizar {

    public static async actualizarMateria(sqlActualizarYa: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async (consulta:any) => {
            return await consulta.result(sqlActualizarYa, parametros);
            })
            .then((respuesta) => {
                    res.status(200).json({ respuesta: 'materia actualizada'});
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: 'Error actualizando materia' })
            });
    }
}
export default MateriaDAO_Actualizar;