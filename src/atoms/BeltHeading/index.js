import React from 'react'
import { styled } from '../../stitches.config';

export default function BeltHeading({ levelNum, text }) {
  const StyledBeltHeading = styled('header', {
      gridColumn: '1 / 4',
      backgroundColor: 'white',
      border: `double 9px $${levelNum}`,
      borderRadius: '1rem',
      padding: '1rem',
      textAlign: 'center',
  })
  return (
    <StyledBeltHeading>
      <h2>{text}</h2>
    </StyledBeltHeading>
  )
}
