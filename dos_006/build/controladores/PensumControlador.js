"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumDAO_1 = __importDefault(require("../daos/PensumDAO"));
const pensums_sql_1 = require("../repositorios/pensums_sql");
class PensumControlador extends PensumDAO_1.default {
    demeLosPensum(req, res) {
        PensumControlador.obenerPensum(pensums_sql_1.SQL_PENSUMS.TODAS, [], res);
    }
    averGrabalo(req, res) {
        const nombre = req.body.nombrePensum;
        const codprogram = req.body.codPrograma;
        const parametro = [codprogram, nombre];
        PensumControlador.crearPensum(pensums_sql_1.SQL_PENSUMS.CONFIRMAR, pensums_sql_1.SQL_PENSUMS.CREAR, parametro, res);
    }
    busqueUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        PensumControlador.encontrarPorID(pensums_sql_1.SQL_PENSUMS.CARGAR, parametro, res);
    }
    BorreUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        PensumControlador.eliminarPorID(pensums_sql_1.SQL_PENSUMS.BORRAR, parametro, res);
    }
}
const pensumControlador = new PensumControlador();
exports.default = pensumControlador;
