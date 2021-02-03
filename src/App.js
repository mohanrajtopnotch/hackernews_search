import {Route,Switch} from 'react-router-dom';
import {SettingsScreen,NewsView} from './views/index';
function App() {
  return (
    <Switch>
      <Route exact path="/" component={NewsView}/>
      <Route exact path="/settings" component={SettingsScreen}/>
    </Switch>
  );
}

export default App;
