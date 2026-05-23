"use client";

import { ReactNode, useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiBehance,
  SiCanva,
  SiExpress,
  SiFigma,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import Image from "next/image";

type AboutSlide = {
  title: string;
  image: string;
  copy: string[];
  tools: ReactNode[];
};

const AboutPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides: AboutSlide[] = [
    {
      title: "Develop",
      image: "/assets/images/dev.webp",
      copy: [
        "I design both front-end and back-end websites. With the skills I have accumulated over more than 6 years of my software engineering journey, I build seamless applications.",
        "I expertise in node alongside modern frameworks like react, next and express. Check below whether I am fit for your work or not.",
      ],
      tools: [
        <FaReact key="react" className="text-[#61DBFB]" />,
        <SiExpress key="express" />,
        <SiNextdotjs key="next" />,
        <FaNodeJs key="node" />,
        <SiTypescript key="typescript" className="rounded-[3px] bg-white text-[#007acc]" />,
      ],
    },
    {
      title: "Design",
      image: "/assets/images/fig1.png",
      copy: [
        "I specialize in both user interface and user experience designs. With the skills I have accumulated over more than 6 years of my UI and UX journey, I build seamless and beautiful designs to attract users.",
        "I expertise in Figma alongside modern tools like adobe, and canva. Check below whether I am fit for your work or not.",
      ],
      tools: [
        <SiFigma key="figma" className="text-[#F24E1E]" />,
        <SiBehance key="behance" className="text-[#1769FF]" />,
        <SiCanva key="canva" className="text-[#00C4CC]" />,
        <span key="xd" className="border border-[#FF61F6] px-1 text-[14px] font-bold text-[#FF61F6] 2xl:text-[18px]">Xd</span>,
      ],
    },
  ];

  return (
    <div id="about" className="min-h-[100svh] bg-[var(--surface-2)] px-5 text-[var(--text-primary)] md:h-[100svh] md:min-h-0 md:overflow-hidden">
      <h1 className="pb-8 pt-10 text-center text-[26px] font-semibold md:pb-8 md:pt-14 md:text-[30px] 2xl:text-[48px]">More on What I Do.</h1>

      <div className="mx-auto w-full max-w-5xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${activeSlide * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide) => (
            <div key={slide.title} className="shrink-0 overflow-hidden pb-10 md:pb-0" style={{ width: `${100 / slides.length}%` }}>
              <div className="md:flex md:flex-row-reverse md:items-start md:pb-4">
                <div className="md:w-1/2 md:border-l md:border-t md:border-[var(--border-soft)] md:pl-5 md:pt-5">
                  <div className="relative h-[40svh] w-full overflow-hidden md:h-[48svh]">
                    <Image
                      className="object-cover object-center transition duration-500 md:hover:scale-125"
                      src={slide.image}
                      alt={`${slide.title} preview`}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                    />
                  </div>
                </div>

                <div className="md:w-1/2 md:pr-10">
                  <h2 className="pb-2 pt-4 text-[36px] font-medium md:text-[40px] 2xl:mt-5 2xl:text-[44px]">{slide.title}</h2>
                  {slide.copy.map((paragraph) => (
                    <p key={paragraph} className="pt-4 first:pt-0 text-[14px] font-semibold leading-tight text-[var(--text-secondary)] md:max-w-md 2xl:text-[20px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex w-full flex-wrap justify-center gap-5 pt-5 text-[24px] md:pt-5 2xl:pt-6 2xl:text-[32px]">
                {slide.tools}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-5xl justify-center pb-8 pt-6 md:mt-6 md:pb-10 md:pt-6">
        <div className="flex h-4 items-center gap-2">
          {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-10 bg-[var(--accent)]"
                : "w-3 bg-[var(--border-medium)] hover:bg-[var(--text-subtle)]"
            }`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Show ${slide.title.toLowerCase()} details`}
          />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage
