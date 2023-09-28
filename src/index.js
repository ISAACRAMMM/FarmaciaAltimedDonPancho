import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));



app.listen(port)

