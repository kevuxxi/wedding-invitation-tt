import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        <h1>Tutis 💖</h1>
        <Link to={`/rsvp`}>
          {' '}
          <li className="nav-links">RSVP</li>
        </Link>
        <Link to={`/gifts`}>
          <li className="nav-links">Gifts</li>
        </Link>
        <Link to={`/dresscode`}>
          {' '}
          <li className="nav-links">Dresscode</li>
        </Link>
        <Link to={`/location`}>
          {' '}
          <li className="nav-links">Location</li>
        </Link>
      </header>
    </div>
  )
}

export default Header
