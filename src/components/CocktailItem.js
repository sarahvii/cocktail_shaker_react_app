import React from "react";

const CocktailItem = ({cocktailInstructions}) => {
    return ( 
        <div className="cocktail-details">
        <p>This is the cocktail item.</p>
        <p>{cocktailInstructions}</p>

        </div>
     );
}
 
export default CocktailItem;