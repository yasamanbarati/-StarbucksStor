import React from 'react'
import { Box, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementQuantityAction,
  incrementQuantityAction,
} from '../../_slice/shop.slice'
import { OriginalCard } from '../card/card'

const buttonStyle = {
  boxSizing: 'border-box',
  border: '1px solid rgba(64, 64, 64, 1)',
  boxShadow: '0px 0px 3px 2px rgba(64, 64, 64, 0.2)',
  borderRadius: '50%',
  width: '25px',
  height: '25px',
  minWidth: '0',
  padding: '0',
  fontSize: '14px',
  fontWeight: '800',
}
const SecoundbuttonStyle = {
  boxSizing: 'border-box',
  border: '1px solid #006341',
  boxShadow: '0px 0px 3px 2px rgba(0, 99, 65, 0.2)',
  borderRadius: '50%',
  width: '25px',
  height: '25px',
  minWidth: '0',
  padding: '0',
  fontSize: '14px',
  fontWeight: '800',
}
const boxStyle = {
  height: 'auto',
  width: '90%',
  boxShadow:
    '1px 2px 2px rgba(143, 158, 163, 0.2), 2px 4px 4px rgba(143, 158, 163, 0.2), 4px 8px 16px rgba(143, 158, 163, 0.2)',
  marginBottom: '20px',
  borderRadius: { md: '0px 11px 11px 0px', xs: '0px' }
}
const titleStyle = {
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'right',
  marginBottom: '20px',
}
const CardsBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const BasketCard = () => {
  const dispatch = useDispatch()

  const basketCard = useSelector((state) => state.shop.card)

  return (
    <CardsBox sx={{ alignItems: { md: 'flex-end', xs: 'center' } }}>
      {basketCard?.map((item) => (
        <OriginalCard
          flexDirection="row"
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          CardBoxStyle={boxStyle}
          textStyle={titleStyle}
          buttonText="-"
          buttoncolor="white"
          sxButtonProps={buttonStyle}
          height="100%"
          spanDisplay="block"
          sxSecoundButtonProps={SecoundbuttonStyle}
          Secoundbuttoncolor="white"
          SecoundbuttonText="+"
          secoundbuttonEvent={() => dispatch(incrementQuantityAction(item.id))}
          buttonEvent={() => dispatch(decrementQuantityAction(item.id))}
        />
      ))}
    </CardsBox>
  )
}
