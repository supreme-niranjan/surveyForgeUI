import React from 'react';

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  [key: string]: any;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt = "Image Name",
  className = "",
  ...props
}) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/assets/images/no_image.png";
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default Image;