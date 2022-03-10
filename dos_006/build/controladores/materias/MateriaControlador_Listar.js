"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriaDAO_Listar_1 = __importDefault(require("../../daos/materias/MateriaDAO_Listar"));
const materia_buscar_sql_1 = require("../../repositorios/materias/materia_buscar_sql");
class MateriaControlador_Listar extends MateriaDAO_Listar_1.default {
    demeLasMaterias(req, res) {
        MateriaControlador_Listar.obenerMateria(materia_buscar_sql_1.SQL_MATERIAS_BUSCAR.TODAS, [], res);
    }
}
const materiaControlador_Listar = new MateriaControlador_Listar();
exports.default = materiaControlador_Listar;
