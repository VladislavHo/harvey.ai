import { Link } from "../../../shared/ui";

export default function FooterUnlockInfo() {
  return (
    <section className="unlock-info max-w-[1370px] flex items-center justify-between gap-10 py-12">
      <h3 className="text-balance heading-3">Unlock Professional Class AI for Your Firm</h3>
      <Link label="Request a Demo" to="/" />
    </section>
  )
}
