import React, { useState } from 'react';
import { cn } from '../../utils/cn';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  aspectRatio?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className,
  aspectRatio,
  fallbackSrc = '/assets/images/hero_photo.jpg',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    if (!isError) {
      setIsError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc || fallbackSrc}
      alt={alt || 'Velocity Chess Academy'}
      onError={handleError}
      loading="lazy"
      className={cn('object-cover', className)}
      {...props}
    />
  );
};
