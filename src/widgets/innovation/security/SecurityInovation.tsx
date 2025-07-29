import { Array_2Icon } from '../../svg/SVG'

export default function SecurityInovation() {
  return (
    <section className='max-w-default w-full'>
      <div className='flex justify-between'>
        <div className="info flex flex-col gap-4">
          <h2 className='heading-3 mb-md md:mb-sm'>Enterprise-Grade Security</h2>
          <p className='mb-md text-md text-center md:text-left sm:text-lg max-w-[570px]'>Harvey is built with robust safeguards to protect your data and ensure compliance with your organization’s security standards.</p>
          <a href="#" className='flex transition-colors duration-300 ease-out w-max items-center justify-center text-center h-12 px-5 rounded-sm bg-transparent text-primary border border-primary-inverse hover:text-gray-500 hover:border-gray-500 font-medium cursor-pointer'>
            Learn More

            <Array_2Icon />
          </a>
        </div>
        <div className="bg flex items-center gap-ls">
          <img src="/svg/security/security.svg" alt="security_icon" />
          <img src="/svg/security/security-2.svg" alt="security_icon" />
          <img src="/svg/security/security-3.svg" alt="security_icon" />
          <img src="/svg/security/security-4.svg" alt="security_icon" />
        </div>
      </div>
    </section>
  )
}
