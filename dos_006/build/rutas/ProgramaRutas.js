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
    }
}
const programaRutas = new ProgramaRutas();
exports.default = programaRutas.rutaProgramaApi;
