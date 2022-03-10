import {Router} from 'express';
import materiaPensumControlador_Buscar from '../controladores/materiaPensum/MateriaPensumControlador_Buscar';

import materiaPensumControlador_Listar from '../controladores/materiaPensum/MateriaPensumControlador_Listar';

class MateriaPensumRutas{

    public rutaMateriaPensumApi:Router;

    constructor(){
        this.rutaMateriaPensumApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaMateriaPensumApi.get('/materiapensum', materiaPensumControlador_Listar.demeLosMateriaPensum);
        this.rutaMateriaPensumApi.get('/materiapensum/:elCodigo', materiaPensumControlador_Buscar.busqueUno);
    }
}
const materiaPensumaRutas = new MateriaPensumRutas();
export default materiaPensumaRutas.rutaMateriaPensumApi;