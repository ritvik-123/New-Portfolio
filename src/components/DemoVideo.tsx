"use client";

import { useEffect, useRef } from "react";

export default function DemoVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster?: string;
  title: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) {
      ref.current?.play().catch(() => {
        // autoplay blocked; the visible controls still let the user press play
      });
    }
  }, []);

  return (
    <video
      ref={ref}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={`${title} demo video`}
      className="h-40 w-full bg-black object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
