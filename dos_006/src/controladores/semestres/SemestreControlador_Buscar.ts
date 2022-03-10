import {Request, Response} from 'express';
import SemestreDAO_Buscar from '../../daos/semestres/SemestreDAO_buscar';
import { SQL_SEMESTRES_BUSCAR } from '../../repositorios/semestres/semestre_buscar_sql';

class SemestreControlador_Buscar extends SemestreDAO_Buscar{

    public busqueUno(req: Request, res: Response): void {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        SemestreControlador_Buscar.encontrarPorID(SQL_SEMESTRES_BUSCAR.CARGAR, parametro,res);
    }
}
const semestreControlador_Buscar = new SemestreControlador_Buscar();
export default semestreControlador_Buscar;