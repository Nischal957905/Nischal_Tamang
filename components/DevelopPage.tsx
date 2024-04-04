import WorkCard from '@components/cards/WorkCard'
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

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
    <div className="bg-[#2C2C2C] text-[#FFFFFF] pr-5 pl-5">
      <h1 className="text-center text-[26px] font-semibold pt-6 pb-6">Some of My Works</h1>
      <WorkCard pictureSource={developData[0].image} title={developData[0].title} introduction={developData[0].intro} conclusion={developData[0].outro} stack={<FaNodeJs/>} link={developData[0].link}/>
      <WorkCard pictureSource={developData[1].image} title={developData[1].title} introduction={developData[1].intro} conclusion={developData[1].outro} stack={<SiNextdotjs/>} link={developData[0].link}/>
    </div>
  )
}

export default DevelopPage