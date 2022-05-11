import { CloseButton } from "./CloseButton";

import buracoImageUrl from "../assets/buraco.svg";
import placasImageUrl from "../assets/placas.svg";
import outrosImageUrl from "../assets/outros.svg";



const feedBackTypes = {
    BURACOS: {
        title: 'Buraco',
        image: {
            source: buracoImageUrl ,
            alt: 'imagem de um buraco'
        },
    },
    PLACA:{
        title: 'Placas',
        image: {
            source: placasImageUrl,
            alt: 'imagem de uma placa'
        },
    },
    GERAL:{
        title: 'Outros',
        image: {
            source: outrosImageUrl,
            alt: 'outros problemas'

        },
    },
};

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl nb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu Feed</span>


                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedBackTypes).map(([key, value]) => {
                    return (
                        <button>
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>

                    )
                }) }
                
            </div>
            
            <footer className="text-xs text-neutral-400">
                Feito com carinho pelo <a className="underline underline-offset-2 " href="https://www.linkedin.com/in/flavio-n-432537218/">Guinter</a>
            </footer>
        </div>
    )
}