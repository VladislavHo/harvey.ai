import { ArrayIcon } from "../../../svg/SVG";

export default function CustomersCard(slide: any) {
  return (
    <div className="card w-full flex justify-between flex-col md:flex-row-reverse">
      <div className="bg bg-secondary flex justify-center items-center p-18.5 order-2">
        <img className="h-full w-full object-cover" src={`/svg/logo_company/${slide.logo.name}.${slide.logo.format}`} alt={slide.logo.name} />
      </div>
      <div className="info h-full rounded-sm border border-gray-900 p-md flex flex-col justify-between col-span-1 md:col-span-8 md:h-[328px] order-1 md:order-none">
        <h3 className='heading-3 text-pretty mb-md md:mb-0 lg:text-[2rem] md:pr-24  max-w-[700px]'>{slide.description}</h3>
        <div className='flex flex-col md:flex-row items-start justify-between md:items-end'>
          <div className='flex flex-col mb-md md:mb-0'>
            <p className='text-base'>
              {slide.person.name}
            </p>
            <p className='text-base text-secondary max-w-[400px]'>
              {slide.person.position}
            </p>
          </div>
          <a href="#" className='transition-colors gap-2 duration-300 ease-out w-max justify-center items-center text-center text-gray-500 hover:text-gray-50-ivory active:text-gray-200 flex cursor-pointer'>
            Customer Story
            <ArrayIcon fill="#808080" />
          </a>
        </div>
      </div>
    </div>
  )
}
