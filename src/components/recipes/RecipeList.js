import Card from '../UI/Card';
import classes from './RecipeList.module.css';

const RecipeList = (props) => {
  return (
    <ul className={classes.recipes}>
      {props.recipes.map((recipe) => (
        <li key={recipe.idMeal} onClick={() => props.viewRecipe(recipe.idMeal)}>
          <Card image={recipe.strMealThumb} title={recipe.strMeal} />
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
