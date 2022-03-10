import {Request, Response} from 'express';
import MateriaDAO_Buscar from '../../daos/materias/MateriaDAO_buscar';
import { SQL_MATERIAS_BUSCAR } from '../../repositorios/materias/materia_buscar_sql';

class MateriaControlador_Buscar extends MateriaDAO_Buscar{

    public busqueUno(req: Request, res: Response): void {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        MateriaControlador_Buscar.encontrarPorID(SQL_MATERIAS_BUSCAR.CARGAR, parametro,res);
    }
}
const materiaControlador_Buscar = new MateriaControlador_Buscar();
export default materiaControlador_Buscar;