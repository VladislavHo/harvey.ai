import { BurgerMenu, Link } from "../../shared/ui";
import { useState, useEffect, useRef } from "react";
import platformImage from "../../../public/img/header.png"
import MobileMenu from "./MobileMenu";
import ModalHeader from "./ModalHeader";
import { NAVBAR_LINKS_LIST } from "../../shared/config/links";



export default function Header() {
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLinkVisible, setIsLinkVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [lastHoveredLink, setLastHoveredLink] = useState<string>('platform');
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [fullLineStyle, setFullLineStyle] = useState({ left: 0, width: 0 });
  const fullLineStyle = { left: 0, width: 0};
  const [hoveredDropdownLink, setHoveredDropdownLink] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<any>(null);
  const solutionsRef = useRef<HTMLLIElement>(null);
  const securityRef = useRef<HTMLLIElement>(null);
  const loginRef = useRef<HTMLSpanElement>(null);


  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1020) {
      setIsMobile(true);
    }
    else {
      setIsMobile(false);
    }
  }, [window.innerWidth]);
  console.log(fullLineStyle)

  // Функция для получения классов ссылки в зависимости от состояния hover
  const getLinkClasses = (linkName: string) => {
    const baseClasses = "py-2 block transition-colors duration-300 ease-out";

    if (hoveredLink === null) {
      return `${baseClasses} text-white`; // Все белые по умолчанию
    }

    if (hoveredLink === linkName) {
      return `${baseClasses} text-white`; // Активная ссылка остается белой
    }

    return `${baseClasses} text-gray-600`; // Остальные становятся серыми
  };

  const getLoginClasses = () => {
    const baseClasses = `transition-all duration-300 ease-in-out cursor-pointer py-2 ${isLinkVisible ? 'translate-x-0' : 'translate-x-50'
      }`;

    if (hoveredLink === null) {
      return `${baseClasses} text-white`;
    }

    if (hoveredLink === 'login') {
      return `${baseClasses} text-white`;
    }

    return `${baseClasses} text-gray-600`;
  };

  // Функция для обновления позиции линии
  const updateLinePosition = (targetRef: React.RefObject<HTMLLIElement | HTMLSpanElement>, showLine = true) => {
    if (targetRef.current && headerRef.current) {
      const headerRect = headerRef.current.getBoundingClientRect();
      const targetRect = targetRef.current.getBoundingClientRect();

      setLineStyle({
        left: targetRect.left - headerRect.left,
        width: targetRect.width,
        opacity: showLine ? 1 : 0
      });
    }
  };

  // Функция для обновления полной линии (от первого до последнего элемента)
  // const updateFullLinePosition = () => {
  //   if (platformRef.current && loginRef.current && headerRef.current) {
  //     const headerRect = headerRef.current.getBoundingClientRect();
  //     const firstRect = platformRef.current.getBoundingClientRect();
  //     const lastRect = loginRef.current.getBoundingClientRect();

  //     setFullLineStyle({
  //       left: firstRect.left - headerRect.left,
  //       width: (lastRect.right - firstRect.left)
  //     });
  //   }
  // };

  // // Инициализация позиций линий
  // useEffect(() => {
  //   if (platformRef.current && headerRef.current && loginRef.current && !isInitialized) {
  //     updateLinePosition(platformRef, false);
  //     updateFullLinePosition();
  //     setIsInitialized(true);
  //   }
  // }, [isInitialized]);

  // // Обновляем полную линию при изменении размеров окна
  // useEffect(() => {
  //   const handleResize = () => {
  //     updateFullLinePosition();
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // Получаем ref по имени ссылки
  const getRefByName = (name: string): any => {
    switch (name) {
      case 'platform': return platformRef;
      case 'solutions': return solutionsRef;
      case 'security': return securityRef;
      case 'login': return loginRef;
      default: return platformRef;
    }
  };

  // Обработчик наведения
  const handleMouseEnter = (linkName: string) => {
    setHoveredLink(linkName);
    setLastHoveredLink(linkName);
    updateLinePosition(getRefByName(linkName), true);
  };

  // Обработчик ухода курсора
  const handleMouseLeave = () => {
    setHoveredLink(null);
    updateLinePosition(getRefByName(lastHoveredLink), false);
  };

  const handleDropdownMouseEnter = (dropdownLinkName: string) => {
    setHoveredDropdownLink(dropdownLinkName);
  };

  const handleDropdownMouseLeave = () => {
    setHoveredDropdownLink(null);
  };


  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        setIsLinkVisible(true);
      } else {
        setIsLinkVisible(false);
      }

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
        setIsPlatformDropdownOpen(false);
        setIsSolutionsDropdownOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`w-full h-[92px] flex items-center fixed top-0 left-0 z-40 transition-transform duration-300 ease-in-out bg-primary ${isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <div
          ref={headerRef}
          className="l-header btn-primary flex justify-between items-center w-full max-w-[1920px] mx-auto my-0 relative"
        >
          <div className="logo">
            <a href="/"><p className="font-harvey-serif text-xl md:text-3xl lg:text-4xl xl:text-[36px] xl:leading-[40px]">Harvey</p></a>
          </div>
          {!isMobile ? (
            <>
              <nav className="relative">
                <ul className="flex gap-[32px] relative">
                  <li
                    ref={platformRef}
                    className="relative h-full"
                    onMouseEnter={() => {
                      setIsPlatformDropdownOpen(true);
                      handleMouseEnter('platform');
                    }}
                    onMouseLeave={() => {
                      setIsPlatformDropdownOpen(false);
                      handleMouseLeave();
                    }}
                  >
                    <a
                      href="#"
                      className={`flex items-center ${getLinkClasses('platform')}`}
                    >
                      Platform
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${isPlatformDropdownOpen ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>

                    {/* Невидимый мост между ссылкой и dropdown */}
                    {isPlatformDropdownOpen && (
                      <div className="absolute top-full left-0 w-48 h-[68px] bg-transparent z-40" />
                    )}

                    {isPlatformDropdownOpen && (
                      // <ModalHeader />
                      <ModalHeader
                        handleDropdownMouseLeave={handleDropdownMouseLeave}
                        handleDropdownMouseEnter={handleDropdownMouseEnter}
                        hoveredDropdownLink={hoveredDropdownLink}
                        platformImage={platformImage}
                        data={NAVBAR_LINKS_LIST.platform}
                      />
                    )}
                  </li>
                  <li
                    ref={solutionsRef}
                    className="relative h-full"
                    onMouseEnter={() => {
                      setIsSolutionsDropdownOpen(true);
                      handleMouseEnter('solutions');
                    }}
                    onMouseLeave={() => {
                      setIsSolutionsDropdownOpen(false);
                      handleMouseLeave();
                    }}
                  >
                    <a
                      href="#"
                      className={`flex items-center ${getLinkClasses('solutions')}`}
                    >
                      Solutions
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${isSolutionsDropdownOpen ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>

                    {/* Невидимый мост между ссылкой и dropdown */}
                    {isSolutionsDropdownOpen && (
                      <div className="absolute top-full left-0 w-48 h-[68px] bg-transparent z-40" />
                    )}

                    {isSolutionsDropdownOpen && (
                      <ModalHeader
                        handleDropdownMouseLeave={handleDropdownMouseLeave}
                        handleDropdownMouseEnter={handleDropdownMouseEnter}
                        hoveredDropdownLink={hoveredDropdownLink}
                        platformImage={platformImage}
                        data={NAVBAR_LINKS_LIST.solutions}
                      />
                    )}
                  </li>
                  <li
                    ref={securityRef}
                    onMouseEnter={() => {
                      handleMouseEnter('security');
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave();
                    }}
                  >
                    <a className={`flex items-center h-full ${getLinkClasses('security')}`} href="/security">Security</a>
                  </li>
                  {/* <li
                    ref={contactRef}
                    onMouseEnter={() => handleMouseEnter('contact')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href="#"
                      className={getLinkClasses('contact')}
                    >
                      Contact
                    </a>
                  </li> */}
                </ul>
              </nav>

              <div className="login flex gap-10 items-center">
                <span
                  ref={loginRef}
                  className={getLoginClasses()}
                  onMouseEnter={() => handleMouseEnter('login')}
                  onMouseLeave={handleMouseLeave}
                >
                  Login
                </span>
                <div
                  className={`transition-all duration-300 ease-in-out ${isLinkVisible
                    ? 'opacity-100 translate-x-0 scale-100'
                    : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
                    }`}
                >
                  <Link to="/login" label="Request a Demo" />
                </div>
              </div>

              {/* Полная линия-ползунок (фон) на всю ширину экрана */}
              <div
                className={`absolute bottom-[-30px] h-0.5 transition-all duration-300 ease-out ${isHeaderHovered ? 'bg-gray-600' : 'bg-transparent'
                  }`}
                style={{
                  left: '50%',
                  width: '100vw',
                  transform: 'translateX(-50%) translateY(-8px)'
                }}
              />

              {/* Активная часть ползунка */}
              <div
                className="absolute bottom-[-30px] h-0.5 bg-white transition-all duration-300 ease-out"
                style={{
                  left: `${lineStyle.left}px`,
                  width: `${lineStyle.width}px`,
                  opacity: lineStyle.opacity,
                  transform: 'translateY(-8px)'
                }}
              />
            </>
          ) : (<>
            <BurgerMenu
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </>)}
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}

      />
    </>
  );
}