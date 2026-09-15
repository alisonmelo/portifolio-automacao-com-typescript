// 1. Definir a interface TypeScript para o contrato da API
interface Post {
    id?: number; 
    title: string;
    body: string;
    userId: number;
}

// Boas Práticas: Centralizar URLs em vez de hardcodar
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// --- GET: Buscar Post por ID ---
async function buscarPost(id: number): Promise<Post | null> {
    try {
        console.log(`\n⏳ Buscando post ${id}...`);
        
        // fetch() retorna Promise<Response>, exigindo await duas vezes
        const res = await fetch(`${BASE_URL}/posts/${id}`);
        
        // Boas Práticas: Verificar res.ok antes de processar o corpo da resposta[cite: 3, 4]
        if (!res.ok) {
            console.error(`Erro: Status code ${res.status}`);
            return null;
        }

        const dados: Post = await res.json();
        console.log(`✅ Status 200 OK - Título lido: "${dados.title}"`);
        return dados;
    } catch (error) {
        console.error("Falha na requisição de rede:", error);
        return null;
    }
}

// --- POST: Criar Novo Post ---
async function criarPost(novoPost: Post): Promise<Post | null> {
    try {
        console.log(`\n⏳ Criando novo post...`);
        
        const res = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoPost), // POST precisa do body serializado[cite: 3, 4]
        });

        // Status 201 Created indica que o recurso foi criado com sucesso[cite: 3, 4]
        if (res.status === 201) {
            const dadosGerados: Post = await res.json();
            console.log(`✅ Status 201 Created - Post criado com ID: ${dadosGerados.id}`);
            return dadosGerados;
        }
        return null;
    } catch (error) {
        console.error("Falha na requisição de rede:", error);
        return null;
    }
}

// Executando as funções
async function rodarTestesIniciais() {
    await buscarPost(1);
    await criarPost({ title: 'Aula de API REST', body: 'Testando automação com Playwright', userId: 1 });
}

rodarTestesIniciais();