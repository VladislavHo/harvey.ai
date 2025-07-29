import imagePerson from "../../../../public/img/Bivek_Sharma.png"
import { KnowledgeWidgets, MainWidgets } from "../../../widgets"

export default function Knowledge() {

  return (
    <main>
      <div className="flex flex-col gap-xl">
        <MainWidgets.IntroMain
          subtitle="Welcome to Harvey AI"
          title_1="Professional"
          title_2="Class AI"
          text="Domain-specific AI for law firms, professional service providers, and the Fortune 500."
          linkLabel="Request a Demo"
          linkTo="/about"
        />
        <section className="max-w-default w-full">
          <KnowledgeWidgets.Map />
        </section>
        <KnowledgeWidgets.KeyDataBlock />
        <MainWidgets.GeneralCounsel
          imagePerson={imagePerson}
          text="“What we’re doing with generative AI is supercharging careers by 1-2 years at a minimum. Our junior members don’t want to join an organization that isn’t using AI.”"
          name="Bivek Sharma"
          position="Chief AI Officer"
          company="PwC UK"
        />
      </div>

    </main>
  )
}