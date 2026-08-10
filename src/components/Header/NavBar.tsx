"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    if (activeMenu != null) {
      document.body.style.overflow = "hidden"; // Locks scrolling 🔒
    } else {
      document.body.style.overflow = "auto"; // Enables scrolling 🔓
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup 🧹
    };
  }, [activeMenu]);

  return (
    <div className="relative w-full flex justify-center gap-8 px-10 py-2 z-999 text-sm border-b border-gray-200">
      <button
        onClick={() =>
          setActiveMenu(activeMenu === "products" ? null : "products")
        }
        className={
          activeMenu === "products"
            ? "bg-red-600 text-white px-4 py-2"
            : "px-4 py-2 hover:text-red-600 transition-colors"
        }
      >
        OUR PRODUCTS ∨
      </button>

      <button
        onClick={() =>
          setActiveMenu(activeMenu === "discover" ? null : "discover")
        }
        className={
          activeMenu === "discover"
            ? "bg-red-600 text-white px-4 py-2"
            : "px-4 py-2 hover:text-red-600 transition-colors"
        }
      >
        DISCOVER ∨
      </button>

      <button
        onClick={() => setActiveMenu(activeMenu === "safety" ? null : "safety")}
        className={
          activeMenu === "safety"
            ? "bg-red-600 text-white px-4 py-2"
            : "px-4 py-2 hover:text-red-600 transition-colors"
        }
      >
        SAFETY & TECHNOLOGY ∨
      </button>

      <div
        style={{
          maxHeight: activeMenu ? "100vh" : "0px",
          opacity: activeMenu ? 1 : 0,
          transform: activeMenu ? "translateY(0)" : "translateY(-10px)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          visibility: activeMenu ? "visible" : "hidden",
        }}
        className="absolute top-full left-0  w-full min-h-screen bg-black text-white p-12 shadow-xl flex justify-center overflow-hidden z-50 pointer-events-auto"
      >
        {/* 1. OUR PRODUCTS CONTENT */}
        {activeMenu === "products" && (
          <div
            id="OURPRODUCTS"
            className="flex gap-12 justify-center max-w-7xl w-full pt-6"
          >
            <div
              id="automobiles"
              className="flex flex-col items-center gap-6 w-60"
            >
              <Image
                src="/automobiles.png"
                alt="automobiles"
                width={700}
                height={300}
                className="rounded-2xl"
              />
              <Image
                src="/automobileiicon.png"
                alt="automobiles"
                width={30}
                height={30}
                className="h-8 w-auto"
              />
              <h2 className="text-white text-sm"> AUTOMOBILES</h2>
              <button className="bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-red-700 ">
                EXPLORE THE RANGE
              </button>
            </div>

            <div
              id="motorcycles"
              className="flex flex-col items-center gap-6 w-60"
            >
              <Image
                src="/motorcyles.png"
                alt="motorcycles"
                width={700}
                height={300}
                className="rounded-2xl"
              />
              <Image
                src="/motorcyclesicon.png"
                alt="motorcycles"
                width={30}
                height={30}
                className="h-8 w-auto"
              />
              <h2 className="text-white text-sm"> MOTORCYCLES</h2>
              <button className="bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-red-700 ">
                EXPLORE THE RANGE
              </button>
            </div>

            <div
              id="power products"
              className="flex flex-col items-center gap-6 w-60"
            >
              <Image
                src="/powerproducts.png"
                alt="power products"
                width={700}
                height={300}
                className="rounded-2xl"
              />
              <Image
                src="/powerproductsicon.png"
                alt="power products"
                width={80}
                height={30}
                className="w-20 h-7.5 object-contain"
              />
              <h2 className="text-white text-sm"> POWER PRODUCTS</h2>
              <button className="bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-red-700 ">
                EXPLORE THE RANGE
              </button>
            </div>

            <div
              id="outboard engines"
              className="flex flex-col items-center gap-6 w-60"
            >
              <Image
                src="/outboardengines.png"
                alt="outboard engines"
                width={700}
                height={300}
                className="rounded-2xl"
              />
              <Image
                src="/outboundenginesicon.png"
                alt="outboard engines"
                width={30}
                height={30}
                className="h-8 w-auto "
              />
              <h2 className="text-white text-sm"> OUTBOARD ENGINES</h2>
              <button className="bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-red-700 ">
                EXPLORE THE RANGE
              </button>
            </div>
          </div>
        )}
        {/* 2. DISCOVER CONTENT */}
        {activeMenu === "discover" && (
          <div
            id="DISCOVER"
            className="flex gap-12 justify-center max-w-7xl w-full pt-6"
          >
            <div
              id="HONDA PHILOSOPHY"
              className="flex flex-col items-center gap-6 w-60"
            >
              <Image
                src="/Hphilosophy.png"
                alt="HONDA PHILOSOPHY"
                width={700}
                height={300}
                className="rounded-2xl"
              />

              <h2 className="text-white text-sm"> HONDA PHILOSOPHY</h2>
              <button className="bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-red-700 ">
                DISCOVER
              </button>
            </div>

            <div
              id="HONDA HISTORY"
              className="flex flex-col items-center gap-6 w-60"
            >
              <Image
                src="/Hhistory.png"
                alt="HONDA HISTORY"
                width={700}
                height={300}
                className="rounded-2xl"
              />

              <h2 className="text-white text-sm"> HONDA HISTORY</h2>
              <button className="bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-red-700 ">
                DISCOVER
              </button>
            </div>

            <div
              id="HONDA NEWS"
              className="flex flex-col items-center gap-6 w-60"
            >
              <Image
                src="/Hnews.png"
                alt="HONDA NEWS"
                width={700}
                height={300}
                className="rounded-2xl"
              />

              <h2 className="text-white text-sm"> HONDA NEWS</h2>
              <button className="bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-red-700 ">
                DISCOVER
              </button>
            </div>

            <div
              id="HONDA WORLDWIDE"
              className="flex flex-col items-center gap-6 w-60"
            >
              <Image
                src="/Hworldwide.png"
                alt="HONDA WORLDWIDE"
                width={700}
                height={300}
                className="rounded-2xl"
              />

              <h2 className="text-white text-sm">HONDA WORLDWIDE</h2>
              <button className="bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-red-700 ">
                DISCOVER
              </button>
            </div>
          </div>
        )}
        {/* 3. SAFETY & ECHNOLOGY */}
        {activeMenu === "safety" && (
          <div
            id="SAFETY"
            className="flex gap-12 justify-center max-w-7xl w-full pt-6"
          >
            <div
              id="HONDA SAFETY"
              className="flex flex-col items-center gap-6 w-60"
            >
              <Image
                src="/Hsafety.png"
                alt="HONDA SAFETY"
                width={700}
                height={300}
                className="rounded-2xl"
              />

              <h2 className="text-white text-sm"> HONDA SAFETY</h2>
              <button className="bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-red-700 ">
                FIND OUT MORE
              </button>
            </div>

            <div
              id="HONDA SENSING"
              className="flex flex-col items-center gap-6 w-60"
            >
              <Image
                src="/Hsensing.png"
                alt="HONDA SENSING"
                width={700}
                height={300}
                className="rounded-2xl"
              />

              <h2 className="text-white text-sm"> HONDA SENSING</h2>
              <button className="bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-red-700 ">
                FIND OUT MORE
              </button>
            </div>

            <div
              id="HONDA TECHNOLOGY"
              className="flex flex-col items-center gap-6 w-60"
            >
              <Image
                src="/Htechnology.png"
                alt="HONDA TECHNOLOGY"
                width={700}
                height={300}
                className="rounded-2xl"
              />

              <h2 className="text-white text-sm"> HONDA TECHNOLOGY</h2>
              <button className="bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-red-700 ">
                FIND OUT MORE
              </button>
            </div>

            <div
              id="HONDA SUSTAINABILITY"
              className="flex flex-col items-center gap-6 w-60"
            >
              <Image
                src="/Hsustain.png"
                alt="HONDA SUSTAINABILITY"
                width={700}
                height={300}
                className="w-full h-38 object-cover rounded-2xl"
              />

              <h2 className="text-white text-sm">HONDA SUSTAINABILITY</h2>
              <button className="bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-red-700 ">
                FIND OUT MORE
              </button>
            </div>
          </div>
        )}

        {/* Shared Close Button */}
        <button
          onClick={() => setActiveMenu(null)}
          className="absolute top-6 right-8 text-white text-2xl hover:text-red-600 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
export default NavBar;
