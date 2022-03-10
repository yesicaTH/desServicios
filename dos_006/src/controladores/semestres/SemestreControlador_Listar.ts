import {Request, Response} from 'express';
import SemestreDAO_Listar from '../../daos/semestres/SemestreDAO_listar';
import { SQL_SEMESTRES_BUSCAR } from '../../repositorios/semestres/semestre_buscar_sql';

class SemestreControlador_Listar extends SemestreDAO_Listar{

    public demeLosSemestres(req: Request, res: Response): void{
        SemestreControlador_Listar.obenerSemestre(SQL_SEMESTRES_BUSCAR.TODAS, [], res);
    }
}
const semestreControlador_Listar = new SemestreControlador_Listar();
export default semestreControlador_Listar;