"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriaDAO_actualizar_1 = __importDefault(require("../../daos/materias/MateriaDAO_actualizar"));
const materia_actualizar_sql_1 = require("../../repositorios/materias/materia_actualizar_sql");
class MateriaControlador_Actualizar extends MateriaDAO_actualizar_1.default {
    actualizar(req, res) {
        const codigo = req.body.codMateria;
        const nombre = req.body.nombreMateria;
        const parametros = [nombre, codigo];
        MateriaControlador_Actualizar.actualizarMateria(materia_actualizar_sql_1.SQL_MATERIAS_ACTUALIZAR.ACTUALIZAR, parametros, res);
    }
}
const materiaControlador_Actualizar = new MateriaControlador_Actualizar();
exports.default = materiaControlador_Actualizar;
