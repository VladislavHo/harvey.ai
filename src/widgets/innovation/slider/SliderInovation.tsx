import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useState, useRef, useEffect } from 'react';
import { MainWidgets } from '../../main';
import "./SliderInovation.css"
import 'swiper/css';
import 'swiper/css/pagination';

interface InnovationItem {
  id: number
  imgName: string
  sup: string
  title: string
  p: string
  a: string
  to: string
  className: string
}

export default function SliderInovation({items, title}: {items: InnovationItem[], title: string}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const autoplayDelay = 8000;
  const reverseTitles = items.slice().reverse();

  const startProgressAnimation = () => {
    const activeElement = document.querySelector('.use-inovation .swiper-pagination-bullet-active .bullet-progress') as HTMLElement;
    if (activeElement) {
      activeElement.style.animation = 'none';
      activeElement.offsetHeight;
      activeElement.style.animation = `progressFill ${autoplayDelay}ms linear forwards`;
    }
  };

  useEffect(() => {
    const timer = setTimeout(startProgressAnimation, 50);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    if (swiper && paginationRef.current) {
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }
  }, [swiper]);

  const handleSwiperInit = (swiperInstance: any) => {
    setSwiper(swiperInstance);
  };

  return (
    <section className='use-inovation max-w-[1370px] w-full'>
      <div className="use-inovation--wrapper">
        <div className="flex justify-between items-center mb-8">
          <div className="text-left">
            <h2 className='heading-3 text-balance max-w-[300px]'>How {title} Teams Use Harvey</h2>
          </div>
          <div ref={paginationRef} className="max-w-[700px] w-full swiper-pagination-custom flex flex-wrap gap-2 justify-end"></div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: true,
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} pagination-bullet-custom relative rounded-full overflow-hidden border bg-primary border-secondary text-primary" data-index="${index}">
                        <div class="bullet-progress absolute top-0 left-0 w-full h-full bg-white z-0"></div>
                        <span class="bullet-text relative z-1 mix-blend-difference">${reverseTitles[index].title || (index + 1)}</span>
                      </span>`;
            }
          }}
          onSwiper={handleSwiperInit}
          onSlideChange={(swiperInstance) => {
            setActiveIndex(swiperInstance.activeIndex);
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
          {reverseTitles.map(slide => (
            <SwiperSlide key={slide.id}>
              <MainWidgets.AboutPlatform {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}