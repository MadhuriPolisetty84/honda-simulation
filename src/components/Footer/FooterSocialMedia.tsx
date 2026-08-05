import React from "react";
import Image from "next/image";

const FooterSocialMedia = () => {
  return (
    <div className="bg-red-700 text-white flex flex-col md:flex-row justify-between items-start md:items-center px-30 md:px-60 py-6 gap-6">
      <div>
        <h2 className="text-white font-bold tracking-wider text-sm">
          FOLLOW US
        </h2>
        <div className="flex items-center gap-5 ">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/fbicon.png"
              alt="Facebook"
              width={24}
              height={24}
              // className="invert brightness-0"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instaicon.png"
              alt="Instagram"
              width={24}
              height={24}
              //className="invert brightness-0"
            />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/utubeicon.png"
              alt="YouTube"
              width={24}
              height={24}
              //className="invert brightness-0"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedinicon.png"
              alt="LinkedIn"
              width={24}
              height={24}
              //  className="invert brightness-0"
            />
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-white font-bold tracking-wider text-sm">
          HONDA RACIING CORPORATION
        </h2>
        <div className="flex items-center gap-5 ">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/fbicon.png"
              alt="Facebook"
              width={24}
              height={24}
              // className="invert brightness-0"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instaicon.png"
              alt="Instagram"
              width={24}
              height={24}
              //className="invert brightness-0"
            />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/utubeicon.png"
              alt="YouTube"
              width={24}
              height={24}
              //className="invert brightness-0"
            />
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-white font-bold tracking-wider text-sm">
          HONDA RACING GLOBAL
        </h2>

        <div className="flex items-center gap-5 ">
          <a href="https://X.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/xicon.png"
              alt="LinkedIn"
              width={24}
              height={24}
              //  className="invert brightness-0"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/fbicon.png"
              alt="Facebook"
              width={24}
              height={24}
              // className="invert brightness-0"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instaicon.png"
              alt="Instagram"
              width={24}
              height={24}
              //className="invert brightness-0"
            />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/utubeicon.png"
              alt="YouTube"
              width={24}
              height={24}
              //className="invert brightness-0"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSocialMedia;
