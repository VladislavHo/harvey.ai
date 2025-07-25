import { SimpleCards } from '../../cards'
import { MOVE_FORVARD_DATA_LIST } from '../../../shared/config/move_forward'

export default function MoveForwards() {
  return (
    <section className="max-w-default p-0 flex flex-col gap-xl">
      <div>
        <h2 className="text-center">Move Forward</h2>
        <h2 className="text-center">Faster</h2>
      </div>
      <SimpleCards list={MOVE_FORVARD_DATA_LIST} />
    </section>
  )
}
