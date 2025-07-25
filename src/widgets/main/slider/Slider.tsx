import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Импорт стилей Swiper


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Импорт ваших кастомных стилей
import "./Slider.css"
import { SLIDER_MAIN_DATA_LIST } from '../../../shared/config/slider_main';
import { Link } from '../../../shared/ui';

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1.2} // Показываем активный слайд + части соседних
      centeredSlides={true}
      loop={false} // Отключаем loop
      pagination={{
        clickable: true,
        type: 'bullets', // Явно указываем тип
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      breakpoints={{
        320: {
          slidesPerView: 1.1,
          spaceBetween: 15,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 1.15,
          spaceBetween: 20,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 1.2,
          spaceBetween: 25,
          centeredSlides: true,
        },
        1440: {
          slidesPerView: 1.25,
          spaceBetween: 30,
          centeredSlides: true,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        SLIDER_MAIN_DATA_LIST.map(el => (
          <SwiperSlide key={el.id}>
            <a href={el.link.href} className="slide-link">
              <div className="card rounded-3xl">
                <div className="slider--bg--wrapper">
                  <div className="slider--bg aspect-square w-full h-[500px] rounded-sm bg-gray-800 bg-no-repeat bg-center bg-cover flex justify-center items-center" style={{ backgroundImage: `url(/img/slider/${el.image.name}.${el.image.format})` }}>
                    <img src={`/svg/slider-person/${el.icon.name}.${el.icon.format}`} alt={el.icon.name} />
                  </div>
                </div>

                <div className="slider--info flex justify-between items-start p-4 gap-6">
                  <div className="info">
                    <h4 className='text-base sm:text-lg'>{el.description}</h4>
                    <p className='text-sm sm:text-base text-gray-400'>{el.person}</p>
                  </div>
                  <Link label='Read Case Study' to='/' />
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}