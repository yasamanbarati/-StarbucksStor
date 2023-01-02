import React, { Fragment } from 'react'
import { Box, styled } from '@mui/material'
import { PaymentCardInformation } from './payment-card-information'
import ButtonCard from '../button/ButtonCard'
import { useSelector } from 'react-redux'

const CardBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  height: 'auto',
  width: '100%',
})
const PaymentCardBox = styled(Box)({
  width: '90%',
  height: 'auto',
  textAlign: 'center',
  boxShadow:
    '1px 2px 2px rgba(143, 158, 163, 0.2), 2px 4px 4px rgba(143, 158, 163, 0.2), 4px 8px 16px rgba(143, 158, 163, 0.2)',
  background: 'white',
})
const buttonStyle = {
  width: '90%',
  borderRadius: '12px',
  height: '40px',
  margin: '10px 0',
  fontWeight: '600',
  fontSize: '14px',
}

export const PaymentCard = () => {
  const price = useSelector((state) => state.shop.sumPrice)

  return (
    <Fragment>
      <CardBox sx={{ alignItems: { md: 'flex-end', xs: 'center' } }}>
        <PaymentCardBox
          sx={{ borderRadius: { md: '0px 11px 11px 0px', xs: '1px' } }}
        >
          <PaymentCardInformation
            title="مجموع"
            textStyle={{ fontSize: '15px', fontWeight: '600' }}
            price={price}
          />
          <PaymentCardInformation
            title="مالیات"
            textStyle={{ fontSize: '15px', fontWeight: '600' }}
            price="0"
          />
          <hr style={{ border: '2px solid rgba(180, 187, 186, 0.25)' }} />
          <PaymentCardInformation
            title="قابل پرداخت"
            textStyle={{ fontSize: '15px', fontWeight: '600' }}
            price="0"
          />
          <ButtonCard
            sxProps={buttonStyle}
            color="success"
            text="نهایی کردن سفارش"
          />
        </PaymentCardBox>
      </CardBox>
    </Fragment>
  )
}
