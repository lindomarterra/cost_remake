import { Link } from 'react-router-dom'
import Logo from '../../imgs/costs_logo.png'
import './Header.css'

const Header = () => {
  return (
    <nav
      style={{backgroundColor:'#222'}}
      className="shadow d-flex justify-content-between align-items-center p-3"
    >
      <Link className="" to="/" target="_self">
        <img src={Logo} alt="logo" />
      </Link>

      <ul className="d-flex mt-3 list-unstyled ">
        <li className="mx-1">
          <Link className="text-decoration-none" to="/" target="_self">
            Home
          </Link>
        </li>
        <li className="mx-1">
          <Link className="text-decoration-none" to="/projects" target="_self">
            Projects
          </Link>
        </li>
        <li className="mx-1">
          <Link className="text-decoration-none" to="/contact" target="_self">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Header
