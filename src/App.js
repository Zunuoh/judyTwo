// import logo from "./logo.svg";
import "./App.css";
import HomeScreen from '../src/pages/HomeScreen';
import SigninScreen from '../src/pages/SigninScreen';
import TableScreen from '../src/pages/Table';
import TeamScreen from '../src/pages/TeamScreen';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () =>{
  return(
    <TeamScreen/>
    // <HomeScreen/>
    // <TableScreen/>
    // <SigninScreen/>
    // <BrowserRouter>
    // <Switch>
    //   <Route component={SigninScreen} path="/" exact/>
    //   {/* <Route component={HomeScreen} path="/second"/> */}
    //   {/* <Route component={BlogOne} path="/third"/> */}
    // </Switch>
    // </BrowserRouter>
  )

}
export default App;
