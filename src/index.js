import { execa } from 'execa'

const dados_banco = {
    nome: "NOMEBANCO",     //NOME DO SEU BANCO
    login: "LOGIN",        //LOGIN DO BANCO
    senha: "SENHA",      //SENHA DO BANCO
    filename: "TESTE"     //NOME ESCOLHIDO PARA O ARQUIVO GERADO PELO DUMP
}
const { stdout } = await execa(`mysqldump -u${dados_banco.login} -p${dados_banco.senha} --databases ${dados_banco.nome} --result-file=${dados_banco.filename}.sql`);