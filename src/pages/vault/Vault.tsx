import { GeneralCounsel, IntroMain, VideoVault } from '../../widgets'
import imagePerson from "../../../public/img/Pablo_Blanco.jpeg"
import { Insights, VaultNumber } from '../../widgets/vault'

import intro_image_video from "../../../public/img/intro_vault.svg"
import video from "../../../public/video/intro.mp4"
export default function Vault() {
  return (
    <main>
      <IntroMain
        subtitle="Vault"
        title_1="Secure Storage,"
        title_2="Smart Analysis"
        text="Upload, store, and analyze thousands of documents using powerful generative AI."
        linkLabel="Request a Demo"
        linkTo="/about"
      />
      <VideoVault image={intro_image_video} video={video} />
      <Insights />
      <VaultNumber />
      <GeneralCounsel
        imagePerson={imagePerson}
        text="“The challenge of transforming legal services isn't just about introducing technology — it’s about shifting mindsets. If you're not learning how to use AI now, you risk being left behind.”"
        name="Pablo Blanco"
        position="General Counsel"
        company="Repsol"
      />
    </main>
  )
}
