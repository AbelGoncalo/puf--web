export const background = props =>
  props.bg && `background: ${props.theme.colors[props.bg]}; `

export const color = props =>
  props.bg && `color: ${props.theme.colors[props.color] || props.color}; `

export const fontSize = props =>
  props.fontSize ? `font-size: ${props.theme.fontSizes[props.size]}; ` : ''
