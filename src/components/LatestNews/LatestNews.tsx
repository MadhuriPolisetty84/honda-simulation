import Image from "next/image";
const LatestNews = () => {
  return (
    <div className="grid grid-cols-5 gap-8">
      <div className="col-span-2 flex flex-col justify-center px-10 py-2">
        <h2 className="text-red-600 font-bold text-sm mb-2">LATEST NEWS</h2>
        <h3 className="text-2xl font-bold mb-4">
          Honda Celebrates 40th Anniversary of First F1...
        </h3>
        <p className="text-gray-700 mb-6">
          Honda marked a landmark year in its motorsport heritage at the
          Goodwood Festival of Speed 2026, combining a celebration of the 40th
          anniversary of its first FIA Formula One World Championship™
          Constructor title with a...
        </p>
        <button className="bg-red-600 text-white font-bold px-6 py-3 w-fit flex items-center gap-2">
          LEARN MORE <span>›</span>
        </button>
      </div>

      <div className="col-span-3">
        <Image
          className="w-full aspect-video object-cover"
          src="/latestnews.png"
          alt="Honda F1 40th Anniversary"
          width={1920}
          height={300}
        />
      </div>
    </div>
  );
};
export default LatestNews;
