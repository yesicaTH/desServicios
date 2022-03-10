import {Request, Response} from 'express';
import PensumDAO_Listar from '../../daos/pensums/PensumDAO_Listar';
import { SQL_PENSUMS_BUSCAR } from '../../repositorios/pensums/pensum_buscar_sql';


class PensumControlador_Listar extends PensumDAO_Listar{

    public demeLosPensum(req: Request, res: Response): void{
        PensumControlador_Listar.obenerPensum(SQL_PENSUMS_BUSCAR.TODAS, [], res);
    }
}
const pensumControlador_Listar = new PensumControlador_Listar();
export default pensumControlador_Listar;