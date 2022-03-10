"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestreDAO_actualizar_1 = __importDefault(require("../../daos/semestres/SemestreDAO_actualizar"));
const semestre_actualizar_sql_1 = require("../../repositorios/semestres/semestre_actualizar_sql");
class SemestreControlador_Actualizar extends SemestreDAO_actualizar_1.default {
    actualizar(req, res) {
        const codigo = req.body.codSemestre;
        const nombre = req.body.nombreSemestre;
        const parametros = [nombre, codigo];
        SemestreControlador_Actualizar.actualizarSemestre(semestre_actualizar_sql_1.SQL_SEMESTRES_ACTUALIZAR.ACTUALIZAR, parametros, res);
    }
}
const semestreControlador_Actualizar = new SemestreControlador_Actualizar();
exports.default = semestreControlador_Actualizar;
