"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriaPensumDAO_listar_1 = __importDefault(require("../../daos/materiaPensum/MateriaPensumDAO_listar"));
const materiaPensum_buscar_sql_1 = require("../../repositorios/materiaPensum/materiaPensum_buscar_sql");
class MateriaPensumControlador_Listar extends MateriaPensumDAO_listar_1.default {
    demeLosMateriaPensum(req, res) {
        MateriaPensumControlador_Listar.obenerMateriaPensum(materiaPensum_buscar_sql_1.SQL_MATERIAPENSUM_BUSCAR.TODAS, [], res);
    }
}
const materiaPensumControlador_Listar = new MateriaPensumControlador_Listar();
exports.default = materiaPensumControlador_Listar;
