import React from "react";
import CocktailItem from "./CocktailItem";
import './CocktailDisplay.css';

const CocktailDisplay = ({randomCocktail, cocktailImgURL, cocktailInstructions, onCocktailClicked }) => {
    return (
        <div className="cocktail-display">
            <p>Cocktail Name: {randomCocktail.strDrink}</p>
            <img src={cocktailImgURL} alt={randomCocktail.strDrink} onClick={() => onCocktailClicked(randomCocktail)} />
            <CocktailItem cocktailInstructions={cocktailInstructions}/>
        </div>
    )}
 
export default CocktailDisplay;
