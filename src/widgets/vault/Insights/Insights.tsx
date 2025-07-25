import { INSIGHTS_DATA_LIST } from '../../../shared/config/insights_vault'
import { SimpleCards } from '../../cards'

export default function Insights() {
  return (
    <section className='max-w-default p-0 flex flex-col gap-xl'>
      <h2 className='text-center'>Insights at Scale</h2>
      <SimpleCards list={INSIGHTS_DATA_LIST} />
    </section>
  )
}
