import {Request, Response} from 'express';
import MateriaDAO_Crear from '../../daos/materias/MateriaDAO_crear';
import { SQL_MATERIAS_BUSCAR } from '../../repositorios/materias/materia_buscar_sql';
import { SQL_MATERIAS_CREAR } from '../../repositorios/materias/materia_crear_sql';

class MateriaControlador_Crear extends MateriaDAO_Crear{

    public grabarMateria(req: Request, res: Response): void {
        const nombre = req.body.nombreMateria;
        const refmateria = req.body.referenciaMateria;
        const parametro = [nombre, refmateria];
        MateriaControlador_Crear.crearMateria(SQL_MATERIAS_BUSCAR.CONFIRMAR, SQL_MATERIAS_CREAR.CREAR, parametro, res);
    }
}
const materiaControlador_Crear = new MateriaControlador_Crear();
export default materiaControlador_Crear;