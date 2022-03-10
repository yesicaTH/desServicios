"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriaPensumDAO_1 = __importDefault(require("../daos/MateriaPensumDAO"));
const materiapensum_sql_1 = require("../repositorios/materiapensum_sql");
class MateriaPensumControlador extends MateriaPensumDAO_1.default {
    demeLosMateriaPensum(req, res) {
        MateriaPensumControlador.obenerMateriaPensum(materiapensum_sql_1.SQL_MATERIAPENSUM.TODAS, [], res);
    }
}
const materiaPensumControlador = new MateriaPensumControlador();
exports.default = materiaPensumControlador;
