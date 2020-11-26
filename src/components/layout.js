import React from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { GlobalStyles } from "./styles/GlobalStyles"

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}



export default Layout
