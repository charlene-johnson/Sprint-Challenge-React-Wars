import React from "react";

import styled from "styled-components"

const ListItem = styled.li `
    margin: 30px;
    background-color: rgba(255, 255, 255,0.7);
    padding: 30px;
    max-width: 250px;
`

const CharacterInfo = props => {
    return(
        <ListItem>
            <h2>Character Name: {props.characterName}</h2>
            <p>Height: {props.height}</p>
            <p>Weight: {props.weight}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Skin Color: {props.skinColor}</p>
            <p>Eye Color: {props.eyeColor}</p>
            <p>Birthday: {props.birthday}</p>
            <p>Gender: {props.gender}</p>
        </ListItem>
    );
};
export default CharacterInfo;