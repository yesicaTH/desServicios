import {Request, Response} from 'express';
import PensumDAO_Eliminar from '../../daos/pensums/PensumDAO_eliminar';
import { SQL_PENSUMS_ELIMINAR } from '../../repositorios/pensums/pensum_eliminar';


class PensumControlador_Eliminar extends PensumDAO_Eliminar{

    public BorreUno(req: Request, res: Response): void {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        PensumControlador_Eliminar.eliminarPorID(SQL_PENSUMS_ELIMINAR.BORRAR, parametro,res);
    }
}
const pensumControlador_Eliminar = new PensumControlador_Eliminar();
export default pensumControlador_Eliminar;