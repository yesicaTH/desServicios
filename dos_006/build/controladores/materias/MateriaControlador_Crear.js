"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriaDAO_crear_1 = __importDefault(require("../../daos/materias/MateriaDAO_crear"));
const materia_buscar_sql_1 = require("../../repositorios/materias/materia_buscar_sql");
const materia_crear_sql_1 = require("../../repositorios/materias/materia_crear_sql");
class MateriaControlador_Crear extends MateriaDAO_crear_1.default {
    grabarMateria(req, res) {
        const nombre = req.body.nombreMateria;
        const refmateria = req.body.referenciaMateria;
        const parametro = [nombre, refmateria];
        MateriaControlador_Crear.crearMateria(materia_buscar_sql_1.SQL_MATERIAS_BUSCAR.CONFIRMAR, materia_crear_sql_1.SQL_MATERIAS_CREAR.CREAR, parametro, res);
    }
}
const materiaControlador_Crear = new MateriaControlador_Crear();
exports.default = materiaControlador_Crear;
