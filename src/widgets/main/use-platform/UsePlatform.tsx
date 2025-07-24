import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useState, useRef, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { USE_PLATFORM_DATA_LIST } from '../../../shared/config/use_platform';
import AboutPlatform from '../about-platform/AboutPlatform';
import "./UsePlatform.css"

export default function UsePlatform() {
  // const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  const titles = ['Research', 'Analysis', 'Review', 'Drafting'];
  const autoplayDelay = 8000;

  useEffect(() => {
    // Обновляем прогресс для активного элемента
    const activeElement = document.querySelector('.use-platform .swiper-pagination-bullet-active .bullet-progress');
    if (activeElement) {
      activeElement.style.transform = `translateX(${progress - 100}%)`;
    }
  }, [progress]);

  return (
    <section className='use-platform max-w-[1370px] '>
      <div className='text-center'>
        <span className='heading-4 text-balance text-center'>Solutions for All Lawyers</span>
        <h2 className='heading-3 text-balance'>How Lawyers Use Harvey</h2>
      </div>


      <div className="use-platform--wrapper">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} pagination-bullet-custom relative rounded-full overflow-hidden border bg-primary border-secondary text-primary" data-index="${index}">
                        <div class="bullet-progress absolute top-0 left-0 w-full h-full bg-white z-0"></div>
                        <span class="bullet-text relative z-1 mix-blend-difference">${titles[index] || (index + 1)}</span>
                      </span>`;
            }
          }}
          onSlideChange={(swiper) => {
            // setActiveIndex(swiper.activeIndex);
            setProgress(0);
          }}
          onAutoplayTimeLeft={(swiper, time, progress) => {
            setProgress((1 - progress) * 100);
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          {USE_PLATFORM_DATA_LIST.map(slide => (
            <SwiperSlide key={slide.id}>
              <AboutPlatform {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}