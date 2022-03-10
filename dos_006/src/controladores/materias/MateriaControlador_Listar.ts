import {Request, Response} from 'express';
import MateriaDAO_Listar from '../../daos/materias/MateriaDAO_Listar';
import {SQL_MATERIAS_BUSCAR} from '../../repositorios/materias/materia_buscar_sql';

class MateriaControlador_Listar extends MateriaDAO_Listar{

    public demeLasMaterias(req: Request, res: Response): void{
        MateriaControlador_Listar.obenerMateria(SQL_MATERIAS_BUSCAR.TODAS, [], res);
    }
   
}
const materiaControlador_Listar = new MateriaControlador_Listar();
export default materiaControlador_Listar;