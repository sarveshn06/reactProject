import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <div class="container-fluid" style={{ backgroundColor: "#463f3a" }}>
                <div class="container">
                    <div class="row" style={{ padding: "50px" }}>
                        <div class="col-md-4">
                            <img src="img/footerlogo.png" style={{ hight: "200px", width: "200px" }}></img>
                        </div>
                        <div class="col-md-4" id="list">
                            <h4 style={{ color: "aliceblue", padding: "0px 0px 30px 26px" }}>Services</h4>
                            <ul>
                                <li><h6><i class="fa-solid fa-play" style={{ color: "#3a86ff" }}></i><Link to="/Businesssetup" style={{ marginLeft: "20px" }}>
                                    Business Setup</Link></h6></li>
                                <li><h6><i class="fa-solid fa-play" style={{ color: "#3a86ff" }}></i><Link to="/Compliances" style={{ marginLeft: "20px" }}>
                                    Complinace</Link></h6></li>
                                <li><h6><i class="fa-solid fa-play" style={{ color: "#3a86ff" }}></i><Link to="/Audit" style={{ marginLeft: "20px" }}>
                                    Audit and assurance</Link></h6></li>
                                <li><h6><i class="fa-solid fa-play" style={{ color: "#3a86ff" }}></i><Link to="/Outsourced" style={{ marginLeft: "20px" }}>
                                    Outsources accounting and <br></br> other services</Link></h6></li>
                                <li><h6><i class="fa-solid fa-play" style={{ color: "#3a86ff" }}></i><Link to="/Financial" style={{ marginLeft: "20px" }}>
                                    Financial Advisory and <br ></br> Management consultancy</Link></h6></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h3 style={{ color: "aliceblue" }}>Contact Info</h3>
                            <h6 style={{ padding: "10px" }}><i class="fa-solid fa-location-pin" style={{ color: "#3a86ff", marginRight: "20px" }}></i>
                                <span style={{ color: "aliceblue" }}> B-102, Trade Square, Mehra Compound, Sakinaka, Andheri East, Mumbai 400072.</span></h6>
                            <h6 style={{ padding: "10px" }}><i class="fa-solid fa-phone" style={{ color: "#3a86ff", marginRight: "20px" }}></i> <span style={{ color: "aliceblue" }}>9987636927</span></h6>
                            <h6 style={{ padding: "10px" }}><i class="fa-solid fa-envelope" style={{ color: "#3a86ff", marginRight: "20px" }}></i> <span style={{ color: "aliceblue" }}>vpaiyapilly@gmail.com</span></h6>
                        </div>
                    </div>

                    <hr></hr>
                    <div class="row">
                        <div class="col-md-6">
                            <h6 style={{ color: "aliceblue", padding: "20px" }}>Copyright © 2022 Chartered Accountant in Mumbai</h6>
                        </div>
                        <div class="col-md-6">
                            <h6 style={{ color: "aliceblue", padding: "20px", marginLeft: "400px" }}>Powered by <a href="/"> Servesh Naik</a></h6>
                        </div>

                    </div>
                </div>
            </div>
            {/*Footer ended */}
        </div>
    )
}