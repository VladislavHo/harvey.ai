import { SimpleCard } from '../../card'


export default function SimpleCards({ list }: {list: any[]  }) {
  return (
    <div className="insight--list flex flex-wrap justify-between p-0">
      {
        list.map(el => (
          <SimpleCard el={el} className="mb-10" />
        ))
      }
    </div>
  )
}
