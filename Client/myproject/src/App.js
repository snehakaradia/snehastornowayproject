import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Project from './Component/Project/Project';
import Service from './Component/Service/Service';
import Career from './Component/Career/Career';
import Health from './Component/Health/Health';
import Construction from './Component/Construction/Construction';
import Engineer from './Component/Engineer/Engineer';
import Contact from './Component/Contact/Contact';
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login';
import Footer from './Component/Footer/Footer';
import {Route,Switch} from 'react-router';
import Logout1 from './Component/Logout1/Logout1'


function App() {
  return (
    <div>
      <Navbar></Navbar>
       <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/About' component={About}></Route>
        <Route exact path='/Project' component={Project}></Route>
        <Route exact path='/Service' component={Service}></Route>
        <Route exact path='/Career' component={Career}></Route>
        <Route exact path='/Health' component={Health}></Route>
        <Route exact path='/Construction' component={Construction}></Route>
        <Route exact path='/Engineer' component={Engineer}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
        <Route exact path='/Signup' component={Signup}></Route>
        <Route exact path='/Login' component={Login}></Route>
        <Route exact path='/Logout' component={Logout1}></Route>
       </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
