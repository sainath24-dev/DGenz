"use client";

import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  variant?: 'light' | 'dark';
}

// Pre-compute DottedMap SVGs once at module load to avoid 0ms delay on renders
const staticMap = new DottedMap({ height: 100, grid: "diagonal" });

const svgMapLightURI = `data:image/svg+xml;utf8,${encodeURIComponent(
  staticMap.getSVG({
    radius: 0.28,
    color: "#cbd5e1",
    shape: "circle",
    backgroundColor: "transparent",
  })
)}`;

const svgMapDarkURI = `data:image/svg+xml;utf8,${encodeURIComponent(
  staticMap.getSVG({
    radius: 0.28,
    color: "#475569",
    shape: "circle",
    backgroundColor: "transparent",
  })
)}`;

const projectPoint = (lat: number, lng: number) => {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
};

const createCurvedPath = (
  start: { x: number; y: number },
  end: { x: number; y: number }
) => {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 45;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
};

export function WorldMap({
  dots = [],
  lineColor = "#2563eb",
  variant = 'light',
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const mapUri = variant === 'light' ? svgMapLightURI : svgMapDarkURI;

  return (
    <div className="w-full aspect-[2/1] bg-transparent rounded-lg relative font-sans">
      <img
        src={mapUri}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_8%,white_92%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={lineColor}
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeDasharray="4 6"
                initial={{
                  pathLength: 0,
                  opacity: 0
                }}
                animate={{
                  pathLength: 1,
                  opacity: 0.8
                }}
                transition={{
                  pathLength: { duration: 0.8, delay: 0.1 * i, ease: "easeOut" },
                  opacity: { duration: 0.3 }
                }}
                key={`start-upper-${i}`}
              />
            </g>
          );
        })}

        {/* Clean Static Professional Pin Markers */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-group-${i}`}>
              <circle
                cx={startPoint.x}
                cy={startPoint.y}
                r="3.5"
                fill={lineColor}
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              <circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="3.5"
                fill={lineColor}
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default WorldMap;