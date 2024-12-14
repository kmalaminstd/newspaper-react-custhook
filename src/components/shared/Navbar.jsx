import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navBar">
        <div className="inner-navbar">

            <div className="logo">
                <h1><Link to="/">News World</Link></h1>
            </div>

            <div className="links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">World</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Navbar