
interface IAbout{
  id: number,
  title: string
  description: string
  svg: string
}

export default function AboutInovation({items}: {items: IAbout[]}) {
  return (
    <section className='max-w-default w-full p-0'>
      <div className='flex flex-col gap-16 md:flex-row md:gap-8 lg:gap-[72px] xl:gap-20'>
        {items.map((el, index) => (
          <>
            <article key={el.id || index} className='about--item mx-auto flex max-w-[285px] flex-col items-center gap-4 text-center md:mx-0 md:items-start md:gap-[18px] md:text-start lg:gap-5 xl:gap-6'>
              <img src={`/svg/${el.svg}`} alt="icon" />
              <div className='flex flex-col gap-2 md:gap-[9px] lg:gap-[10px] xl:gap-3'>
                <h4>{el.title}</h4>
                <p>{el.description}</p>
              </div>
            </article>
            {index < items.length - 1 && (
              <div className='hidden md:block w-px h-36 bg-gray-800 mx-4 lg:mx-6 xl:mx-8'></div>
            )}
          </>
        ))}
      </div>
    </section>
  )
}