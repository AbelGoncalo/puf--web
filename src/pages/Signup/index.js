import * as React from 'react'
import { useState } from 'react'

import { Box, Field, Button } from '~/components/'

export const Signup = () => {
  const [values, setValues] = useState({})

  const onChange = ev => {
    setValues(prev => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }))
  }

  const onSubmit = () => {
    EvalError.preventDefault()
    console.log(values)
  }

  return (
    <Box flex={1} flexbox="column" center>
      <Box style={{ width: 380 }}>
        <form onSubmit={onSubmit}>
          <Field
            type="text"
            name="name"
            label="Nome"
            mb={3}
            onChange={onChange}
          />
          <Field
            type="email"
            name="email"
            label="E-mail"
            mb={3}
            onChange={onChange}
          />
          <Field
            type="password"
            name="password"
            label="Senha"
            mb={3}
            onChange={onChange}
          />
        </form>
      </Box>

      <Box flexbox center>
        <Button>Registrar</Button>
      </Box>
    </Box>
  )
}
