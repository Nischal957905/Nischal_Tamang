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
      tags: ['MERN', 'Recommendation', 'Full Stack'],
    },
    {
      image: '/assets/images/dev2.webp',
      title: 'Washing Center Website',
      intro: 'Fully responsive and functional full stack system built on top of NEXT.js.',
      outro: 'Front-end as well as backend design for the owners of washing center to relay their services and stories to their customers, and a mean for them to attract new customers.',
      link: 'https://aanand-washing-center.vercel.app/',
      tags: ['Next.js', 'Business Site', 'Responsive'],
    }
  ]

  return (
    <div id="developments" className="bg-[var(--surface-2)] px-5 py-10 text-[var(--text-primary)] md:py-14 2xl:py-20">
      <h1 className="pb-8 text-center text-[26px] font-semibold md:text-[32px] 2xl:text-[48px]">Some of My Works</h1>
      <div className='mx-auto w-full max-w-5xl'>
        <div className='grid gap-6 border-t border-[var(--border-soft)] pt-5 md:grid-cols-2 md:gap-0'>
          <div className='md:border-r md:border-[var(--border-soft)] md:pr-5'>
            <WorkCard pictureSource={developData[0].image} title={developData[0].title} introduction={developData[0].intro} conclusion={developData[0].outro} stack={<FaNodeJs/>} link={developData[0].link} purpose={true} tags={developData[0].tags}/>
          </div>
          <div className='md:pl-5'>
            <WorkCard pictureSource={developData[1].image} title={developData[1].title} introduction={developData[1].intro} conclusion={developData[1].outro} stack={<SiNextdotjs/>} link={developData[1].link} purpose={true} tags={developData[1].tags}/>
          </div>
        </div>      
        <div className='pt-5 text-end'><Link href='https://github.com/Nischal957905' target='_blank' rel='noopener noreferrer' className='text-[var(--accent)] 2xl:text-[20px]'>|More on Github|</Link></div>
      </div>
    </div>
  )
}

export default DevelopPage
