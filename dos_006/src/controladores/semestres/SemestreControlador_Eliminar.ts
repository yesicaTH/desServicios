import {Request, Response} from 'express';
import SemestreDAO_Eliminar from '../../daos/semestres/SemestreDAO_eliminar';
import { SQL_SEMESTRES_ELIMINAR } from '../../repositorios/semestres/semestre_eliminar_sql';

class SemestreControlador_Eliminar extends SemestreDAO_Eliminar{

    public BorreUno(req: Request, res: Response): void {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        SemestreControlador_Eliminar.eliminarPorID(SQL_SEMESTRES_ELIMINAR.BORRAR, parametro,res);
    }

}
const semestreControlador_Eliminar = new SemestreControlador_Eliminar();
export default semestreControlador_Eliminar;