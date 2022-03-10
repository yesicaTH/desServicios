import {Router} from 'express';

import programaControlador_Actualizar from '../controladores/programas/ProgramaControlador_Actualizar';
import programaControlador_Crear from '../controladores/programas/ProgramaControlador_Crear';
import programaControlador_Listar from '../controladores/programas/ProgramaControlador_Listar';
import programaControlador_Buscar from '../controladores/programas/ProgramaControlador_Buscar';
import programaControlador_Eliminar from '../controladores/programas/ProgramaControlador_Eliminar';

class ProgramaRutas{

    public rutaProgramaApi:Router;

    constructor(){
        this.rutaProgramaApi = Router();
        this.configuracion();
    }
    public configuracion(){
        
        this.rutaProgramaApi.get('/programa', programaControlador_Listar.demeLosProgramas);
        this.rutaProgramaApi.post('/programa/crear', programaControlador_Crear.grabarPrograma);
        this.rutaProgramaApi.get('/programa/:elCodigo', programaControlador_Buscar.busqueUno);
        this.rutaProgramaApi.delete('/programa/:elCodigo', programaControlador_Eliminar.BorreUno);
        this.rutaProgramaApi.put('/programa/actualizar', programaControlador_Actualizar.actualizar);

    }
}
const programaRutas = new ProgramaRutas();
export default programaRutas.rutaProgramaApi;