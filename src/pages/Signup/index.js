import * as React from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'
import styled from 'styled-components'

import { Box, Field, Button, font, margin } from '~/components/'

const Title = styled('h2')`
  ${font}
`
const Link = styled('a')`
  text-decoration: none;
  ${font}
  ${margin}
`

const validationSchema = yup.object().shape({
  name: yup.string().required('Informe o seu nome'),
  email: yup.string().required('Digite seu email').email('Email inválido'),
  password: yup.string().required('Digite uma senha'),
})

export const Signup = () => {
  const onSubmit = async () => {
    try {
      await axios.post('http://localhost:9901/users', values)
    } catch (error) {
      console.log(error)
    }
  }

  const {
    values,
    errors,
    touched,
    handleChange,
    isSubmitting,
    handleSubmit,
    handleBlur,
  } = useFormik({
    onSubmit,
    validationSchema,
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  return (
    <Box flex={1} flexbox="column" center>
      <Box style={{ width: 380 }}>
        <Title textAlign="center">Cadastro</Title>
        <form onSubmit={handleSubmit}>
          <Field
            type="text"
            name="name"
            label="Nome"
            value={values.name}
            mb={3}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            error={touched.name && errors.name}
          />
          <Field
            type="email"
            name="email"
            label="E-mail"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            error={touched.name && errors.email}
            mb={3}
          />
          <Field
            type="password"
            name="password"
            label="Senha"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            error={touched.name && errors.password}
            mb={3}
          />

          <Box flexbox="column" center>
            <Button type="submit" loading={isSubmitting} m={1}>
              Registrar
            </Button>
            <Link href="#" m={1} fontSize={1} color="gray" fontWeight="bold">
              Ja possui uma conta
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  )
}
