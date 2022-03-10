import {Request, Response} from 'express';
import MateriaDAO_Actualizar from '../../daos/materias/MateriaDAO_actualizar';
import { SQL_MATERIAS_ACTUALIZAR } from '../../repositorios/materias/materia_actualizar_sql';

class MateriaControlador_Actualizar extends MateriaDAO_Actualizar{

    public actualizar(req: Request, res: Response): void {
        const codigo = req.body.codMateria;
        const nombre = req.body.nombreMateria;
        const parametros = [nombre, codigo];
        MateriaControlador_Actualizar.actualizarMateria(SQL_MATERIAS_ACTUALIZAR.ACTUALIZAR, parametros, res);
    }
}
const materiaControlador_Actualizar= new MateriaControlador_Actualizar();
export default materiaControlador_Actualizar;