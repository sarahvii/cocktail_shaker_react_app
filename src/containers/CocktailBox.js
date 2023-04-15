import React, {useState, useEffect} from "react";
import CocktailDisplay from "../components/CocktailDisplay";

const CocktailBox = () => {

    const [randomCocktail, setRandomCocktail] = useState({});
    const [cocktailImgURL, setCocktailImgURL] = useState("");
    const [cocktailInstructions, setCocktailInstructions] = useState("")


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
            setCocktailInstructions(instructions)
        })
        .catch(error => console.log(error));
    };

    return (
        <div className="cocktail-box">
        <p>This is the Cocktail Box</p>
        <CocktailDisplay randomCocktail={randomCocktail} cocktailImgURL={cocktailImgURL} cocktailInstructions={cocktailInstructions}/>
        </div>
    );
}
 
export default CocktailBox;