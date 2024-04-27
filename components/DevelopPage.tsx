import WorkCard from '@components/cards/WorkCard'
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Link from 'next/link';

const DevelopPage = () => {

  const developData = [
    {
      image: '/assets/images/dev1.webp',
      title: 'Recommendation System',
      intro: 'Fully responsive and functional full stack system built on top of MERN stack.',
      outro: 'System allowing users to gain recommendation of consultancies all over Nepal as well as compare the desired institutions to find the one best fit for them.',
      link: 'https://github.com/Nischal957905/Recomendation_Comparison_System',
    },
    {
      image: '/assets/images/dev2.webp',
      title: 'Washing Center Website',
      intro: 'Fully responsive and functional full stack system built on top of NEXT.js.',
      outro: 'Front-end as well as backend design for the owners of washing center to relay their services and stories to their customers, and a mean for them to attract new customers.',
      link: 'https://aanand-washing-center.vercel.app/'
    }
  ]

  return (
    <div className="bg-[#2C2C2C] text-[#FFFFFF] pr-5 pl-5 sm:h-[100svh]">
      <h1 className="text-center text-[26px] 2xl:text-[48px] font-semibold pt-6 pb-6 sm:h-[18svh] m:pt-0 sm:pb-0 sm:flex sm:items-center sm:justify-center">Some of My Works</h1>
      <div className='sm:flex sm:justify-center sm:items-center  2xl:justify-start  sm:h-[82svh] sm:flex-col'>
        <div className='sm:grid sm:grid-cols-2 sm:w-[60svw] sm:border-t-[1px]'>
          <div className='sm:border-r-[1px] sm:pt-5 sm:pr-5'>
            <WorkCard pictureSource={developData[0].image} title={developData[0].title} introduction={developData[0].intro} conclusion={developData[0].outro} stack={<FaNodeJs/>} link={developData[0].link} purpose={true}/>
          </div>
          <div className='sm:pt-5 sm:pl-5'>
            <WorkCard pictureSource={developData[1].image} title={developData[1].title} introduction={developData[1].intro} conclusion={developData[1].outro} stack={<SiNextdotjs/>} link={developData[0].link} purpose={true}/>
          </div>
        </div>      
        <div className='text-end sm:w-full sm:pt-5 pb-5'><Link href='https://github.com/Nischal957905' target='_blank' className='text-end text-[#0C8CE9] 2xl:text-[20px]'>|More on Github|</Link></div>
      </div>
    </div>
  )
}

export default DevelopPage