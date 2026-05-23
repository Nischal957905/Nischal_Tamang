import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  pictureSource:  string;
  title: string
  introduction: string;
  conclusion: string;
  stack: ReactNode;
  link: string;
  purpose: boolean;
  tags?: string[];
}

const WorkCard: React.FC<CardProps> = ({pictureSource, title, introduction, conclusion, stack, link, purpose, tags = []}) => {
  return (
    <div>
      <div className='h-[30svh] w-full border border-[var(--border-soft)] md:h-[35svh]'>
        <div className='relative h-full w-full overflow-hidden'>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Image
              className={`object-cover object-center transition duration-500 hover:scale-105 ${
                purpose ? "md:object-contain" : "md:object-cover"
              }`}
              src={pictureSource}
              alt={`${title} preview`}
              fill
              sizes='(min-width: 768px) 30vw, 100vw'
            />
            </Link>
        </div>
      </div>
      <h2 className="pb-2 pt-4 text-[20px] font-bold 2xl:text-[32px]"><Link href={link} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)]">{title}</Link></h2>
      <p className="pr-5 text-[14px] font-normal leading-tight text-[var(--text-secondary)] 2xl:max-w-xl 2xl:text-[20px]">{introduction}</p>
      <p className="pr-5 pt-3 text-[14px] font-normal leading-tight text-[var(--text-muted)] 2xl:max-w-xl 2xl:text-[20px]">{conclusion}</p>
      <div className="flex flex-wrap gap-2 pt-4">
        {tags.map((tag) => (
          <span key={tag} className="border border-[var(--border-soft)] px-3 py-1 text-[12px] font-semibold text-[var(--text-muted)] 2xl:text-[15px]">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 pb-8 pt-4 text-[24px] md:pb-0 2xl:text-[30px]">
        <span>{stack}</span>
        <Link href={link} target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-[var(--accent)] 2xl:text-[18px]">
          View Project
        </Link>
      </div>
    </div>
  )
}

export default WorkCard
