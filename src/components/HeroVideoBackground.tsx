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
      {/* High-Fidelity Video Layer */}
      <video
        ref={videoRef}
        src="/assets/madisonlogic-hero.mp4"
        poster="/assets/madisonlogic-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-right lg:object-center opacity-85 filter brightness-100 contrast-105"
      />

      {/* Clean White Scrim for crisp text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent w-full lg:w-4/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white pointer-events-none" />
    </div>
  );
};

export default HeroVideoBackground;
