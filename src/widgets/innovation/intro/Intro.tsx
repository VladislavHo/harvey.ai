import { Link } from "../../../shared/ui";

export default function Intro({sub, title, text}: { sub: string, title: string, text: string }) {
  return (
    <section className="max-w-[1600px] min-w-full mx-auto">
      <div className="flex flex-col md:flex-row h-full items-end justify-between mx-auto py-50 px-7 md:px-8 lg:px-9 xl:px-10">
        <div className="flex mb-sm md:mb-0 flex-col w-full  items-center gap-sm md:gap-md text-center md:items-start md:text-left md:w-1/2">
          <p className="universal-text-1 text-pretty font-medium md:font-medium text-gray-200">{sub}</p>
          <h1 className="text-balance max-w-[600px] w-full">{title}</h1>
        </div>
        <div className="flex flex-col items-end justify-center text-center w-full max-w-[500px] md:w-1/2 md:text-left md:justify-end md:items-start gap-md">
          <p className="text-balance md:text-pretty lg:text-lg universal-text-2 max-w-[570px]">
           {text}
          </p>
          <div className="flex md:w-auto w-full  justify-center items-center">
            <Link label="Request a Demo" to="#" />
          </div>
        </div>
      </div>
    </section>
  )
}
