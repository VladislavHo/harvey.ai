import "./AboutPlatform.css"
export default function AboutPlatform(
  { imgName = '',
    sup = '',
    title = '',
    p = '',
    a = '',
    to = '',
    className = ''
  }) {
  return (
    <div className={`about--platform flex  ${className} `} >
      <div className="bg" style={{ width: "100%" }}>
        <img width={"100%"} height={524} src={`/img/key_data/${imgName}`} alt="img" />
      </div>
      <div className="info flex w-full flex-col items-center justify-center bg-gray-900" style={{ width: "100%" }}>
        <div className="info--wrapper flex w-full flex-col gap-5 px-7 py-lg md:px-24">
          <span className="heading-4 relative font-normal capitalize">{sup}</span>
          <h2 className="text-balance">{title}</h2>
          <p className="max-w-[337px]">{p}</p>
          <a className="flex transition-colors duration-300 ease-out w-max items-center justify-center text-center hover:text-gray-50-ivory active:text-gray-200 group font-medium text-gray-500 align-middle cursor-pointer" href={to}>{a}</a>
        </div>
      </div>
    </div>
  )
}
