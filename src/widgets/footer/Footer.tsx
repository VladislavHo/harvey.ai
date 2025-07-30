import { useState } from 'react'
import logo from '../../../public/logo.svg'
import { MainWidgets } from '../main'
import { NAVBAR_LINKS_LIST } from '../../shared/config/links'

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const getLinkClasses = (linkId: string) => {
    const baseClasses = "flex duration-300 w-full text-start text-sm bg-transparent leading-[130%] font-medium group transition-colors ease-in-out text-wrap cursor-pointer relative"

    if (hoveredLink === null) {
      return `${baseClasses} text-primary`
    }

    if (hoveredLink === linkId) {
      return `${baseClasses} text-primary` // Активная ссылка остается белой
    }

    return `${baseClasses} text-gray-600` // Остальные ссылки становятся серыми
  }

  const getUnderlineClasses = (linkId: string) => {
    if (hoveredLink === linkId) {
      return "absolute bottom-0 left-0 w-full h-[1px] bg-primary" // Белая линия для активной ссылки
    }
    return "absolute bottom-0 left-0 w-full h-[1px] bg-gray-600" // Серая линия для остальных
  }

  return (
    <footer className='max-w-default border-t border-gray-800 '>
      <MainWidgets.FooterUnlockInfo />
      <div className="footer--main flex py-lg md:flex-row flex-col md:gap-0 gap-10 ">
        <div className="logo--wrapper w-full">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="info flex w-full flex-col md:flex-row md:justify-end md:gap-0 gap-10">
          <div className="flex flex-col gap-4 w-[120px]">
            <small className="text-gray-600">
              Platform
            </small>
            {NAVBAR_LINKS_LIST.platform.map((link) => (
              <a
                className={getLinkClasses(`${link.label}-1`)}
                href={link.href}
                onMouseEnter={() => setHoveredLink(`${link.label}-1`)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
                <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
                {hoveredLink === 'assistant-1' && (
                  <div className={getUnderlineClasses('assistant-1')}></div>
                )}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 w-[120px]">
            <small className="text-gray-600">
              Solutions
            </small>
            {NAVBAR_LINKS_LIST.solutions.map((link) => (
              <a
                className={getLinkClasses(`${link.label}-1`)}
                href={link.href}
                onMouseEnter={() => setHoveredLink(`${link.label}-1`)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
                <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
                {hoveredLink === 'assistant-1' && (
                  <div className={getUnderlineClasses('assistant-1')}></div>
                )}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 w-[120px]">
            <small className="text-gray-600">
              Solutions
            </small>
            <a
              className={getLinkClasses(`security-1`)}
              href={'/security'}
              onMouseEnter={() => setHoveredLink(`security-1`)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Security
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
              {hoveredLink === 'security-1' && (
                <div className={getUnderlineClasses('security-1')}></div>
              )}
            </a>
          </div>
        </div>
      </div>
      <div className="footer--bottom flex justify-between items-center md:flex-row flex-col">
        <span className='universal-text-3 text-balance text-gray-600 lg:max-w-full'>Copyright © 2025 Counsel AI Corporation. All rights reserved.</span>
        <div className='flex gap-3 items-center '>
          <a className='flex transition-colors duration-300 ease-out w-max items-center justify-center text-center hover:text-gray-50-ivory active:text-gray-200 universal-text-3 text-balance text-gray-600 cursor-pointer' href="/">X</a>
          <span className='text-gray-600'>|</span>
          <a className='flex transition-colors duration-300 ease-out w-max items-center justify-center text-center hover:text-gray-50-ivory active:text-gray-200 universal-text-3 text-balance text-gray-600 cursor-pointer' href="/">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}