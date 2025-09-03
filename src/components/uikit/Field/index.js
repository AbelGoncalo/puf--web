import * as React from 'react'
import styled from 'styled-components'

import { th } from '~/components/Theme'

import { Box } from '~/components/uikit/Box'
import { Input } from '~/components/uikit/Input'
import { Label } from '~/components/uikit/Label'

const ErrorMessage = styled(Box)`
  color: ${th.color('red')};
  padding: ${th.space(1)}px ${th.space(3)}px;
`

export const Field = ({ type, name, label, error, disabled, ...props }) => (
  <Box {...props} flexbox="column">
    <Label htmlFor={name}>{label}</Label>
    <Input type={type} name={name} id={name} disabled={disabled} />

    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Box>
)
