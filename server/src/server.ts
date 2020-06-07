import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors()); // quais domínios podem acessar.. do front end por exemplo
// em ambiente de desenvolvimento todas as urls estao aptas a acessar
app.use(express.json()); //explicar que o express vai usar json
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, "..", 'uploads')));

app.listen(3333);