import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>Example of named-routing not displaying URLS as expected</h1>
      <p>Compare the URLs by hovering over the two links</p>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Link to={routes.goodNamedRoute({ descriptor: 'very' })}>
          Good Named Route
        </Link>
        <Link to={routes.badNamedRoute({ descriptor: 'very' })}>
          Bad Named Route
        </Link>
      </div>
    </>
  )
}

export default HomePage
