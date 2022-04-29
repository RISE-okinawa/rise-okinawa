import React from "react";
import { Link } from "gatsby";
import "../styles/footer.css";

export default function Footer() {
  return (
      <footer className="pt-4 justify-content-between align-items-baseline text-center w-100">
        <div className="d-xl-flex flex-wrap footer-menu m-auto mb-4 lh-ll justify-content-evenly" style={{maxWidth:'1200px'}}>
          <p className="d-inline-block footer-contents mb-1"><Link to="https://www.google.com/maps/place/%EF%BC%B2%EF%BC%A9%EF%BC%B3%EF%BC%A5%E8%A1%8C%E6%94%BF%E6%9B%B8%E5%A3%AB%E4%BA%8B%E5%8B%99%E6%89%80/@26.212104,127.678357,15z/data=!4m5!3m4!1s0x0:0x2a9fe813ee57e2c8!8m2!3d26.21217!4d127.6783059">〒900-0021 <br className="br-Sp"/>沖縄県那覇市泉崎1-8-8 <br className="br-Sp"/>泉崎マンション302号室</Link></p>
          <p className="footer-contents text-center mb-1 ls-half">TEL：<Link to="tel:098-917-5874">098-917-5874</Link>　FAX：098-917-5875</p>
          <p className="footer-contents text-center mb-0">Eｰmail：<Link to="mailto:gsl.uehara@rising.okinawa">gsl.uehara@rising.okinawa</Link></p>
        </div>
        <address className="text-center pb-1 fst-normal">&copy; {new Date().getFullYear()}&nbsp;rise-okinawa.com</address>
      </footer>
  )
}