import SearchRecipes from './components/Recipes/SearchRecipes';
import landingImage from './assets/landingPage.jpg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="landing">
        <img src={landingImage} alt="loading..." />
      </div>
      <main className="search">
        <section>
          <h1>Recipe</h1>
          <p>One stop for all your favourite recipes</p>
        </section>
        <SearchRecipes />
      </main>
    </div>
  );
};

export default App;
