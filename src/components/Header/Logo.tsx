import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <Image src="/honda-logo.png" alt="Honda Logo" width={300} height={300} />
    </div>
  );
};

export default Logo;
