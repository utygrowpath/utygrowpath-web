"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SmoothImageProps = Omit<ImageProps, "onLoad" | "onError"> & {
  shellClassName?: string;
  placeholderClassName?: string;
};

export function SmoothImage({
  alt,
  className = "",
  fill,
  shellClassName = "",
  placeholderClassName = "",
  ...imageProps
}: SmoothImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <span
      aria-busy={!loaded && !failed}
      className={`smooth-image-shell ${fill ? "relative block h-full w-full" : "relative inline-block"} ${shellClassName}`}
    >
      {!loaded && !failed && (
        <span
          aria-hidden="true"
          className={`smooth-image-shimmer ${placeholderClassName}`}
        />
      )}
      <Image
        {...imageProps}
        alt={alt}
        fill={fill}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`smooth-image-content ${loaded ? "is-loaded" : ""} ${failed ? "is-failed" : ""} ${className}`}
      />
    </span>
  );
}
