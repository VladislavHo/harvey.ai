import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useState, useRef, useEffect } from 'react';
import "./CustomersSay.css"
import 'swiper/css';
import 'swiper/css/pagination';
import CustomersCard from './Card/CustomersCard';

interface ICustomersSayData {
  id: number;
  title: string;
  description: string;
  person: {
    name: string;
    position: string;
  };
  logo: {
    name: string;
    format: string;
  };
}

export default function CustomersSay({items}: {items: ICustomersSayData[]}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const autoplayDelay = 8000;

  const startProgressAnimation = () => {
    // Сначала сбрасываем анимацию для всех элементов
    const allProgressElements = document.querySelectorAll('.customer-say .customer-say__bullet-progress') as NodeListOf<HTMLElement>;
    allProgressElements.forEach((el) => {
      el.style.animation = 'none';
      el.offsetHeight; // Trigger reflow
      el.style.animation = '';
    });

    // Затем запускаем анимацию только для активного элемента
    const activeElement = document.querySelector('.customer-say .swiper-pagination-bullet-active .customer-say__bullet-progress') as HTMLElement;
    if (activeElement) {
      activeElement.style.animation = `customer-say-progress-animation ${autoplayDelay}ms linear forwards`;
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
    <section className='customer-say max-w-[1370px] w-full'>
      <h2 className='heading-3 text-balance text-center pb-4'>What Our Customers Are Saying</h2>
      <div className="customer-say__wrapper">
        <div ref={paginationRef} className="customer-say__pagination max-w-full w-full flex justify-center flex-wrap gap-4"></div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} customer-say__bullet" data-index="${index}">
                        <span class="customer-say__bullet-text">${items[index].title || (index + 1)}</span>
                        <div class="customer-say__bullet-progress"></div>
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
          {items.map(slide => (
            <SwiperSlide key={slide.id}>
              <CustomersCard {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}