import * as React from 'react'
import { Login } from './'

import {render, screen} from '@testing-library/react'
test('should show login form', () => {

  //prepare
  render(<Login />)

  //execute
  const emailInput = screen.getByLabelText('E-mail')

  // assert
  console.log(emailInput)
})
