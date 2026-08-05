import React from "react";
import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";
import FooterSocialMedia from "./FooterSocialMedia";
const Footer = () => {
  return (
    <footer>
      <FooterLinks />
      <FooterSocialMedia />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
