"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const opcionesConexion_1 = require("./opcionesConexion");
const var_basesdatos_1 = __importDefault(require("../dominios/var_basesdatos"));
const pgp = (0, pg_promise_1.default)(opcionesConexion_1.opcionesPG);
const pool = pgp(var_basesdatos_1.default);
pool.connect()
    .then((conn) => {
    console.log('CONECTADO A: !!', var_basesdatos_1.default.database);
    conn.done();
})
    .catch((miError) => {
    console.log(miError);
});
exports.default = pool;
