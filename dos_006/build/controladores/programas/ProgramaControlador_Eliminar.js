"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const programaDAO_eliminar_1 = __importDefault(require("../../daos/programas/programaDAO_eliminar"));
const programa_eliminar_sql_1 = require("../../repositorios/programas/programa_eliminar_sql");
class ProgramaControlador_Eliminar extends programaDAO_eliminar_1.default {
    BorreUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        ProgramaControlador_Eliminar.eliminarPorID(programa_eliminar_sql_1.SQL_PROGRAMAS_ELIMINAR.BORRAR, parametro, res);
    }
}
const programaControlador_Eliminar = new ProgramaControlador_Eliminar();
exports.default = programaControlador_Eliminar;
