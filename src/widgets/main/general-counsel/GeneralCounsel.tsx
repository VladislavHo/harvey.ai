
interface IGeneralCounsel {
  imagePerson: string,
  text: string,
  name: string,
  position: string,
  company: string,

}
export default function GeneralCounsel({ imagePerson, text, name, position, company }: IGeneralCounsel) {
  return (
    <section className='counsel w-full py-16 bg-light-oxford'>
      <div className="counsel--wrapper flex justify-between items-center gap-8 max-w-[1370px] mx-auto">
        <div className="bg w-full">

          <div className="img bg-cover bg-center bg-no-repeat max-w-[590px] h-[590px]" style={{ backgroundImage: `url(${imagePerson})` }}></div>

        </div>
        <div className="info w-full flex items-center justify-center">
          <div className="info--wrapper max-w-[470px]">
            <span className="text-gray-950-ink heading-3 ">{text}</span>

            <div className="flex flex-col gap-0.5 mt-8">
              <span className="universal-text-2 text-gray-950-ink">{name}</span>
              <span className="universal-text-2 font-normal text-gray-900">{`${position}, ${company}`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
