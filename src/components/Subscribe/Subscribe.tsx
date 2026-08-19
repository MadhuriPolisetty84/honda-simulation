"use client";

import React, { useEffect, useRef, useState, SyntheticEvent } from "react";

export default function Subscribe() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.8 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e: SyntheticEvent) => {
    e.preventDefault(); // ✋ Stops the page from refreshing!
    if (fullName.trim() !== "" && email.trim() !== "" && isValidEmail) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFullName("");
        setEmail("");
      }, 3000);
    }
    if (fullName.trim() == "") {
      setNameError(true);
    }
    if (email.trim() == "") {
      setEmailError(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#ededed] py-14 px-4 flex flex-col  items-center justify-center font-sans"
    >
      {/* 🏷️ Header Block */}
      <div
        className={`text-center mb-7 transition-all duration-[1000ms] ease-out transform ${
          isVisible
            ? "opacity-100 translate-y-0 delay-500"
            : "opacity-0 translate-y-[60px] delay-700"
        }`}
      >
        <h2 className="text-[18px] font-bold text-[#111111] leading-tight tracking-widest mb-3">
          Stay up-to-date with Honda
        </h2>
        <p className="text-[15px] font-mono text-[#222222] tracking-wider">
          Subscribe now to become a Honda insider.
        </p>
      </div>

      {isSubmitted ? (
        <div className=" bg-blue-200 border text-[#0f6848] px-30 py-4 text-center rounded text-14px">
          <span className="font-bold">Thankyou</span> for subscribing to our
          newsletter.
        </div>
      ) : (
        <form
          className={`w-full max-w-[860px] flex flex-row items-end justify-center transition-all duration-[1000ms] ease-out transform  align-items: flex-end ${
            isVisible
              ? "opacity-100 translate-y-0 delay-900"
              : "opacity-0 translate-y-[60px] delay-0"
          }`}
        >
          {/* Full Name */}
          <div className="flex flex-col flex-1 gap-5">
            <label
              htmlFor="fullName"
              className="text-[12px] font-normal text-[#111111] uppercase tracking-[0.04em]"
            >
              FULL NAME
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Full Name "
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`h-[70px] w-80 bg-white rounded-[5px] px-3.5 text-[14px] text-[#333333]
             placeholder:text-[#9e9e9e] placeholder:text-[12px]  outline-none 
            ${nameError ? "border border-red-700" : "border-0"} `}
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col flex-1 gap-5">
            <label
              htmlFor="email"
              className="text-[12px] font-normal text-[#111111] uppercase tracking-[0.04em]"
            >
              EMAIL ADDRESS<span className="text-[#cc0000] ml-0.5">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={`h-[70px] w-80 bg-white rounded-[5px] px-3.5 text-[14px]
           text-[#333333] placeholder:text-[#9e9e9e] placeholder:text-[12px] outline-none
            ${emailError ? "border border-red-700" : "border-0"}`}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubscribe}
            type="submit"
            className="h-[70px] px-5 bg-[#cc0000] hover:bg-[#b00000] text-white text-[12px] font-bold 
           uppercase rounded tracking-wider transition-colors cursor-pointer flex items-center justify-center "
          >
            SUBSCRIBE NOW
          </button>
        </form>
      )}
    </section>
  );
}
