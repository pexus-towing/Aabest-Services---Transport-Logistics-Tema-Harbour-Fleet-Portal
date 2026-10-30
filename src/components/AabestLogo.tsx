import React, { useState } from 'react';

export interface AabestLogoProps {
  /**
   * 'dark-bg': For dark navy/black/slate-900/blue backgrounds (uses https://savedly.net/f/qe54b2yp)
   * 'light-bg': For white/slate-50/gray-100 backgrounds (uses https://savedly.net/f/rsyuzqeh)
   */
  variant?: 'dark-bg' | 'light-bg';
  className?: string;
  alt?: string;
}

export const LOGO_URLS = {
  // Dark backgrounds
  darkBg: {
    savedlyLink: 'https://savedly.net/f/qe54b2yp',
    cdnUrl: 'https://cdn.savedly.net/qe54b2yp',
    fallbackLocal: '/images/logo/logo-dark-bg.png',
  },
  // Light backgrounds
  lightBg: {
    savedlyLink: 'https://savedly.net/f/rsyuzqeh',
    cdnUrl: 'https://cdn.savedly.net/rsyuzqeh',
    fallbackLocal: '/images/logo/logo-light-bg.png',
  },
};

export const AabestLogo: React.FC<AabestLogoProps> = ({
  variant = 'dark-bg',
  className = 'h-[68px] sm:h-[75px] w-auto object-contain',
  alt = 'AABEST SERVICES — Transport & Logistics',
}) => {
  const config = variant === 'dark-bg' ? LOGO_URLS.darkBg : LOGO_URLS.lightBg;
  const [imgSrc, setImgSrc] = useState(config.cdnUrl);
  const [hasFailed, setHasFailed] = useState(false);

  // Update src if variant changes
  React.useEffect(() => {
    setImgSrc(config.cdnUrl);
    setHasFailed(false);
  }, [variant, config.cdnUrl]);

  const handleError = () => {
    if (!hasFailed) {
      setHasFailed(true);
      setImgSrc(config.fallbackLocal);
    }
  };

  return (
    <img
      src={imgSrc}
      onError={handleError}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      loading="eager"
      data-savedly-link={config.savedlyLink}
    />
  );
};
