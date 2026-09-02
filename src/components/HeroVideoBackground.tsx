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
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#edf2f7]">
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
        className="w-full h-full object-cover object-right lg:object-center opacity-85 filter brightness-105 contrast-105"
      />

      {/* Gentle Platinum Scrim */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc]/95 via-[#f8fafc]/75 to-transparent w-full lg:w-4/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#f1f5f9] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/70 via-transparent to-[#f1f5f9] pointer-events-none" />
    </div>
  );
};

export default HeroVideoBackground;
