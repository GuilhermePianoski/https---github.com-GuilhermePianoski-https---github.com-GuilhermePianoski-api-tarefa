import * as db from '../repository/tarefasRepository.js';

import { Router } from "express";
const endpoints = Router();

endpoints.get('/tarefa', async (req, resp) => {
    try{
        let registros = await db.consultarTarefa();
        resp.send(registros);
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/tarefa/', async (req, resp) => {
    try {
        let afazeres = req.body;
        let id = await db.inserirTarefa(afazeres);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }  
})

endpoints.put('/tarefa/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let afazeres = req.body;

        let linhasAfetadas = await db.alterarTarefa(id, afazeres);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado'})
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }  
})

endpoints.delete('/tarefa/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerTarefa(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado'})
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }  
})

export default endpoints;