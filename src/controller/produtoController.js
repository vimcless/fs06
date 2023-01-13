const database = require('../connection/databaseConnection');

async function listar() {
    // let sql = 'SELECT * FROM tb_veiculo';
    let sql = `
        SELECT 
            prod.*, cli.nome AS cliente 
        FROM tb_produto prod INNER JOIN tb_cliente cli 
            ON prod.cliente_id = cli.id
    `; 

    return await database.executar(sql);
}

async function cadastrar({marca,nome,preco,quantidade,descricao,especificacoes,categoria,imagem,cliente_id}) { // marca, modelo, ano
    let sql = `INSERT INTO tb_produto (marca,nome,preco,quantidade,descricao,especificacoes,categoria,imagem,cliente_id) 
                VALUES ('${marca}','${nome}','${preco}','${quantidade}','${descricao}','${especificacoes}','${categoria}','${imagem}','${cliente_id}')`;

    await database.executar(sql);

    return {marca,nome,preco,quantidade,descricao,especificacoes,categoria,imagem,cliente_id};
}

async function editar({marca,nome,preco,quantidade,descricao,especificacoes,categoria,imagem,cliente_id}, id) {
    let sql = `UPDATE tb_produto SET marca='${marca}',nome='${nome}',preco='${preco}',quantidade='${quantidade}',descricao='${descricao}',especificacoes='${especificacoes}',categoria='${categoria}',imagem='${imagem}',cliente_id='${cliente_id}' WHERE id=${id}`;

    await database.executar(sql);
}

async function excluir(id) {
    let sql = "DELETE FROM tb_produto WHERE id="+id;

    await database.executar(sql);
}

async function buscarUm(id) {
    let sql = "SELECT * FROM tb_produto WHERE id="+id;

    let resultado = await database.executar(sql);

    return resultado[0];
}

module.exports = {  
    listar, 
    cadastrar,
    editar,
    excluir,
    buscarUm,
};
