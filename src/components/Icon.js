import React from 'react'
import PropTypes from 'prop-types'
import IconSprite from '../svg/icon-sprite.svg'

const Icon = ({ name, color, size, ...restProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...restProps}
  >
    <use xlinkHref={`${IconSprite}#${name}`} />
  </svg>
)

export default Icon

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
}

Icon.defaultProps = {
  color: 'currentColor',
  size: 24,
}