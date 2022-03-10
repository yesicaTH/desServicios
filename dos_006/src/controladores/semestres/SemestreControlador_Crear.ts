import {Request, Response} from 'express';
import SemestreDAO_Crear from '../../daos/semestres/SemestreDAO_crear';
import { SQL_SEMESTRES_BUSCAR } from '../../repositorios/semestres/semestre_buscar_sql';
import { SQL_SEMESTRES_CREAR } from '../../repositorios/semestres/semestre_crear_sql';

class SemestreControlador_Crear extends SemestreDAO_Crear{

    public grabarSemestre(req: Request, res: Response): void {
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre];
        SemestreControlador_Crear.crearSemestre(SQL_SEMESTRES_BUSCAR.CONFIRMAR, SQL_SEMESTRES_CREAR.CREAR, parametro, res);
    }
}
const semestreControlador_Crear = new SemestreControlador_Crear();
export default semestreControlador_Crear;