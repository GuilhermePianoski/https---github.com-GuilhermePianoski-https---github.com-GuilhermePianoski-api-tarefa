import tarefasController from  './controller/tarefasController.js';    


export default function adicionarRotas(servidor) {
    servidor.use(tarefasController);
}