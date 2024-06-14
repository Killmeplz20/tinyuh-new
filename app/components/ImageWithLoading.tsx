"use client";
import React, { useState } from "react";
import Image from "next/image";
import Loading from "./loading";
import Grid from "./grid";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}
const ImageWithLoading: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false); // Anda bisa menambahkan penanganan kesalahan khusus di sini
  };

  return (
    <Grid className={className}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loading />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={` ${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      />
    </Grid>
  );
};

export default ImageWithLoading;
