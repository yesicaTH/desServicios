"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MateriaControlador_Actualizar_1 = __importDefault(require("../controladores/materias/MateriaControlador_Actualizar"));
const MateriaControlador_Buscar_1 = __importDefault(require("../controladores/materias/MateriaControlador_Buscar"));
const MateriaControlador_Crear_1 = __importDefault(require("../controladores/materias/MateriaControlador_Crear"));
const MateriaControlador_Eliminar_1 = __importDefault(require("../controladores/materias/MateriaControlador_Eliminar"));
const MateriaControlador_Listar_1 = __importDefault(require("../controladores/materias/MateriaControlador_Listar"));
class MateriaRutas {
    constructor() {
        this.rutaMateriaApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaMateriaApi.get('/materia', MateriaControlador_Listar_1.default.demeLasMaterias);
        this.rutaMateriaApi.post('/materia/crear', MateriaControlador_Crear_1.default.grabarMateria);
        this.rutaMateriaApi.get('/materia/:elCodigo', MateriaControlador_Buscar_1.default.busqueUno);
        this.rutaMateriaApi.delete('/materia/:elCodigo', MateriaControlador_Eliminar_1.default.BorreUno);
        this.rutaMateriaApi.put('/materia/actualizar', MateriaControlador_Actualizar_1.default.actualizar);
    }
}
const materiaRutas = new MateriaRutas();
exports.default = materiaRutas.rutaMateriaApi;
