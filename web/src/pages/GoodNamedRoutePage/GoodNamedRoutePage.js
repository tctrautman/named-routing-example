import { Link, routes } from '@redwoodjs/router'

const GoodNamedRoutePage = () => {
  return (
    <>
      <h1>GoodNamedRoutePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/GoodNamedRoutePage/GoodNamedRoutePage.js</code>
      </p>
      <p>
        My default route is named <code>goodNamedRoute</code>, link to me with `
        <Link to={routes.goodNamedRoute()}>GoodNamedRoute</Link>`
      </p>
    </>
  )
}

export default GoodNamedRoutePage
