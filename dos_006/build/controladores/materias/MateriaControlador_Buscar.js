"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriaDAO_buscar_1 = __importDefault(require("../../daos/materias/MateriaDAO_buscar"));
const materia_buscar_sql_1 = require("../../repositorios/materias/materia_buscar_sql");
class MateriaControlador_Buscar extends MateriaDAO_buscar_1.default {
    busqueUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        MateriaControlador_Buscar.encontrarPorID(materia_buscar_sql_1.SQL_MATERIAS_BUSCAR.CARGAR, parametro, res);
    }
}
const materiaControlador_Buscar = new MateriaControlador_Buscar();
exports.default = materiaControlador_Buscar;
