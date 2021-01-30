import { render } from '@redwoodjs/testing'

import GoodNamedRoutePage from './GoodNamedRoutePage'

describe('GoodNamedRoutePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GoodNamedRoutePage />)
    }).not.toThrow()
  })
})
