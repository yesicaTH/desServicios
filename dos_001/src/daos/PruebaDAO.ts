import { Response, Request } from 'express';

class PruebaDAO {
    protected static async obtenerInfo(req: Request, res: Response): Promise<any> {
        const miJson = { profesores: 'Harvey y Andres', materia: 'DOS' }

        Promise.resolve(miJson).
            then((resultado: any)=>{
                console.log('Uyyy la consola!!!',resultado)
                res.status(200).json(miJson);
            }).
            catch((err: any)=>{
                console.log('Uy mano, Error', err)
                res.status(400).json({respuesta: 'se reventó esto'});
            });
    }

}
export default PruebaDAO;