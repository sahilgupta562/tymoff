import React from "react";
import { Helmet } from "react-helmet";

const CategoryTag = () => {
  return (
    <Helmet>
      <title>Discover photos, video and articles based on different categories | tymoff</title>
      <meta name="keywords" content={"photos, videos, articles, passion, beauty, fashion, photography, travel, music, wallpapers, time off, tym off, timeoff, entertainment, Inspirational, Environment"} />
      <meta
        name="description"
        content={"Find popular photos, videos or articles for any categories you can imagine."}
      />
      <meta property="og:title" content={"Discover photos, video and articles based on different categories | tymoff"} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="tymoff" />
      <meta property="og:url" content="https://www.tymoff.com/categories" />
      <meta
        property="og:description"
        content={"Find popular photos, videos or articles for any categories you can imagine."}
      />
      <meta property="og:image" content={"https://www.tymoff.com/logo.png"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Discover photos, video and articles based on different categories | tymoff" />
      <meta
        name="twitter:description"
        content={"Find popular photos, videos or articles for any categories you can imagine."}
      />
      <meta name="twitter:image" content={"https://www.tymoff.com/logo.png"} />
      <meta property="twitter:url" content={"https://www.tymoff.com/categories"} />
    </Helmet>
  );
};

export { CategoryTag };
