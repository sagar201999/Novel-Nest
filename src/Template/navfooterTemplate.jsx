import React from 'react'
import Navbar from '../Components/Pages/navbar';
import Footer from '../Components/Pages/footer';

const NavfooterTemplate = ({page : PageComponent}) => {
  return (
    <>
    <main>
        <Navbar />
        <PageComponent />
        <Footer />
    </main>
    </>
  )
}

export default NavfooterTemplate;