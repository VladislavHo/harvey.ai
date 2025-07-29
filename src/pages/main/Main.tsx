import { ABOUT_PLATFORM_DATA_LIST } from "../../shared/config/about_platform";
import { MainWidgets, Video } from "../../widgets";
import imagePerson from "../../../public/img/Thomas_Laubert.png"
import poster from "../../../public/video/intro.jpeg"
export default function Main() {
  return (
    <main>
      <div className="flex flex-col gap-xl">
        <MainWidgets.IntroMain
          title_1="Professional"
          title_2="Class AI"
          text="Domain-specific AI for law firms, professional service providers, and the Fortune 500."
          linkLabel="Request a Demo"
          linkTo="/about"
        />

        <Video poster={poster}/>
        <MainWidgets.LogoCompany />

        <section className="about_platform max-w-[1370px] py-10 flex flex-col items-center gap-sm">
          <div className="text-center">
            <h3 className="text-balance">Augment All of Your Work on</h3>
            <h3 className="text-balance">One Integrated, Secure Platform</h3>
          </div>
          <div className="about_platform--wrapepr flex flex-col gap-30">
            {
              ABOUT_PLATFORM_DATA_LIST.map(el => (
                <MainWidgets.AboutPlatform
                  imgName={el.imgName}
                  sup={el.sup}
                  title={el.title}
                  p={el.p}
                  a={el.a}
                  to={el.to}
                  className={el.className}
                />
              ))
            }

          </div>
        </section>
        <section className="max-w-[1370px] w-full p-0">

          <MainWidgets.Slider />
        </section>

        <MainWidgets.UsePlatform />
        <MainWidgets.UnlockBlock />
        <MainWidgets.GeneralCounsel
          imagePerson={imagePerson}
          text="“When it comes to AI and technology, it's all about learning by doing. You won’t figure everything out right away, but the more you engage with it, the more opportunities you’ll see.”"
          name="Thomas Laubert"
          position="General Counsel"
          company="Bayer"
        />
      </div>

    </main>
  )
}
