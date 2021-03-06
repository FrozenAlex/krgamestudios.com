import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({
  shrink,
  location,
  title,
  children,
}) => {
  return (
    <div >
      <Header></Header>
      <div className="central">
        <div className="page">
          {children}
          <Footer />
        </div>

      </div>

    </div>
  )
}

export default Layout