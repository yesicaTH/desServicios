import {Request, Response} from 'express';
import PruebaDAO from '../daos/PruebaDAO';

class PruebaControlador extends PruebaDAO{
    public atanqueme(req: Request, res: Response): void{
        PruebaControlador.obtenerInfo(req, res);

    }

}
const pruebaControlador = new PruebaControlador();
export default pruebaControlador;