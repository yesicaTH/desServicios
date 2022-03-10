import {Request, Response} from 'express';
import SemestreDAO_Actualizar from '../../daos/semestres/SemestreDAO_actualizar';
import {SQL_SEMESTRES_ACTUALIZAR} from '../../repositorios/semestres/semestre_actualizar_sql';

class SemestreControlador_Actualizar extends SemestreDAO_Actualizar{

    public actualizar(req: Request, res: Response): void {
        const codigo = req.body.codSemestre;
        const nombre = req.body.nombreSemestre;
        const parametros = [nombre, codigo];
        SemestreControlador_Actualizar.actualizarSemestre(SQL_SEMESTRES_ACTUALIZAR.ACTUALIZAR, parametros, res);
    }
}
const semestreControlador_Actualizar= new SemestreControlador_Actualizar();
export default semestreControlador_Actualizar;