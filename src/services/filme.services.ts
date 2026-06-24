import {Filme, CreateFilmeDTO, UpdateFilmeDTO} from "@/tipos/filme";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL;

export async function getFilmes(): Promise<Filme[]>
{
  //vai la no backend pegar os trem
  const response = await fetch(`${API_URL}/filmes`);
  const dados = await response.json();
  return dados;
}



export async function createFilme(filme: CreateFilmeDTO): Promise<void>
{
  //Ir la no backend e pedir para salvar n obanco
  await fetch(`${API_URL}/filmes`, {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(filme)
  });
 
}


export async function updateFilme(id: number, filme: UpdateFilmeDTO): Promise<void>
{
  //Ir la no backend e pedir para salvar n obanco
  await fetch(`${API_URL}/filmes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(filme)
  });
    
}


export async function deleteFilme(id: number): Promise<void>
{

}