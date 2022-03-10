import {Router} from 'express';

import semestreControlador_Actualizar from '../controladores/semestres/SemestreControlador_Actualizar';
import semestreControlador_Buscar from '../controladores/semestres/SemestreControlador_Buscar';
import semestreControlador_Crear from '../controladores/semestres/SemestreControlador_Crear';
import semestreControlador_Eliminar from '../controladores/semestres/SemestreControlador_Eliminar';
import semestreControlador_Listar from '../controladores/semestres/SemestreControlador_Listar';

class SemestreRutas{

    public rutaSemestreApi:Router;

    constructor(){
        this.rutaSemestreApi = Router();
        this.configuracion();
    }
    public configuracion(){
    
        this.rutaSemestreApi.get('/semestre', semestreControlador_Listar.demeLosSemestres);
        this.rutaSemestreApi.post('/semestre/crear', semestreControlador_Crear.grabarSemestre);
        this.rutaSemestreApi.get('/semestre/:elCodigo', semestreControlador_Buscar.busqueUno);
        this.rutaSemestreApi.delete('/semestre/:elCodigo', semestreControlador_Eliminar.BorreUno);
        this.rutaSemestreApi.put('/semestre/actualizar', semestreControlador_Actualizar.actualizar);

    }
}
const semestreRutas = new SemestreRutas();
export default semestreRutas.rutaSemestreApi;