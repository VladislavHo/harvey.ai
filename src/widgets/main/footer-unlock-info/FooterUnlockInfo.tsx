import { Link } from "../../../shared/ui";

export default function FooterUnlockInfo() {
  return (
    <div className="flex gap-7 flex-col md:flex-row justify-end md:justify-between items-start md:items-end border-b border-gray-900 py-12 md:py-24">
      <h3 className="text-balance heading-3">Unlock Professional Class AI for Your Firm</h3>
      <Link label="Request a Demo" to="/" />
    </div>
  )
}
