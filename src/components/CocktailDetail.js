import React from "react";

const CocktailDetail = ({name}) => {
    return (  
        <div className="cocktail-detail">
            The cocktail is called {name}
        </div>
    );
}
 
export default CocktailDetail;