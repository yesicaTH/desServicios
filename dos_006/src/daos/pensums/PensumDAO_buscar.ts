import {Response} from "express"; 'express';
import pool from '../../configuracion/conexion/conexionBD';

class PensumDAO_Buscar{

    protected static async encontrarPorID(sqlBuscar: string, parametros: any, res:Response,): Promise <any>{
        await pool.one(sqlBuscar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({respuesta: dato});
        })
        .catch((miError)=>{
            console.log(miError);
            return res.status(400).json({msg: 'error buscando pensum'});
        });      
    }
}
export default PensumDAO_Buscar;