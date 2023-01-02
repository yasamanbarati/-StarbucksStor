import React, { Fragment } from 'react'
import { Box, Grid, styled, Typography } from '@mui/material'
import { ProductCard } from '../../component/product-card/product-card'
import { useSelector } from 'react-redux'

const InternalBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '30px',
})
const ProductGrid = styled(Grid)({
  width: '100%',
  justifyContent: 'center',
  padding: '0',
  marginTop: '35px',
})

export const InternalSection = () => {
  const productInfo = useSelector((state) => state.shop.productList)

  const categoriesInfo = useSelector((state) => state.shop.categories)

  const filtered = productInfo.filter((item) => {
    return item.category === 'frappuccino'
  })
  return (
    <Fragment>
      <InternalBox>
        {/* {categoriesInfo.map((item) => {
          return (
            <> */}
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: '800',
            paddingBottom: '5px',
            borderBottom: '3px solid transparent',
            borderImageSource:
              'linear-gradient(270deg, rgba(64, 64, 64, 0) 0%, #404040 21.35%, #404040 80.21%, rgba(64, 64, 64, 0) 100%)',
            textAlign: 'center',
            width: '36%',
            borderImageSlice: '1',
            whiteSpace: 'nowrap',
          }}
        >
          میکس فراپاچینو
          {/* {categoriesInfo[0].title} */}
        </Typography>
        {/* </>
          )
        })} */}
        <ProductGrid container spacing={2}>
          {filtered.map((item, index) => (
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
              sx={{
                marginTop: { md: index % 3 === 1 ? '80px' : '0', xs: '0' },
              }}
            >
              <ProductCard
                id={item.id}
                image={item.poster}
                title={item.title}
                price={item.price.toLocaleString('fa-IR')}
                category={item.category}
                Imagedisplay="block"
              />
            </Grid>
          ))}
        </ProductGrid>
      </InternalBox>
    </Fragment>
  )
}
