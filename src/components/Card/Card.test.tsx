import React from 'react'
import { render } from '@testing-library/react'

import Card from './Card'

describe('Card', () => {
  test('can render the card component', () => {
    render(<Card label="hello world" />)
  })
})
