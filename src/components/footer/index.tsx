import logoLong from '../../assets/img/logo-long.webp'

const Footer = () => {
  return (
    <footer className="footer-finish container-custom pt-5 mb-5">
      <img src={logoLong} alt="pagou.ai" className='logo-long' />

      <p className="copyright mb-0">Copyright © Pagou.ai <br />  
      Todos os direitos reservados</p>
    </footer>
  )
}

export default Footer;