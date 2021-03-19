import React from "react";
import "./footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import PaymentIcon from "@material-ui/icons/Payment";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <ul className="menu">
          <li className="heading">ABOUT</li>
          <li>How Airbnb works</li>
          <li>Newsroom</li>
          <li>Investor</li>
          <li>Airbnb Plus</li>
          <li>Airbnb Luxe</li>
          <li>HotelTonight</li>
          <li>Airbnb for Work</li>
          <li>Olympics</li>
          <li>Careers</li>
          <li>Founders' Letter</li>
        </ul>

        <ul className="menu">
          <li className="heading">COMMUNITY</li>
          <li>Diversity & Belonging</li>
          <li>Accessibility</li>
          <li>Airbnb Associates</li>
          <li>Frontline Stays</li>
          <li>Guest Referraks</li>
          <li>Aurbnb.org</li>
        </ul>

        <ul className="menu">
          <li className="heading">HOST</li>
          <li>Host your home</li>
          <li>Host an Online Experience</li>
          <li>Host an Experience</li>
          <li>Responsible hosting</li>
          <li>Resources Center</li>
          <li>Community Center</li>
        </ul>

        <ul className="menu">
          <li className="heading">SUPPORT</li>
          <li>Our COVID-19 Response</li>
          <li>Help Center</li>
          <li>Cancellation options</li>
          <li>Neighbourhood Support</li>
          <li>Trust & Safety</li>
        </ul>
      </div>
      <hr />

      <div className="footer__footer">
        <div className="links">
          &copy; 2021 Airbnb, Inc. No right Reserved • Just a Clone • Privacy • Terms • Sitemap • Company Details
        </div>
        <div className="options">
          {" "}
          <div>
            <LanguageIcon /> English (IN)
          </div>
          <div>
            <PaymentIcon /> INR
          </div>
        </div>
        <div className="social">
          <FacebookIcon /> <TwitterIcon /> <InstagramIcon />{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
