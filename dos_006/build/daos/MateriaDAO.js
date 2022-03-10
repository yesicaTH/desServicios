"use strict";
'express';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexionBD_1 = __importDefault(require("../configuracion/conexion/conexionBD"));
class MateriaDAO {
    static obenerMateria(sqlConsulta, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            conexionBD_1.default.result(sqlConsulta, parametros)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((miError) => {
                console.log('Error: ', miError);
                res.status(400).json({ respuesta: 'No sirvió !! , error mensaje candidato' });
            });
        });
    }
    static crearMateria(sqlConfirmar, sqlCrear, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionBD_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consulta.one(sqlConfirmar, parametros);
                if (dato.cantidad == 0) {
                    return yield consulta.one(sqlCrear, parametros);
                }
                else {
                    return { cod_materia: 0 };
                }
            }))
                .then((respuesta) => {
                if (respuesta.cod_materia != 0) {
                    res.status(200).json({ respuesta: 'materia creada', nuevoCodigo: respuesta.cod_materia });
                }
                else {
                    res.status(402).json({ respuesta: 'Error creando registro, probablemente esta repetido' });
                }
            })
                .catch((miError) => {
                console.log('No funciona', miError);
                res.status(400).json({ respuesta: 'Error en las consultas' });
            });
        });
    }
    static encontrarPorID(sqlBuscar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionBD_1.default.one(sqlBuscar, parametros)
                .then((dato) => {
                console.log(dato);
                return res.status(200).json({ respuesta: dato });
            })
                .catch((miError) => {
                console.log(miError);
                return res.status(400).json({ msg: 'error buscando materia' });
            });
        });
    }
    static eliminarPorID(sqlEliminar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionBD_1.default.result(sqlEliminar, parametros)
                .then((dato) => {
                console.log(dato);
                return res.status(200).json({ respuesta: dato.rowCount });
            })
                .catch((miError) => {
                console.log(miError);
                return res.status(400).json({ msg: 'error eliminando materia' });
            });
        });
    }
}
exports.default = MateriaDAO;
