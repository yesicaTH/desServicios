import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import rutaPruebaAPI from '../rutas/PruebaRuta';

class Servidor {
    public app: express.Application;
    
    constructor() {
        this.app = express();
        this.iniciarConfiguracion();
        this.activarRutas();
    }


    public iniciarConfiguracion(): void {
        this.app.set('PORT', 8088);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json({ limit: '100mb' }))
        this.app.use(express.urlencoded({ extended: true }));
    }

    public activarRutas(): void {
        this.app.use('/api/nolocreo', rutaPruebaAPI);
    }

    public iniciar(): void {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVE !!!', this.app.get('PORT'));
        });
    }
}
export default Servidor;