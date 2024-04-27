import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  pictureSource:  string;
  title: string
  introduction: string;
  conclusion: string;
  stack: ReactNode;
  link: string;
  purpose: boolean;
}

const WorkCard: React.FC<CardProps> = ({pictureSource, title, introduction, conclusion, stack, link, purpose}) => {
  return (
    <div>
      <div className='h-[30svh] sm:h-[35svh]'>
        <div className='relative h-full w-full overflow-hidden'>
          <Link href={link} target="_blank">
            {
              purpose ? <img className='absolute inset-0 w-full h-full object:cover sm:object-contain object-center hover:scale-125 transition duration-500' src={pictureSource} alt='' />
              : <img className='absolute inset-0 w-full h-full object:cover sm:object-cover object-center hover:scale-125 transition duration-500' src={pictureSource} alt='' />
            }
            </Link>
        </div>
      </div>
      <h2 className="text-[20px] 2xl:text-[32px] pt-4 pb-2 font-bold"><Link href={link} target="_blank" className="text-[#0C8CE9]">{title}</Link></h2>
      <p className="text-[14px] 2xl:text-[24px] font-normal leading-tight pr-5 2xl:max-w-[25svw]">{introduction}</p>
      <p className="text-[14px] 2xl:text-[24px] font-normal leading-tight pr-5 pt-4 2xl:max-w-[25svw]">{conclusion}</p>
      <div className="text-[24px] 2xl:text-[32px] pt-4 pb-8 sm:pb-0">
        {stack}
      </div>
    </div>
  )
}

export default WorkCard