import React from "react";
import './Compliances.css';

export default function Compliances() {
    return (
        <div class="container-fluid">
            <img src="img/Compliances.png"></img>
            <div class="container">
                <div class="row pt-5">
                    <div class="col-md-4">
                        <button type="button" id="btn5" class="btn"><i class="fa-solid fa-terminal"></i>  Taxation</button>
                        <button type="button" id="btn5" class="btn"><i class="fa-solid fa-terminal"></i>   Corporate Law - ROC Filings And MCA Compliances</button>
                        <button type="button" id="btn5" class="btn"><i class="fa-solid fa-terminal"></i>  Other Compliances</button>
                    </div>
                    <div class="col-md-8">
                        <div class="card" style={{ width: "100%", height: "580px" }}>
                            <div class="card-body">
                                <h2 class="card-title text-center p-3 text-primary">Taxation</h2>
                                <p class="card-text" style={{ fontWeight:"900", fontSize: "20px" }}>- Direct Taxation</p>
                                <ul style={{ color: "#6c757d", fontSize: "20px" }}>
                                    <li>Application and Obtaining Permanent Account Number (PAN) and Tax Deduction Account Number (TAN)</li>
                                    <li>Income Tax Returns Preparation and Filing</li>
                                    <li>Computation of TDS, Reconciliation and Deposit of TDS</li>
                                    <li>TDS Returns Preparation and Filing</li>
                                    <li>Preparation of TDS Certificates</li>
                                    <li>Obtaining CIN, PAN and TAN</li>
                                    <li>Calculation for payment of Advanced Tax</li>
                                </ul>
                                <p class="card-text" style={{ fontWeight: "900", fontSize: "20px" }}>- Indirect Taxation</p>
                                <ul style={{ color: "#6c757d", fontSize: "20px" }}>
                                    <li>GST Registration</li>
                                    <li>GST Implementation</li>
                                    <li>GST CompliancesS</li>
                                    <li>GST Return Filing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Incorporation Of Companies  ended */}

                <div class="row pt-4">
                    <div class="col-md-4">
                        {/* blank */}
                    </div>
                    <div class="col-md-8">
                        <div class="card" style={{ width: "100%", height: "250px" }}>
                            <div class="card-body">
                                <h2 class="card-title text-center p-3 text-primary">Corporate Law - ROC Filings And MCA Compliances</h2>
                                <p class="card-text" style={{ color: "#6c757d", fontSize: "20px" }}>We undertake filing of various Returns based
                                    on the information provided by the client such as DIR-3 KYC, Annual Returns, Financial Statements, Appointment
                                    of Auditor, Appointment/Resignation of Director, Change in Share Capital or Share Holding, Changes in Memorandum
                                    of Association and other compliances that may become applicable from time to time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Incorporation Of LLP  ended */}

                <div class="row mt-4 mb-4">
                    <div class="col-md-4">
                        {/* blank */}
                    </div>
                    <div class="col-md-8">
                        <div class="card" style={{ width: "100%", height: "300px" }}>
                            <div class="card-body">
                                <h2 class="card-title text-center p-3 text-primary">Other Compliances</h2>
                                <p class="card-text" style={{ color: "#6c757d", fontSize: "20px" }}>We also offer services related to
                                    compliances related to other Acts and Laws as generally applicable to our clients such as:</p>
                                <ul style={{ color: "#6c757d", fontSize: "20px" }}>
                                    <li>Professional Tax Remittance and Returns filing</li>
                                    <li>PF Act Compliance, Returns and Remittances</li>
                                    <li>ESI Act Compliance, Remittances</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Incorporation Of LLP  ended */}
            </div>

        </div>
    )
}