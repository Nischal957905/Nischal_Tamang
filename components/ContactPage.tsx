import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div id='contact' className='min-h-[100svh] bg-[var(--surface-2)] px-5 py-8 text-[var(--text-primary)] md:flex md:items-center md:justify-center md:py-12'>
      <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2 md:items-center">
        <div className='md:order-2 md:border-l md:border-t md:border-[var(--border-soft)] md:pl-5 md:pt-5'>
          <div className='relative h-[30svh] w-full overflow-hidden md:h-[50svh]'>
            <Image
              className='object-cover object-center transition duration-500 hover:scale-125'
              src='/assets/images/tele.webp'
              alt='Contact illustration'
              fill
              sizes='(min-width: 768px) 45vw, 100vw'
            />
          </div>
        </div>
        <div className="md:order-1">
          <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] 2xl:text-[18px]">Let&apos;s connect</p>
          <h1 className="pb-4 pt-2 text-[28px] font-bold md:text-[36px] 2xl:text-[41px]">Contact Me</h1>
          <p className="max-w-xl text-[14px] font-bold leading-tight text-[var(--text-secondary)] 2xl:text-[22px]">Available for freelance projects, collaborations, and full-time software engineering roles.</p>
          <p className="max-w-xl pb-6 pt-4 text-[14px] font-bold leading-tight text-[var(--text-muted)] 2xl:text-[22px]">Send a message or connect through one of the platforms below.</p>
          <div className="flex flex-wrap gap-3">
            <Link href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nischalt80@gmail.com' target="_blank" rel="noopener noreferrer" className="border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-[14px] font-bold text-white transition hover:bg-transparent hover:text-[var(--accent)]">
              Email Me
            </Link>
            <Link href='https://www.linkedin.com/in/nischal-tamang-072058240/' target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[var(--border-soft)] px-4 py-2 text-[14px] font-bold transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
              <FaLinkedin /> LinkedIn
            </Link>
            <Link href='https://github.com/Nischal957905' target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[var(--border-soft)] px-4 py-2 text-[14px] font-bold transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
              <FaGithub /> GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
