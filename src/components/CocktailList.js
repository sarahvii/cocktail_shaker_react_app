import CocktailDetail from "./CocktailDetail";
import React, {useState} from "react";
import CocktailDisplay from "./CocktailDisplay";

const CocktailList = ( cocktails ) => {

    const [selectedCocktail, setSelectedCocktail] = useState(null);

    const handleCocktailClick = (name) => {
        setSelectedCocktail(name);
    };

    return ( 
        <div className = "cocktail-list">
            {cocktails.map((cocktail) => (
                <CocktailDisplay
                key = {cocktail.id}
                name = {cocktail.name}
                imgURL={cocktail.imgURL}
                onCocktailClicked={handleCocktailClick}
                />
            ))}
            {selectedCocktail && <CocktailDetail name={selectedCocktail} />}
        </div>
     );
}
 
export default CocktailList;
