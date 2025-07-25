
export default function SimpleCard({ el, className }: { el: any, className?: string }) {
  return (
    <div key={el.id} className={`key_data--item rounded-2xl overflow-hidden ${className}`}>
      <div className="bg">
        <img style={{ width: "100%" }} src={`/img/key_data/${el.img.name}.${el.img.format}`} alt={el.img.name} />
      </div>
      <div className="info flex grow flex-col rounded-b bg-gray-900 p-7 md:p-8 lg:py-[36px] lg:pl-[36px] lg:pr-[116px] xl:py-[40px] xl:pl-[40px] xl:pr-[140px]">
        <h4 className="mb-[.625rem] font-harvey-serif text-xl">{el.title}</h4>
        <p className="universal-text-2 max-w-[440px] h-[40px]">{el.description}</p>
      </div>
    </div>
  )
}
