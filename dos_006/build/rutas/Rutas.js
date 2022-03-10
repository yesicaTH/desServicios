"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProgramaControlador_Actualizar_1 = __importDefault(require("../controladores/programas/ProgramaControlador_Actualizar"));
const ProgramaControlador_Crear_1 = __importDefault(require("../controladores/programas/ProgramaControlador_Crear"));
const ProgramaControlador_Listar_1 = __importDefault(require("../controladores/programas/ProgramaControlador_Listar"));
const ProgramaControlador_Buscar_1 = __importDefault(require("../controladores/programas/ProgramaControlador_Buscar"));
const ProgramaControlador_Eliminar_1 = __importDefault(require("../controladores/programas/ProgramaControlador_Eliminar"));
const SemestreControlador_Actualizar_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Actualizar"));
const SemestreControlador_Buscar_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Buscar"));
const SemestreControlador_Crear_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Crear"));
const SemestreControlador_Eliminar_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Eliminar"));
const SemestreControlador_Listar_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Listar"));
const MateriaControlador_Actualizar_1 = __importDefault(require("../controladores/materias/MateriaControlador_Actualizar"));
const MateriaControlador_Buscar_1 = __importDefault(require("../controladores/materias/MateriaControlador_Buscar"));
const MateriaControlador_Crear_1 = __importDefault(require("../controladores/materias/MateriaControlador_Crear"));
const MateriaControlador_Eliminar_1 = __importDefault(require("../controladores/materias/MateriaControlador_Eliminar"));
const MateriaControlador_Listar_1 = __importDefault(require("../controladores/materias/MateriaControlador_Listar"));
const PensumControlador_Actualizar_1 = __importDefault(require("../controladores/pensums/PensumControlador_Actualizar"));
const PensumControlador_Buscar_1 = __importDefault(require("../controladores/pensums/PensumControlador_Buscar"));
const PensumControlador_Listar_1 = __importDefault(require("../controladores/pensums/PensumControlador_Listar"));
const PensumControlador_Crear_1 = __importDefault(require("../controladores/pensums/PensumControlador_Crear"));
const PensumCotrolador_Eliminar_1 = __importDefault(require("../controladores/pensums/PensumCotrolador_Eliminar"));
const MateriaPensumControlador_Listar_1 = __importDefault(require("../controladores/materiaPensum/MateriaPensumControlador_Listar"));
class ProgramaRutas {
    constructor() {
        this.rutaProgramaApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaProgramaApi.get('/programa', ProgramaControlador_Listar_1.default.demeLosProgramas);
        this.rutaProgramaApi.post('/programa/crear', ProgramaControlador_Crear_1.default.grabarPrograma);
        this.rutaProgramaApi.get('/programa/:elCodigo', ProgramaControlador_Buscar_1.default.busqueUno);
        this.rutaProgramaApi.delete('/programa/:elCodigo', ProgramaControlador_Eliminar_1.default.BorreUno);
        this.rutaProgramaApi.put('/programa/actualizar', ProgramaControlador_Actualizar_1.default.actualizar);
        this.rutaProgramaApi.get('/semestre', SemestreControlador_Listar_1.default.demeLosSemestres);
        this.rutaProgramaApi.post('/semestre/crear', SemestreControlador_Crear_1.default.grabarSemestre);
        this.rutaProgramaApi.get('/semestre/:elCodigo', SemestreControlador_Buscar_1.default.busqueUno);
        this.rutaProgramaApi.delete('/semestre/:elCodigo', SemestreControlador_Eliminar_1.default.BorreUno);
        this.rutaProgramaApi.put('/semestre/actualizar', SemestreControlador_Actualizar_1.default.actualizar);
        this.rutaProgramaApi.get('/materia', MateriaControlador_Listar_1.default.demeLasMaterias);
        this.rutaProgramaApi.post('/materia/crear', MateriaControlador_Crear_1.default.grabarMateria);
        this.rutaProgramaApi.get('/materia/:elCodigo', MateriaControlador_Buscar_1.default.busqueUno);
        this.rutaProgramaApi.delete('/materia/:elCodigo', MateriaControlador_Eliminar_1.default.BorreUno);
        this.rutaProgramaApi.put('/materia/actualizar', MateriaControlador_Actualizar_1.default.actualizar);
        this.rutaProgramaApi.get('/pensum', PensumControlador_Listar_1.default.demeLosPensum);
        this.rutaProgramaApi.post('/pensum/crear', PensumControlador_Crear_1.default.crearPensum);
        this.rutaProgramaApi.get('/pensum/:elCodigo', PensumControlador_Buscar_1.default.busqueUno);
        this.rutaProgramaApi.delete('/pensum/:elCodigo', PensumCotrolador_Eliminar_1.default.BorreUno);
        this.rutaProgramaApi.put('/pensum/actualizar', PensumControlador_Actualizar_1.default.actualizar);
        this.rutaProgramaApi.get('/materiapensum', MateriaPensumControlador_Listar_1.default.demeLosMateriaPensum);
    }
}
const programaRutas = new ProgramaRutas();
exports.default = programaRutas.rutaProgramaApi;
