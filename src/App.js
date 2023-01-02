import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './setup/theme';
import { Home } from './scenes/home';
import { Navbar } from './scenes/navbar/Navbar';
import { Stores } from './scenes/stores/stores';
import { Cooperation } from './scenes/cooperation/cooperation';
import { useInitialStateData } from './servise/shop/react-hook';

function App() {

  useInitialStateData();

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='xl'>
          <Navbar />
        </Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Store' element={<Stores />} />
          <Route path='/Cooperation' element={<Cooperation />} />
        </Routes>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
