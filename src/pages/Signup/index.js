import * as React from 'react'
import styled from 'styled-components'

import { Box, Field, Button } from '~/components/'

const Main = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
`

export const Signup = () => {
  return (
    <Main as="main" flexbox="column" center>
      <Box style={{ width: 380 }}>
        <Field type="text" name="name" label="Nome" mb={3} />
        <Field type="email" name="email" label="E-mail" mb={3} />
        <Field type="password" name="password" label="Senha" mb={3} />
      </Box>

      <Box flexbox center>
        <Button>Registrar</Button>
      </Box>
    </Main>
  )
}
