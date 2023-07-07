import React from "react"

const UpBatch = (props) => {
    return (
        <div>
            <div class="jumbotron">
                <h1 class="display-4">Our New Batch</h1>
                <span class="lead">Course Schedule
                    Batch I : 30 October to 9 November 2023
                </span>
                <span class="lead">Last date for nominations
                    14 August 2023
                </span>
                <hr class="my-4" />
                <ul className="feesList">
                    Fees include the following:
                    <li>
                       Joint Course training fee for New Delhi and Perth.
                    </li>
                    <li>
                       Transfer from the Airport to the Hotel and from Hotel to the Airport in Perth.

                    </li>
                    <li>
                        3/4 star single occupancy hotel accommodation in Perth for 8 nights with breakfast.

                    </li>
                    <li>
                        	Visa application charges (PARI Team will apply and pay for Visa.)
                    </li>
                
                </ul>
<span className="note">
                Note: It does not include travel from New Delhi to Perth and return; domestic travel to Delhi and return; accommodation and local conveyance in New Delhi.
</span>
                <p className="fees">Course Fee INR 3,80,000 + 18% GST. (Per Participant)</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Join Now</a>
                </p>
            </div>
        </div>
    )
};

export default UpBatch;
