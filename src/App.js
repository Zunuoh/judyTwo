// import logo from "./logo.svg";
import "./App.css";
import HomeScreen from '../src/pages/HomeScreen';
import SigninScreen from '../src/pages/SigninScreen';
import TableScreen from '../src/pages/Table';
// import BlogOne from '../src/pages/blogs/blogOne';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () =>{
  return(
    <HomeScreen/>
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
