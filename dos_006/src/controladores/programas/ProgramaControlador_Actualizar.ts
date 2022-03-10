import {Request, Response} from 'express';
import ProgramaDAO_Actualizar from '../../daos/programas/ProgramaDAO_actualizar';
import {SQL_PROGRAMAS_ACTUALIZAR} from '../../repositorios/programas/programa_actualizar_sql';

class ProgramaControlador_Actualizar extends ProgramaDAO_Actualizar{

    public actualizar(req: Request, res: Response): void {
        const codigo = req.body.codPrograma;
        const nombre = req.body.nombrePrograma;
        const parametros = [nombre, codigo];
        ProgramaControlador_Actualizar.actualizarPrograma(SQL_PROGRAMAS_ACTUALIZAR.ACTUALIZAR, parametros, res);
    }
}
const programaControlador_Actualizar= new ProgramaControlador_Actualizar();
export default programaControlador_Actualizar;