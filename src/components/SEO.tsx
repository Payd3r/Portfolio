import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  imageUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  name,
  type,
  imageUrl,
}) => {
  const defaultTitle = 'Portfolio | Andrea Mauri - Sviluppatore Software'; // Sostituire con il tuo nome
  const defaultDescription =
    'Esplora il portfolio di Andrea Mauri, sviluppatore software specializzato in React, TypeScript e soluzioni web innovative.'; // Sostituire
  const siteUrl = 'https://www.tuosito.com'; // Sostituire con il tuo URL
  const defaultImage = `${siteUrl}/og-image.png`; // Immagine di fallback per i social

  const seo = {
    title: title ? `${title} | Portfolio` : defaultTitle,
    description: description || defaultDescription,
    image: imageUrl || defaultImage,
    url: siteUrl,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {name && <meta name="author" content={name} />}
    </Helmet>
  );
};

export default SEO; 