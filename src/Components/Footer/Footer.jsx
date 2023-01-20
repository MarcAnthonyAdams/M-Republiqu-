import React from 'react';
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
        <div className="top">
            <div className="item">
                <hi>Categories</hi>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div> 
            <div className="item">
                <hi>Links</hi>
                <span>FAQ</span>
                <span>PAGES</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed
                    faucibus. Vulputate dignissim suspendisse in est ante. Tellus in hac 
                    habitasse platea dictumst vestibulum. Posuere urna nec tincidunt 
                    praesent. Iaculis nunc sed augue lacus viverra vitae.
                </span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed
                    faucibus. Vulputate dignissim suspendisse in est ante. Tellus in hac 
                    habitasse platea dictumst vestibulum. Posuere urna nec tincidunt 
                    praesent. Iaculis nunc sed augue lacus viverra vitae.
                </span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">M Republiqué</span>
                <span className="copyright">
                    © Copyright 2023. All Rights Reserved
                </span>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt="" />
            </div>
      </div>
    </div>
  )
}

export default Footer;