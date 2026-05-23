import WorkCard from '@components/cards/WorkCard'
import Link from 'next/link'
import Image from 'next/image'

const FigmaIcon = () => {
  return (
    <div className='h-[32px] w-[20px]'>
      <div className='relative h-full w-full overflow-hidden'>
        <Image
          className='object-contain object-center transition duration-500 hover:scale-125'
          src='/assets/images/fi.png'
          alt='Figma'
          fill
          sizes='20px'
        />
      </div>
    </div>
  )
}


const DesignPage = () => {

  const designData = [
    {
      image: '/assets/images/fig1.png',
      title: 'Portfolio Web UI ',
      intro: 'Fully responsive and highly attractive design for the website project.',
      outro: 'Personal portfolio design elevating user experience and relaying user skills up to the point. Tools like Figma, Canva, Adobe and others have been used.',
      link:'https://www.figma.com/design/a4l4ZzEtPWG4LT46YCC9va/Artist--Portfolio?node-id=0-1&p=f&t=vKnC2MIttCzFroV6-0',
      tags: ['Portfolio', 'Figma', 'UI Design'],
    },
    {
      image: '/assets/images/fig2.webp',
      title: 'Washing Center UI',
      intro: 'Fully responsive and highly attractive design for the website of the client.',
      outro: 'Elegant and Classic design with the help of tools like Figma, Canva, Adobe and much more.',
      link:'https://www.figma.com/file/Ld13tQSgjZZ9y1wyfwwL5f/Washing-Center-Design?type=design&node-id=0%3A1&mode=design&t=WcqA0tBKhoG9wxLS-1',
      tags: ['Client Work', 'Figma', 'Responsive'],
    }
  ]

  return (
    <div id="designs" className="bg-[var(--surface-1)] px-5 py-10 text-[var(--text-primary)] md:py-14 2xl:py-20">
      <h1 className="pb-8 text-center text-[26px] font-semibold md:text-[32px] 2xl:text-[48px]">Some of My Designs</h1>
      <div className='mx-auto w-full max-w-5xl'>
        <div className='grid gap-6 border-t border-[var(--border-soft)] pt-5 md:grid-cols-2 md:gap-0'>
          <div className='md:border-r md:border-[var(--border-soft)] md:pr-5'>
            <WorkCard pictureSource={designData[0].image} title={designData[0].title} introduction={designData[0].intro} conclusion={designData[0].outro} stack={<FigmaIcon/>} link={designData[0].link} purpose={false} tags={designData[0].tags}/>
          </div>
          <div className='md:pl-5'>
            <WorkCard pictureSource={designData[1].image} title={designData[1].title} introduction={designData[1].intro} conclusion={designData[1].outro} stack={<FigmaIcon/>} link={designData[1].link} purpose={false} tags={designData[1].tags}/>
          </div>
        </div>
        <div className='pt-5 text-end'><Link href='https://github.com/Nischal957905' target='_blank' rel='noopener noreferrer' className='text-[var(--accent)]  2xl:text-[20px]'>|More on Figma|</Link></div>
      </div>
    </div>
  )
}

export default DesignPage
