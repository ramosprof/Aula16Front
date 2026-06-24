"use client";

import { Filme } from "@/tipos/filme";
import {useRouter} from "next/navigation";
import FilmeCard from "../FilmeCard/FilmeCard";
import { deleteFilme } from "@/services/filme.services";
import '@/componentes/FilmesGrid/FilmeGrid.css';


interface FilmeGridProps{
    filmes: Filme[]
}
export default function FilmeGrid({filmes}: FilmeGridProps)
{

    const rounter = useRouter();

    async function handleDelete(id : number){
        await deleteFilme(id);
        rounter.refresh();
        

    }

    const filmesMap = filmes.map((f) => {
        return <FilmeCard key={f.id}
                filme={f}
                onDelete={(handleDelete)}/>

    });

    return (
        <div className="grid">
            {filmesMap}
        </div>
    )


}

