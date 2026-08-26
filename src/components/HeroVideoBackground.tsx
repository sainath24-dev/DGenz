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

  // Initialize and play first video
  useEffect(() => {
    if (videoRefA.current) {
      videoRefA.current.src = videos[0];
      videoRefA.current.load();
      videoRefA.current.play().catch(() => {});
    }
    if (videoRefB.current && videos.length > 1) {
      videoRefB.current.src = videos[1];
      videoRefB.current.load();
    }
  }, [videos]);

  // Playlist cycler every intervalSec
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIdx + 1) % videos.length;
      const followingIndex = (nextIndex + 1) % videos.length;

      if (activeLayer === 'A') {
        // Activate B
        if (videoRefB.current) {
          videoRefB.current.src = videos[nextIndex];
          videoRefB.current.currentTime = 0;
          videoRefB.current.play().catch(() => {});
        }
        setActiveLayer('B');

        // Preload next on A after fade
        setTimeout(() => {
          if (videoRefA.current) {
            videoRefA.current.src = videos[followingIndex];
            videoRefA.current.load();
          }
        }, 800);
      } else {
        // Activate A
        if (videoRefA.current) {
          videoRefA.current.src = videos[nextIndex];
          videoRefA.current.currentTime = 0;
          videoRefA.current.play().catch(() => {});
        }
        setActiveLayer('A');

        // Preload next on B after fade
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
      
      {/* Video Layer A - 100% Full Video Opacity */}
      <video
        ref={videoRefA}
        muted
        playsInline
        autoPlay
        loop
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out scale-100 ${
          activeLayer === 'A' ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Video Layer B - 100% Full Video Opacity */}
      <video
        ref={videoRefB}
        muted
        playsInline
        autoPlay
        loop
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out scale-100 ${
          activeLayer === 'B' ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Ultra-Minimal Overlay so Video is 100% Clear & Prominent */}
      <div className="absolute inset-0 bg-slate-950/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40 pointer-events-none" />
    </div>
  );
};

export default HeroVideoBackground;
