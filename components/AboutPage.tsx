import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiTypescript  } from "react-icons/si";

const AboutPage = () => {
  return (
    <div className="h-[100svh] bg-[#1E1E1E] text-[#FFFFFF] pr-5 pl-5">
      <h1 className="text-center text-[26px] font-semibold pt-6 pb-6 sm:pt-[10svh] sm:text-[30px] 2xl:text-[48px] sm:h-[15svh]">More on What I Do.</h1>
      <div className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:h-[85svh]">
        <div className="sm:flex sm:flex-row-reverse sm:w-[60svw] sm:mb-4">
          <div className="sm:border-t-[1px] sm:border-l-[1px] sm:w-[30svw]">
            <div className='h-[40svh] sm:h-[50svh] sm:ml-5 sm:mt-5'>
              <div className='h-full w-full overflow-hidden'>
                <img className='inset-0 w-full h-full object-cover object-center sm:hover:scale-125 transition duration-500' src='/assets/images/dev.webp' alt='' />
              </div>
            </div>
          </div>
          
          <div className="sm:pr-10 sm:w-[30svw]">
            <h2 className="text-[36px] 2xl:text-[48px] 2xl:mt-5 pt-4 pb-2 font-medium">Develop</h2>
            <p className="text-[14px] 2xl:text-[24px] font-semibold leading-tight pr-5 sm:pr-0 sm:max-w-[25svw]">I design both front-end and back-end websites. With the skills I have accumulated over more than 6 years of my software engineering journey, I build seamless applications.</p>
            <p className="text-[14px] 2xl:text-[24px] font-semibold leading-tight pt-4 pr-5 sm:pr-0 sm:max-w-[25svw]">I expertise in node alongside modern frameworks like react, next and express. Check below whether I am fit for your work or not.</p>
          </div>
        </div>
        <div className="flex text-[24px] pt-4 2xl:text-[40px] 2xl:pt-8">
          <FaReact className="mr-5 text-[#61DBFB]"/>
          <SiExpress className="mr-5"/>
          <SiNextdotjs className="mr-5"/>
          <FaNodeJs className="mr-5"/>
          <SiTypescript className="mr-5 bg-white text-[#007acc] rounded-[3px]"/>
        </div>
      </div>
    </div>
  )
}

export default AboutPage