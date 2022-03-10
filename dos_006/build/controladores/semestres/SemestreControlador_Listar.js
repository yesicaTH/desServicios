"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestreDAO_listar_1 = __importDefault(require("../../daos/semestres/SemestreDAO_listar"));
const semestre_buscar_sql_1 = require("../../repositorios/semestres/semestre_buscar_sql");
class SemestreControlador_Listar extends SemestreDAO_listar_1.default {
    demeLosSemestres(req, res) {
        SemestreControlador_Listar.obenerSemestre(semestre_buscar_sql_1.SQL_SEMESTRES_BUSCAR.TODAS, [], res);
    }
}
const semestreControlador_Listar = new SemestreControlador_Listar();
exports.default = semestreControlador_Listar;
