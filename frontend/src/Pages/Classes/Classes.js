import React from 'react'
import Header from './Homepage/Header'
import Features from './Homepage/Features'
import "./Classes.css"
import SectionHeader from './Homepage/Video/SectionHeader'
import VideoEmbed from './Homepage/Video/VideoEmbed'
import WavyBackground from '../../Shared/WavyBackground'
import Footer from '../../Shared/Footer'
import ClassEnvironment from './class/ClassEnvironment'

function Classes() {
  const videoId = "g_tea8ZNk5A";
  return (
    <>
    <div className="text-center">
      <h1 className="welcome-text">Welcome to FitCon's Dynamic Classes</h1>
    </div>
    <Header />
    <Features />
    <SectionHeader  
      title="Discover the FitCon Experience"
      subtitle="Join us in a virtual tour of our exciting and varied fitness classes designed to inspire and energize."
    />
    <VideoEmbed videoId={videoId}/>
    

    <ClassEnvironment />

    <WavyBackground />
    <Footer />
    </>
  )
}

export default Classes