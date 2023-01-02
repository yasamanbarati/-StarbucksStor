import { CardContent } from '@mui/material'
import React from 'react'
import ProductPrice from '../description/ProductPrice'
import ProductTitle from '../description/ProductTitle'

export const PaymentCardInformation = ({ title, textStyle, price }) => {
  return (
    <CardContent
      sx={{
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '5px!important',
      }}
    >
      <ProductTitle text={title} textStyle={textStyle} />
      <ProductPrice price={price} />
    </CardContent>
  )
}
