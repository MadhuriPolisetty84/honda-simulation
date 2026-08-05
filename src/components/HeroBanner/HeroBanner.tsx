import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="w-full">
      <Image
        className="w-full"
        src="/hero-banner.png"
        alt="Honda Hero Banner"
        width={1920}
        height={300}
      />
    </div>
  );
};

export default HeroBanner;
