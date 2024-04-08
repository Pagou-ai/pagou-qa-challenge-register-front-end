import logo from '../../assets/img/logo.png'
import logoShort from '../../assets/img/logo-short.webp'
import logoLong from '../../assets/img/logo-long.webp'

export const Header = () => {
  return (
    <header className="d-flex header-custom justify-content-center py-5">
      <img src={logoShort} alt="Pagou AI" className="logo-short" />
      <img src={logoLong} alt="Pagou AI" className="logo-long" />
    </header>
  )
}