import React from "react";
import CocktailItem from "./CocktailItem";

const CocktailDisplay = ({randomCocktail, cocktailImgURL, cocktailInstructions}) => {
    return (
        <div class="cocktail-display">
            <p>This is the cocktail display area</p>
            <p>Cocktail Name: {randomCocktail.strDrink}</p>
            <img src={cocktailImgURL} alt={randomCocktail.strDrink} />
            <CocktailItem cocktailInstructions={cocktailInstructions}/>
        </div>
    )}
 
export default CocktailDisplay;
