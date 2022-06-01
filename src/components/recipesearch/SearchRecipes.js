import { useState } from 'react';
import UseApi from '../../hooks/use-api';
import classes from './SearchRecipes.module.css';

const SearchRecipes = (props) => {
  const [searchedRecipe, setSearchedRecipe] = useState('');
  let recipesList;
  const { isLoading, error, sendRequest: fetchData } = UseApi();

  const searchedRecipeHandler = (event) => {
    setSearchedRecipe(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetchData(
      {
        url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedRecipe}`,
      },
      // getData
      props.getRecipes
    );
    props.getText(searchedRecipe);
    setSearchedRecipe('');
  };

  if (isLoading) {
    recipesList = <p className={classes.error}>Loading...</p>;
  }
  if (error) {
    recipesList = <p className={classes.error}>{error}</p>;
  }

  return (
    <form className={classes['search-input']} onSubmit={submitHandler}>
      <div className={classes.search}>
        <input
          type="text"
          onInput={searchedRecipeHandler}
          id="recipe"
          placeholder="Search for a recipe"
          value={searchedRecipe}
        />
        <button disabled={!searchedRecipe}>Search</button>
      </div>
      {recipesList}
    </form>
  );
};

export default SearchRecipes;
