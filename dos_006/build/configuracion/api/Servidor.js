"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const ProgramaRutas_1 = __importDefault(require("../../rutas/ProgramaRutas"));
const SemestreRutas_1 = __importDefault(require("../../rutas/SemestreRutas"));
const MateriaRutas_1 = __importDefault(require("../../rutas/MateriaRutas"));
const PensumRutas_1 = __importDefault(require("../../rutas/PensumRutas"));
const MateriaPensumRutas_1 = __importDefault(require("../../rutas/MateriaPensumRutas"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.iniciarConfiguracion();
        this.activarRutas();
    }
    iniciarConfiguracion() {
        this.app.set('PORT', 8088);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activarRutas() {
        this.app.use('/api', ProgramaRutas_1.default);
        this.app.use('/api', SemestreRutas_1.default);
        this.app.use('/api', MateriaRutas_1.default);
        this.app.use('/api', PensumRutas_1.default);
        this.app.use('/api', MateriaPensumRutas_1.default);
    }
    iniciar() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVE !!!', this.app.get('PORT'));
        });
    }
}
exports.default = Servidor;
