import React from "react";

const CocktailItem = ({randomCocktail}) => {
    return ( 
        <div className="cocktail-details">
        <p>This is the cocktail details.</p>
        {{randomCocktail}}
        </div>
     );
}
 
export default CocktailItem;