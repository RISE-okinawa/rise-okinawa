import React from "react";
//import { Link } from "gatsby";
//import { useLocation } from "react-router-dom";
import "../styles/header.css";
import { StaticImage } from "gatsby-plugin-image";
//import { Navbar, Nav } from 'react-bootstrap';

const siteTitle = 'RISE行政書士事務所 沖縄の行政書士事務所';

const Header = () => {
  //const location = useLocation;
  return (
    <header className="position-absolute">
      <h1>
        <StaticImage
          src="../../static/logo_rise_white.svg"
          width={160}
          alt={siteTitle}
          placeholder="blurred"
          quality={80}
        />
      </h1>
    </header>
  )
}

export default Header;