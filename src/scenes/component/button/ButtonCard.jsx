import React from 'react'
import { Button, styled } from '@mui/material'

const ButtonBox = styled(Button)(({ theme }) => ({
  textAlign: 'center',
  whiteSpace: 'nowrap',
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.86rem',
  },
  [theme.breakpoints.up('tabletM')]: {
    fontSize: '0.86rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1rem',
  },
}))

const ButtonCard = ({ sxProps, color, text, buttonEvent }) => {
  return (
    <ButtonBox
      color={color}
      variant="contained"
      disableElevation
      disableRipple
      sx={{
        ...sxProps,
      }}
      onClick={buttonEvent}
    >
      {text}
    </ButtonBox>
  )
}

export default ButtonCard
