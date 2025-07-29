

interface IPlatformInfo {
  id: number
  title: string
  description: string
  img: {
    name: string
    format: string
  }
}
export default function PlatformInovation({items}: {items: IPlatformInfo[]}) {
  return (
    <section className='max-w-default'>
      <div className='flex flex-col items-center gap-md'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-12 w-full md:grid-rows-2'>
          {items.map((el, index) => (
            <article
              key={el.id || index}
              className={`
                bg-secondary w-full p-md
                ${index < 3 ? 'md:col-span-4' : 'md:col-span-6'}
                ${index >= 3 ? 'md:row-start-2' : ''}
              `}
            >
              <img src={`/svg/${el.img.name}.${el.img.format}`} alt="icon" />
              <div className="flex flex-col gap-2 pt-10 md:gap-[9px] lg:gap-[10px] xl:gap-3">
                <h4>{el.title}</h4>
                <p className="font-normal max-w-[400px]">{el.description}</p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}