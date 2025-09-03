import * as React from 'react'
import { useState } from 'react'
import axios from 'axios'

import { Box, Field, Button } from '~/components/'

export const Signup = () => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)

  const onChange = ev => {
    setValues(prev => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }))
  }

  const onSubmit = async ev => {
    ev.preventDefault()
    setLoading(true)

    try {
      await axios.post('http://localhost:9901/users', values)
    } catch (error) {
      console.log('Error during signup:', error)
    } finally {
      setLoading(false)
    }
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
            disabled={loading}
          />
          <Field
            type="email"
            name="email"
            label="E-mail"
            onChange={onChange}
            disabled={loading}
            mb={3}
          />
          <Field
            type="password"
            name="password"
            label="Senha"
            onChange={onChange}
            disabled={loading}
            mb={3}
          />

          <Box flexbox center>
            <Button type="submit" loading={loading}>
              Registrar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}
