import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="flex flex-row gap-30 px-15 py-12 text-sm  bg-neutral-900">
      <div className="relative w-40 h-12">
        <div>
          <div className="relative w-56 h-14 shrink-0">
            <Image
              src="/honda-logo.png"
              alt="Honda Logo"
              fill
              className="object-contain object-left"
            />
          </div>
        </div>
      </div>
      <div className="text-white">
        <h2>OUR PRODUCTS</h2>
        <ul className="flex flex-col gap-2 mt-4">
          <Link href="https://honda-mideast.com/en">Automobiles</Link>
          <Link href="https://honda-mideast.com/en">Motorcycles</Link>
          <Link href="https://honda-mideast.com/en">Power Products</Link>
          <Link href="https://honda-mideast.com/en">Honda Marine</Link>
        </ul>
      </div>

      <div className="text-white">
        <h2>DISCOVER</h2>
        <ul className="flex flex-col gap-2 mt-4">
          <Link href="https://honda-mideast.com/en">Honda Heritage</Link>
          <Link href="https://honda-mideast.com/en">Honda Safety</Link>
          <Link href="https://honda-mideast.com/en">Honda Technology</Link>
          <Link href="https://honda-mideast.com/en">Honda Worldwide</Link>
        </ul>
      </div>

      <div className="text-white">
        <h2>COUNTRY</h2>
        <div className="grid grid-cols-4 gap-x-8 gap-y-4 mt-4">
          <div>Saudi Arabia</div>
          <div>Bahrain</div>
          <div>Jordan</div>
          <div>Kuwait</div>
          <div>Lebanon</div>
          <div>Oman</div>
          <div>Qatar</div>
          <div>Egypt</div>
          <div>Ghana</div>
          <div>UAE</div>
          <div>Benin</div>
          <div>Morocco</div>
          <div>Tunisia</div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
