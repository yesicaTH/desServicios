import {Request, Response} from 'express';
import MateriaPensumDAO_Listar from '../../daos/materiaPensum/MateriaPensumDAO_listar';
import { SQL_MATERIAPENSUM_BUSCAR } from '../../repositorios/materiaPensum/materiaPensum_buscar_sql';

class MateriaPensumControlador_Listar extends MateriaPensumDAO_Listar{

    public demeLosMateriaPensum(req: Request, res: Response): void{
        MateriaPensumControlador_Listar.obenerMateriaPensum(SQL_MATERIAPENSUM_BUSCAR.TODAS, [], res);
    }
}
const materiaPensumControlador_Listar = new MateriaPensumControlador_Listar();
export default materiaPensumControlador_Listar;