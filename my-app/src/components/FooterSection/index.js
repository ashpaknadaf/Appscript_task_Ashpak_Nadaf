import { CiLinkedin } from "react-icons/ci";
import { RiInstagramLine } from "react-icons/ri";
import "./index.css"

const FooterSection = () => (
  <div className="footer-section-container">
    <div className="footer-top-container">
      <div>
          <h1 className="footer-content-headings">BE THE FIRST TO KNOW</h1>
          <p className="content-description">Sign up for updates from mettā muse.</p>
          <div className="subscribe-btn-container">
              <input type="search" placeholder="Enter Your email" className="search-input" />
              <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
      </div>
      <div>
          <h1 className="footer-content-headings">CONTACT US</h1>
          <p className="content-description">+44 221 133 5360</p>
          <p className="content-description">customercare@mettamuse.com</p>

          <div className="currency-container">
            <h1 className="footer-content-headings">CURRENCY</h1>
            <div className="image-container">
              <img src="https://res.cloudinary.com/dgzuznaxk/image/upload/v1723449356/Group_ojv6h6.png" alt='usa-flag' className="usa-flag"/>
              <p className="usd">USD</p>
            </div>
          </div>
        
          <p className="content-description">Transactions will be completed in Euros and a currency reference is available on hover.</p>
      </div>
    </div>

    <hr className="horizontal-line"/>

    <div className="footer-bottom-container">
      <div>
        <h1 className="footer-content-headings">mettā muse</h1>
        <p className="items">About Us</p>
        <p className="items">Stories</p>
        <p className="items">Artisans</p>
        <p className="items">Boutiques</p>
        <p className="items">Contact Us</p>
        <p className="items">EU Compliances Docs</p>
      </div>

      <div>
        <h1 className="footer-content-headings">Quick Links</h1>
        <p className="items">Orders & Shipping</p>
        <p className="items">Join/Login as a Seller</p>
        <p className="items">Payment & Pricing</p>
        <p className="items">Return & Refunds</p>
        <p className="items">FAQs</p>
        <p className="items">Privacy Policy</p>
        <p className="items">Terms & Conditions</p>
      </div>
      
      <div>
        <div>
          <h1 className="footer-content-headings">Follow Us</h1>
          <div className="icon-container">
            <div className="icon-border">
              <RiInstagramLine className="icon"/>
            </div>
            <div className="icon-border">
              <CiLinkedin className="icon"/>
            </div>
          </div>
        </div>

        <div className="payment-method-container">
          <h1 className="footer-content-headings">
            mettā muse Accepts
          </h1>
          <div>
            <img
              src="https://res.cloudinary.com/dgzuznaxk/image/upload/v1723449388/Group_136188_fbcct3.png"
              className="payment-source-image"
              alt="google-pay"
            />

            <img 
              src="https://res.cloudinary.com/dgzuznaxk/image/upload/v1723449372/Group_136190_vbf5g2.png"
              className="payment-source-image"
              alt="mastercard"
            />

            <img 
              src="https://res.cloudinary.com/dgzuznaxk/image/upload/v1723449404/Group_136192_eygap8.png"
              className="payment-source-image"
              alt="paypal"
            />
            
            <img 
              src="https://res.cloudinary.com/dgzuznaxk/image/upload/v1723449418/Group_136193_b5tm4j.png"
              className="payment-source-image"
              alt="amex"
            />

            <img 
              src="https://res.cloudinary.com/dgzuznaxk/image/upload/v1723449432/Group_136194_lmgvjz.png"
              className="payment-source-image"
              alt="apple pay"
            />

            <img 
              src="https://res.cloudinary.com/dgzuznaxk/image/upload/v1723449455/Group_136195_jt0rnb.png"
              className="payment-source-image"
              alt="airtel pay"
            />
          </div>
          </div>
      </div>

    </div>
    
  </div>
)

export default FooterSection