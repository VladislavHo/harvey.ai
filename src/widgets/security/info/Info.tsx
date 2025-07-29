import { Array_3Icon } from "../../svg/SVG";

export default function Info() {
  return (
    <section className="max-w-default w-full">
      <div className="flex justify-between items-start">
        <div className="max-w-[450px]">
          <h3 className="text-balance">Security is Fundamentalto Everything We Do</h3>
        </div>
        <div className="max-w-[470px] w-full flex flex-col gap-md">
          <p className="universal-text-1">We’ve built a comprehensive system that protects data at every level-from robust user authentication to vigilant network monitoring. Our approach combines cutting-edge technology with rigorous protocols, ensuring that information remains secure in an ever-changing digital landscape. We constantly test and improve our defenses, staying ahead of potential threats to maintain the trust our clients place in us.</p>
          <a href="#" className="transition-colors duration-300 ease-out w-max justify-center text-center h-12 px-5 rounded-sm bg-transparent text-primary border border-primary-inverse hover:text-gray-500 hover:border-gray-500 flex items-center gap-1 cursor-pointer">Explore Security Portal
            <Array_3Icon/>
          </a>
        </div>
      </div>
    </section>
  )
}
