import React from 'react'
import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  test('can render the button component', () => {
    render(<Button label="hello world" />)
  })
})
