import React from "react"

const Footer = (props) => {
    const year = new Date().getFullYear();

  return (
    <div>
       <footer className="footer">
       <h4>Follow us on</h4>
            <a href="#"><i  class="fa-brands fa-twitter   footer-icon">

            </i></a>
            <a href="#"><i  class="fa-brands fa-facebook  footer-icon">

            </i></a>
            <a href="#"><i  class="fa-brands fa-instagram footer-icon">
                
            </i></a>
            <a href="mailto:thearyansarang@gmail.com"><i 
             class="fa-solid fa-envelope   footer-icon"></i></a>
            <h6>© Copyright {year} Pari</h6>
        </footer>
    </div>
  )
};

export default Footer;
