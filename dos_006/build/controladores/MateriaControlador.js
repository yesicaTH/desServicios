"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriaDAO_1 = __importDefault(require("../daos/MateriaDAO"));
const materias_sql_1 = require("../repositorios/materias_sql");
class MateriaControlador extends MateriaDAO_1.default {
    demeLasMaterias(req, res) {
        MateriaControlador.obenerMateria(materias_sql_1.SQL_MATERIAS.TODAS, [], res);
    }
    averGrabalo(req, res) {
        const nombre = req.body.nombreMateria;
        const refmateria = req.body.referenciaMateria;
        const parametro = [nombre, refmateria];
        MateriaControlador.crearMateria(materias_sql_1.SQL_MATERIAS.CONFIRMAR, materias_sql_1.SQL_MATERIAS.CREAR, parametro, res);
    }
    busqueUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        MateriaControlador.encontrarPorID(materias_sql_1.SQL_MATERIAS.CARGAR, parametro, res);
    }
    BorreUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        MateriaControlador.eliminarPorID(materias_sql_1.SQL_MATERIAS.BORRAR, parametro, res);
    }
}
const materiaControlador = new MateriaControlador();
exports.default = materiaControlador;
