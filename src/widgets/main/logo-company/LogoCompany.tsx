import { LOGO_COMPANY_DATA_LIST } from '../../../shared/config/logo_company'
import "./LogoCompany.css"
export default function LogoCompany() {
  return (
    <section className="logo-company-container flex flex-col items-center gap-sm">
      <h3 className='text-center'>Built for Industry Leaders</h3>
      <div className="logo-company-track">
        {/* Первый набор логотипов */}
        {LOGO_COMPANY_DATA_LIST.map(el => (
          <div key={el.id} className={`logo-company-item logo-company--${el.format}`}>
            <img src={`/svg/logo_company/${el.name}.${el.format}`} alt="Logo Company" />
          </div>
        ))}
        {/* Дублированный набор для бесшовной анимации */}
        {LOGO_COMPANY_DATA_LIST.map(el => (
          <div key={`duplicate-${el.id}`} className={`logo-company-item logo-company--${el.format}`}>
            <img src={`/svg/logo_company/${el.name}.${el.format}`} alt="Logo Company" />
          </div>
        ))}
      </div>
    </section>
  )
}