const BASE_URL = 'https://jsonplaceholder.typicode.com';
//Definindo contratos de tipo
type Post = {
    userId:number;
    id?: number; //campo opcional
    title: string;
    body: string;
};
type Coment ={
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

// GET /posts
async function listarPosts(){
    console.log(`--- 1. GET /posts ---`);
    const res = await fetch(`${BASE_URL}/posts`);
    const dados: Post[] = await res.json();
    console.log(`✅ Status: ${res.status}`);
    console.log(`Lidos ${dados.length} posts. Ex: do primeiro:`, dados[0].title)
}

//GET /posts/1
async function buscarPorId(id:number) {
    console.log(`--- 2. GET /posts/1 ---`);
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    const dados: Post = await res.json();
    console.log(`✅ Status: ${res.status}`);
    console.log(`titulo do post ${id}:`, dados.title);
}
// GET /post/1/comment
async function listarComent(postId:number) {
    console.log(`--- 3. GET /posts/1/comment ---`);
    const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    const dados: Coment[] = await res.json();
    console.log(`✅ Status: ${res.status}`);
    console.log(`O post ${postId} tem ${dados.length} comentarios.
            Ex: Email do primeiro comentario.`, dados[0].email);
}
async function chamarReqs(){
    listarPosts();
    buscarPorId(1);
    listarComent(1);
}
chamarReqs();