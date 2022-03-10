"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestreDAO_buscar_1 = __importDefault(require("../../daos/semestres/SemestreDAO_buscar"));
const semestre_buscar_sql_1 = require("../../repositorios/semestres/semestre_buscar_sql");
class SemestreControlador_Buscar extends SemestreDAO_buscar_1.default {
    busqueUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        SemestreControlador_Buscar.encontrarPorID(semestre_buscar_sql_1.SQL_SEMESTRES_BUSCAR.CARGAR, parametro, res);
    }
}
const semestreControlador_Buscar = new SemestreControlador_Buscar();
exports.default = semestreControlador_Buscar;
