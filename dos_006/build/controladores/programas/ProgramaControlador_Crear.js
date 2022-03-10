"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const programaDAO_crear_1 = __importDefault(require("../../daos/programas/programaDAO_crear"));
const programa_buscar_sql_1 = require("../../repositorios/programas/programa_buscar_sql");
const programa_crear_sql_1 = require("../../repositorios/programas/programa_crear_sql");
class ProgramaControlador_Crear extends programaDAO_crear_1.default {
    grabarPrograma(req, res) {
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];
        ProgramaControlador_Crear.crearPrograma(programa_buscar_sql_1.SQL_PROGRAMAS_BUSCAR.CONFIRMAR, programa_crear_sql_1.SQL_PROGRAMAS_CREAR.CREAR, parametro, res);
    }
}
const programaControlador_Crear = new ProgramaControlador_Crear();
exports.default = programaControlador_Crear;
