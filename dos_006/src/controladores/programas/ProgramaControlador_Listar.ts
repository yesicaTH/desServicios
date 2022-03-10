import {Request, Response} from 'express';
import ProgramaDAO_Listar from '../../daos/programas/ProgramaDAO_listar';
import { SQL_PROGRAMAS_BUSCAR} from '../../repositorios/programas/programa_buscar_sql';

class ProgramaControlador_Listar extends ProgramaDAO_Listar{

    public demeLosProgramas(req: Request, res: Response): void{
        ProgramaControlador_Listar.obenerPrograma(SQL_PROGRAMAS_BUSCAR.TODAS, [], res);
    }
}
const programaControlador_Listar = new ProgramaControlador_Listar();
export default programaControlador_Listar;