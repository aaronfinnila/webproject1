import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation()

    if (location.pathname === '/hanat') {
        return (        
            <div>
                <nav id="header1">
              <Link to="/">Hanavahti</Link>
            </nav>
            </div>
        )
    }

    return (
        <div>
      <nav id="header1">
        <Link to="/">Hanavahti</Link>
      </nav>
      <nav id="hana-nav">
        <Link to="/hanat">Selaa hanoja</Link>
      </nav>
        </div>
    )
}

export default Navbar