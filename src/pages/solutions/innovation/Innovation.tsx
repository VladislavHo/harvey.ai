import { AboutInovation, CustomersSay, FooterInovation, Intro, PlatformInovation, SecurityInovation, SliderInovation } from '../../../widgets/innovation'
import {  MainWidgets, Video } from '../../../widgets'
import poster from "../../../../public/video/poster.svg"
import { ABOUT_INNOVATION_DATA_LIST } from '../../../shared/config/about_innovation'
import { USE_INOVATION_DATA_LIST } from '../../../shared/config/use_inovation'
import { PLATFORM_INFO_DATA_LIST } from '../../../shared/config/platform_info'
import { CUSTOMERS_SAY_DATA_LIST } from '../../../shared/config/customers_say'
// import { CUSTOMERS_SAY_DATA_LIST } from '../../../shared/config/customers_say';

export default function Innovation() {
  return (
    <main>
      <div className="flex flex-col gap-xl mt-xl">
        <Intro
          sub={"For Innovation Teams"}
          title={"Give Your Firm its Competitive Edge"}
          text={" Lead firmwide transformation—embedding your expertise, elevating client work, and delivering measurable results."}
        />

        <Video poster={poster} />

        <MainWidgets.LogoCompany />

        <AboutInovation items={ABOUT_INNOVATION_DATA_LIST}/>

        <SliderInovation title={"Innovation "} items={USE_INOVATION_DATA_LIST}/>

        <PlatformInovation items={PLATFORM_INFO_DATA_LIST}/>

        <SecurityInovation />

        <CustomersSay items={CUSTOMERS_SAY_DATA_LIST.slice(0, 3)}/>

        <FooterInovation label={"You’ve built the expertise. Now put it to work."} bg={"bg-light-plaster"}/>
      </div>

    </main>
  )
}
