import React, {Component} from 'react';
import logo  from "../images/logo.svg"
import {Link} from "react-router-dom";
import  "../App.css"

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light" >
                    <Link to="/" className="navbar-brand logo-position"  >
                        <img src={logo} alt="logo" width="40px"/>
                        <span className="text-slanted" style={{fontSize:"11px" ,color:"#f15025"}}> Recipes2Cook</span>
                    </Link>
                <div className="collapse navbar-collapse show ml-sm-5">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/recipes" className="nav-link">
                                Recipes
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;