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
  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeLayer, setActiveLayer] = useState<'A' | 'B'>('A');
  const videoRefA = useRef<HTMLVideoElement | null>(null);
  const videoRefB = useRef<HTMLVideoElement | null>(null);

  // Play videos reliably on mobile and desktop
  useEffect(() => {
    const playVideo = (v: HTMLVideoElement | null) => {
      if (!v) return;
      v.muted = true;
      v.playsInline = true;
      v.setAttribute('playsinline', 'true');
      v.setAttribute('webkit-playsinline', 'true');
      v.play().catch(() => {});
    };

    if (videoRefA.current) {
      videoRefA.current.src = videos[0];
      videoRefA.current.load();
      playVideo(videoRefA.current);
    }
    if (videoRefB.current && videos.length > 1) {
      videoRefB.current.src = videos[1];
      videoRefB.current.load();
    }

    const handleUserInteraction = () => {
      playVideo(activeLayer === 'A' ? videoRefA.current : videoRefB.current);
    };

    window.addEventListener('touchstart', handleUserInteraction, { once: true, passive: true });
    window.addEventListener('scroll', handleUserInteraction, { once: true, passive: true });
    window.addEventListener('click', handleUserInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
    };
  }, [videos, activeLayer]);

  // Playlist cycler every intervalSec
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIdx + 1) % videos.length;
      const followingIndex = (nextIndex + 1) % videos.length;

      if (activeLayer === 'A') {
        if (videoRefB.current) {
          videoRefB.current.src = videos[nextIndex];
          videoRefB.current.currentTime = 0;
          videoRefB.current.play().catch(() => {});
        }
        setActiveLayer('B');

        setTimeout(() => {
          if (videoRefA.current) {
            videoRefA.current.src = videos[followingIndex];
            videoRefA.current.load();
          }
        }, 800);
      } else {
        if (videoRefA.current) {
          videoRefA.current.src = videos[nextIndex];
          videoRefA.current.currentTime = 0;
          videoRefA.current.play().catch(() => {});
        }
        setActiveLayer('A');

        setTimeout(() => {
          if (videoRefB.current) {
            videoRefB.current.src = videos[followingIndex];
            videoRefB.current.load();
          }
        }, 800);
      }

      setCurrentIdx(nextIndex);
    }, intervalSec * 1000);

    return () => clearInterval(timer);
  }, [currentIdx, activeLayer, videos, intervalSec]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950 pointer-events-none">
      
      {/* Video Layer A */}
      <video
        ref={videoRefA}
        muted
        playsInline
        autoPlay
        loop
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out scale-100 ${
          activeLayer === 'A' ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Video Layer B */}
      <video
        ref={videoRefB}
        muted
        playsInline
        autoPlay
        loop
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out scale-100 ${
          activeLayer === 'B' ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
    </div>
  );
};

export default HeroVideoBackground;
