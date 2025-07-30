import { NAVBAR_LINKS_LIST } from "../../shared/config/links";
import { ArrayIcon } from "../svg/SVG";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  


  return (
    <div
      className={`fixed px-6 top-0 left-0 w-full h-full bg-primary z-30 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="flex flex-col h-full">
        <div className="nav-mobule--header flex-shrink-0"></div>

        <nav className={`flex-1 overflow-y-auto ${!isPlatformOpen && !isSolutionsOpen ? "pt-60" : "pt-30"} transition-all`}>
          <div className="flex flex-col gap-8">
            {/* Platform dropdown */}
            <div className="w-full">
              <button
                onClick={() => setIsPlatformOpen(!isPlatformOpen)}
                className="w-full flex justify-between items-center"
              >
                <span className="heading-3 w-full text-left">Platform</span>
                <div className={`transition-transform duration-300 ${isPlatformOpen ? 'rotate-90' : ''}`}>
                  <ArrayIcon />
                </div>
              </button>

              {/* Platform submenu */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isPlatformOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                <div className="flex flex-col gap-4 pl-4 max-h-[400px] overflow-y-auto">
                  {NAVBAR_LINKS_LIST.platform.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block transition-colors duration-300 ease-out"
                    >
                      <h3 className="text-sm font-harvey-sans transition-colors duration-300 mb-[5px] text-white">
                        {link.label}
                      </h3>
                      <p className="text-sm text-secondary">
                        {link.text}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="w-full flex justify-between items-center"
              >
                <span className="heading-3 w-full text-left">Solutions</span>
                <div className={`transition-transform duration-300 ${isSolutionsOpen ? 'rotate-90' : ''}`}>
                  <ArrayIcon />
                </div>
              </button>

              {/* Platform submenu */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSolutionsOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                <div className="flex flex-col gap-4 pl-4 max-h-[400px] overflow-y-auto">
                  {NAVBAR_LINKS_LIST.solutions.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block transition-colors duration-300 ease-out"
                    >
                      <h3 className="text-sm font-harvey-sans transition-colors duration-300 mb-[5px] text-white">
                        {link.label}
                      </h3>
                      <p className="text-sm text-secondary">
                        {link.text}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          <a href="/security" className="heading-3">Security</a>
          </div>
        </nav>

        <div className="nav-mobile--footer w-full flex justify-between gap-3 pb-30 flex-shrink-0">
          <a href="" className="w-full flex items-center justify-center text-nowrap rounded-sm bg-gray-50-ivory leading-none text-gray-950-ink duration-300 ease-custom-ease-in-out hover:bg-gray-500 focus:outline-hidden focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 active:bg-gray-300 h-12 px-5 universal-text-2 font-medium cursor-pointer">
            Request a Demo
          </a>
          <a href="" className="flex transition-colors duration-300 ease-out items-center justify-center text-center px-3 text-sm rounded-sm bg-transparent text-primary border border-primary-inverse hover:text-gray-500 hover:border-gray-500 w-full h-12">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}