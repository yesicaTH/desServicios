import {Request, Response} from 'express';
import MateriaDAO_Eliminar from '../../daos/materias/MateriaDAO_Eliminar';
import { SQL_MATERIAS_ELIMINAR } from '../../repositorios/materias/materia_eliminar_sql';

class MateriaControlador_Eliminar extends MateriaDAO_Eliminar{

    public BorreUno(req: Request, res: Response): void {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        MateriaControlador_Eliminar.eliminarPorID(SQL_MATERIAS_ELIMINAR.BORRAR, parametro,res);
    }
}
const materiaControlador_Eliminar = new MateriaControlador_Eliminar();
export default materiaControlador_Eliminar;