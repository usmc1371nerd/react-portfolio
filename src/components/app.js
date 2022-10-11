import React, { Component } from 'react';
import moment from "moment";
import {

  BrowserRouter as Router,
  Switch, 
  Route,

} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from './portfolio/portfolio-detail';
import NavigationCointainer from './navigation/navigation-container';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
       

        <Router>
          <div>
          <h1>James Dumas Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
          <NavigationCointainer/>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about-me" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio/:slug" component={PortfolioDetail}/>

          </Switch>
          </div>
        </Router>

        
       
      </div>
    );
  }
}
