import {Response} from "express"; 'express';
import pool from '../../configuracion/conexion/conexionBD';

class MateriaPensumDAO_Listar{

    public static async obenerMateriaPensum(sqlConsulta: string, parametros: any, res: Response): Promise<any>{
        pool.result(sqlConsulta, parametros)
        .then((resultado)=>{
            res.status(200).json(resultado.rows);
        })
        .catch((miError)=>{
            console.log('Error: ' ,miError);
            res.status(400).json({respuesta: 'No sirvió !! , error mensaje materia pensum'});
        });
    }

}
export default MateriaPensumDAO_Listar;