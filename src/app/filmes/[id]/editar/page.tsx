import FilmeForm from "@/componentes/FilmeForm/FilmeForm";
import { getFilmes } from "@/services/filme.services";

interface Props{

  params: Promise<{id:string}>;
}


export default async function EditarFilmePage({ params}: Props) {

  const {id} = await params;
  //implementar no sevice para buscar um unico filme no backend
  //utilizar o megabrain na força maxima (está no git)
  //ele precisa saber mais
  //libera o mineset
  const filme = await getFilmes(id);

  return (

    <FilmeForm filme={filme}></FilmeForm>



  );
}