"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const newsData = [
  {
    id: 1,
    title: "Honda Dominates Weekend: INDYCAR Victory...",
    description:
      "Honda enjoyed a strong weekend in global motorsport with a win for Alex Palou in INDYCAR and an all-Honda podium, plus Silverstone top-10s for Marini and Moreira.",
    images: "/latestnews1.jpg",
  },
  {
    id: 2,
    title: "Herlings Masters the Sands of Lommel with...",
    description:
      "Jeffrey Herlings produced another dominant performance at the MXGP of Flanders, winning every race across the weekend to secure his eighth overall victory of the season and extend his championship lead to 104...",
    images: "/latestnews2.jpg",
  },
  {
    id: 3,
    title: "Progress for Aston Martin at Hungarian GP,...",
    description:
      "Aston Martin Aramco F1 shows progress at the Hungarian GP with upgrades, while MXGP's Jeffrey Herlings extends his lead by 49 points in the Czech Republic. Toni Bou powers to a double TrialGP win in Great...",
    images: "/latestnews3.jpg",
  },
  {
    id: 4,
    title: "Herlings narrows the MXGP title gap in Britai...",
    description:
      "Herlings clinched MXGP victory in Britain to close the title gap, while Alonso and Aston Martin faced a difficult Belgian GP weekend; Hunter Lawrence dominated AMA Pro Motocross with a 1-1, claiming his fourth...",
    images: "/latestnews4.jpg",
  },
];

const LatestNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeNews = newsData[currentSlide];
  const prevSlide = (currentSlide - 1 + newsData.length) % newsData.length;

  // ⏱️ Auto-advance timer:
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsData.length);
    }, 6000); // changes slide every 5 seconds ⏳

    return () => clearInterval(timer); // cleanup on unmount 🧹
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-4 gap-8 items-center">
        {/* Left Column: Sliding Text Container 📑 */}
        <div className="col-span-2 relative overflow-hidden flex flex-col justify-center px-10 py-2 min-h-[320px]">
          {newsData.map((item, index) => {
            const isActive = currentSlide === index;
            const isPrev = prevSlide === index;

            let transitionClasses =
              "opacity-0 translate-y-full pointer-events-none"; // ⏳ Waiting off-screen below

            if (isActive) {
              transitionClasses = "opacity-100 translate-y-0 delay-500"; // 🟢 Slides up into center
            } else if (isPrev) {
              transitionClasses =
                "opacity-0 -translate-y-full pointer-events-none"; // 🔴 Slides up and exits off-screen
            }

            return (
              <div
                key={item.id}
                className={`absolute inset-0 flex flex-col justify-center px-10 py-2 transition-all duration-[1000ms] ease-out ${transitionClasses}`}
              >
                <h2 className="text-red-600 font-bold text-xl mb-6 tracking-wide">
                  LATEST NEWS
                </h2>
                <h3 className="text-gray-900 font-bold text-xl mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-black mb-6 font-light antialiased leading-relaxed">
                  {item.description}
                </p>
                <div>
                  <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-wider py-3 px-6 rounded-md transition duration-300">
                    LEARN MORE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* Right Column: Collage Image & Dots 🖼️ */}
        <div className="flex flex-col col-span-2 items-center">
          {/* Right Column: Collage Image & Dots 🖼️ */}
          <div className="w-full relative aspect-[16/11] rounded-xl overflow-hidden bg-white">
            {newsData.map((item, index) => {
              const isActive = currentSlide === index;
              const isPrev = prevSlide === index;

              let transitionClasses =
                "opacity-0 -translate-x-full pointer-events-none"; // ⏳ Waiting off-screen left

              if (isActive) {
                transitionClasses = "opacity-100 translate-x-0 delay-500"; // 🟢 Slides in from left to center
              } else if (isPrev) {
                transitionClasses =
                  "opacity-0 translate-x-full pointer-events-none"; // 🔴 Slides out to the right
              }

              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-[1000ms] ease-out ${transitionClasses}`}
                >
                  <Image
                    src={item.images}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation Dots with Progress Ring ⏱️ */}
          <div className="flex items-center gap-4 mt-6">
            {newsData.map((_, index) => {
              const isActive = currentSlide === index;

              return (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="relative w-6 h-6 flex items-center justify-center focus:outline-none"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {isActive && (
                    <svg
                      key={
                        currentSlide
                      } /* 🔁 Resets the animation each time slide changes */
                      className="absolute inset-0 w-full h-full -rotate-90"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        fill="none"
                        stroke="#dc2626" /* Red ring */
                        strokeWidth="2"
                        strokeDasharray="56.5"
                        className="animate-progress-ring"
                        style={{ animationDelay: "1s" }}
                      />
                    </svg>
                  )}

                  {/* Center dot 🔴 */}
                  <span
                    className={`rounded-full transition-all ${
                      isActive
                        ? "w-2 h-2 bg-red-600"
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LatestNews;
