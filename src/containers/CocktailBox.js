import React, {useState, useEffect} from "react";
import CocktailDisplay from "../components/CocktailDisplay";
import './CocktailBox.css';

const CocktailBox = () => {

    const [randomCocktail, setRandomCocktail] = useState({});
    const [cocktailImgURL, setCocktailImgURL] = useState("");
    const [cocktailInstructions, setCocktailInstructions] = useState("");
    const [cocktailIngredients, setCocktailIngredients] = useState("");
    const [showInstructions, setShowInstructions] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);
    const [isShaking, setIsShaking] = useState(false);


    useEffect(() => {
        getRandomCocktail();
    }, [])

    useEffect(() => {
        setShowInstructions(false);
        setShowIngredients(false);
    }, [randomCocktail]);

    useEffect(() => {
        if (isShaking) {
            const timerId = setTimeout(() => {
                setIsShaking(false);
            }, 1000);
            return () => clearTimeout(timerId);
        }
    }, [isShaking]);


    const getRandomCocktail = function () {

        setIsShaking(true);

        const request = fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => {
            const drink = data.drinks[0];
            const imgURL = drink.strDrinkThumb;
            const instructions = drink.strInstructions;
            const ingredients = drink.strIngredient1;
            setRandomCocktail({strDrink: drink.strDrink})
            setCocktailImgURL(imgURL);
            setCocktailInstructions(instructions);
            setCocktailIngredients(ingredients);
        })
        .catch(error => console.log(error));
    };

    const handleCocktailClick = function () {
        setShowInstructions(true);
        setShowIngredients(true);
    }

    const handleButtonClick = function () {
        setIsShaking(true);
        getRandomCocktail();
    };

    return (
        <div className="cocktail-box">
            
            <div>
            <button className={isShaking ? "shake" : ""} onClick={handleButtonClick}>Get Drunk!</button>
            </div>

        <CocktailDisplay 
        randomCocktail={randomCocktail} 
        cocktailImgURL={cocktailImgURL} 
        cocktailInstructions={cocktailInstructions}
        cocktailIngredients={cocktailIngredients}
        showInstructions={showInstructions}
        showIngredients={showIngredients}
        setShowIngredients={showIngredients}
        onCocktailClicked={handleCocktailClick}/>
        </div>
    );
}
 
export default CocktailBox;