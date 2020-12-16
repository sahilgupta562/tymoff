import React from "react";
import { Helmet } from "react-helmet";

const DiscoverCategoryTag = () => {
  return (
    <Helmet>
      <title>Discover photos, videos and articles | tymoff</title>
      <meta name="keywords" content={"photos, videos, articles, passion, beauty, fashion, photography, travel, music, wallpapers, time off, tym off, timeoff, entertainment, Inspirational, Environment"} />
      <meta
        name="description"
        content={"Discover photos, videos and articles from friends that share your passion for beauty, fashion, photography, travel, music, wallpapers and more. Browse endless inspiration."}
      />
      <meta property="og:title" content={"Discover photos, videos and articles | tymoff"} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="tymoff" />
      <meta property="og:url" content="https://www.tymoff.com/discover-category" />
      <meta
        property="og:description"
        content={"Discover photos, videos and articles from friends that share your passion for beauty, fashion, photography, travel, music, wallpapers and more. Browse endless inspiration."}
      />
      <meta property="og:image" content={"https://www.tymoff.com/logo.png"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Discover photos, videos and articles | tymoff" />
      <meta
        name="twitter:description"
        content={"Discover photos, videos and articles from friends that share your passion for beauty, fashion, photography, travel, music, wallpapers and more. Browse endless inspiration."}
      />
      <meta name="twitter:image" content={"https://www.tymoff.com/logo.png"} />
      <meta property="twitter:url" content={"https://www.tymoff.com/discover-category"} />
    </Helmet>
  );
};

export { DiscoverCategoryTag };
