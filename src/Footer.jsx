import React from "react";

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: "rgba(221, 216, 216, 1)", 
      width: "100%" 
    }}>
      
      <div className="container-fluid ">
        <div className="row mt-5">
          <div className="col">
            <img src="../media/logo-ours.PNG" style={{ width: "50%" }} />
            <p>
              &copy; demo project,
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Products</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral programme</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">tech</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="">Contact</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">60 day challenge</a>
            <br />
          </div>
          
          <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
            <p>
              This is a demo project inspired by online brokerage platforms. The platform is designed to simulate features for connecting traders, sharing insights, and learning about financial markets.
              Disclaimer: This is not a SEBI-registered broker, nor does it provide actual trading or depository services. All information displayed is for educational and portfolio demonstration purposes only.
            </p>

            <p>
              This is a demo project inspired by online brokerage platforms. The platform is designed to simulate features for connecting traders, sharing insights, and learning about financial markets.
              Disclaimer: This is not a SEBI-registered broker, nor does it provide actual trading or depository services. All information displayed is for educational and portfolio demonstration purposes only.
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              This is a demo project inspired by online brokerage platforms. The platform is designed to simulate features for connecting traders, sharing insights, and learning about financial markets.
              Disclaimer: This is not a SEBI-registered broker, nor does it provide actual trading or depository services. All information displayed is for educational and portfolio demonstration purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;