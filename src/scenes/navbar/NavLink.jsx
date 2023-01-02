import React, { Fragment } from 'react'
import { Box, Grid, styled, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const linkName = [
  {
    to: '/',
    text: 'منو',
  },
  {
    to: '/Store',
    text: 'فروشگاه‌ها',
  },
  {
    to: '/Cooperation',
    text: 'همکاری',
  },
]
const linkStyle = {
  position: 'relative',
  "&:hover": {
    content: '',
    position: 'absolute',
    height: '6px',
    width: '100%',
    backgroundColor: 'success',
  },
}
const LinkText = styled(Typography)({
  fontSize: '14px',
  fontWeight: '600',
  position: 'relative',
})

const NavLink = ({ flexDirection, alignItems, marginTop }) => {
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          sx={{ flexDirection: { flexDirection }, alignItems: { alignItems } }}
        >
          {linkName.map((item, index) => (
            <Grid
              md={1}
              sm={2}
              xs={3}
              key={index}
              sx={{
                marginTop: marginTop,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Link to={item.to} style={linkStyle}>
                <LinkText>{item.text}</LinkText>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  )
}

export default NavLink
