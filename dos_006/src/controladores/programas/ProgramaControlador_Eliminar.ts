import {Request, Response} from 'express';
import ProgramaDAO_Eliminar from '../../daos/programas/programaDAO_eliminar';
import {SQL_PROGRAMAS_ELIMINAR} from '../../repositorios/programas/programa_eliminar_sql';


class ProgramaControlador_Eliminar extends ProgramaDAO_Eliminar{

    public BorreUno(req: Request, res: Response): void {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        ProgramaControlador_Eliminar.eliminarPorID(SQL_PROGRAMAS_ELIMINAR.BORRAR, parametro,res);
    }

}
const programaControlador_Eliminar = new ProgramaControlador_Eliminar();
export default programaControlador_Eliminar;