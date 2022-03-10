import {Request, Response} from 'express';
import PensumDAO_Crear from '../../daos/pensums/PensumDAO_crear';
import { SQL_PENSUMS_BUSCAR } from '../../repositorios/pensums/pensum_buscar_sql';
import { SQL_PENSUMS_CREAR } from '../../repositorios/pensums/pensum_crear_sql';


class PensumControlador_Crear extends PensumDAO_Crear{

    public crearPensum(req: Request, res: Response): void {
        const nombre = req.body.nombrePensum;
        const codprogram = req.body.codPrograma;
        const parametro = [codprogram, nombre];
        PensumControlador_Crear.crearPensum(SQL_PENSUMS_BUSCAR.CONFIRMAR, SQL_PENSUMS_CREAR.CREAR, parametro, res);
    }
}
const pensumControlador_Crear = new PensumControlador_Crear();
export default pensumControlador_Crear;