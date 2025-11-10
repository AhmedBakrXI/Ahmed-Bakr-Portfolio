import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'
import HeroSection from './pages/Hero'
import Layout from './components/Layout'
import Skills from './pages/Skills'
import About from './pages/About'

const queryClient = new QueryClient()

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <ComingSoon />
              </Layout>
            }
          />
          <Route
            path='*'
            element={
              <Layout>
                <HeroSection />
                <About />
                <Skills />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
