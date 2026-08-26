import React, { useState, useEffect, useRef } from 'react';

interface HeroVideoBackgroundProps {
  videos?: string[];
  intervalSec?: number;
}

const defaultVideos = [
  '/assets/vid1.mp4',
  '/assets/vid2.mp4',
  '/assets/vid3.mp4',
  '/assets/vid4.mp4',
  '/assets/vid5.mp4',
  '/assets/vid6.mp4',
  '/assets/vid7.mp4'
];

export const HeroVideoBackground: React.FC<HeroVideoBackgroundProps> = ({
  videos = defaultVideos,
  intervalSec = 3.5
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Pre-play all videos on mount (standard mobile-friendly approach)
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.setAttribute('playsinline', 'true');
        video.setAttribute('webkit-playsinline', 'true');
        
        // Attempt play
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay was prevented (e.g. low power mode)
          });
        }
      }
    });
  }, [videos]);

  // Playlist cycler: smoothly fade between videos
  useEffect(() => {
    if (videos.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIdx(prev => {
        const next = (prev + 1) % videos.length;
        const nextVideo = videoRefs.current[next];
        if (nextVideo) {
          nextVideo.currentTime = 0;
          nextVideo.play().catch(() => {});
        }
        return next;
      });
    }, intervalSec * 1000);

    return () => clearInterval(timer);
  }, [videos, intervalSec]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950 pointer-events-none">
      
      {/* Fallback Poster for Mobile Low Power Mode */}
      <img
        src="/assets/img1.jpg"
        alt="DGenz Media background"
        className="absolute inset-0 w-full h-full object-cover object-center scale-100 filter brightness-90"
      />

      {/* Parallel Preloaded Video Layers for 100% Mobile Reliability */}
      {videos.map((src, idx) => (
        <video
          key={src}
          ref={el => { videoRefs.current[idx] = el; }}
          src={src}
          muted
          defaultMuted
          playsInline
          autoPlay
          loop
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out scale-100 ${
            activeIdx === idx ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Subtle vignette overlay so video is 100% visible while text is crisp */}
      <div className="absolute inset-0 bg-slate-950/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroVideoBackground;
