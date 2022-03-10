import pgPromise from 'pg-promise';
import {opcionesPG} from './opcionesConexion';
import variablesConexion from '../dominios/var_basesdatos';

const pgp = pgPromise(opcionesPG);
const pool = pgp(variablesConexion);

pool.connect()
.then((conn)=>{
    console.log('CONECTADO A: !!', variablesConexion.database);
    conn.done();
})
.catch((miError)=>{
    console.log(miError);
});

export default pool;