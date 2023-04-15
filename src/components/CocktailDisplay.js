import React, {useState} from "react";
import CocktailItem from "./CocktailItem";
import './CocktailDisplay.css';

const CocktailDisplay = ({randomCocktail, cocktailImgURL, cocktailInstructions }) => {
    const [showInstructions, setShowInstructions] = useState(false);

    const handleCocktailClick = () => {
        setShowInstructions(true);
    };

    return (
        <div className="cocktail-display">
            <p>Cocktail Name: {randomCocktail.strDrink}</p>
            <img src={cocktailImgURL} alt={randomCocktail.strDrink} onClick={handleCocktailClick} />
            {showInstructions && <CocktailItem cocktailInstructions={cocktailInstructions} />}
        </div>
    );
};
 
export default CocktailDisplay;
