import { useState } from 'react'
import logo from '../../../public/logo.svg'

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const getLinkClasses = (linkId: string) => {
    const baseClasses = "flex duration-300 w-full text-start text-sm bg-transparent leading-[130%] font-medium group transition-colors ease-in-out text-wrap cursor-pointer"
    
    if (hoveredLink === null) {
      return `${baseClasses} text-primary hover:text-secondary`
    }
    
    if (hoveredLink === linkId) {
      return `${baseClasses} text-primary`
    }
    
    return `${baseClasses} text-gray-600`
  }

  return (
    <footer className='max-w-default py-20 border-t border-gray-800'>
      <div className="footer--main flex">
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
            </a>
            <a 
              className={getLinkClasses('vault-1')}
              href="/platform/vault"
              onMouseEnter={() => setHoveredLink('vault-1')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Vault
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
            </a>
            <a 
              className={getLinkClasses('knowledge-1')}
              href="/platform/knowledge"
              onMouseEnter={() => setHoveredLink('knowledge-1')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Knowledge
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
            </a>
            <a 
              className={getLinkClasses('workflows-1')}
              href="/platform/workflows"
              onMouseEnter={() => setHoveredLink('workflows-1')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Workflows
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
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
            </a>
            <a 
              className={getLinkClasses('careers')}
              href="/careers"
              onMouseEnter={() => setHoveredLink('careers')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Careers
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
            </a>
            <a 
              className={getLinkClasses('contact')}
              href="/contact"
              onMouseEnter={() => setHoveredLink('contact')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Contact
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
            </a>
            <a 
              className={getLinkClasses('blog')}
              href="/blog"
              onMouseEnter={() => setHoveredLink('blog')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Blog
              <span className="-ml-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all ease-in-out">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer--bottom"></div>
    </footer>
  )
}