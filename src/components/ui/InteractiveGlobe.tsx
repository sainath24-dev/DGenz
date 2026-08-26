import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type GlobeRegion = 'all' | 'na' | 'emea' | 'apac' | 'latam';

interface Hub {
  name: string;
  lat: number;
  lng: number;
  region: GlobeRegion;
}

const HUBS: Hub[] = [
  { name: 'New York', lat: 40.7128, lng: -74.006, region: 'na' },
  { name: 'San Francisco', lat: 37.7749, lng: -122.4194, region: 'na' },
  { name: 'Toronto', lat: 43.6532, lng: -79.3832, region: 'na' },
  { name: 'London', lat: 51.5074, lng: -0.1278, region: 'emea' },
  { name: 'Frankfurt', lat: 50.1109, lng: 8.6821, region: 'emea' },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708, region: 'emea' },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, region: 'apac' },
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503, region: 'apac' },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093, region: 'apac' },
  { name: 'Mumbai', lat: 19.076, lng: 72.8777, region: 'apac' },
  { name: 'São Paulo', lat: -23.5505, lng: -46.6333, region: 'latam' },
  { name: 'Mexico City', lat: 19.4326, lng: -99.1332, region: 'latam' }
];

const ARCS = [
  { start: HUBS[0], end: HUBS[3] }, // NY -> London
  { start: HUBS[1], end: HUBS[7] }, // SF -> Tokyo
  { start: HUBS[3], end: HUBS[6] }, // London -> Singapore
  { start: HUBS[6], end: HUBS[8] }, // Singapore -> Sydney
  { start: HUBS[4], end: HUBS[5] }, // Frankfurt -> Dubai
  { start: HUBS[5], end: HUBS[9] }, // Dubai -> Mumbai
  { start: HUBS[0], end: HUBS[10] }, // NY -> São Paulo
  { start: HUBS[1], end: HUBS[11] } // SF -> Mexico City
];

interface InteractiveGlobeProps {
  className?: string;
}

const GLOBE_RADIUS = 100;

function latLngToVector3(lat: number, lng: number, radius: number = GLOBE_RADIUS): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

export const InteractiveGlobe: React.FC<InteractiveGlobeProps> = ({
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isUserDraggingRef = useRef<boolean>(false);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 2000);
    camera.position.z = 290;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Optimized Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(400, 200, 300);
    scene.add(dirLight1);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = 'anonymous';

    const earthTexture = textureLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'
    );
    const earthSpecular = textureLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'
    );
    const cloudsTexture = textureLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
    );

    // Earth Sphere
    const earthGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 48, 48);
    const earthMat = new THREE.MeshPhongMaterial({
      map: earthTexture,
      specularMap: earthSpecular,
      specular: new THREE.Color(0x222222),
      shininess: 15
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // Clouds Sphere
    const cloudsGeo = new THREE.SphereGeometry(GLOBE_RADIUS + 1.2, 36, 36);
    const cloudsMat = new THREE.MeshLambertMaterial({
      map: cloudsTexture,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeo, cloudsMat);
    globeGroup.add(cloudsMesh);

    // Hubs
    HUBS.forEach(hub => {
      const pos = latLngToVector3(hub.lat, hub.lng, GLOBE_RADIUS + 0.8);
      const dotGeo = new THREE.SphereGeometry(2.0, 12, 12);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.position.copy(pos);
      globeGroup.add(dotMesh);
    });

    // Great Circle Curved Arcs
    ARCS.forEach(arc => {
      const vStart = latLngToVector3(arc.start.lat, arc.start.lng, GLOBE_RADIUS + 1);
      const vEnd = latLngToVector3(arc.end.lat, arc.end.lng, GLOBE_RADIUS + 1);

      const mid = vStart.clone().add(vEnd).multiplyScalar(0.5);
      const dist = vStart.distanceTo(vEnd);
      mid.normalize().multiplyScalar(GLOBE_RADIUS + Math.min(dist * 0.3, 35));

      const curve = new THREE.QuadraticBezierCurve3(vStart, mid, vEnd);
      const points = curve.getPoints(30);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.75
      });
      const line = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(line);
    });

    // Mouse Interaction
    const handleMouseDown = (e: MouseEvent) => {
      isUserDraggingRef.current = true;
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isUserDraggingRef.current) return;
      const deltaX = e.clientX - mousePosRef.current.x;
      const deltaY = e.clientY - mousePosRef.current.y;

      globeGroup.rotation.y += deltaX * 0.006;
      globeGroup.rotation.x = Math.max(-0.8, Math.min(0.8, globeGroup.rotation.x + deltaY * 0.006));

      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isUserDraggingRef.current = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Performance Intersection Observer (Only render when visible on screen)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop with visibility guard
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!isVisibleRef.current) return;

      cloudsMesh.rotation.y += 0.0004;

      if (!isUserDraggingRef.current) {
        globeGroup.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`w-full h-full min-h-[380px] sm:min-h-[460px] relative ${className}`}>
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};

export default InteractiveGlobe;
