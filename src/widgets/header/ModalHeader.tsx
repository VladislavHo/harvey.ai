
export default function ModalHeader({ handleDropdownMouseLeave, handleDropdownMouseEnter, hoveredDropdownLink, platformImage, data }: any) {
  return (
    <div
      className="fixed w-full top-[92px] left-0 bg-primary shadow-lg z-50 py-20"
    >
      <div className="max-w-[900px] mx-auto my-0 flex justify-between">
        <ul className="py-2 w-full flex flex-col justify-between">

          {data.map((item:any) => (
            <>
              <li className="max-w-[300px]">
                <a
                  href={item.href}
                  className="block transition-colors duration-300 ease-out"
                  onMouseEnter={() => handleDropdownMouseEnter(item.label.toLowerCase())}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <h3 className={`text-sm font-harvey-sans transition-colors duration-300 mb-[5px] ${hoveredDropdownLink === null || hoveredDropdownLink === item.label.toLowerCase()
                    ? 'text-white'
                    : 'text-gray-600'
                    }`}>
                    {item.label} 
                  </h3>
                  <p className={`text-sm font-harvey-sans transition-colors duration-300 ${hoveredDropdownLink === null || hoveredDropdownLink === item.label.toLowerCase()
                    ? 'text-gray-300'
                    : 'text-gray-600'
                    }`}>
                    {item.text}
                  </p>
                </a>
              </li>
            </>)
          )}
 
        </ul>
        <div className="w-full">
          <div className="mb-6 overflow-hidden rounded-sm">
            <img src={platformImage} alt="img" />
          </div>
          <h3 className="text-sm font-harvey-sans mb-[3px] transition-colors duration-300 text-muted">Introducing Workflow Builder</h3>
          <p className="text-sm font-harvey-sans transition-colors duration-300 text-muted">Design and deploy customizable workflows designed to capture your firm’s differentiators and deliver high-quality legal work.</p>
        </div>
      </div>
    </div>
  )
}
