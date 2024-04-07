import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className='bg-[#2C2C2C] text-[#FFFFFF] h-[100svh] pr-5 pl-5 pt-10 sm:flex sm:justify-center sm:pt-[20svh]'>
      <div className="sm:flex sm:flex-row-reverse sm:w-[60svw]">
        <div className='h-[30svh] mb-2 sm:h-[50svh] sm:border-t-[1px] sm:border-l-[1px] sm:pt-4 sm:pl-4'>
          <div className='h-full w-full overflow-hidden'>
            <img className='inset-0 w-full h-full object-cover object-center hover:scale-125 transition duration-500' src='/assets/images/tele.webp' alt='' />
          </div>
        </div>
        <div className="sm:pt-10">
          <h1 className="text-[26px] font-bold pt-6 pb-4">Contact Me</h1>
          <p className="text-[14px] font-bold leading-tight pr-5">You can connect me through my personal email as well as other social platforms.</p>
          <p className="text-[14px] font-bold leading-tight pr-5 pt-4 pb-6">Feel free to contact me over<span className="sm:flex">the below links.</span></p>
          <div className="flex">
            <Link href='https://www.linkedin.com/in/nischal-tamang-072058240/' target="_blank"><FaLinkedin className="text-[26px] bg-white text-[#007acc] rounded-[3px]"/></Link>
            <div className='h-[24px] w-[28px] ml-4'>
             <div className='relative h-full w-full overflow-hidden'>
              <Link href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nischalt80@gmail.com' target="_blank"><img className='absolute inset-0 w-full h-full object-fit object-center hover:scale-125 transition duration-500' src='/assets/images/gmail.png' alt='' /></Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage