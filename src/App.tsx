import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import About from './components/About'
import { useLocation } from 'react-router-dom'
export default function App() {
  const location = useLocation()
  const isAboutPage = location.pathname === '/about'
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {!isAboutPage && <About />}
      <Footer />
    </div>
  )
}
