
export default function VaultNumber() {
  return (
    <section className='max-w-default w-full flex flex-col gap-lg'>
      <h2 className='text-center'>Vault by the Numbers</h2>
      <div className='flex items-center justify-between w-full'>
        <div className='flex flex-col gap-sm text-center md:flex-1'>
          <p className='heading-1'>97%</p>
          <p className='heading-4'>accuracy on key term extraction</p>
        </div>
        <div className='h-[40px] w-[2px] relative'>
          <div className='absolute left-1/2 h-px w-full -translate-x-1/2 bg-gray-800 content-[""] md:h-full md:w-px'></div>
        </div>
             <div className='flex flex-col gap-sm text-center md:flex-1'>
          <p className='heading-1'>10k+</p>
          <p className='heading-4'>documents stored per Vault</p>
        </div>
        <div className='h-[40px] w-[2px] relative'>
          <div className='absolute left-1/2 h-px w-full -translate-x-1/2 bg-gray-800 content-[""] md:h-full md:w-px'></div>
        </div>
             <div className='flex flex-col gap-sm text-center md:flex-1'>
          <p className='heading-1'>50+</p>
          <p className='heading-4'>field extractions per document</p>
        </div>

      </div>
    </section>
  )
}
