"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumDAO_actualizar_1 = __importDefault(require("../../daos/pensums/PensumDAO_actualizar"));
const pensum_actualizar_sql_1 = require("../../repositorios/pensums/pensum_actualizar_sql");
class PensumControlador_Actualizar extends PensumDAO_actualizar_1.default {
    actualizar(req, res) {
        const codigo = req.body.codPensum;
        const nombre = req.body.nombrePensum;
        const parametros = [nombre, codigo];
        PensumControlador_Actualizar.actualizarPensum(pensum_actualizar_sql_1.SQL_PENSUMS_ACTUALIZAR.ACTUALIZAR, parametros, res);
    }
}
const pensumControlador_Actualizar = new PensumControlador_Actualizar();
exports.default = pensumControlador_Actualizar;
