const theme = prop => value => props => props.theme[prop][value] || value

export const th = {
  space: theme('spaces'),
  size: theme('fontSize'),
  color: theme('colors'),
}

export const flexbox = props => {
  const direction =
    typeof props.flexbox === Boolean ? props.flexDirection : props.flexbox

  const justifyContent = props.justifyContent || (props.center && 'center')
  const alignItems = props.alignItems || (props.center && 'center')

  return `
      ${(props.flexbox && 'display: flex;') || ''}
      ${(direction && `flex-direction: ${direction};`) || ''}
      ${(props.flex && `flex: ${props.flex};`) || ''}
      ${(justifyContent && `justify-content: ${justifyContent};`) || ''}
      ${(alignItems && `align-items: ${alignItems};`) || ''}

    `
}

// export const color = props =>
//   props.color && `color: ${props.theme.colors[props.color] || props.color}; `

// export const fontSize = props =>
//   Object.prototype.hasOwnProperty.call(
//     props,
//     'fontSize'
//   )`font-size: ${props.theme.fontSizes[props.fontSize]}px;`

export const font = props => {
  const color =
    props.color && `color: ${props.theme.colors[props.color] || props.color}; `
  const size =
    Object.prototype.hasOwnProperty.call(props, 'fontSize') &&
    `font-size: ${props.theme.fontSizes[props.fontSize]}px`

  return `
    ${color ? color : ''}
    ${size ? size : ''}
  `
}

export const background = props =>
  props.bg && `background: ${props.theme.colors[props.bg]}; `

export const margin = props => {
  //props.m && `margin: ${props.theme.spaces[props.m]};`
  const mb = props.mb ?? props.my ?? props.m ?? ''
  const mt = props.mt ?? props.my ?? props.m ?? ''
  const ml = props.ml ?? props.mx ?? props.m ?? ''
  const mr = props.mr ?? props.mx ?? props.m ?? ''

  return `
    ${mb !== '' ? `margin-bottom: ${props.theme.spaces[mb]}px;` : ''}
    ${mt !== '' ? `margin-top: ${props.theme.spaces[mt]}px;` : ''}
    ${ml !== '' ? `margin-left: ${props.theme.spaces[ml]}px;` : ''}
    ${mb !== '' ? `margin-right: ${props.theme.spaces[mr]}px;` : ''}
  `
}

export const padding = props => {
  //props.m && `margin: ${props.theme.spaces[props.m]};`
  const pb = props.pb ?? props.my ?? props.p ?? ''
  const pt = props.pt ?? props.my ?? props.p ?? ''
  const pl = props.pl ?? props.mx ?? props.p ?? ''
  const pr = props.pr ?? props.mx ?? props.p ?? ''

  return `
    ${pb !== '' ? `padding-bottom: ${props.theme.spaces[pb]}px;` : ''}
    ${pt !== '' ? `padding-top: ${props.theme.spaces[pt]}px;` : ''}
    ${pl !== '' ? `padding-left: ${props.theme.spaces[pl]}px;` : ''}
    ${pb !== '' ? `padding-right: ${props.theme.spaces[pr]}px;` : ''}
  `
}
