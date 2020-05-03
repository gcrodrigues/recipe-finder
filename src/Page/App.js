import React, {useEffect, useState} from "react";
import Cards from '../Components/Cards';
import SearchForm from '../Components/SearchForm';

import "./App.css";


const App = () => {
  const API_ID = "e979b81a";
  const API_KEY = "c1d9badbeff86951bf5457a1dc226003";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('brazil');

  useEffect(() => {
    getRecipes();
    //eslint-disable-next-line
  },[query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);  
  }
  
  const searchRecipe = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  return(
    <div  className="App">
      <h1>Recipe Finder</h1>
      
      <SearchForm submit={(e) => {getSearch(e)}} value={search} change={(e) => {searchRecipe(e)}}/>
      
      <div className="recipes">
        {recipes.map(recipe => (
          <Cards 
            key={recipe.recipe.calories}
            title={recipe.recipe.label} 
            cal={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}  
          />
        ))}
      </div>
    </div>
    );
};

export default App;
