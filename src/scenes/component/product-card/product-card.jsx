import { Box, styled } from '@mui/material'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCardAction } from '../../_slice/shop.slice'
import { OriginalCard } from '../card/card'
import ProductImage from '../description/ProductImage'

const CardBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '327px',
  width: '218px',
  margin: '0 auto',
  // '&:nth-child(3n+2)': {
  //   marginTop: '80px',
  //   paddingTop: '0px',
  // },
  [theme.breakpoints.down('md')]: {
    height: '260px',
    marginTop: '80px',
  },
  [theme.breakpoints.up('mobileM')]: {
    height: '320px',
    padding: '0px!important',
  },
  [theme.breakpoints.up('tabletM')]: {
    height: '245px',
  },
  [theme.breakpoints.up('md')]: {
    height: '260px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '300px',
  },
}))
const buttonStyle = {
  width: '100%',
  borderRadius: '32px',
  height: '40px',
  marginTop: '10px',
  fontWeight: '600',
  fontSize: '14px',
}

const boxStyle = {
  height: '100%',
  width: '100%',
  alignContent: 'center',
  alignItems: 'flex-end',
  justifyContent: 'center',
}

const titleStyle = {
  fontWeight: '600',
  textAlign: 'center',
}

export const ProductCard = ({
  id,
  image,
  title,
  price,
  category,
  Imagedisplay,
}) => {
  const dispatch = useDispatch()

  return (
    <Fragment>
      <CardBox>
        <ProductImage
          poster={image}
          category={category}
          display={Imagedisplay}
        />
        <OriginalCard
          flexDirection="column"
          title={title}
          price={price}
          CardBoxStyle={boxStyle}
          textStyle={titleStyle}
          buttonText="افزودن به سبد"
          buttoncolor="success"
          sxButtonProps={buttonStyle}
          sxSecoundButtonProps={{ display: 'none' }}
          spanDisplay="none"
          height="60%"
          buttonEvent={() =>
            dispatch(
              addProductToCardAction({
                id,
                title,
                price,
              }),
            )
          }
        />
      </CardBox>
    </Fragment>
  )
}
