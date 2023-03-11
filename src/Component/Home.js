import React from "react";
import './Home.css';

export default function Home() {
    return (
        <div>
            <div id="main" class="container-fluid" style={{ backgroundColor:"#3a86ff" }}>
                <div class="container">
                   <div class="row">
                      <div class="col-md-6">
                            <h1 id="head">Joyce <br></br> Roberts</h1>
                            <h6 id="head2">Practical Financial Advice You Can Count ON</h6>
                            <p id="head3">Invest your time and efforts on running ypur business. <br></br>Leave the accounting to me.</p>
                            <button type="button" id="btn1" class="btn btn-outline-primary">Get A Free Quote</button>
                            <button type="button" id="btn2" class="btn btn-primary">learn more</button>
                            <div class="row" style={{color:"white", marginTop:"60px"}}>
                                <div class="col-md-4">
                                    <i class="fa-solid fa-circle-check" >Trusted</i>
                                </div>
                                <div class="col-md-4">
                                    <i class="fa-solid fa-circle-check">Experienced</i>
                                </div>
                                <div class="col-md-4">
                                    <i class="fa-solid fa-circle-check">Professional</i>
                                </div>
                                
                            </div>
                       </div>
                       <div class="col-md-6">
                            <img src="img/accountant.png" alt="accountant"></img>
                       </div>
                   </div>
                </div>
            </div>
            {/* main ended */}

            <div class="container-fluid">
                <div class="container">
                    <h1 id="head4">Salian Paiyapilly & Co</h1>
                    <p id="head5">Salian Paiyapilly is one of the leading Chartered Accountants Firm in Mumbai. We managed and run by group of qualified Chartered Accountants,<br></br>
                        Company Secretaries, Corporate Financial Advisors & Tax Consultants. We have accumulated with us 15 years experience of adding value to<br></br>
                        clients by providing multitude of serivces.</p>
                </div>
                <div class="row" style={{padding:"50px"}}>
                    <div class="col-md-6">
                        <h4 id="head6">OUR VALUE PROPOSITION</h4>

                        <h5 style={{ color: "#6c757d" }}><i class="fa-solid fa-play" style={{ padding: "20px 20px 0px 0px"}}></i>Team of professionals understanding present day requirement</h5>
                        <h5 style={{ color: "#6c757d" }}><i class="fa-solid fa-play" style={{ padding: "10px 20px 0px 0px"}}></i>Professionals specialized in each area of services providing required expertise</h5>
                        <h5 style={{ color: "#6c757d" }}><i class="fa-solid fa-play" style={{ padding: "10px 20px 0px 0px"}}></i>Dedicated team for each area of services delivering quality and timely service</h5>
                        <h5 style={{ color: "#6c757d" }}><i class="fa-solid fa-play" style={{ padding: "10px 20px 0px 0px"}}></i>Service delivery model based on client value addition and client satisfaction</h5>
                        <h5 style={{ color: "#6c757d" }}><i class="fa-solid fa-play" style={{ padding: "10px 20px 0px 0px"}}></i>Various statutory compliance services under one umbrella</h5>
                        <h5 style={{ color: "#6c757d" }}><i class="fa-solid fa-play" style={{ padding: "10px 20px 0px 0px"}}></i>Cost competitive services</h5>
                        <h5 style={{ color: "#6c757d" }}><i class="fa-solid fa-play" style={{ padding: "10px 20px 0px 0px"}}></i>Adoption of latest technology in service delivery</h5>

                    </div>
                    <div class="col-md-6">
                        <img src="img/money.jpg" alt="money" id="image"></img>
                    </div>

                </div>
            </div>
            {/* our value proposition ended */}

            <div class="container">
                <h6 class="text-primary text-center" style={{ fontWeight:"700"}} >SERVICES</h6>
                <h1 class="text-center" style={{ fontSize: "50px", fontWeight: "700", padding:"10px 0px 50px 0px" }} >What We Do</h1>
                
                <div class="row">
                    <div class="col-md-6">
                        <img src="img/business setup.jpg" alt="business setup" id="image" style={{ paddingTop: "20px", borderRadius: "20px" }}></img>
                    </div>
                    <div class="col-md-6">
                        <h4 class="text-primary" style={{fontWeight:"700", padding:"40px 0px 20px 80px"}}>01.</h4>
                        <h1 style={{ fontWeight: "700", padding: "20px 0px 20px 80px" }}>Business Setup</h1>
                        <p style={{ padding: "20px 0px 20px 80px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                        <button type="button" id="btn1" class="btn btn-outline-primary" style={{ marginLeft: "80px" }}>Read More</button>
                    </div>
                </div>
                {/* Business Setup ended */}

                <div class="row" style={{paddingTop:"80px"}}>
                    <div class="col-md-6">
                        <h4 class="text-primary" style={{ fontWeight: "700", padding: "40px 0px 20px 0px" }}>02.</h4>
                        <h1 style={{ fontWeight: "700", padding: "20px 0px 20px 0px" }}>Compliances</h1>
                        <p style={{ padding: "20px 0px 20px 0px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                        <button type="button" id="btn1" class="btn btn-outline-primary">Read More</button>
                    </div>
                    <div class="col-md-6">
                        <img src="img/taxes.jpg" alt="taxes" id="image" style={{paddingTop:"20px" , borderRadius:"20px"}}></img>
                    </div>  
                </div>
                {/* Compliances ended */}

                <div class="row" style={{ paddingTop: "80px" }}>
                    <div class="col-md-6">
                        <img src="img/Audit.jpg" alt="business setup" id="image" style={{ paddingTop: "20px", borderRadius: "20px" }}></img>
                    </div>
                    <div class="col-md-6">
                        <h4 class="text-primary" style={{ fontWeight: "700", padding: "40px 0px 20px 80px" }}>03.</h4>
                        <h1 style={{ fontWeight: "700", padding: "20px 0px 20px 80px" }}>Audit And Assurance <br></br> Services</h1>
                        <p style={{ padding: "20px 0px 20px 80px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                        <button type="button" id="btn1" class="btn btn-outline-primary" style={{ marginLeft: "80px" }}>Read More</button>
                    </div>
                </div>
                {/* Audit And Assurance Services ended */}
                <div class="row" style={{ paddingTop: "80px" }}>
                    <div class="col-md-6">
                        <h4 class="text-primary" style={{ fontWeight: "700", padding: "40px 0px 20px 0px" }}>04.</h4>
                        <h1 style={{ fontWeight: "700", padding: "20px 0px 20px 0px" }}>Outsourced Accounting And <br></br> Book Keeping Services</h1>
                        <p style={{ padding: "20px 0px 20px 0px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                        <button type="button" id="btn1" class="btn btn-outline-primary">Read More</button>
                    </div>
                    <div class="col-md-6">
                        <img src="img/taxes.jpg" alt="taxes" id="image" style={{ paddingTop: "20px", borderRadius: "20px" }}></img>
                    </div>
                </div>
                {/* Outsourced Accounting And Book Keeping Services ended */}
                <div class="row" style={{ paddingTop: "80px" }}>
                    <div class="col-md-6">
                        <img src="img/Audit.jpg" alt="business setup" id="image" style={{ paddingTop: "20px", borderRadius: "20px" }}></img>
                    </div>
                    <div class="col-md-6">
                        <h4 class="text-primary" style={{ fontWeight: "700", padding: "40px 0px 20px 80px" }}>05.</h4>
                        <h1 style={{ fontWeight: "700", padding: "20px 0px 20px 80px" }}>Financial Advisory And <br></br> Management Consultancy  </h1>
                        <p style={{ padding: "20px 0px 20px 80px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                        <button type="button" id="btn1" class="btn btn-outline-primary" style={{ marginLeft: "80px" }}>Read More</button>
                    </div>
                </div>
                {/* Financial Advisory And Management Consultancy ended */}
            </div>
            {/* why we do ended */}

            <div class="container">
                <h6 class="text-primary text-center" style={{ fontWeight: "700" , padding:"180px 0px 10px 0px" }} >WHY CHOOSE ME</h6>
                <h1 class="text-center" style={{ fontSize: "50px", fontWeight: "700", padding: "10px 0px 50px 0px" }} >Accurate Record Keeping</h1>
                <p id="head5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br>
                </br> ullamcorper mattis, pulvinar dapibus leo.</p>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card" style={{ width: "20rem" }}>
                            <div class="card-body">
                                <i class="fa-solid fa-calendar-check" style={{ color:"#3a86ff", fontSize:"40px",padding:"10px"}}></i>
                                <h5 class="card-title" id="head6">Always On Time</h5>
                                <p class="card-text">Click edit button to change this text. Lorem ipsum dolor sit amet</p>  
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style={{ width: "20rem" }}>
                            <div class="card-body">
                                <i class="fa-solid fa-briefcase" style={{ color: "#3a86ff", fontSize: "40px", padding: "10px" }}></i>
                                <h5 class="card-title" id="head6">Hard Working</h5>
                                <p class="card-text">Click edit button to change this text. Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style={{ width: "20rem" }}>
                            <div class="card-body">
                                <i class="fa-solid fa-calendar-check" style={{ color: "#3a86ff", fontSize: "40px", padding: "10px" }}></i>
                                <h5 class="card-title" id="head6">24/7 Availability</h5>
                                <p class="card-text">Click edit button to change this text. Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* why choose me ended */}

            <div class="container">
                <h6 class="text-primary text-center" style={{ fontWeight: "700", padding: "180px 0px 10px 0px" }} >TESTIMONIALS</h6>
                <h1 class="text-center" style={{ fontSize: "50px", fontWeight: "700", padding: "10px 0px 50px 0px" }} >What My Clients Say?</h1>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card" style={{ width: "20rem" }}>
                            <div class="card-body">
                                <i class="fa-solid fa-quote-left" style={{ color: "#3a86ff", fontSize: "40px", padding: "10px" }}></i>
                                <p class="card-text">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <h5 class="card-title">Amanda Lee</h5>
                                <p class="card-text">CEO & Founder Crix</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style={{ width: "20rem" }}>
                            <div class="card-body">
                                <i class="fa-solid fa-quote-left" style={{ color: "#3a86ff", fontSize: "40px", padding: "10px" }}></i>
                                <p class="card-text">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <h5 class="card-title">Adam Cheise</h5>
                                <p class="card-text">Director at Dynamic</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style={{ width: "20rem" }}>
                            <div class="card-body">
                                <i class="fa-solid fa-quote-left" style={{ color: "#3a86ff", fontSize: "40px", padding: "10px" }}></i>
                                <p class="card-text">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <h5 class="card-title">Catherine Gilbert</h5>
                                <p class="card-text">Director at Initech</p>
                            </div>
                        </div>
                    </div>
                </div>
            
              <div class="row pt-5" style={{marginBottom:"200px"}}>
                <div class="col-md-3 p-4">
                    <img src="img/1.png" alt="logo" style={{hight:"250px",width:"250px",opacity:"0.5"}}></img>
                </div>
                <div class="col-md-3 p-4">
                    <img src="img/2.png" alt="logo" style={{hight:"250px",width:"250px",opacity:"0.5"}}></img>
                </div>
                <div class="col-md-3 p-4">
                    <img src="img/3.png" alt="logo" style={{hight:"250px",width:"250px",opacity:"0.5",paddingTop:"28px"}}></img>
                </div>
                <div class="col-md-3 p-4">
                    <img src="img/4.png" alt="logo" style={{hight:"250px",width:"250px",opacity:"0.5"}}></img>
                </div>
                </div>
            </div>
            {/*What My Clients Say? ended */}
            <div class="container-fluid" id="main2" style={{ backgroundColor: "#8a817c" }}>
                <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src="img/accountant.png" alt="accountant" style={{marginTop:"-200px"}}></img>
                    </div>
                    <div class="col-md-6">
                            <h6 style={{ color: "aliceblue", fontWeight: "700" , margin:"300px 0px 0px 80px" }}>FREE ESTIMATION</h6>
                            <h1 style={{ color: "aliceblue", fontWeight: "700", margin: "0px 0px 0px 80px" }}>Request A Quote</h1>
                    </div>
                </div>
                </div>
            </div>
            {/*Request A Quote ended */}
            

            
            {/* Parentnode */}
        </div> 
    )
}