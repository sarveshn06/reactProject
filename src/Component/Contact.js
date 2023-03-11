import React from "react";
import './Contact.css';

export default function Contact() {
    return (
        <div>
            <div class="container-fluid">
                <img src="img/contact.png" alt="contact"></img>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h6 class="text-primary" style={{ fontWeight: "700", padding: "100px 0px 10px 0px" }} >GET IN TOUCH</h6>
                            <h1 class="text" style={{ fontWeight: "700", padding: "10px 0px 30px 0px" }} >Contact Details</h1>
                            <h5><i class="fa-solid fa-location-pin" style={{ color: "#3a86ff" , fontSize:"25px" }}>
                                <span style={{ color: "black", letterSpacing: "8px", padding:"30px"}}>Address​</span></i>
                                <p style={{ margin: "20px 0px 0px 30px" }}>B-102, Trade Square, Mehra Compound, Sakinaka, Andheri East,
                                    Mumbai 400072.</p>
                            </h5>
                            <h5><i class="fa-solid fa-phone" style={{ color: "#3a86ff", fontSize: "25px", padding: "30px 0px 10px 0px" }}>
                                <span style={{ color: "black", letterSpacing: "8px", padding: "30px" }}>Phone Numbers​​</span></i>
                                <p style={{ margin: "20px 0px 0px 30px" }}>+91 9987636927</p>
                            </h5>
                            <h5><i class="fa-solid fa-envelope" style={{ color: "#3a86ff", fontSize: "25px", padding: "30px 0px 10px 0px" }}>
                                <span style={{ color: "black", letterSpacing: "8px", padding: "30px" }}>Email​​</span></i>
                                <p style={{ margin: "20px 0px 0px 30px" }}>vpaiyapilly@gmail.com</p>
                            </h5>
                            <h1 class="text" style={{ fontWeight: "700", padding: "10px 0px 30px 0px" }} >Follow Us</h1>
                            <i class="fa-brands fa-facebook" style={{ color:"#3a86ff" , fontSize:"50px" ,padding:"20px", marginBottom:"60px"}}></i>
                            <i class="fa-brands fa-twitter" style={{ color:"#3a86ff" , fontSize:"50px",padding:"20px", marginBottom:"60px"}}></i>
                            <i class="fa-brands fa-linkedin" style={{ color:"#3a86ff" , fontSize:"50px",padding:"20px", marginBottom:"60px"}}></i>
                            <i class="fa-solid fa-envelope" style={{ color:"#3a86ff" , fontSize:"50px",padding:"20px", marginBottom:"60px"}}></i>
                            
                        </div>
                        <div class="col-md-6" style={{padding:"10px 200px 0px 0px"}}>
                            <h6 class="text-primary" style={{ fontWeight: "700", padding: "100px 0px 10px 0px" }} >BUSINESS ENQUIRY</h6>
                            <h1 class="text" style={{ fontWeight: "700", padding: "10px 0px 30px 0px" }} >Request A Quote</h1>
                            <input type="text" placeholder="Name*" class="form-control" style={{padding:"10px",margin:"8px"}} ></input>
                            <label class="form-label" required style={{ padding: "10px", margin: "8px" }}>Organization Name</label>
                            <input type="text" placeholder="Organization Name*" class="form-control" style={{ padding: "10px", margin: "0px 10px 25px 10px" }}></input>
                            <input type="email" placeholder="Email*" class="form-control" style={{ padding: "10px", margin: "0px 10px 25px 10px" }}></input>
                            <input type="number" placeholder="Phone Number*" class="form-control" style={{ padding: "10px", margin: "0px 10px 0px 10px" }}></input>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ padding: "10px", margin: "10px" }}>Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ padding: "10px", margin: "10px" }}></textarea>
                            </div>
                            <button type="button" id="btn4" class="btn btn-primary">Get a Free Quote</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1910089881026!2d72.88323877587659!3d19.099274651240147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c82562d00001%3A0x90eed67735c320a3!2sHotel%20Leafio%20Sakinaka!5e0!3m2!1sen!2sin!4v1668282458293!5m2!1sen!2sin"
                    style={{ width:"100%", height:"400px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}