import { AboutInovation, CustomersSay, Intro, PlatformInovation, SecurityInovation, SliderInovation } from '../../../widgets/innovation'
import { MainWidgets } from '../../../widgets'
import { ABOUT_TRANSACTIONAL_DATA_LIST } from '../../../shared/config/about_transactional'
import { USE_TRANSACRIONAL_DATA_LIST } from '../../../shared/config/use_transactional'
import { PLATFORM_INFO_DATA_LIST } from '../../../shared/config/platform_info'
import { CUSTOMERS_SAY_DATA_LIST } from '../../../shared/config/customers_say'

export default function Transactional() {
  return (
    <main>
      <div className="flex flex-col gap-xl mt-xl">
        <div>
          <Intro
            sub={"For Transactional Work"}
            title={"Accelerate Deals, Enhance Outcomes"}
            text={"Harvey is built to augment transactional work, helping lawyers complete due diligence, conduct contract analysis, and gain an advantage."}
          />
          <MainWidgets.LogoCompany />
        </div>

        <AboutInovation items={ABOUT_TRANSACTIONAL_DATA_LIST} />
        <SliderInovation title={"Transactional"} items={USE_TRANSACRIONAL_DATA_LIST} />

        <PlatformInovation items={PLATFORM_INFO_DATA_LIST} />

        <SecurityInovation />

        <CustomersSay items={CUSTOMERS_SAY_DATA_LIST.slice(7, 12)} />

        <section></section>
        {/* <FooterInovation label={"Lead with Intention, not Interruption"} bg={"bg-light-oxford"} /> */}


      </div>
    </main>
  )
}
