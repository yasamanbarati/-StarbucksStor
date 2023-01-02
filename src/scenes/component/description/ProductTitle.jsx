import React from 'react'
import { styled, Typography } from '@mui/material'

const TypographyBox = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('mobileS')]: {
    fontSize:"0.86rem",
  },
  [theme.breakpoints.up('sm')]: {
    fontSize:"1rem",
  },
  [theme.breakpoints.up('tabletM')]: {
    fontSize:"0.8rem",
  },
  [theme.breakpoints.up('lg')]: {
    fontSize:"1rem",
  },
}))

export const ProductTitle = ({ text, textStyle }) => {
  return <TypographyBox sx={{...textStyle}}>{text}</TypographyBox>
}
export default ProductTitle
