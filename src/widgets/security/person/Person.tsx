import person from "/img/David_Cunningham_2.png"
export default function Person() {
  return (
    <section className="bg-light-plaster w-full py-30">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-10">
          <img style={{width: "100%"}} className="rounded-[5px]" src={person} alt="person" />
          <div className="md:flex md:flex-row md:items-center md:justify-between">
            <p className="text-gray-950-ink">
              <strong className="font-medium">David Cunningham, CINO at Reed Smith</strong>
            </p>
            <p className="font-normal text-gray-900">Working with Harvey since 2025</p>
          </div>
      </div>
    </section>
  )
}
