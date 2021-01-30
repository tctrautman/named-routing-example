import { Link, routes } from '@redwoodjs/router'

const BadNamedRoutePage = () => {
  return (
    <>
      <h1>BadNamedRoutePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/BadNamedRoutePage/BadNamedRoutePage.js</code>
      </p>
      <p>
        My default route is named <code>badNamedRoute</code>, link to me with `
        <Link to={routes.badNamedRoute()}>BadNamedRoute</Link>`
      </p>
    </>
  )
}

export default BadNamedRoutePage
