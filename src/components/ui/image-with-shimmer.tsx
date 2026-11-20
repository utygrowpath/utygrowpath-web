"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

interface ImageWithShimmerProps extends ImageProps {
  wrapperClassName?: string;
}

export function ImageWithShimmer({
  src,
  alt,
  className,
  wrapperClassName = "",
  fill,
  width,
  height,
  priority,
  ...props
}: ImageWithShimmerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${
        fill ? "h-full w-full" : "inline-block"
      } ${wrapperClassName}`}
    >
      {/* Skeleton Shimmer Background (Season 4 Warm Cream Palette) */}
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="shimmer-placeholder absolute inset-0 z-0 h-full w-full rounded-[inherit] bg-[#f5ede0]"
        />
      )}

      {/* Target Image with Smooth Transition */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        className={`transition-all duration-500 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
        } ${className || ""}`}
        {...props}
      />
    </div>
  );
}
