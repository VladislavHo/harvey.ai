import { Link } from "../../../shared/ui";
interface IIntroMap {
  subtitle?: string;
  title_1: string;
  title_2: string;
  text: string;
  linkLabel: string;
  linkTo: string;
}
export default function IntroMain({
  subtitle,
  title_1,
  title_2,
  text,
  linkLabel,
  linkTo
}: IIntroMap) {
  return (
    <section className='flex flex-col items-center gap-5 max-w-[1920px] pt-30 pb-10'>
      
      {subtitle && <p className="universal-text-1 text-pretty font-medium text-gray-200">{subtitle}</p>}
      <div className='text-center pt-1'>
        <h1>{title_1}</h1>
        <h1>{title_2}</h1>
      </div>

      <p className='universal-text-2 mx-autoc text-center max-w-[536px] text-balance font-normal lg:text-lg '>{text}</p>

      <Link to={linkTo} label={linkLabel} />
    </section>
  )
}
