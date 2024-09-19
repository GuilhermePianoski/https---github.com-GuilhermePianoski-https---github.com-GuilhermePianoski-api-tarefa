import con from "./connection.js";

export async function inserirTarefa(afazeres) {
    const comando = `
       INSERT INTO tb_tarefa(ds_tarefa, nr_ordem, bt_finalizacao, dt_cadastro)
               VALUES(?, ?, ?, ?);
    `;

    let resposta = await con.query(comando, [afazeres.tarefa, afazeres.ordem, afazeres.finalizacao, afazeres.cadastro])
      let info = resposta[0];

      return info.insertId;
}

export async function  consultarTarefa() {
     const comando = ` 
 select id_tarefa     id,
     ds_tarefa        tarefa,
     nr_ordem         ordem,
     bt_finalizacao   finalizacao,
     dt_cadastro      cadastro
   from tb_tarefa       
    `;
    let resposta = await con.query(comando);
    let registros = resposta[0];
    
    return registros;
}

export async function alterarTarefa(id, afazeres) {
   const comando = `
    update tb_tarefa
     set ds_tarefa = ?,
     nr_ordem = ?,
     bt_finalizacao = ?,
     dt_cadastro = ?
    where id_tarefa = ?; 
   `
   
   let resposta = await con.query(comando, [afazeres.tarefa, afazeres.ordem, afazeres.finalizacao, afazeres.cadastro, id])
   let info = resposta[0];

   return info.affectedRows;
}

export async function removerTarefa(id) {
    const comando = `
      delete from tb_tarefa
      where id_tarefa = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}