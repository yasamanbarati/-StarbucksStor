import React from 'react'
import { Box, Card, CardActions, CardContent, styled } from '@mui/material'
import ButtonCard from '../button/ButtonCard'
import ProductPrice from '../description/ProductPrice'
import ProductTitle from '../description/ProductTitle'

const CardBox = styled(Card)({
  display: 'flex',
  boxShadow:
    '1px 2px 2px rgba(143, 158, 163, 0.2), 2px 4px 4px rgba(143, 158, 163, 0.2), 4px 8px 8px rgba(143, 158, 163, 0.2), 8px 16px 16px rgba(143, 158, 163, 0.2), 16px 32px 32px rgba(143, 158, 163, 0.2)',
  borderRadius: '23px',
})
const CardInformaiton = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  width: '100%',
  padding: '12px 23px',
}))

export const OriginalCard = ({
  flexDirection,
  buttoncolor,
  sxButtonProps,
  quantity = 0,
  title,
  price,
  buttonText,
  CardBoxStyle,
  textStyle,
  height,
  spanDisplay,
  sxSecoundButtonProps,
  Secoundbuttoncolor,
  SecoundbuttonText,
  buttonEvent,
  secoundbuttonEvent,
}) => {
  return (
    <CardBox
      sx={{
        ...CardBoxStyle,
      }}
    >
      <CardInformaiton sx={{ height: height }}>
        <CardContent sx={{ padding: '0' }}>
          <ProductTitle text={title} textStyle={textStyle} />
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: flexDirection,
            padding: '0',
            justifyContent: 'space-between',
          }}
        >
          <ProductPrice price={price} />
          <Box
            sx={{
              display: 'flex',
              padding: '0',
              width: '100%',
              justifyContent: 'flex-end',
            }}
          >
            <ButtonCard
              sxProps={sxButtonProps}
              color={buttoncolor}
              text={buttonText}
              buttonEvent={buttonEvent}
            />
            <span style={{ display: spanDisplay, margin: '0 15px' }}>
              {quantity.toLocaleString('fa-IR')}
            </span>
            <ButtonCard
              sxProps={sxSecoundButtonProps}
              color={Secoundbuttoncolor}
              text={SecoundbuttonText}
              buttonEvent={secoundbuttonEvent}
            />
          </Box>
        </CardActions>
      </CardInformaiton>
    </CardBox>
  )
}
