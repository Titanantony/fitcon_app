import React from 'react'
import Header from './Homepage/Header'
import Features from './Homepage/Features'
import "./Classes.css"
import VideoPlaceholder from './Homepage/Video/VideoEmbed'
import SectionHeader from './Homepage/Video/SectionHeader'
import VideoEmbed from './Homepage/Video/VideoEmbed'
import WavyBackground from '../../Shared/WavyBackground'
import Footer from '../../Shared/Footer'
import ClassEnvironment from './class/ClassEnvironment'

function Classes() {
  return (
    <>
    <div className="text-center">
      <p className="welcome-text">Welcome to FitCon's Dynamic Classes</p>
    </div>
    <Header />
    <Features />
    <SectionHeader  
      title="Discover the FitCon Experience"
      subtitle="Join us in a virtual tour of our exciting and varied fitness classes designed to inspire and energize."
    />
    <VideoEmbed />

    <ClassEnvironment />

    <WavyBackground />
    <Footer />
    </>
  )
}

export default Classes