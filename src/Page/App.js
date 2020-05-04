import React, {useEffect, useState} from "react";
import Cards from '../Components/Cards';
import SearchForm from '../Components/SearchForm';
import {FaSpinner} from 'react-icons/fa';

import "./App.css";


const App = () => {
  const API_ID = "e979b81a";
  const API_KEY = "c1d9badbeff86951bf5457a1dc226003";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('brazil');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      getRecipes();
      setLoading(false);
    //eslint-disable-next-line
  },[query])

  const apiLoading = () => {
    if(!loading){
      return <FaSpinner className='spin' color={'#090909'} size={30}/>
    }
  }

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);  
    setLoading(true);
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
      
      <SearchForm placeholder={apiLoading()} submit={(e) => {getSearch(e)}} value={search} change={(e) => {searchRecipe(e)}}/>

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
