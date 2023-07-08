import React from "react"

const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer class="text-center text-lg-start bg-dark text-muted">
        <section class="d-flex justify-content-center  py-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" class="me-4 mx-3 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4  mx-3 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4  mx-3 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4  mx-3 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 mx-3  text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4  mx-3 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section class="">
          <div class="container-fluid text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-4  col-lg-4 col-xl-4  mb-4">
                <span class="text-uppercase fw-bold mb-4 ">For Fee Payment</span><br />
                <p className="text-left mt-4">

                  <span>Agency Name : PARI TRAINING INSTITUTE LLP</span><br />
                  <span>Bank name : HDFC Bank</span><br />
                  <span>Branch Address: Ansal Chamber-1, Bhikaji Cama Place, New Delhi-110066</span><br />
                  <span>Account Number : 50200046748750</span><br />
                  <span>IFSC Code : HDFC0000678, MICR Code : 110240104, PAN No. : AAYFP0495N, GSTIN: 07AAYFP0495N1Z9</span>

                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Our Clients
                </h6>
                <div>
                  <p className="my-2">
                    <a href="#!" class="text-reset text-white-50">GOVERNMENT OF INDIA</a>
                  </p>
                  <p className="my-2">
                    <a href="#!" class="text-reset text-white-50">PUBLIC SECTOR ENTERPRISES</a>
                  </p>
                  <p className="my-2">
                    <a href="#!" class="text-reset text-white-50">AUTONOMOUS BODIES</a>
                  </p>

                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Trainings organised
                </h6>
                <p className="my-2">
                  <a href="#!" class="text-reset text-white-50">International Trainings</a>
                </p>
                <p className="my-2">
                  <a href="#!" class="text-reset text-white-50">National Training</a>
                </p>

              </div>

              <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="fas fa-home me-3"></i> 504, Bhikaji Cama Bhawan, Bhikaji Cama Place, New Delhi - 110066</p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  pari.parliament@gmail.com
                </p>
                <p><i class="fas fa-phone me-3"></i> +91-11-40159058</p>
                <p><i class="fas fa-phone me-3"></i> +91-11-46014233</p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-4" >
          © {year} Copyright:
          <a class="text-reset text-white-50 fw-bold" href="#">LIGHTS</a>
        </div>
      </footer>
    </div>
  )
};

export default Footer;
