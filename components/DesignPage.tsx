import WorkCard from '@components/cards/WorkCard'

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
    <div className="bg-[#1E1E1E] text-[#FFFFFF] pr-5 pl-5">
      <h1 className="text-center text-[26px] font-semibold pt-6 pb-6">Some of My Designs</h1>
      <WorkCard pictureSource={designData[0].image} title={designData[0].title} introduction={designData[0].intro} conclusion={designData[0].outro} stack={<FigmaIcon/>} link={designData[0].link}/>
      <WorkCard pictureSource={designData[1].image} title={designData[1].title} introduction={designData[1].intro} conclusion={designData[1].outro} stack={<FigmaIcon/>} link={designData[1].link}/>
    </div>
  )
}

export default DesignPage