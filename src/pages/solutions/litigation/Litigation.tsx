import { AboutInovation, CustomersSay, Intro, PlatformInovation, SecurityInovation, SliderInovation } from '../../../widgets/innovation'
import { MainWidgets } from '../../../widgets'
import { ABOUT_LITIGATION_DATA_LIST } from '../../../shared/config/about_litigation'
import { USE_LITIGATION_DATA_LIST } from '../../../shared/config/use_litigation'
import { PLATFORM_INFO_DATA_LIST } from '../../../shared/config/platform_info'
import { CUSTOMERS_SAY_DATA_LIST } from '../../../shared/config/customers_say'

export default function Litigation() {
  return (
    <main>
      <div className="flex flex-col gap-xl mt-xl">
        <div>
          <Intro
            sub={"For Litigation Work"}
            title={"Reclaim Time for Strategic Litigation"}
            text={"Harvey enables litigators to reduce manual work, redirect time to decision-making, and confidently deliver more favorable client outcomes."}
          />
          <MainWidgets.LogoCompany />
        </div>

        <AboutInovation items={ABOUT_LITIGATION_DATA_LIST} />
        <SliderInovation title={"Litigation "} items={USE_LITIGATION_DATA_LIST} />

        <PlatformInovation items={PLATFORM_INFO_DATA_LIST} />

        <SecurityInovation />

        <CustomersSay items={CUSTOMERS_SAY_DATA_LIST.slice(12, 16)} />

        <section></section>
        {/* <FooterInovation label={"Lead with Intention, not Interruption"} bg={"bg-light-oxford"} /> */}


      </div>
    </main>
  )
}
