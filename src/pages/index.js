import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/common.css";

import ogimage from "../../static/logo_rise.svg"

export default function Home() {
  return (
    <>
      <Layout>
        <Seo
          title="RISE行政書士事務所 沖縄の行政書士事務所"
          description="RISE行政書士事務所のウェブサイトです。行政書士の仕事を通して、沖縄の発展への貢献を目指しています。"
          siteType="website"
          pageUrl="https://rise-okinawa.com"
          ogimage={ogimage}
        />
        <div className="position-relative d-flex flex-row-reverse align-items-center hero-container">
          <div className="hero-img">
            <StaticImage
              src="../../static/onpages/rise_hero.webp"
              alt="RISE行政書士事務所のウェブサイトです。行政書士の仕事を通して、沖縄の発展への貢献を目指しています。"
              width={2400}
            />
          </div>
          <div className="hero-message">
            <h2>沖縄の発展のために<br/>私たちが貢献できること</h2>
            <p>私たちの仕事は、役所に申請を出して許可を<br/>
            もらうことが最終目的ではない。<br/>
            案件の先に沖縄の発展を意識して、<br/>
            熱心に、そして丁寧に取り組む。</p>
            <div className="preparing">
              <p>サイト準備中...</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
