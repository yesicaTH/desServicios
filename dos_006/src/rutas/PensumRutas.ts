import {Router} from 'express';

import pensumControlador_Actualizar from '../controladores/pensums/PensumControlador_Actualizar';
import pensumControlador_Buscar from '../controladores/pensums/PensumControlador_Buscar';
import pensumControlador_Listar from '../controladores/pensums/PensumControlador_Listar';
import pensumControlador_Crear from '../controladores/pensums/PensumControlador_Crear';
import pensumControlador_Eliminar from '../controladores/pensums/PensumCotrolador_Eliminar';

class PensumRutas{

    public rutaPensumApi:Router;

    constructor(){
        this.rutaPensumApi = Router();
        this.configuracion();
    }
    public configuracion(){

        this.rutaPensumApi.get('/pensum', pensumControlador_Listar.demeLosPensum);
        this.rutaPensumApi.post('/pensum/crear', pensumControlador_Crear.crearPensum);
        this.rutaPensumApi.get('/pensum/:elCodigo', pensumControlador_Buscar.busqueUno);
        this.rutaPensumApi.delete('/pensum/:elCodigo', pensumControlador_Eliminar.BorreUno);
        this.rutaPensumApi.put('/pensum/actualizar', pensumControlador_Actualizar.actualizar);

    }
}
const pensumRutas = new PensumRutas();
export default pensumRutas.rutaPensumApi;