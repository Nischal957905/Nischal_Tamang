import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  pictureSource:  string;
  title: string
  introduction: string;
  conclusion: string;
  stack: ReactNode;
  link: string;
}

const WorkCard: React.FC<CardProps> = ({pictureSource, title, introduction, conclusion, stack, link}) => {
  return (
    <div>
      <div className='h-[30svh]'>
        <div className='relative h-full w-full overflow-hidden'>
          <Link href={link} target="_blank"><img className='absolute inset-0 w-full h-full object-cover object-center hover:scale-125 transition duration-500' src={pictureSource} alt='' /></Link>
        </div>
      </div>
      <h2 className="text-[20px] pt-4 pb-2 font-bold"><Link href={link} target="_blank" className="text-[#0C8CE9]">{title}</Link></h2>
      <p className="text-[14px] font-normal leading-tight pr-5">{introduction}</p>
      <p className="text-[14px] font-normal leading-tight pr-5 pt-4">{conclusion}</p>
      <div className="text-[24px] pt-4 pb-8">
        {stack}
      </div>
    </div>
  )
}

export default WorkCard