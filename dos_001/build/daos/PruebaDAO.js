"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class PruebaDAO {
    static obtenerInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const miJson = { profesores: 'Harvey y Andres', materia: 'DOS' };
            Promise.resolve(miJson).
                then((resultado) => {
                console.log('Uyyy la consola!!!', resultado);
                res.status(200).json(miJson);
            }).
                catch((err) => {
                console.log('Uy mano, Error', err);
                res.status(400).json({ respuesta: 'se reventó esto' });
            });
        });
    }
}
exports.default = PruebaDAO;
