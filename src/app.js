import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';

import tarefasController from './controller/tarefasController.js'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());


servidor.use(tarefasController);

const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`--> Api subiu na porta ${PORTA}`))