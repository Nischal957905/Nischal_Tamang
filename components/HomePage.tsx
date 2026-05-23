'use client'
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { RiMenu2Fill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaLinkedin } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";

const HomePage = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const nextTheme = savedTheme === 'light' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = nextTheme;
      window.localStorage.setItem('theme', nextTheme);
      return nextTheme;
    });
  };

  const navigationLink = (sectionId: string) => {
      setIsMenuOpen(false);
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { label: 'About me', sectionId: 'about' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'My Developments', sectionId: 'developments' },
    { label: 'My Designs', sectionId: 'designs' },
    { label: 'Contact me', sectionId: 'contact' },
  ];

  return (
    <div id='home' className='min-h-[100svh] bg-[var(--surface-1)] text-[var(--text-primary)]'>
      {/*Mobile Navigation*/}
      <div className='menu-section sticky top-0 z-50 flex items-center border-b border-[var(--border-soft)] bg-[var(--surface-1)]/95 p-5 backdrop-blur md:hidden'>
          <div className='text-[16px] font-bold'><Link href='/'>tamangNischal</Link></div>
          <button
            type='button'
            className='ml-auto mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-soft)] text-[16px] transition hover:border-[var(--accent)] hover:text-[var(--accent)]'
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type='button'
            className='relative flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden'
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            <RiMenu2Fill className={`absolute text-[20px] transition duration-300 ${
              isMenuOpen ? 'scale-75 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
            }`}/>
            <AiOutlineCloseCircle className={`absolute text-[21px] text-[var(--accent)] transition duration-300 ${
              isMenuOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-75 -rotate-90 opacity-0'
            }`}/>
          </button>
      </div>
      <nav
        className={`fixed inset-x-3 top-[76px] z-40 overflow-hidden rounded-[8px] border border-[var(--border-soft)] bg-[var(--overlay)] px-3 shadow-2xl shadow-black/20 backdrop-blur transition-all duration-300 ease-out md:hidden ${
          isMenuOpen
            ? 'max-h-[430px] translate-y-0 opacity-100'
            : 'pointer-events-none max-h-0 -translate-y-3 opacity-0'
        }`}
      >
          <ul className='space-y-1 py-3 text-[14px]'>
            {menuItems.map((item) => (
              <li key={item.sectionId}>
                <button
                  type='button'
                  className='flex w-full items-center justify-end rounded-[6px] px-3 py-3 font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]'
                  onClick={() => navigationLink(item.sectionId)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className='border-t border-[var(--border-soft)] px-3 py-4 text-end'>
            <Link href='https://www.linkedin.com/in/nischal-tamang-072058240/' target='_blank' rel='noopener noreferrer' className='text-[13px] font-bold text-[var(--accent)]'>Follow me on LinkedIn</Link>
          </div>
        </nav>
      {/*Desktop Navigation*/}
      <div className='menu-section hidden p-5 md:flex md:items-center'>
          <div className='text-[24px] font-bold 2xl:text-[32px]'><Link href='/'>tamangNischal</Link></div>
          <nav className='ml-auto flex items-center gap-4 text-[13px] font-semibold text-[var(--text-secondary)] lg:gap-6 lg:text-[14px] 2xl:text-[18px]'>
            {menuItems.map((item) => (
              <button key={item.sectionId} type='button' onClick={() => navigationLink(item.sectionId)} className='transition hover:text-[var(--accent)]'>
                {item.label}
              </button>
            ))}
            <button
              type='button'
              className='flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] text-[17px] transition hover:border-[var(--accent)] hover:text-[var(--accent)]'
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </nav>
      </div>
      
      <div className='px-5 py-6 md:flex md:items-center md:justify-center md:py-0'>
        <div className='hero-section mx-auto flex w-full max-w-5xl flex-col gap-6 md:min-h-[calc(100svh-88px)] md:flex-row-reverse md:items-center md:justify-center md:gap-6'>
          <div className='w-full md:w-1/2 md:pl-6'>
            <div className='relative h-[40svh] min-h-[260px] w-full overflow-hidden border border-[var(--border-soft)] md:h-[50svh] md:min-h-0'>
              <Image
                className='object-cover object-center transition duration-500 md:hover:scale-105'
                src='/assets/images/icon.webp'
                alt='Portrait of Tamang Nischal'
                fill
                priority
                sizes='(min-width: 768px) 45vw, 100vw'
              />
            </div>
          </div>
          <div className="con-divs md:w-1/2 md:pr-6">
            <div className='pt-4 md:pt-0'>
              <p className='text-[14px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] md:text-[15px] 2xl:text-[18px]'>Nischal Tamang</p>
              <h1 className='max-w-[560px] pt-3 text-[38px] font-bold leading-none md:text-[52px] 2xl:text-[70px]'>Software Engineer & UI Designer</h1>
            </div>
            <div className='max-w-[520px] pt-5 text-[15px] font-normal leading-relaxed text-[var(--text-muted)] 2xl:text-[21px]'>
              <p>I build responsive web applications and clean digital interfaces with a focus on usability, performance, and visual clarity.</p>
            </div>
            <div className='flex flex-wrap gap-3 pt-6'>
              <button type='button' onClick={() => navigationLink('developments')} className='border border-[var(--accent)] bg-[var(--accent)] px-5 py-2 text-[14px] font-bold text-white transition hover:bg-transparent hover:text-[var(--accent)]'>
                View Work
              </button>
              <button type='button' onClick={() => navigationLink('contact')} className='border border-[var(--border-medium)] px-5 py-2 text-[14px] font-bold transition hover:border-[var(--accent)] hover:text-[var(--accent)]'>
                Contact Me
              </button>
            </div>
            <div className='flex gap-4 pt-5'>
              <Link href='https://github.com/Nischal957905' target='_blank' rel='noopener noreferrer' aria-label='GitHub'><BsGithub className='text-[24px] transition hover:text-[var(--accent)] 2xl:text-[36px]' /></Link>
              <Link href='https://www.linkedin.com/in/nischal-tamang-072058240/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'><FaLinkedin className='text-[24px] transition hover:text-[var(--accent)] 2xl:text-[36px]' /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
