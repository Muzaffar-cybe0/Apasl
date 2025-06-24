import { useEffect, useState } from "react";

export default function ResponsiveYouTubePlayer() {
  const [iframeSize, setIframeSize] = useState({ width: 560, height: 315 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        // Desktop / Monitor
        setIframeSize({ width: 960, height: 540 });
      } else if (width >= 1024) {
        // Laptop
        setIframeSize({ width: 800, height: 450 });
      } else if (width >= 768) {
        // Tablet
        setIframeSize({ width: 640, height: 360 });
      } else {
        // Mobile
        setIframeSize({ width: "100%", height: 200 });
      }
    };

    handleResize(); // Call once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Video Player
      </h2>

      {/* Dynamic iframe based on screen */}
      <div className="flex justify-center">
        <iframe
          width={iframeSize.width}
          height={iframeSize.height}
          src="https://www.youtube.com/embed/4mrngtfR5Hw?si=B_qVNkwg5J6fTpRM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
