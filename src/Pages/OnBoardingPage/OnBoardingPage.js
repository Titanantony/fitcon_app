import React from 'react'
import { ThemeProvider } from 'styled-components'
import Homepage from './Components/Homepage';
import Footer from '../../Shared/Footer';
import WavyBackground from '../../Shared/WavyBackground';

const theme = {
  colors: {
    primary: "#5771ff",
    secondary: "#F5F5F5",
    textDark: "#000000",
    textLight: "#FFFFFF",
    
  },
};

function OnBoardingPage() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
      <WavyBackground />
      <Footer />

    </ThemeProvider>
  )
}

export default OnBoardingPage