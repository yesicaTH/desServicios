import {Response} from "express"; 'express';
import pool from '../../configuracion/conexion/conexionBD';

class SemestreDAO_Listar{

    public static async obenerSemestre(sqlConsulta: string, parametros: any, res: Response): Promise<any>{
        pool.result(sqlConsulta, parametros)
        .then((resultado)=>{
            res.status(200).json(resultado.rows);
        })
        .catch((miError)=>{
            console.log('Error: ' ,miError);
            res.status(400).json({respuesta: 'No sirvió !! , error mensaje semestre'});
        });
    }
}
export default SemestreDAO_Listar;