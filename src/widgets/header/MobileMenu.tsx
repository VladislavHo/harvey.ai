import { ArrayIcon } from "../svg/SVG";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);

  const platformLinks = [
    { href: "/platform/knowledge", label: "Knowledge", text: "Ask questions, analyze documents, and draft faster with domain-specific AI." },
    { href: "/platform/vault", label: "Vault", text: "Securely store, organize, and bulk-analyze legal documents." },
    { href: "/platform/assistant", label: "Assistant", text: " Research complex legal, regulatory, and tax questions across domains." },
    { href: "/platform/workflows", label: "Workflows", text: " Run pre-built workflows or build your own, tailored to your firm's needs." }
  ];

  return (
    <div
      className={`fixed px-6 top-0 left-0 w-full h-full bg-primary z-30 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="flex flex-col items-center justify-between h-full">
        <div className="nav-mobule--header"></div>

        <nav className="w-full flex flex-col items-start gap-8">
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
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isPlatformOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
              <div className="flex flex-col gap-4 pl-4">
                {platformLinks.map((link) => (
                  <a
                    href={link.href}
                    className="block transition-colors duration-300 ease-out"

                  >
                    <h3 className={`text-sm font-harvey-sans transition-colors duration-300 mb-[5px] $`}>
                      {link.label} 
                    </h3>
                    <p className={`text-sm text-secondary`}>
                      {link.text}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Other links */}
          <a href="/about" className="text-white text-2xl font-harvey-sans">
            <span className="heading-3 w-full">About</span>
          </a>
          <a href="/contact" className="text-white text-2xl font-harvey-sans">
            <span className="heading-3 w-full">Contact</span>
          </a>
        </nav>

        <div className="nav-mobile--footer w-full flex justify-between gap-3 pb-30">
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