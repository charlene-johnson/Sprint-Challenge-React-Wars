// Write your Character component here
import React, {useState, useEffect} from "react";
import axios from "axios";

import CharacterInfo from "./CharacterInfo"

import styled from "styled-components"


const UL = styled.ul `
list-style-type:none;
display: flex;
flex-wrap: wrap;

`

export default function Characters() {
    const[characters,setCharacters] = useState([])

    useEffect(()=> {
        axios
            .get("https://swapi.py4e.com/api/people/")
            .then(response => {
                console.log(response.data.results)
                setCharacters(response.data.results)
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div className="characterInfo">
            <UL>
            {characters.map(character => {
                return (
                    <CharacterInfo
                        characterName={character.name}
                        height={character.height}
                        weight={character.mass}
                        hairColor={character.hair_color}
                        skinColor={character.skin_color}
                        eyeColor={character.eye_color}
                        birthday={character.birth_year}
                        gender={character.gender}
                      
                    />
                );
            })}
           </UL>
        </div>
    );
}