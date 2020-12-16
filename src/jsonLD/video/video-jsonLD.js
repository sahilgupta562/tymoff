import React from "react";

const VideoJsonLD = ({ ContentUrl, Title, ContentImageUrl, Description, EmbedUrl, UploadDate }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: Title,
    description: Description,
    thumbnailUrl: [ContentImageUrl],
    uploadDate: UploadDate,
    contentUrl: ContentUrl,
    embedUrl: EmbedUrl
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}></script>;
};

export { VideoJsonLD };
