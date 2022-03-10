"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumDAO_crear_1 = __importDefault(require("../../daos/pensums/PensumDAO_crear"));
const pensum_buscar_sql_1 = require("../../repositorios/pensums/pensum_buscar_sql");
const pensum_crear_sql_1 = require("../../repositorios/pensums/pensum_crear_sql");
class PensumControlador_Crear extends PensumDAO_crear_1.default {
    crearPensum(req, res) {
        const nombre = req.body.nombrePensum;
        const codprogram = req.body.codPrograma;
        const parametro = [codprogram, nombre];
        PensumControlador_Crear.crearPensum(pensum_buscar_sql_1.SQL_PENSUMS_BUSCAR.CONFIRMAR, pensum_crear_sql_1.SQL_PENSUMS_CREAR.CREAR, parametro, res);
    }
}
const pensumControlador_Crear = new PensumControlador_Crear();
exports.default = pensumControlador_Crear;
