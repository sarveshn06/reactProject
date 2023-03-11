import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-light p-4">
                    <div class="container">
                        <img src="img/logo.png" alt="logo" ></img>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/About">About Us</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Services
                                        </a>
                                        <ul class="dropdown-menu">
                                        <li><Link class="dropdown-item" to="/Businesssetup">Business Setup</Link><hr></hr></li>
                                        <li><Link class="dropdown-item" to="/Compliances">Complinace</Link><hr></hr></li>
                                        <li><Link class="dropdown-item" to="/Audit">Audit and assurance</Link><hr></hr></li>
                                        <li><Link class="dropdown-item" to="/Outsourced">Outsources accounting and <br></br> other services</Link><hr></hr></li>
                                        <li><Link class="dropdown-item" to="/Financial">Financial Advisory and <br></br> Management consultancy</Link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/Contact">Contact Us</Link>
                                    </li>
                                </ul>

                                <button class="btn btn-outline-primary" type="submit">Get A Quote</button>
                            </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;