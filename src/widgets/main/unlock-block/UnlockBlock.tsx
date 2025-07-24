import { UNLOCK_MAIN_DATA_LIST } from "../../../shared/config/unlock_main";

export default function UnlockBlock() {
  return (
    <section
      className="unlock-block max-w-[1370px] flex flex-col gap-16 md:gap-[72px] lg:gap-20 xl:gap-24">
      <h3 className="max-w-[500px] w-full text-center mx-auto  text-balance">Unlock Professional Class AI For Your Firm</h3>
      <div className="unlock-block--wrapper flex flex-col gap-16 md:grid md:gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-[72px] xl:gap-20">
        {UNLOCK_MAIN_DATA_LIST.map(el => (
          <>
            <article key={el.id} className="unlock-block--item mx-auto flex max-w-[281px] flex-col items-center gap-4 text-center md:mx-0 md:max-w-none md:items-start md:gap-[18px] md:text-start lg:gap-5 xl:gap-6">
              <div className="icon">
                <img src={`./svg/unlock/${el.icon}.svg`} alt="icon" />
              </div>
              <h4 className="">Domain-Specific Models</h4>
              <p>High-performing custom models built for complex professional work.</p>
            </article>
          </>
        ))}
      </div>
    </section>
  )
}
