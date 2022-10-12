import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor (){
        super();
    }



    render() {
        return (

            <div className="nav-wrapper">
                
                <div className="left-side">
                
                    <div className="nav-link-wrapper">
                    <NavLink exact to="/">Home</NavLink>
                    </div>

                <NavLink to="/about-me"> About</NavLink>
                <NavLink to="/contact"> Contact</NavLink>
                <NavLink to ="/blog"> Blog</NavLink>


                {false ? <button> Add Blog</button> : ''}
                </div>

                <div className="right-side">James Dumas</div>
            </div>

        )
    }

}