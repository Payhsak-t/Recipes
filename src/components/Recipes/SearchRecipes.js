import classes from './SearchRecipes.module.css';

const SearchRecipes = () => {
  return (
    <form>
      <div className={classes.form}>
        <input type="text" id="" placeholder="Search for a recipe" />
        <button className={classes.button}>Search</button>
      </div>
    </form>
  );
};
export default SearchRecipes;
