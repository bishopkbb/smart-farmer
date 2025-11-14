import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Smart Farmer - Your Agricultural Assistant',
  description = 'Empowering Nigerian farmers with smart, localized agricultural insights for better yields and sustainable farming practices. Offline-first crop guide, planting calendar, farm tracker, and pest diagnosis.',
  keywords = 'agriculture, farming, Nigeria, crop management, pest control, planting calendar, farm tracker, agricultural app, Nigerian farmers, smart farming, offline farming app',
  image = '/og-image.png',
  url = typeof window !== 'undefined' ? window.location.href : 'https://smartfarmer.ng',
  type = 'website',
  author = 'Smart Farmer Team',
}) => {
  // Construct full title
  const fullTitle = title.includes('Smart Farmer') 
    ? title 
    : `${title} | Smart Farmer`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Smart Farmer" />
      <meta property="og:locale" content="en_NG" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@smartfarmerng" />
      <meta name="twitter:site" content="@smartfarmerng" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#10b981" />
      <meta name="msapplication-TileColor" content="#10b981" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Smart Farmer" />
      
      {/* Geo Tags for Nigeria */}
      <meta name="geo.region" content="NG" />
      <meta name="geo.placename" content="Nigeria" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en-NG" />
    </Helmet>
  );
};

// Pre-configured SEO for different pages
export const HomePageSEO = () => (
  <SEO 
    title="Smart Farmer - Your Pocket Assistant for Better Planting and Profit"
    description="Free offline-first agricultural app for Nigerian farmers. Track crops, get pest solutions, view planting calendars, and access 20+ crop guides. Works without internet!"
  />
);

export const CropGuideSEO = () => (
  <SEO 
    title="Crop Guide - 20+ Nigerian Crops"
    description="Complete guide to growing 20+ crops in Nigeria including Maize, Rice, Cassava, Tomato, Yam, and more. Planting months, soil types, yields, and harvest times."
    keywords="crop guide Nigeria, Nigerian crops, maize farming, rice cultivation, cassava planting, tomato growing"
  />
);

export const CalendarSEO = () => (
  <SEO 
    title="Planting Calendar"
    description="Region-specific planting calendar for Nigerian farmers. Know exactly when to plant each crop based on your location - North-East, North-West, North-Central, South-West, South-South, or South-East."
    keywords="planting calendar Nigeria, farming calendar, crop planting schedule, Nigerian farming seasons"
  />
);

export const TrackerSEO = () => (
  <SEO 
    title="Farm Tracker"
    description="Track your crops from planting to harvest. Monitor progress, set reminders, and manage all your farming activities in one place. Completely offline."
    keywords="farm tracker, crop tracking, farm management, agricultural record keeping"
  />
);

export const PestSEO = () => (
  <SEO 
    title="Pest & Disease Diagnosis"
    description="Instant pest and disease solutions for your crops. Interactive diagnosis tool helps identify problems and provides organic and chemical treatment options."
    keywords="pest control Nigeria, crop diseases, agricultural pests, pest diagnosis, plant diseases"
  />
);

export default SEO;