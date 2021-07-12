class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.criarCliente()
    }

    criarCliente(){
        const sql = `CREATE TABLE IF NOT EXISTS Clientes (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, sexo varchar(1) NOT NULL, dataNascimento date NOT NULL, telefone varchar(11) NOT NULL, email varchar(50) NOT NULL, endereco varchar(50) NOT NULL, bairro varchar(50) NOT NULL, cidade varchar(50) NOT NULL, estado varchar(50) NOT NULL, PRIMARY KEY(id))`
        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            }else{
                console.log('Tabela Clientes criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas