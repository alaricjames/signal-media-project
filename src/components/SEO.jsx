import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, schema }) => {
  const siteTitle = "Signal Media - Digital Marketing & Web Design in Harare";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Social Media Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logo.svg" />
      
      {/* Schema.org markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 