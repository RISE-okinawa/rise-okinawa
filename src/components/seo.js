import React from "react";
import { Helmet } from "react-helmet";
//import { useLocation } from "@reach/router";

const Seo = ({ title, description, siteType, pageUrl, ogimage }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "ja-jp" }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `google-site-verification`,
          content: `zKRE8bViBxV-3G6IqFX_n1Ad5iyv3eFWDqIUeD38S3M`,
        },
        {
            name: `description`,
            content: description,
        },
        {
            property: `og:title`,
            content: title,
        },
        {
            property: `og:description`,
            content: description,
        },
        {
            property: `og:type`,
            content: siteType,
        },
        {
            property: `og:url`,
            content: `https://rise-okinawa.com${pageUrl}`,
        },
        {
            property: `og:site_name`,
            content: `RISE行政書士事務所 沖縄の行政書士事務所`,
        },
        {
            property: `og:locale`,
            content: `ja_JP`,
        },
        {
            property: `og:image:secure_url`,
            content: ogimage,
        },
        {
            property: `og:image`,
            content: ogimage,
        },
        {
            property: `twitter:card`,
            content: `summary_large_image`,
        },
        {
            property: `twitter:title`,
            content: title,
        },
        {
            property: `twitter:description`,
            content: description,
        },
        {
            property: `twitter:image`,
            content: ogimage,
        },
      ]}
    >
        <link rel="canonical" href={`https://rise-okinawa.com${pageUrl}`} />
    </Helmet>
  )
}

export default Seo