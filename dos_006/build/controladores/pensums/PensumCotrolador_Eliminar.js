"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumDAO_eliminar_1 = __importDefault(require("../../daos/pensums/PensumDAO_eliminar"));
const pensum_eliminar_1 = require("../../repositorios/pensums/pensum_eliminar");
class PensumControlador_Eliminar extends PensumDAO_eliminar_1.default {
    BorreUno(req, res) {
        const codiguito = req.params.elCodigo;
        const parametro = [codiguito];
        PensumControlador_Eliminar.eliminarPorID(pensum_eliminar_1.SQL_PENSUMS_ELIMINAR.BORRAR, parametro, res);
    }
}
const pensumControlador_Eliminar = new PensumControlador_Eliminar();
exports.default = pensumControlador_Eliminar;
