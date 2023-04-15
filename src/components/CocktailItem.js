import React from "react";
import './CocktailItem.css';

const CocktailItem = ({cocktailInstructions}) => {
    return ( 
        <div className="cocktail-item">
        <p>{cocktailInstructions}</p> 

        </div>
     );
}
 
export default CocktailItem;