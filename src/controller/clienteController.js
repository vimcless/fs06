const database = require('../connection/databaseConnection');

async function listar() {
    return await database.executar('SELECT * FROM tb_cliente');
}

async function buscarUm(id) {
    return await database.executar('SELECT * FROM tb_cliente WHERE id='+id);
}

function cadastrar() {
    return "Cadastrando cliente...";
}

async function buscarProdCliente(id) {
    let sql = "SELECT * FROM tb_cliente INNER JOIN tb_produto ON tb_cliente.id = tb_produto.cliente_id WHERE tb_cliente.id="+id;
    let resultado = await database.executar(sql);

    return resultado[0];
}

module.exports = {
    listar, 
    cadastrar,
    buscarUm,
    buscarProdCliente,
};
