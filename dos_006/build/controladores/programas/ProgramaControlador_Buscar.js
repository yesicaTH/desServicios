"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramaDAO_buscar_1 = __importDefault(require("../../daos/programas/ProgramaDAO_buscar"));
const programa_buscar_sql_1 = require("../../repositorios/programas/programa_buscar_sql");
class ProgramaControlador_Buscar extends ProgramaDAO_buscar_1.default {
    busqueUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        ProgramaControlador_Buscar.encontrarPorID(programa_buscar_sql_1.SQL_PROGRAMAS_BUSCAR.CARGAR, parametro, res);
    }
}
const programaControlador_Buscar = new ProgramaControlador_Buscar();
exports.default = programaControlador_Buscar;
