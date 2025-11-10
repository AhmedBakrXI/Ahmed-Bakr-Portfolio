import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ComingSoon from './pages/ComingSoon';
import HeroSection from './pages/Hero';


const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ComingSoon />} />
                    <Route path='*' element={<HeroSection />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
