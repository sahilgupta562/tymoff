import React from "react";
import { Helmet } from "react-helmet";

const HomeTag = () => {
  return (
    <Helmet>
      <title>Discover photos, videos and articles | tymoff</title>
      <meta name="keywords" content={"photos, videos, articles, passion, beauty, fashion, photography, travel, music, wallpapers, time off, tym off, timeoff, entertainment, Inspirational, Environment"} />
      <meta
        name="description"
        content={"tymoff is one of the largest social sharing apps in the world where you can discover photos, videos, gifs and articles and can share with your friends and family."}
      />
      <meta property="og:title" content={"Discover photos, videos and articles | tymoff"} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="tymoff" />
      <meta property="og:url" content="https://www.tymoff.com/" />
      <meta
        property="og:description"
        content={"tymoff is one of the largest social sharing apps in the world where you can discover photos, videos, gifs and articles and can share with your friends and family."}
      />
      <meta property="og:image" content={"https://www.tymoff.com/logo.png"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Discover photos, videos and articles | tymoff" />
      <meta
        name="twitter:description"
        content={"tymoff is one of the largest social sharing apps in the world where you can discover photos, videos, gifs and articles and can share with your friends and family."}
      />
      <meta name="twitter:image" content={"https://www.tymoff.com/logo.png"} />
      <meta property="twitter:url" content={"https://www.tymoff.com"} />
    </Helmet>
  );
};

export { HomeTag };
