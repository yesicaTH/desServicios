import {Response} from "express"; 'express';
import pool from '../../configuracion/conexion/conexionBD';

class PensumDAO_Listar{

    public static async obenerPensum(sqlConsulta: string, parametros: any, res: Response): Promise<any>{
        pool.result(sqlConsulta, parametros)
        .then((resultado)=>{
            res.status(200).json(resultado.rows);
        })
        .catch((miError)=>{
            console.log('Error: ' ,miError);
            res.status(400).json({respuesta: 'No sirvió !! , error mensaje pensum'});
        });
    }
}
export default PensumDAO_Listar;