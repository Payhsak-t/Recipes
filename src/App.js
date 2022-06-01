import SearchRecipes from './components/recipesearch/SearchRecipes';
import RecipeList from './components/recipes/RecipeList';
import Recipe from './components/recipes/Recipe';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [singleRecipe, setSingleRecipe] = useState(null);
  const [searchedText, setSearchedText] = useState('');

  const getTextHandler = (searchedText) => {
    setSearchedText(searchedText);
  };

  const getDataHandler = (recipes) => {
    setSingleRecipe(null);
    if (recipes !== null) {
      setRecipeList(recipes);
    } else {
      setRecipeList([]);
    }
  };

  const initialDisplayHandler = () => {
    setRecipeList([]);
    setSingleRecipe(null);
  };

  const getSingleRecipeHandler = (id) => {
    const recipe = recipeList.filter((item) => item.idMeal === id);
    setSingleRecipe(recipe[0]);
  };

  let content = '';

  if (singleRecipe === null) {
    content = (
      <>
        {!recipeList && (
          <p className="show-text">Showing results for: {searchedText}</p>
        )}
        <section className="recipe__items">
          <RecipeList
            recipes={recipeList}
            viewRecipe={getSingleRecipeHandler}
          />
        </section>
      </>
    );
  }
  if (singleRecipe) {
    content = (
      <section className="recipe__items">
        <Recipe recipeDetails={singleRecipe} />
      </section>
    );
  }

  return (
    <div className="App">
      <section className="header" onClick={initialDisplayHandler}>
        <h1>Recipe</h1>
        <p>One stop for all your favourite recipes</p>
      </section>
      <section className="search-bar">
        <SearchRecipes getRecipes={getDataHandler} getText={getTextHandler} />
      </section>
      {content}
    </div>
  );
};

export default App;
