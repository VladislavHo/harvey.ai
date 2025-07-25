import { ASK_DATA_LIST } from "../../../shared/config/ask_data";
import { SimpleCards } from "../../cards";

export default function Ask() {
  return (
    <section className="max-w-default flex flex-col gap-xl">
      <h2 className="text-center">Just Ask Harvey</h2>
      <SimpleCards list={ASK_DATA_LIST} />
    </section>
  )
}
