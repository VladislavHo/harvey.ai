import { KEY_DATA_BLOCK_LIST } from "../../../shared/config/key_data";
import { SimpleCard } from "../../card";

export default function KeyDataBlock() {
  return (
    <section className="key_data--block max-w-default">
      <h2 className="text-balance text-center">Key Data Sources</h2>
      <div className="key_data--list flex justify-between gap-8">
        {/* Вставляем вложенные компоненты KeyDataItem */}
        {KEY_DATA_BLOCK_LIST.map(el => (
          <SimpleCard el={el} />
        ))}
      </div>
    </section>
  )
}