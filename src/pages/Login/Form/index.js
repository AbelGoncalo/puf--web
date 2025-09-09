import * as React from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'

import styled from 'styled-components'
import { Box, Field, Button, font, margin } from '~/components/'

const validationSchema = yup.object().shape({
  username: yup.string().required('Digite seu email').email('Email inválido'),
  password: yup.string().required('Digite uma senha'),
})

const Link = styled('a')`
  text-decoration: none;
  ${font}
  ${margin}
`
export const Form = () => {
  const onSubmit = async values => {
    try {
      await axios.get('http://localhost:9901/login', {
        auth: values,
      })
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
      username: '',
      password: '',
    },
  })
  return (
    <form onSubmit={handleSubmit}>
      <Field
        type="text"
        name="username"
        label="E-mail"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
        error={touched.username && errors.username}
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
          Entrar
        </Button>

        <Box m={1} fontSize={1} color="gray">
          Não possui nenhuma conta?{' '}
          <Link href="#" color="gray" fontWeight="bold">
            Cadastra-se.
          </Link>
        </Box>
      </Box>
    </form>
  )
}
