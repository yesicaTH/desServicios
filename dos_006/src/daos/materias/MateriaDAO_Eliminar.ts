import {Response} from "express"; 'express';
import pool from '../../configuracion/conexion/conexionBD';

class MateriaDAO_Eliminar{

    protected static async eliminarPorID(sqlEliminar: string, parametros: any, res:Response,): Promise <any>{
        await pool.result(sqlEliminar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({respuesta: dato.rowCount});
        })
        .catch((miError)=>{
            console.log(miError);
            return res.status(400).json({msg: 'error eliminando materia'});
        });
        
    }

}
export default MateriaDAO_Eliminar;