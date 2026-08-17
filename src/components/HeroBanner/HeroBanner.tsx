"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const HeroBanner = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      const initialTimer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 2000);
      return () => clearTimeout(initialTimer);
    }

    const timer = setInterval(() => {
      setActiveTab((activeTab) => (activeTab + 1) % 3);
    }, 6000);
    return () => clearInterval(timer); // Cleanup timer on unmount 🧹
  }, [isInitialLoad]);

  return (
    <div className="relative h-[calc(100vh-150px)] w-full overflow-hidden">
      {/* Animated Wrapper 🎬 */}
      <div key={activeTab} className="absolute inset-0 animate-slide-up">
        {isInitialLoad ? (
          <Image
            src={"/herobannerpicture.png"}
            alt="hero honda"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          ></Image>
        ) : (
          <>
            {activeTab === 0 && (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="/hondavideo.mp4" type="video/mp4" />
              </video>
            )}

            {activeTab === 1 && (
              <div>
                <Image
                  src="/ourbrandTab.webp"
                  alt="OUR BRAND"
                  fill
                  className="object-cover"
                ></Image>
                {/* Text & Button Overlay 🏷️ */}
                <div className="absolute left-9 px-10 top-67 text-white max-w-md z-10">
                  <h2 className="text-4xl font-bold mb-4 tracking-wide">
                    OUR BRAND
                  </h2>
                  <p className="text-sm leading-relaxed mb-6">
                    From its inception to the present and into the future, Honda
                    aims to be a brand in harmony with people worldwide, guided
                    by its unique philosophy.
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white text-bold font-bold text-xs tracking-wider uppercase px-6 py-3 rounded transition-colors">
                    LEARN MORE
                  </button>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div>
                <Image
                  src="/futureinnovationtab.webp"
                  alt="FUTURE INNOVATION"
                  fill
                  className="object-cover"
                ></Image>

                <div className="absolute left-16 px-10 bottom-[18%] text-white max-w-xl z-10">
                  <h2 className="text-3xl font-bold mb-8 tracking-wide">
                    FUTURE INNOVATION
                  </h2>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs tracking-wider uppercase px-4 py-3 rounded transition-colors">
                    LEARN MORE
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <nav className="grid grid-cols-3 items-center absolute bottom-0 left-0 w-full z-10 text-sm bg-gray-100 divide-x divide-gray-300">
        <button
          onClick={() => setActiveTab(0)}
          className={`w-full py-4 transition-colors ${
            activeTab === 0
              ? "bg-red-600 text-white font-bold"
              : "hover:bg-red-600 hover:text-white"
          }`}
        >
          HOW WE MOVE YOU
        </button>

        <button
          onClick={() => setActiveTab(1)}
          className={`w-full py-4 transition-colors flex items-center justify-center gap-1 ${
            activeTab === 1
              ? "bg-red-600 text-white font-bold"
              : "hover:bg-red-600 hover:text-white"
          }`}
        >
          OUR BRAND {activeTab === 1 && <span>▲</span>}
        </button>

        <button
          onClick={() => setActiveTab(2)}
          className={`w-full py-4 transition-colors ${
            activeTab === 2
              ? "bg-red-600 text-white font-bold"
              : "hover:bg-red-600 hover:text-white"
          }`}
        >
          FUTURE INNOVATION
        </button>
      </nav>
    </div>
  );
};

export default HeroBanner;
