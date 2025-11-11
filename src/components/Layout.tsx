import Header from './Header'
import TargetCursor from './TargetCursor'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TargetCursor spinDuration={6} />
      <Header />
      {children}
    </>
  )
}

export default Layout
