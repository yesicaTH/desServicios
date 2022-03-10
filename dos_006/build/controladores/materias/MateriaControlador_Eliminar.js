"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriaDAO_Eliminar_1 = __importDefault(require("../../daos/materias/MateriaDAO_Eliminar"));
const materia_eliminar_sql_1 = require("../../repositorios/materias/materia_eliminar_sql");
class MateriaControlador_Eliminar extends MateriaDAO_Eliminar_1.default {
    BorreUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        MateriaControlador_Eliminar.eliminarPorID(materia_eliminar_sql_1.SQL_MATERIAS_ELIMINAR.BORRAR, parametro, res);
    }
}
const materiaControlador_Eliminar = new MateriaControlador_Eliminar();
exports.default = materiaControlador_Eliminar;
