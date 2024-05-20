'use client';
import Link from "next/link";
import { SimplePokemon } from '../interfaces/simple-pokemon';
import Image from "next/image";
import { IoHeart, IoHeartCircleOutline, IoHeartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props{
   pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {

    const {id, name } = pokemon;
    const isFavorite = useAppSelector(state=> !!state.pokemons[id]);
    const dispatch = useDispatch();

    const onToggle = () =>{
        console.log('Click ', pokemon);
        dispatch(toggleFavorite(pokemon));
    }

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        key={id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
                        width={100}
                        height={100}
                        alt={name}
                        priority= {false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <div className="mt-5">
                        <Link href={`/dashboard/pokemons/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                            Más información
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div 
                    onClick={onToggle}
                     className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                            <div className="text-red-600">
                                {
                                    isFavorite 
                                    ? <IoHeart />
                                    : <IoHeartOutline />
                                }
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    {
                                        isFavorite
                                        ? 'Es favorito'
                                        : 'No es favorito'
                                    }
                                </p>
                                <p className="text-xs text-gray-500">Clic para cambiar</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
