import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiTypescript  } from "react-icons/si";

const AboutPage = () => {
  return (
    <div className="h-[100svh] bg-[#1E1E1E] text-[#FFFFFF] pr-5 pl-5">
      <h1 className="text-center text-[26px] font-semibold pt-6 pb-6">More on What I Do.</h1>
      <div className='h-[40svh]'>
        <div className='relative h-full w-full overflow-hidden'>
          <img className='absolute inset-0 w-full h-full object-cover object-center hover:scale-125 transition duration-500' src='/assets/images/dev.webp' alt='' />
        </div>
      </div>
      <h2 className="text-[36px] pt-4 pb-2 font-medium">Develop</h2>
      <p className="text-[14px] font-semibold leading-tight pr-5">I design both front-end and back-end websites. With the skills I have accumulated over more than 6 years of my software engineering journey, I build seamless applications.</p>
      <p className="text-[14px] font-semibold leading-tight pt-4 pr-5">I expertise in node alongside modern frameworks like react, next and express. Check below whether I am fit for your work or not.</p>
      <div className="flex text-[24px] pt-4">
        <FaReact className="mr-5 text-[#61DBFB]"/>
        <SiExpress className="mr-5"/>
        <SiNextdotjs className="mr-5"/>
        <FaNodeJs className="mr-5"/>
        <SiTypescript className="mr-5 bg-white text-[#007acc] rounded-[3px]"/>
      </div>
    </div>
  )
}

export default AboutPage