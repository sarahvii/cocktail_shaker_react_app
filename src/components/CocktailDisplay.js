import React, {useState} from "react";
import CocktailItem from "./CocktailItem";
import './CocktailDisplay.css';

const CocktailDisplay = ({randomCocktail, cocktailImgURL, cocktailInstructions, cocktailIngredients, showInstructions, onCocktailClicked }) => {
    
    

    return (
        <div className="cocktail-display">
            <h2>{randomCocktail.strDrink}</h2>
            <img src={cocktailImgURL} alt={randomCocktail.strDrink} onClick={onCocktailClicked} />
            {showInstructions && <CocktailItem cocktailInstructions={cocktailInstructions} cocktailIngredients={cocktailIngredients}/>}
        </div>
    );
};
 
export default CocktailDisplay;
