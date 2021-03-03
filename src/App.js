import './App.css';
import {useEffect } from 'react'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Recipe from './components/Recipe';



function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/contact" component={ContactUs}></Route>
        <Route path="/recipe" component={Recipe}></Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
