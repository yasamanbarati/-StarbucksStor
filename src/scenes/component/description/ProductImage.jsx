import React from 'react'
import { styled } from '@mui/material'

const ImageBox = styled('img')({
  width: '165px',
  height: '165px',
})

const ProductImage = ({ poster, category, display }) => {
  return (
    <ImageBox
      src={poster}
      alt={category}
      style={{
        display: display,
        borderRadius: '50%',
        position: 'absolute',
        top: '-75px',
      }}
    />
  )
}
export default ProductImage
