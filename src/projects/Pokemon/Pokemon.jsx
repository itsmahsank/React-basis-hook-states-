
import { useEffect, useState } from "react";
import "./index.css";
import { data } from "autoprefixer";
import { PokemonCards } from "./PokemonCards";


export const Pokemeon=()=>{

    const API = "https://pokeapi.co/api/v2/pokemon?limit=152";
    const [pokemon,setpokemon]=useState([])
    const [Loading,setLoading]=useState(true)
    const [error,seterror]=useState("");
    const [search,Setsearch]=useState("");
    
    const fetchPokemon = async () => {
        try {
          const res = await fetch(API);
          const data = await res.json();
            //console.log(data);
    
          const detailedPokemonData = data.results.map(async (curPokemon) => {
            const res = await fetch(curPokemon.url);
            const data = await res.json();
            console.log(data);
            return data

          });
         // console.log( detailedPokemonData );
         
         const detailedResponses = await Promise.all(detailedPokemonData)
         {
            console.log(detailedResponses)
            setpokemon(detailedResponses)
            setLoading(false);
           
         }
         
    
          
        } catch (error) {
          console.log(error);
          setLoading(false);
          seterror(error);
        }
      };
    

    useEffect(()=>{

        fetchPokemon();
    },[])

 //search functionality

    const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase()));

    if(Loading)
    {
        return(
            <div>
                <h1 style={{marginTop :"50px"}}>Loadingd....Please wait</h1>
            </div>
        )
    }

    if (error) {
        return (
          <div>
            <h1>{error.message}</h1>
          </div>
        );
      }
    


    return(<>
    

    <section className="container">
        <header>
            <h1>Lets Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e) => Setsearch(e.target.value)}/>
        </div>

        <ul className="cards">
                {/* {pokemon.map((curPokemon) => { */}
                 {searchData.map((curPokemon) => {
                  return (
                            <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
                        );
                  })}
        </ul>



    </section>
    
    
    
    
    
    
    
    
    </>)
}
