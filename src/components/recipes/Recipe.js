import classes from './Recipe.module.css';

const Recipe = (props) => {
  const recipe = props.recipeDetails;

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (
      recipe[`strIngredient${i}`] !== '' &&
      recipe[`strIngredient${i}`] !== null
    ) {
      ingredients.push({
        ingredient: recipe[`strIngredient${i}`],
        amount: recipe[`strMeasure${i}`],
      });
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <img src={recipe.strMealThumb} alt="recipe" />
        <h2>{recipe.strMeal}</h2>
      </div>
      <div className={classes.details}>
        <ul className={classes.ingredients}>
          {ingredients.map((measure) => (
            <li>
              {measure.ingredient}{' '}
              {measure.amount === ' ' ? '' : ` : ${measure.amount}`}
            </li>
          ))}
        </ul>
        <main>{recipe.strInstructions}</main>
      </div>
    </div>
  );
};

export default Recipe;
