// src/components/StickyTab/StickyTabBar.tsx

const StickyTabBar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-2 text-sm bg-gray-100">
      <button className="px-4 py-2 hover:bg-red-600 hover:text-white transition-colors">
        HOW WE MOVE YOU
      </button>

      <button className="px-6 py-2 bg-red-600 text-white font-bold flex items-center gap-1">
        OUR BRAND <span>▲</span>
      </button>

      <button className="px-4 py-2 hover:bg-red-600 hover:text-white transition-colors">
        FUTURE INNOVATION
      </button>
    </nav>
  );
};

export default StickyTabBar;
