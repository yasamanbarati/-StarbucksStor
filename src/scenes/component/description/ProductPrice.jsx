import React from 'react'
import { styled, Typography } from '@mui/material'

const Price = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  whiteSpace: 'nowrap',
  fontWeight: '600',
  [theme.breakpoints.up('mobileS')]: {
    fontSize: '0.86rem',
  },
  [theme.breakpoints.up('mobileL')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1rem',
  },
}))

export const ProductPrice = ({ price }) => {
  return <Price color='secondary'>{price} تومان </Price>
}
export default ProductPrice
