"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestreDAO_eliminar_1 = __importDefault(require("../../daos/semestres/SemestreDAO_eliminar"));
const semestre_eliminar_sql_1 = require("../../repositorios/semestres/semestre_eliminar_sql");
class SemestreControlador_Eliminar extends SemestreDAO_eliminar_1.default {
    BorreUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        SemestreControlador_Eliminar.eliminarPorID(semestre_eliminar_sql_1.SQL_SEMESTRES_ELIMINAR.BORRAR, parametro, res);
    }
}
const semestreControlador_Eliminar = new SemestreControlador_Eliminar();
exports.default = semestreControlador_Eliminar;
