import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

import indexRoutes from './routers/index.js';


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
import pkg from 'pg';
const { Pool } = pkg;

const configDB={ 
    user: 'postgres',
    host: 'localhost',
    password: '1234',
    database: 'Farmacia_altimed',
    port: '5432'
}

const pool = new Pool(configDB);

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(indexRoutes);


app.use(express.static(join(__dirname, 'public')));

const getCategorias = async ()=>{
    try{
        const res = await pool.query("SELECT * FROM \"Categorias\";")
        console.log(res.rows);
        pool.end();
    }
    catch(e){
        console.log(e);
    }

    
};

getCategorias()

app.listen(port)


