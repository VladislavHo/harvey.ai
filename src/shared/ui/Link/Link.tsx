import { NavLink } from "react-router";
export default function Link({ label, to }: { label: string, to: string } = { label: '', to: '' }) {
  const className = 'flex items-center justify-center text-nowrap rounded-sm bg-gray-50-ivory leading-none text-gray-950-ink duration-300 ease-custom-ease-in-out hover:bg-gray-500 focus:outline-hidden focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 active:bg-gray-300 h-12 px-5 universal-text-2 font-medium cursor-pointer '
  return (
    <NavLink className={className} to={to}>{label}</NavLink>
  )
}
