import { ReactNode } from "react";
import { FiBriefcase, FiCode } from "react-icons/fi";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  icon: ReactNode;
};

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Software Engineer",
    company: "KCAL Kitchen Glasgow",
    period: "July 2025 - Current",
    highlights: [
      "Redesigned and developed the restaurant website, fixing bugs, checkout errors, and misleading content.",
      "Built client and customer features for online ordering, menu browsing, and inventory management.",
    ],
    icon: <FiCode />,
  },
  {
    role: "Software Engineer Intern",
    company: "Buddha Tech",
    period: "Jan 2023 - Jun 2023",
    highlights: [
      "Developed and optimized a web-based inventory management system for Buddha Air.",
      "Improved vehicle tracking speed, accuracy, usability, and operational workflow quality.",
    ],
    icon: <FiBriefcase />,
  },
];

const ExperiencePage = () => {
  return (
    <section id="experience" className="bg-[var(--surface-1)] px-5 py-10 text-[var(--text-primary)] md:py-14 2xl:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid gap-6 border-t border-[var(--border-soft)] pt-5 md:grid-cols-[0.85fr_1.15fr] md:gap-10">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] 2xl:text-[18px]">Experience</p>
            <h1 className="max-w-md pb-4 pt-3 text-[28px] font-semibold leading-tight md:text-[36px] 2xl:text-[48px]">
              Real-world engineering experience.
            </h1>
            <p className="max-w-md text-[14px] font-normal leading-relaxed text-[var(--text-muted)] 2xl:text-[20px]">
              I have worked on production websites and operational systems, improving usability, reliability, and business workflows.
            </p>
          </div>

          <div className="grid gap-4">
            {experiences.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="border border-[var(--border-soft)] p-4 transition hover:border-[var(--accent)]/60 md:p-5"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] border border-[var(--border-soft)] text-[20px] text-[var(--accent)]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--text-subtle)]">{item.period}</p>
                    <h2 className="pb-1 pt-2 text-[19px] font-bold 2xl:text-[26px]">{item.role}</h2>
                    <p className="text-[14px] font-semibold text-[var(--accent)] 2xl:text-[18px]">{item.company}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-3 border-t border-[var(--border-soft)] pt-4">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="text-[14px] leading-tight text-[var(--text-muted)] 2xl:text-[18px]">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
