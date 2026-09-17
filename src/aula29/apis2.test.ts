import {test, expect} from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('Metodo POST para criar um novo post', async () =>{
    const res = await fetch(`${BASE_URL}/posts`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            userId: 1,
            title: 'Meu novo post',
            body: 'Conteudo do meu novo post'
        })
    });
    // Testa status code 
        expect(res.status).toBe(201);
    // Testa se o retorno é um objeto JSON
        const dados = await res.json();
        expect(dados.title).toBe('Meu novo post');
        expect(dados.body).toBe('Conteudo do meu novo post');
});

test('Metodo PUT para ATUALIZAR um  post', async () =>{
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            userId: 1,
            title: 'MEU TITULO ATUALIZADO',
            body: 'Conteudo do meu novo post'
        })
    });
    // Testa status code 
        expect(res.status).toBe(200);
    // Testa se o retorno é um objeto JSON
        const dados = await res.json();
        expect(dados.title).toBe('MEU TITULO ATUALIZADO');
        expect(dados.body).toBe('Conteudo do meu novo post');
});

test('Metodo PATCH para ATUALIZAR um  post', async () =>{
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            title: 'MEU TITULO SUPER ATUALIZADO',
        })
    });
    // Testa status code 
        expect(res.status).toBe(200);
    // Testa se o retorno é um objeto JSON
        const dados = await res.json();
        expect(dados.title).toBe('MEU TITULO SUPER ATUALIZADO');
        // expect(dados.body).toBe('Conteudo do meu novo post');
});

test('Metodo DELETE para DELETAR um  post', async () =>{
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method:'DELETE',
    });
    // Testa status code 
        expect(res.status).toBe(200);
});