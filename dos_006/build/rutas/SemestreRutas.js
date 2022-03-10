"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SemestreControlador_Actualizar_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Actualizar"));
const SemestreControlador_Buscar_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Buscar"));
const SemestreControlador_Crear_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Crear"));
const SemestreControlador_Eliminar_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Eliminar"));
const SemestreControlador_Listar_1 = __importDefault(require("../controladores/semestres/SemestreControlador_Listar"));
class SemestreRutas {
    constructor() {
        this.rutaSemestreApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaSemestreApi.get('/semestre', SemestreControlador_Listar_1.default.demeLosSemestres);
        this.rutaSemestreApi.post('/semestre/crear', SemestreControlador_Crear_1.default.grabarSemestre);
        this.rutaSemestreApi.get('/semestre/:elCodigo', SemestreControlador_Buscar_1.default.busqueUno);
        this.rutaSemestreApi.delete('/semestre/:elCodigo', SemestreControlador_Eliminar_1.default.BorreUno);
        this.rutaSemestreApi.put('/semestre/actualizar', SemestreControlador_Actualizar_1.default.actualizar);
    }
}
const semestreRutas = new SemestreRutas();
exports.default = semestreRutas.rutaSemestreApi;
