import * as React from 'react'
import axios from 'axios'

import styled from 'styled-components'

import { Logo, Box, font } from '~/components/'
import { useAuth } from '~/components/modules'

import { Form } from './Form'
import { ReactComponent as Ilustra } from './ilustra.svg'

// import logo from './img/logo.svg'
const Title = styled('h2')`
  ${font}
`
const CenteredBox = ({ children, ...props }) => (
  <Box {...props} flex={1} flexbox="column" center>
    <Box style={{ width: 455 }}>{children}</Box>
  </Box>
)

export const Login = () => {
  const [, { login: setAuth }] = useAuth()
  const onSubmit = async values => {
    try {
      const res = await axios.get('http://localhost:9901/login', {
        auth: values,
      })

      setAuth(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Box flex={1} flexbox>
      <CenteredBox bg="black">
        <Logo p={6} flexbox center />
        <Ilustra />
      </CenteredBox>

      <CenteredBox>
        <Title textAlign="center">Login</Title>
        <Form onSubmit={onSubmit} />
      </CenteredBox>
    </Box>
  )
}
