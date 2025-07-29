import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useRef } from 'react';

import { USE_PLATFORM_DATA_LIST } from '../../../shared/config/use_platform';
import AboutPlatform from '../about-platform/AboutPlatform';
import "./UsePlatform.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function UsePlatform() {
  const swiperRef = useRef(null);

  const autoplayDelay = 8000;

  return (
    <section className='use-platform max-w-[1370px] w-full'>
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
                        <span class="bullet-text relative z-1 mix-blend-difference">${USE_PLATFORM_DATA_LIST[index].title || (index + 1)}</span>
                      </span>`;
            }
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