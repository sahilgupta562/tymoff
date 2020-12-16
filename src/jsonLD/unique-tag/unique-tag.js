import React from "react";
import { Helmet } from "react-helmet";

const UniqueTag = ({ Title, Description, ContentUrl, ContentImageUrl, Synonym }) => {
  return (
    <Helmet>
      <title> {Title} - tymoff</title>
      <meta name="description" content={Description} />
      {Synonym ? <meta name="keywords" content={Synonym} /> : null}
      <meta property="og:title" content={Title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="tymoff" />
      <meta property="og:url" content={ContentUrl} />
      <meta property="og:description" content={Description} />
      <meta property="og:image" content={ContentImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={Title} />
      <meta name="twitter:description" content={Description} />
      <meta name="twitter:image" content={ContentImageUrl} />
      <meta property="twitter:url" content={ContentUrl} />

      <link rel="canonical" href={ContentUrl} />
    </Helmet>
  );
};

export { UniqueTag };
