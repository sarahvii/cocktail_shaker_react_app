import React from "react";
import './CocktailItem.css';

const CocktailItem = ({cocktailInstructions, cocktailIngredients}) => {
    return ( 
        <div className="cocktail-item">
        <p>Ingredients:{cocktailIngredients}</p>
        <p>Instructions: {cocktailInstructions}</p>

        </div>
     );
}
 
export default CocktailItem;