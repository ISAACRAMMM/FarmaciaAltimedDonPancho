import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

import indexRoutes from './routers/index.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(indexRoutes);

app.use(express.static(join(__dirname, 'public')));



app.listen(port)

