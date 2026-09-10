//importando dependecias
import{test, expect, vi} from 'vitest';
//simulando login lento
function loginLento(usuario:string):Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`BEM-VINDO, ${usuario}!`);
        },5000);
    });
}

test('Simular login usando fake timers ',async ()=>{
    //ligando a Maquina do tempo
    vi.useFakeTimers();
    console.log('⌛INICIANDO CENÁRIO DE TESTE ;D');

    // chamando promisse de usuario sem await ainda
    const promessaLogin = loginLento("Dona Redonda");
    //configura avanço de 5 segundos
    vi.advanceTimersByTime(5000);

    const resultado = await promessaLogin;

    //verificar resultado
    expect(resultado).toBe("BEM-VINDO, Dona Redonda!")
    console.log("sucesso teste realizado na velocidade da luz💡")

    //Desligando a maquina do tempo
    vi.useRealTimers();
})