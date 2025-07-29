import { MainWidgets } from '../../widgets'
import { Security as SecurityBlock } from '../../widgets'
export default function Security() {
  return (
    <main>
      <div className="flex flex-col gap-xl mt-xl">
        <MainWidgets.IntroMain
          subtitle="Security"
          title_1="For the Most"
          title_2="Sensitive Matters"
          text="Harvey keeps your client data safe with world-class security and data privacy measures."
          linkLabel="Request a Demo"
          linkTo="/about"
        />
        <SecurityBlock.Protection />
        <SecurityBlock.Standarts />
        <SecurityBlock.Info />
        <SecurityBlock.Person />

      </div>
    </main>
  )
}
