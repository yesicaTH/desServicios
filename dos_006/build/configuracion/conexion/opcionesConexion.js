"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opcionesPG = void 0;
const funcionesConexion_1 = require("./funcionesConexion");
exports.opcionesPG = {
    receive(data, result, e) { (0, funcionesConexion_1.camelizeColumns)(data); }
};
