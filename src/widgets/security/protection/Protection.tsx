import { PROTECTION_SECURITY_DATA_LIST } from '../../../shared/config/protection_security'

export default function Protection() {
  return (
    <section className='max-w-default'>
      <div className='w-full flex justify-center'>

        <h2 className='text-center w-full max-w-[500px] mb-10'>Enterprise-Grade Protection</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {PROTECTION_SECURITY_DATA_LIST.map((el, index) => (
          <article
            key={el.id || index}
            className={`flex flex-col items-center mb-20 text-center md:items-start md:text-left
              ${index === 1 || index === 4 || index === 2 || index === 5 ? 'md:border-l md:border-gray-700 pl-10' : 'pr-10'}`}
          >
            <h4 className='mb-4 text-gray-50-ivory'>{el.title}</h4>
            <p className='font-normal text-gray-100'>{el.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}