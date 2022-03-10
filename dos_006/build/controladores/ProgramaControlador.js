"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramaDAO_1 = __importDefault(require("../daos/ProgramaDAO"));
const programas_sql_1 = require("../repositorios/programas_sql");
class ProgramaControlador extends ProgramaDAO_1.default {
    demeLosProgramas(req, res) {
        ProgramaControlador.obenerPrograma(programas_sql_1.SQL_PROGRAMAS.TODAS, [], res);
    }
    averGrabalo(req, res) {
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];
        ProgramaControlador.crearPrograma(programas_sql_1.SQL_PROGRAMAS.CONFIRMAR, programas_sql_1.SQL_PROGRAMAS.CREAR, parametro, res);
    }
    busqueUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        ProgramaControlador.encontrarPorID(programas_sql_1.SQL_PROGRAMAS.CARGAR, parametro, res);
    }
    BorreUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        ProgramaControlador.eliminarPorID(programas_sql_1.SQL_PROGRAMAS.BORRAR, parametro, res);
    }
}
const programaControlador = new ProgramaControlador();
exports.default = programaControlador;
