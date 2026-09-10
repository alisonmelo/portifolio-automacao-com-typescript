//Importando função utilitaria de aguardar tempo(delay)
import { aguardar } from "../../utils/helpers";
//SIMULANDO UMA API DE LOGIN
function simularLogin (usuario:string, senha:string):Promise<string>{
    return new Promise((resolve,reject) => {
        if(usuario === 'admin' && senha === '123456'){
            resolve('token-secreto-aprovado-123');
        }else{
            reject('ERRO 401 - USUARIO OU SENHA INVÁLIDOS! ❌');
        }
    });
}
//FUNÇÃO PRINCIPAL TESTANDO COM ASYNC/AWAIT ;-D
async function executarCT() {
    console.log('⌛INICIANDO CENÁRIO DE TESTE ;D')
    try{
        console.log('Passo 1: abrindo tela de login ...');
        await aguardar(10000);
        console.log('Passo 2: Inserindo credencias ...');
        await aguardar(3000);

        const token = await simularLogin('boidoido','123456');
        console.log(`SUCESSO! USUARIO LOGADO  TOKEN RECEBIDO: ${token}\n`);
    }catch(erro){
        console.error(`FALHA NO TESTE: ${erro}\n`);
    }finally{
        console.log('Passo final: Fechando navegador e limpado dados.');
    }
}
executarCT();