import React, { Fragment } from 'react'
import { Grid, styled } from '@mui/material'
import { InternalSection } from './internal-section/internal-section'
import { BasketCard } from '../component/basket-card/basket-card'
import { PaymentCard } from '../component/payment-card/payment-card'

const MainBox = styled(Grid)({
  position: 'relative',
  justifyContent: 'space-between',
  marginTop: '30px',
})

export const Home = () => {
  return (
    <Fragment>
      <MainBox container spacing={0}>
        <Grid md={9} xs={12}>
          <InternalSection />
        </Grid>

        <Grid
          md={3}
          xs={12}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexDirection: 'column',
            position: 'sticky',
            left: '0',
            top: '0',
            paddingTop: { md: '10px', xs: '30px' },
            height: '500px',
            borderRight: { md: '3px solid transparent', xs: 'none' },
            borderImageSource:
              'linear-gradient(90deg, rgba(122, 143, 143, 0) 0%, rgba(122, 143, 143, 0.6) 15.62%, rgba(122, 143, 143, 0.6) 83.85%, rgba(122, 143, 143, 0) 100%)',
            borderImageSlice: '30',
            borderImageWidth: '2',
          }}
        >
          <BasketCard />

          <PaymentCard />
        </Grid>
      </MainBox>
    </Fragment>
  )
}
