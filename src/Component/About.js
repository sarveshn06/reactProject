import React from "react";

export default function About() {
    return (
        <div>
            <div class="container-fluid">
                <img src="img/about.png"></img>
                <div class="container">
                    <div class="row" style={{ padding: "100px 0px 0px 0px" }}>
                        <div class="col-md-6" >
                            <h6 class="text-primary" style={{ fontWeight: "700", padding: "10px 0px 10px 0px" }} >EXCEPTIONAL SERVICE</h6>
                            <h5 style={{ color: "#6c757d", lineHeight: "40px", padding: "0px 10px 10px 0px" }}>We are a Chartered Accountant Firm with over a decade of experience in Accounting,
                                Direct and Indirect Taxation, Statutory, Concurrent and Internal Auditing and Consultancy Services for Banks,
                                Companies, Partnership Firms, LLPs, Trusts, Associations and Individuals.</h5>
                            <h5 style={{ color: "#6c757d", lineHeight: "40px", padding: "0px 10px 10px 0px" }}>
                                We are a team of young, dynamic, and qualified professionals, with a flair for providing tailor made
                                and personalized services for each client based on our interactions with them and our understanding of
                                their requirements as well as the nature of their business.
                            </h5>
                    </div>
                        <div class="col-md-6">
                            <img src="img/audit.jpg"></img>
                        </div>
                    </div>
                    <h5 style={{ color: "#6c757d", lineHeight: "40px", padding: "0px 0px 0px 0px" }}>We are a Chartered Accountant Firm with
                        over a decade of experience in Accounting, Direct and Indirect Taxation, Statutory, Concurrent and Internal Auditing
                        and Consultancy Services for Banks, Companies, Partnership Firms, LLPs, Trusts, Associations and Individuals.</h5>
                    <h5 style={{ color: "#6c757d", lineHeight: "40px", padding: "0px 0px 0px 0px" }}>We are a team of young, dynamic, and
                        qualified professionals, with a flair for providing tailor made and personalized services for each client based on our
                        interactions with them and our understanding of their requirements as well as the nature of their business.</h5>
                </div>
            </div>
        </div>
    )
}