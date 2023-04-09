import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-white text-black-content w-full">
        <div>
          <h1 className="text-6xl">ProHire</h1>
          <p>
            ProHire Industries Ltd.
            <br />
            Providing reliable Jobs since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <p>Branding</p>
          <p>Design</p>
          <p>Marketing</p>
          <p>Advertisement</p>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <p>About us</p>
          <p>Contact</p>
          <p>Jobs</p>
          <p>Press kit</p>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <p>Phone: +01620453303</p>
          <p>Email: refatbubt@gmail.com</p>
          <p>Address: Mirpur-2, Dhaka-1216</p>
          <p>Bangladesh</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
