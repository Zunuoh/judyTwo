// import logo from "./logo.svg";
import "./App.css";
import HomeScreen from '../src/pages/HomeScreen';
import SigninScreen from '../src/pages/SigninScreen';
// import TableScreen from '../src/pages/Table';
import TeamScreen from '../src/pages/TeamScreen';
import FAQsScreen from '../src/pages/FAQs';
// import ThhScreen from '../src/pages/thh';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () =>{
  return(
    // <TeamScreen/>
    <BrowserRouter>
    <Switch>
      <Route component={SigninScreen} path="/" exact/>
      <Route component={HomeScreen} path="/second" exact/>
      <Route component={TeamScreen} path="/third" exact/>
      <Route component={FAQsScreen} path="/forth" exact/>
    </Switch>
    </BrowserRouter>
  )

}
export default App;
