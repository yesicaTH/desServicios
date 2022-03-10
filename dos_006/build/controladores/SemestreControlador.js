"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestreDAO_1 = __importDefault(require("../daos/SemestreDAO"));
const semestres_sql_1 = require("../repositorios/semestres_sql");
class SemestreControlador extends SemestreDAO_1.default {
    demeLosSemestres(req, res) {
        SemestreControlador.obenerSemestre(semestres_sql_1.SQL_SEMESTRES.TODAS, [], res);
    }
    averGrabalo(req, res) {
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre];
        SemestreControlador.crearSemestre(semestres_sql_1.SQL_SEMESTRES.CONFIRMAR, semestres_sql_1.SQL_SEMESTRES.CREAR, parametro, res);
    }
    busqueUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        SemestreControlador.encontrarPorID(semestres_sql_1.SQL_SEMESTRES.CARGAR, parametro, res);
    }
    BorreUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        SemestreControlador.eliminarPorID(semestres_sql_1.SQL_SEMESTRES.BORRAR, parametro, res);
    }
}
const semestreControlador = new SemestreControlador();
exports.default = semestreControlador;
