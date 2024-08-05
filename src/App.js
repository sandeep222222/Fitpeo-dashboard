import './App.css';
import Card from './components/Card';
import Chart from './components/Chart';
import OrderTable from './components/OrderTable';
import MiniDrawer from './components/MiniDrawer';
// import { useTheme } from '@emotion/react';
import { useTheme } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CurrentTheme from './components/Theme'

function App() {
  const theme = useTheme();
  console.log('current theme : ', theme);
  return (
    <>
      <ThemeProvider theme={CurrentTheme}>
        <MiniDrawer />
      </ThemeProvider>
    </>
  );
}

export default App;