"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestreDAO_crear_1 = __importDefault(require("../../daos/semestres/SemestreDAO_crear"));
const semestre_buscar_sql_1 = require("../../repositorios/semestres/semestre_buscar_sql");
const semestre_crear_sql_1 = require("../../repositorios/semestres/semestre_crear_sql");
class SemestreControlador_Crear extends SemestreDAO_crear_1.default {
    grabarSemestre(req, res) {
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre];
        SemestreControlador_Crear.crearSemestre(semestre_buscar_sql_1.SQL_SEMESTRES_BUSCAR.CONFIRMAR, semestre_crear_sql_1.SQL_SEMESTRES_CREAR.CREAR, parametro, res);
    }
}
const semestreControlador_Crear = new SemestreControlador_Crear();
exports.default = semestreControlador_Crear;
