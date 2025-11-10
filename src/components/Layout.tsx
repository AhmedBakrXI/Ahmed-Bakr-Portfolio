import Header from './Header'
import TargetCursor from './TargetCursor'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TargetCursor />
      <Header />
      {children}
    </>
  )
}

export default Layout
