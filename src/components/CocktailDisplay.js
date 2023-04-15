import React from "react";
import CocktailItem from "./CocktailItem";

const CocktailDisplay = ({randomCocktail, cocktailImgURL}) => {
    return (
        <div class="cocktail-display">
            <p>This is the cocktail display area</p>
            <p>Cocktail Name: {randomCocktail.strDrink}</p>
            <img src={cocktailImgURL} alt={randomCocktail.strDrink} />
        </div>
    )}
 
export default CocktailDisplay;
