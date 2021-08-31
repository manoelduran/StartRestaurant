import { Switch, Route } from 'react-router-dom';
import { FoodPage } from '../pages/FoodPage';
import FoodList from '../pages/FoodList';
const Routes = () => (
  
  <Switch>
    <Route path="/" exact component={FoodList} />
    <Route path="/:id" exact  component={FoodPage}/>
  </Switch>
);

export default Routes;
