import React, { Fragment } from 'react'
import { styled } from '@mui/material'
import searchIcon from '../../setup/assets/image/search-icon.svg'

const ImageBox = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('tabletL')]: {
    width: '25px',
    height: '100%',
  },
  [theme.breakpoints.down('tabletL')]: {
    width: '18px',
    height: '100%',
  },
}))

export const NavSearch = () => {
  return (
    <Fragment>
      <ImageBox src={searchIcon} />
    </Fragment>
  )
}
