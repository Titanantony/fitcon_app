import React from 'react'
import { ThemeProvider } from 'styled-components'
import Homepage from './Components/Homepage';
import Footer from '../../Shared/Footer';
import WavyBackground from '../../Shared/WavyBackground';
import StatsCard from './Components/statscard';
import FitnessSection from './Components/Fitness-Section/FitnessSection';
import Objectives from './Components/RoutineCard/Objectives';
import Testimonials from './Components/Testimanials/Testimonials';

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
      <StatsCard />
      <FitnessSection />
      <Objectives />
      <Testimonials />

      <WavyBackground />
      <Footer />

    </ThemeProvider>
  )
}

export default OnBoardingPage