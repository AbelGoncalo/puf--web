import * as React from 'react'

import styled from 'styled-components'

import { Logo, Box, font } from '~/components/'
import { useAuth } from '~/components/modules'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom'

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

export const Signup = () => {
  const history = useHistory()
  const location = useLocation()
  const [, { login: setAuth }] = useAuth()

  const { from } = location.state || { from: { pathname: '/' } }

  const onSubmit = async values => {
    try {
      const res = await axios.post('http://localhost:9901/users', values)
      setAuth({ user: res.data })
      history.replace(from)
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
        <Title textAlign="center">Cadastro</Title>
        <Form onSubmit={onSubmit} />
      </CenteredBox>
    </Box>
  )
}
