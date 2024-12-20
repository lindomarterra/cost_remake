import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import './Footer.css'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="text-center p-5" style={{backgroundColor:'#222'}} >

          <ul className="fs-4 list-unstyled d-flex justify-content-center mb-4" >
              <Link to='#' target="_blank" className="mx-3" ><FaFacebook/></Link>
              <Link to='#' target="_blank" className="mx-3" ><FaInstagram/></Link>
              <Link to='#' target="_blank" className="mx-3" ><FaLinkedin/></Link>
          </ul>

          <p className="text-white" >
            <span style={{color:'#ffbb22'}} > Costs </span>
            &copy;  2021
          </p>

    </footer>
  )
}

export default Footer