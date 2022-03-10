import {Request, Response} from 'express';
import MateriaPensumDAO_Buscar from '../../daos/materiaPensum/MateriaPensumDAO_buscar';
import { SQL_MATERIAPENSUM_BUSCAR } from '../../repositorios/materiaPensum/materiaPensum_buscar_sql';

class MateriaPensumControlador_Buscar extends MateriaPensumDAO_Buscar{

    public busqueUno(req: Request, res: Response): void {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        MateriaPensumControlador_Buscar.encontrarPorID(SQL_MATERIAPENSUM_BUSCAR.CARGAR, parametro,res);
    }
}
const materiaPensumControlador_Buscar = new MateriaPensumControlador_Buscar();
export default materiaPensumControlador_Buscar;