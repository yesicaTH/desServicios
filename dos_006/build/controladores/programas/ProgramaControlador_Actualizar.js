"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramaDAO_actualizar_1 = __importDefault(require("../../daos/programas/ProgramaDAO_actualizar"));
const programa_actualizar_sql_1 = require("../../repositorios/programas/programa_actualizar_sql");
class ProgramaControlador_Actualizar extends ProgramaDAO_actualizar_1.default {
    actualizar(req, res) {
        const codigo = req.body.codPrograma;
        const nombre = req.body.nombrePrograma;
        const parametros = [nombre, codigo];
        ProgramaControlador_Actualizar.actualizarPrograma(programa_actualizar_sql_1.SQL_PROGRAMAS_ACTUALIZAR.ACTUALIZAR, parametros, res);
    }
}
const programaControlador_Actualizar = new ProgramaControlador_Actualizar();
exports.default = programaControlador_Actualizar;
