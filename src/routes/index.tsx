import { Switch, Route, Redirect } from 'react-router-dom';
import FoodList from '../pages/FoodList';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={FoodList} />
    {/*<Route path="/food" exact component={FoodItem} />*/}
    <Redirect from='*' to="/" />
  </Switch>
);

export default Routes;
