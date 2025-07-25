import { useState } from 'react'
import logo from '../../../public/logo.svg'
import { FooterUnlockInfo } from '../main'

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
      <FooterUnlockInfo/>
      <div className="footer--main flex py-lg ">
        <div className="logo--wrapper w-full">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="info flex w-full justify-end">
          <div className="flex flex-col gap-4 w-[120px]">
            <small className="text-gray-600">
              Platform
            </small>
            <a 
              className={getLinkClasses('assistant-1')}
              href="/platform/assistant"
              onMouseEnter={() => setHoveredLink('assistant-1')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Assistant
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
              {hoveredLink === 'assistant-1' && (
                <div className={getUnderlineClasses('assistant-1')}></div>
              )}
            </a>
            <a 
              className={getLinkClasses('vault-1')}
              href="/platform/vault"
              onMouseEnter={() => setHoveredLink('vault-1')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Vault
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
              {hoveredLink === 'vault-1' && (
                <div className={getUnderlineClasses('vault-1')}></div>
              )}
            </a>
            <a 
              className={getLinkClasses('knowledge-1')}
              href="/platform/knowledge"
              onMouseEnter={() => setHoveredLink('knowledge-1')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Knowledge
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
              {hoveredLink === 'knowledge-1' && (
                <div className={getUnderlineClasses('knowledge-1')}></div>
              )}
            </a>
            <a 
              className={getLinkClasses('workflows-1')}
              href="/platform/workflows"
              onMouseEnter={() => setHoveredLink('workflows-1')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Workflows
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
              {hoveredLink === 'workflows-1' && (
                <div className={getUnderlineClasses('workflows-1')}></div>
              )}
            </a>
          </div>
          <div className="flex flex-col gap-4 w-[120px]">
            <small className="text-gray-600">
              Company
            </small>
            <a 
              className={getLinkClasses('about')}
              href="/about"
              onMouseEnter={() => setHoveredLink('about')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              About
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
              {hoveredLink === 'about' && (
                <div className={getUnderlineClasses('about')}></div>
              )}
            </a>
            <a 
              className={getLinkClasses('careers')}
              href="/careers"
              onMouseEnter={() => setHoveredLink('careers')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Careers
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
              {hoveredLink === 'careers' && (
                <div className={getUnderlineClasses('careers')}></div>
              )}
            </a>
            <a 
              className={getLinkClasses('contact')}
              href="/contact"
              onMouseEnter={() => setHoveredLink('contact')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Contact
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
              {hoveredLink === 'contact' && (
                <div className={getUnderlineClasses('contact')}></div>
              )}
            </a>
            <a 
              className={getLinkClasses('blog')}
              href="/blog"
              onMouseEnter={() => setHoveredLink('blog')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Blog
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
              {hoveredLink === 'blog' && (
                <div className={getUnderlineClasses('blog')}></div>
              )}
            </a>
          </div>
        </div>
      </div>
      <div className="footer--bottom flex justify-between items-center">
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