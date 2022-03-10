"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramaDAO_listar_1 = __importDefault(require("../../daos/programas/ProgramaDAO_listar"));
const programa_buscar_sql_1 = require("../../repositorios/programas/programa_buscar_sql");
class ProgramaControlador_Listar extends ProgramaDAO_listar_1.default {
    demeLosProgramas(req, res) {
        ProgramaControlador_Listar.obenerPrograma(programa_buscar_sql_1.SQL_PROGRAMAS_BUSCAR.TODAS, [], res);
    }
}
const programaControlador_Listar = new ProgramaControlador_Listar();
exports.default = programaControlador_Listar;
