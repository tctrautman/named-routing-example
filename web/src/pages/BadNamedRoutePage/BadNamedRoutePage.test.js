import { render } from '@redwoodjs/testing'

import BadNamedRoutePage from './BadNamedRoutePage'

describe('BadNamedRoutePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BadNamedRoutePage />)
    }).not.toThrow()
  })
})
