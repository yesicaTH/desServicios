"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MateriaPensumControlador_Buscar_1 = __importDefault(require("../controladores/materiaPensum/MateriaPensumControlador_Buscar"));
const MateriaPensumControlador_Listar_1 = __importDefault(require("../controladores/materiaPensum/MateriaPensumControlador_Listar"));
class MateriaPensumRutas {
    constructor() {
        this.rutaMateriaPensumApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaMateriaPensumApi.get('/materiapensum', MateriaPensumControlador_Listar_1.default.demeLosMateriaPensum);
        this.rutaMateriaPensumApi.get('/materiapensum/:elCodigo', MateriaPensumControlador_Buscar_1.default.busqueUno);
    }
}
const materiaPensumaRutas = new MateriaPensumRutas();
exports.default = materiaPensumaRutas.rutaMateriaPensumApi;
