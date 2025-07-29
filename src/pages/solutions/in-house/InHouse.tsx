import { AboutInovation, CustomersSay, FooterInovation, Intro, PlatformInovation, SecurityInovation, SliderInovation } from '../../../widgets/innovation'
import { MainWidgets } from '../../../widgets'
import { ABOUT_ISHOUSE_DATA_LIST } from '../../../shared/config/about_is_house'
import { USE_IS_HOUSE_DATA_LIST } from '../../../shared/config/use_is_house'
import { PLATFORM_INFO_DATA_LIST } from '../../../shared/config/platform_info'
import { CUSTOMERS_SAY_DATA_LIST } from '../../../shared/config/customers_say'

export default function InHouse() {
  return (
    <main>
      <div className="flex flex-col gap-xl mt-xl">
        <div>
          <Intro
            sub={"For In-House Legal Teams"}
            title={"Go from Backlog to Business Partner"}
            text={"Harvey streamlines high-volume legal work, so your team can focus on strategic guidance and faster execution."}
          />
          <MainWidgets.LogoCompany />
        </div>

        <AboutInovation items={ABOUT_ISHOUSE_DATA_LIST} />
        <SliderInovation title={"In-House"} items={USE_IS_HOUSE_DATA_LIST} />

        <PlatformInovation items={PLATFORM_INFO_DATA_LIST} />

        <SecurityInovation />

        <CustomersSay items={CUSTOMERS_SAY_DATA_LIST.slice(3, 7)} />

        <FooterInovation label={"Lead with Intention, not Interruption"} bg={"bg-light-oxford"}/>


      </div>
    </main>

  )
}
