"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriaPensumDAO_buscar_1 = __importDefault(require("../../daos/materiaPensum/MateriaPensumDAO_buscar"));
const materiaPensum_buscar_sql_1 = require("../../repositorios/materiaPensum/materiaPensum_buscar_sql");
class MateriaPensumControlador_Buscar extends MateriaPensumDAO_buscar_1.default {
    busqueUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        MateriaPensumControlador_Buscar.encontrarPorID(materiaPensum_buscar_sql_1.SQL_MATERIAPENSUM_BUSCAR.CARGAR, parametro, res);
    }
}
const materiaPensumControlador_Buscar = new MateriaPensumControlador_Buscar();
exports.default = materiaPensumControlador_Buscar;
