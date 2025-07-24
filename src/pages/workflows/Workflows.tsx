import { AboutPlatform, FooterUnlockInfo, GeneralCounsel, IntroMain, MoveForwards, VideoVault } from "../../widgets";
import intro_image_video from "../../../public/img/intro_workflows.svg"
import video from "../../../public/video/intro.mp4"
import imagePerson from "../../../public/img/David_Cunningham.png"

export default function Workflows() {
  return (
    <main>
      <IntroMain
        subtitle="Workflows"
        title_1="Streamline Your Work"
        title_2=""
        text="Design and deploy multi-model agents tailored to your firm’s expertise and deliver consistent, high-quality results at scale."
        linkLabel="Request a Demo"
        linkTo="/about"
      />
      <VideoVault image={intro_image_video} video={video} />
      <MoveForwards />
      <section className="">
        <AboutPlatform
          imgName={"BuildCustom.svg"}
          sup={"Build Custom Workflows"}
          title={"Bring your firm’s expertise to life with fully custom AI-powered workflows you can design and launch in just a few clicks."}
          p={"Supercharge Microsoft Word with our add-in, transforming your familiar workspace into a drafting powerhouse."}
          a={"Explore Workflow Builder"}
          to={"/about"}
          className={"flex-row-reverse"}
        />
      </section>

      <GeneralCounsel
        imagePerson={imagePerson}
        text="“I hear repeatedly from our lawyers that generative AI has allowed them to do more work in the same amount of time.”"
        name="David Cunningham"
        position="CINO,"
        company="Reed Smith"
      />
      <FooterUnlockInfo />
    </main>
  )
}
