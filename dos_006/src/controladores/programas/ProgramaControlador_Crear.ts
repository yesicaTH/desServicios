import {Request, Response} from 'express';
import ProgramaDAO from '../../daos/programas/programaDAO_crear';
import { SQL_PROGRAMAS_BUSCAR } from '../../repositorios/programas/programa_buscar_sql';
import {SQL_PROGRAMAS_CREAR} from '../../repositorios/programas/programa_crear_sql';

class ProgramaControlador_Crear extends ProgramaDAO{

    public grabarPrograma(req: Request, res: Response): void {
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];
        ProgramaControlador_Crear.crearPrograma(SQL_PROGRAMAS_BUSCAR.CONFIRMAR, SQL_PROGRAMAS_CREAR.CREAR, parametro, res);
    }
}
const programaControlador_Crear = new ProgramaControlador_Crear();
export default programaControlador_Crear;