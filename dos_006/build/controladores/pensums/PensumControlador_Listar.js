"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumDAO_Listar_1 = __importDefault(require("../../daos/pensums/PensumDAO_Listar"));
const pensum_buscar_sql_1 = require("../../repositorios/pensums/pensum_buscar_sql");
class PensumControlador_Listar extends PensumDAO_Listar_1.default {
    demeLosPensum(req, res) {
        PensumControlador_Listar.obenerPensum(pensum_buscar_sql_1.SQL_PENSUMS_BUSCAR.TODAS, [], res);
    }
}
const pensumControlador_Listar = new PensumControlador_Listar();
exports.default = pensumControlador_Listar;
