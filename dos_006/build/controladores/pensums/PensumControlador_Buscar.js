"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumDAO_buscar_1 = __importDefault(require("../../daos/pensums/PensumDAO_buscar"));
const pensum_buscar_sql_1 = require("../../repositorios/pensums/pensum_buscar_sql");
class PensumControlador_Buscar extends PensumDAO_buscar_1.default {
    busqueUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        PensumControlador_Buscar.encontrarPorID(pensum_buscar_sql_1.SQL_PENSUMS_BUSCAR.CARGAR, parametro, res);
    }
}
const pensumControlador_Buscar = new PensumControlador_Buscar();
exports.default = pensumControlador_Buscar;
