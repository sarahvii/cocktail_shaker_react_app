import React, {useState, useEffect} from "react";
import CocktailDisplay from "../components/CocktailDisplay";

const CocktailBox = () => {

    const [randomCocktail, setRandomCocktail] = useState({});
    const [cocktailImgURL, setCocktailImgURL] = useState("");
    const [cocktailInstructions, setCocktailInstructions] = useState("")
    const [showInstructions, setShowInstructions] = useState(false);


    useEffect(() => {
        getRandomCocktail();
    }, [])


    const getRandomCocktail = function () {
        const request = fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => {
            const drink = data.drinks[0];
            const imgURL = drink.strDrinkThumb;
            const instructions = drink.strInstructions;
            setRandomCocktail({strDrink: drink.strDrink})
            setCocktailImgURL(imgURL);
            setCocktailInstructions(instructions);
            setShowInstructions(false);
        })
        .catch(error => console.log(error));
    };

    const handleCocktailClick = function () {
        setShowInstructions(true);
    }

    return (
        <div className="cocktail-box">
        <h1>Cocktail Shaker</h1>
        <button onClick={getRandomCocktail}>Get Drunk!</button>
        <CocktailDisplay 
        randomCocktail={randomCocktail} 
        cocktailImgURL={cocktailImgURL} 
        onCocktailClicked={handleCocktailClick}/>
        {showInstructions && <p>{cocktailInstructions}</p>}

        </div>
    );
}
 
export default CocktailBox;