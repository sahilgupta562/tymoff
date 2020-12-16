import React from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicyTag = () => {
  return (
    <Helmet>
      <title>Privacy Policy | tymoff</title>
      <meta
        name="keywords"
        content={"photos, videos, articles, passion, beauty, fashion, photography, travel, music, wallpapers, time off, tym off, timeoff, entertainment, Inspirational, Environment"}
      />
      <meta name="description" content={"tymoff Privacy Policy"} />
      <meta property="og:title" content={"Privacy Policy | tymoff"} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="tymoff" />
      <meta property="og:url" content="https://www.tymoff.com/privacy-policy" />
      <meta property="og:description" content={"tymoff Privacy Policy"} />
      <meta property="og:image" content={"https://www.tymoff.com/logo.png"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Privacy Policy | tymoff" />
      <meta name="twitter:description" content={"tymoff Privacy Policy"} />
      <meta name="twitter:image" content={"https://www.tymoff.com/logo.png"} />
      <meta property="twitter:url" content={"https://www.tymoff.com/privacy-policy"} />
    </Helmet>
  );
};

export { PrivacyPolicyTag };
