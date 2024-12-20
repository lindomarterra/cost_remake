import { Link } from "react-router-dom"
import "./LinkButton.css"

const LinkButton = ({to, text}) => {
  return (
    
    <Link className="btn_link text-decoration-none p-2" to={to} target="_self" >
        {text}
    </Link>

  )
}

export default LinkButton