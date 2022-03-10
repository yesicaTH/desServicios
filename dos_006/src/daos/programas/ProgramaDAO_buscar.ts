import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class ProgramaDAO_Buscar {


    protected static async encontrarPorID(sqlBuscar: string, parametros: any, res:Response,): Promise <any>{
        await pool.one(sqlBuscar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({respueta: dato});
        })
        .catch((miError)=>{
            console.log(miError);
            return res.status(400).json({msg: 'error buscando programa'});
        });
        
    }

}
export default ProgramaDAO_Buscar;