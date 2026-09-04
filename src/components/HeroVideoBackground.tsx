import React, { useRef, useEffect } from 'react';

export const HeroVideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.playsInline = true;
      videoRef.current.setAttribute('playsinline', 'true');
      videoRef.current.setAttribute('webkit-playsinline', 'true');
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-white">
      {/* High-Fidelity Video Layer with Full Opacity on Right */}
      <video
        ref={videoRef}
        src="/assets/madisonlogic-hero.mp4"
        poster="/assets/madisonlogic-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-right opacity-100 filter brightness-100 contrast-105"
      />

      {/* Left-Side Scrim Only: Solid/clean white for text readability on left, completely transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-white/70 to-transparent w-full md:w-3/5 lg:w-[52%] pointer-events-none" />
      
      {/* Subtle Top & Bottom Hairline Blends */}
      <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroVideoBackground;
