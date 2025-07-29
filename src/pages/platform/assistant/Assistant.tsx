import { MainWidgets, Ask, VideoVault } from "../../../widgets";
import intro_image_video from "../../../../public/img/intro_assistant.svg"
// import video from "../../../public/video/intro.mp4"
import imagePerson from "../../../../public/img/David_Wakeling.png"
export default function Assistant() {
  return (
    <main>
      <div className="flex flex-col gap-xl">
        <MainWidgets.IntroMain
          subtitle="Assistant"
          title_1="Tailored to Your Expertise"
          title_2=""
          text="Delegate complex tasks in natural language to your domain-specific personal assistant."
          linkLabel="Request a Demo"
          linkTo="/about"
        />
        <VideoVault image={intro_image_video} video={"../../../public/video/intro.mp4"} />
        <Ask />
        <section className="">
          <MainWidgets.AboutPlatform
            imgName={"HWord.svg"}
            sup={""}
            title={"Harvey for Word"}
            p={"Supercharge Microsoft Word with our add-in, transforming your familiar workspace into a drafting powerhouse."}
            a={""}
            to={""}
            className={"flex-row-reverse"}
          />
        </section>

        <MainWidgets.GeneralCounsel
          imagePerson={imagePerson}
          text="“We want to free the lawyer from mundane, routine tasks, so that they can focus on what matters — strategy, advice, and judgment. This has become the mantra for my team.”"
          name="David Wakeling"
          position="Global Head of A&O Shearman’s Markets Innovation Group and AI Advisory Practice"
          company=""
        />
      </div>


    </main>
  )
}

