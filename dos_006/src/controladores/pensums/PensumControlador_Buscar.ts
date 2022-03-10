import {Request, Response} from 'express';
import PensumDAO_Buscar from '../../daos/pensums/PensumDAO_buscar';
import { SQL_PENSUMS_BUSCAR } from '../../repositorios/pensums/pensum_buscar_sql';

class PensumControlador_Buscar extends PensumDAO_Buscar{

    public busqueUno(req: Request, res: Response): void {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        PensumControlador_Buscar.encontrarPorID(SQL_PENSUMS_BUSCAR.CARGAR, parametro,res);
    }
}
const pensumControlador_Buscar = new PensumControlador_Buscar();
export default pensumControlador_Buscar;