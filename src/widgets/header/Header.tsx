import { Link } from "../../shared/ui";
import { useState, useEffect } from "react";

export default function Header() {
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLinkVisible, setIsLinkVisible] = useState(false); // Изначально скрыта
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Показываем ссылку только когда прокрутили больше 10px
      if (currentScrollY > 10) {
        setIsLinkVisible(true);
      } else {
        setIsLinkVisible(false);
      }

      // Показываем хедер если скроллим вверх или находимся в самом верху
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Скрываем хедер если скроллим вниз и прошли больше 10px
      else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
        // Закрываем выпадающее меню при скролле
        setIsPlatformDropdownOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Вызываем handleScroll при монтировании для установки начального состояния
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full  h-[92px] flex items-center fixed top-0 left-0 z-40 transition-transform duration-300 ease-in-out bg-primary ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="l-header btn-primary flex justify-between items-center w-full max-w-[1920px] mx-auto my-0">
        <div className="logo">
          <a href="/">Harvey</a>
        </div>
        <nav>
          <ul className="flex gap-[32px]">
            <li
              className="relative"
              onMouseEnter={() => setIsPlatformDropdownOpen(true)}
              onMouseLeave={() => setIsPlatformDropdownOpen(false)}
            >
              <a href="/platform/knowledge" className="flex items-center">
                Platform
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isPlatformDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              {isPlatformDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50"
                  onMouseEnter={() => setIsPlatformDropdownOpen(true)}
                  onMouseLeave={() => setIsPlatformDropdownOpen(false)}
                >
                  <ul className="py-2">
                    <li>
                      <a
                        href="/platform/knowledge"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        Knowledge
                      </a>
                    </li>
                    <li>
                      <a
                        href="/platform/vault"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        Vault
                      </a>
                    </li>
                    <li>
                      <a
                        href="/platform/assistant"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        Assistant
                      </a>
                    </li>
                    <li>
                      <a
                        href="/platform/workflows"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        Workflows
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className="login flex gap-10 items-center">
          <span
            className={`transition-all duration-300 ease-in-out ${isLinkVisible
                ? 'translate-x-0'
                : 'translate-x-50'
              }`}
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
      </div>
    </header>
  )
}