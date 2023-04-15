import React, {useState, useEffect} from "react";
import CocktailDisplay from "../components/CocktailDisplay";

const CocktailBox = () => {

    const [randomCocktail, setRandomCocktail] = useState({});
    const [cocktailImgURL, setCocktailImgURL] = useState("");


    useEffect(() => {
        getRandomCocktail();
    }, [])


    const getRandomCocktail = function () {
        const request = fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => {
            const drink = data.drinks[0];
            const imgURL = drink.strDrinkThumb;
            setRandomCocktail({strDrink: drink.strDrink})
            setCocktailImgURL(imgURL);
        })
        .catch(error => console.log(error));
    };

    return (
        <div className="cocktail-box">
        <p>This is the Cocktail Box</p>
        <CocktailDisplay randomCocktail={randomCocktail} cocktailImgURL={cocktailImgURL}/>
        </div>
    );
}
 
export default CocktailBox;