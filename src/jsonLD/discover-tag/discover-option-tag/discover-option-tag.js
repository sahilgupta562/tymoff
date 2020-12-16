import React from "react";
import { Helmet } from "react-helmet";

const DiscoverOptionTag = ({Url,Title,Description}) => {
  return (
    <Helmet>
      <title>{Title}</title>
      <meta name="keywords" content={"photos, videos, articles, passion, beauty, fashion, photography, travel, music, wallpapers, time off, tym off, timeoff, entertainment, Inspirational, Environment"} />
      <meta
        name="description"
        content={Description}
      />
      <meta property="og:title" content={Title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="tymoff" />
      <meta property="og:url" content={Url} />
      <meta
        property="og:description"
        content={Description}
      />
      <meta property="og:image" content={"https://www.tymoff.com/logo.png"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={Title} />
      <meta
        name="twitter:description"
        content={Description}
      />
      <meta name="twitter:image" content={"https://www.tymoff.com/logo.png"} />
      <meta property="twitter:url" content={Url} />
    </Helmet>
  );
};

export { DiscoverOptionTag };
