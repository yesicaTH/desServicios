import {Request, Response} from 'express';
import PensumDAO_Actualizar from '../../daos/pensums/PensumDAO_actualizar';
import {SQL_PENSUMS_ACTUALIZAR} from '../../repositorios/pensums/pensum_actualizar_sql';

class PensumControlador_Actualizar extends PensumDAO_Actualizar{

    public actualizar(req: Request, res: Response): void {
        const codigo = req.body.codPensum;
        const nombre = req.body.nombrePensum;
        const parametros = [nombre, codigo];
        PensumControlador_Actualizar.actualizarPensum(SQL_PENSUMS_ACTUALIZAR.ACTUALIZAR, parametros, res);
    }
}
const pensumControlador_Actualizar= new PensumControlador_Actualizar();
export default pensumControlador_Actualizar;