import {Router} from 'express';

import materiaControlador_Actualizar from '../controladores/materias/MateriaControlador_Actualizar';
import materiaControlador_Buscar from '../controladores/materias/MateriaControlador_Buscar';
import materiaControlador_Crear from '../controladores/materias/MateriaControlador_Crear';
import materiaControlador_Eliminar from '../controladores/materias/MateriaControlador_Eliminar';
import materiaControlador_Listar from '../controladores/materias/MateriaControlador_Listar';

class MateriaRutas{

    public rutaMateriaApi:Router;

    constructor(){
        this.rutaMateriaApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaMateriaApi.get('/materia', materiaControlador_Listar.demeLasMaterias);
        this.rutaMateriaApi.post('/materia/crear', materiaControlador_Crear.grabarMateria);
        this.rutaMateriaApi.get('/materia/:elCodigo', materiaControlador_Buscar.busqueUno);
        this.rutaMateriaApi.delete('/materia/:elCodigo', materiaControlador_Eliminar.BorreUno);
        this.rutaMateriaApi.put('/materia/actualizar', materiaControlador_Actualizar.actualizar);

    }
}
const materiaRutas = new MateriaRutas();
export default materiaRutas.rutaMateriaApi;