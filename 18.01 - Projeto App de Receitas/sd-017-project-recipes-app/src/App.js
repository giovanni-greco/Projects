import { AnimatedSwitch } from 'react-router-transition';
import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import DetailedDrink from './pages/DetailedDrink';
import DetailedFood from './pages/DetailedFood';
import FoodInProgress from './pages/FoodInProgress';
import DrinkInProgress from './pages/DrinkInProgress';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreNationalities from './pages/ExploreNationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import NotFound from './pages/404';

function App() {
  return (
    <AnimatedSwitch
      atEnter={ { opacity: 0 } }
      atLeave={ { opacity: 0 } }
      atActive={ { opacity: 1 } }
    >
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods/:idFood" component={ DetailedFood } />
      <Route exact path="/drinks/:idDrink" component={ DetailedDrink } />
      <Route
        exact
        path="/foods/:idFood/in-progress"
        component={ FoodInProgress }
      />
      <Route
        exact
        path="/drinks/:idDrink/in-progress"
        component={ DrinkInProgress }
      />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreFoodsIngredients }
      />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreDrinksIngredients }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreNationalities }
      />
      <Route
        exact
        path="/profile"
        component={ Profile }
      />
      <Route
        exact
        path="/done-recipes"
        component={ DoneRecipes }
      />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route
        path="*"
        component={ NotFound }
      />
    </AnimatedSwitch>
  );
}

export default App;
