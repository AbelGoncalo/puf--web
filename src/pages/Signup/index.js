import * as React from 'react'

import styled from 'styled-components'

import { Logo, Box, font } from '~/components/'
import { Form } from './Form'
import { ReactComponent as Ilustra } from './ilustra.svg'

// import logo from './img/logo.svg'
const Title = styled('h2')`
  ${font}
`
const Section = () => (
  <Box bg="black" flex={1} flexbox justifyContent="center">
    <Box style={{ width: 380 }} flexbox="column">
      <Box p={6}>
        <Logo />
      </Box>
      <Box flex={1} flexbox center>
        <Ilustra />
      </Box>
    </Box>
  </Box>
)

const Section2 = () => (
  <Box flex={1} flexbox="column" center>
    <Box style={{ width: 380 }}>
      <Title textAlign="center">Cadastro</Title>
      <Form />
    </Box>
  </Box>
)

export const Signup = () => {
  return (
    <Box flex={1} flexbox>
      <Section />
      <Section2 />
    </Box>
  )
}
