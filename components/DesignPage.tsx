import WorkCard from '@components/cards/WorkCard'
import Link from 'next/link'

const FigmaIcon = () => {
  return (
    <div className='h-[32px] w-[20px]'>
      <div className='relative h-full w-full overflow-hidden'>
        <img className='absolute inset-0 w-full h-full object-fit object-center hover:scale-125 transition duration-500' src='/assets/images/fi.png' alt='' />
      </div>
    </div>
  )
}


const DesignPage = () => {

  const designData = [
    {
      image: '/assets/images/fig1.webp',
      title: 'Portfolio Web UI ',
      intro: 'Fully responsive and highly attractive design for the website of the client.',
      outro: 'Personal portfolio design elevating user experience and relaying user skills up to the point. Tools like Figma, Canva, Adobe and others have been used.',
      link:'https://www.figma.com/file/oBgG7QhrPzR0NVqSW2TqsO/Portfolio?type=design&node-id=0%3A1&mode=design&t=OkGRUzKQ8ouS8qxB-1'
    },
    {
      image: '/assets/images/fig2.webp',
      title: 'Washing Center UI',
      intro: 'Fully responsive and highly attractive design for the website of the client.',
      outro: 'Elegant and Classic design with the help of tools like Figma, Canva, Adobe and much more.',
      link:'https://www.figma.com/file/Ld13tQSgjZZ9y1wyfwwL5f/Washing-Center-Design?type=design&node-id=0%3A1&mode=design&t=WcqA0tBKhoG9wxLS-1'
    }
  ]

  return (
    <div className="bg-[#1E1E1E] text-[#FFFFFF] pr-5 pl-5 sm:h-[100svh]">
      <h1 className="text-center text-[26px] font-semibold pt-6 pb-6 sm:pt-0 sm:pb-0 sm:flex sm:items-center sm:justify-center sm:h-[17svh]">Some of My Designs</h1>
      <div className='sm:flex sm:justify-center sm:items-center sm:h-[83svh] sm:flex-col'>
        <div className='sm:grid sm:grid-cols-2 sm:w-[60svw] sm:border-t-[1px]'>
          <div className='sm:border-r-[1px] sm:pt-5 sm:pr-5'>
            <WorkCard pictureSource={designData[0].image} title={designData[0].title} introduction={designData[0].intro} conclusion={designData[0].outro} stack={<FigmaIcon/>} link={designData[0].link} purpose={false}/>
          </div>
          <div className='sm:pt-5 sm:pl-5'>
            <WorkCard pictureSource={designData[1].image} title={designData[1].title} introduction={designData[1].intro} conclusion={designData[1].outro} stack={<FigmaIcon/>} link={designData[1].link} purpose={false}/>
          </div>
        </div>
        <div className='text-end pb-5 sm:w-full sm:pt-5'><Link href='https://github.com/Nischal957905' target='_blank' className='text-[#0C8CE9]'>|More on Figma|</Link></div>
      </div>
    </div>
  )
}

export default DesignPage