import React from "react";
import './CocktailItem.css';

const CocktailItem = ({cocktailInstructions}) => {
    return ( 
        <div className="cocktail-item">
        <p>This is the cocktail item.</p>
        {/* <p>{cocktailInstructions}</p> */}

        </div>
     );
}
 
export default CocktailItem;