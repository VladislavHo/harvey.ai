import { Array_3Icon } from '../../svg/SVG'

export default function Standarts() {
  return (
    <section className='max-w-[1200px] w-full flex flex-col gap-lg'>
      <h2 className='text-center max-w-[500px] mx-auto w-full text-balance'>Compliant with Industry Standards</h2>
      <div className='w-full flex justify-between'>
        <div className='flex flex-col items-center gap-5'>
          <img width={160} src="/svg/security/security.svg" alt="security_icon" />
          <a href="#" className='transition-colors duration-300 ease-out justify-center text-center h-6 bg-transparent text-gray-500 hover:text-red-50 leading-[130%] flex w-full items-center gap-1 font-medium cursor-pointer'>
            <p>Details</p>
            <Array_3Icon />
          </a>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <img width={160} src="/svg/security/security-2.svg" alt="security_icon" />
          <a href="#" className='transition-colors duration-300 ease-out justify-center text-center h-6 bg-transparent text-gray-500 hover:text-red-50 leading-[130%] flex w-full items-center gap-1 font-medium cursor-pointer'>
            <p>Details</p>
            <Array_3Icon />
          </a>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <img width={160} src="/svg/security/security-3.svg" alt="security_icon" />
          <a href="#" className='transition-colors duration-300 ease-out justify-center text-center h-6 bg-transparent text-gray-500 hover:text-red-50 leading-[130%] flex w-full items-center gap-1 font-medium cursor-pointer'>
            <p>Details</p>
            <Array_3Icon />
          </a>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <img width={160} src="/svg/security/security-4.svg" alt="security_icon" />
          <a href="#" className='transition-colors duration-300 ease-out justify-center text-center h-6 bg-transparent text-gray-500 hover:text-red-50 leading-[130%] flex w-full items-center gap-1 font-medium cursor-pointer'>
            <p>Details</p>
            <Array_3Icon />
          </a>
        </div>
      </div>
    </section>
  )
}
