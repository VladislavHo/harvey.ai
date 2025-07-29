import { Link } from '../../../shared/ui'

export default function FooterInovation({ label, bg }: { label: string, bg?: string }) {
  return (
    <section className={`w-full flex mt-xl flex-col items-center gap-md py-xl  ${bg}`}>
      <h2 className='heading-3 text-balance text-primary-inverse text-center max-w-[500px]'>{label}</h2>
      <Link to='#' label='Request a Demo' />
    </section>
  )
}
