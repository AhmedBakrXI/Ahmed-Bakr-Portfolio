import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import ComingSoon from './pages/ComingSoon'
import HeroSection from './pages/Hero'
import Layout from './components/Layout'
import Skills from './pages/Skills'
import About from './pages/About'
import Contact from './pages/Contact'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import Featured from './pages/Featured'
import {Analytics} from '@vercel/analytics/react'

const queryClient = new QueryClient()

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Analytics />
        <Routes>
          <Route
            path='*'
            element={
              <Layout>
                <HeroSection />
                <About />
                <Featured />
                <Skills />
                <Experiences />
                <Projects />
                <Contact />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
