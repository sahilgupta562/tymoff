import React from "react";
import { Helmet } from "react-helmet";

const ContactTag = () => {
  return (
    <Helmet>
      <title>Contact the support team | tymoff</title>
      <meta name="keywords" content={"photos, videos, articles, passion, beauty, fashion, photography, travel, music, wallpapers, time off, tym off, timeoff, entertainment, Inspirational, Environment"} />
      <meta
        name="description"
        content={"Help me tymoff. You got it. Describe the problem you are having and a member of our support team will be in touch with you."}
      />
      <meta property="og:title" content={"Contact the support team | tymoff"} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="tymoff" />
      <meta property="og:url" content="https://www.tymoff.com/contact" />
      <meta
        property="og:description"
        content={"Help me tymoff. You got it. Describe the problem you are having and a member of our support team will be in touch with you."}
      />
      <meta property="og:image" content={"https://www.tymoff.com/logo.png"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact the support team | tymoff" />
      <meta
        name="twitter:description"
        content={"Help me tymoff. You got it. Describe the problem you are having and a member of our support team will be in touch with you."}
      />
      <meta name="twitter:image" content={"https://www.tymoff.com/logo.png"} />
      <meta property="twitter:url" content={"https://www.tymoff.com/contact"} />
    </Helmet>
  );
};

export { ContactTag };
