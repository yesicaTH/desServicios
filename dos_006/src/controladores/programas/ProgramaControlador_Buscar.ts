import {Request, Response} from 'express';
import ProgramaDAO_Buscar from '../../daos/programas/ProgramaDAO_buscar';
import {SQL_PROGRAMAS_BUSCAR} from '../../repositorios/programas/programa_buscar_sql';

class ProgramaControlador_Buscar extends ProgramaDAO_Buscar{

    public busqueUno(req: Request, res: Response): void {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        ProgramaControlador_Buscar.encontrarPorID(SQL_PROGRAMAS_BUSCAR.CARGAR, parametro,res);
    }
}
const programaControlador_Buscar = new ProgramaControlador_Buscar();
export default programaControlador_Buscar;