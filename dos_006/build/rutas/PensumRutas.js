"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PensumControlador_Actualizar_1 = __importDefault(require("../controladores/pensums/PensumControlador_Actualizar"));
const PensumControlador_Buscar_1 = __importDefault(require("../controladores/pensums/PensumControlador_Buscar"));
const PensumControlador_Listar_1 = __importDefault(require("../controladores/pensums/PensumControlador_Listar"));
const PensumControlador_Crear_1 = __importDefault(require("../controladores/pensums/PensumControlador_Crear"));
const PensumCotrolador_Eliminar_1 = __importDefault(require("../controladores/pensums/PensumCotrolador_Eliminar"));
class PensumRutas {
    constructor() {
        this.rutaPensumApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaPensumApi.get('/pensum', PensumControlador_Listar_1.default.demeLosPensum);
        this.rutaPensumApi.post('/pensum/crear', PensumControlador_Crear_1.default.crearPensum);
        this.rutaPensumApi.get('/pensum/:elCodigo', PensumControlador_Buscar_1.default.busqueUno);
        this.rutaPensumApi.delete('/pensum/:elCodigo', PensumCotrolador_Eliminar_1.default.BorreUno);
        this.rutaPensumApi.put('/pensum/actualizar', PensumControlador_Actualizar_1.default.actualizar);
    }
}
const pensumRutas = new PensumRutas();
exports.default = pensumRutas.rutaPensumApi;
