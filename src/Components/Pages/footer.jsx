import React from 'react'

const Footer = () => {   //© Copyright
  return (
    <>
      <footer className='bg-navy'>
        <div className='d-flex justify-content-around flex-wrap'>
          <div className='footer-box'>
            <p>About us</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className='d-flex justify-content-between w-75 mt-4'>
              <img src="../../../assets/facebook-f.svg" alt="facebook" style={{width:'12px'}}/>
              <img src="../../../assets/square-instagram.svg" alt="instagram" style={{width:'18px'}}/>
              <img src="../../../assets/x-twitter.svg" alt="X" style={{width:'18px'}}/>
              <img src="../../../assets/youtube.svg" alt="youtube" style={{width:'20px'}}/>
            </div>
          </div>

          <div className='footer-box'>
            <p>Explore Our Webpage</p>
            <p>New Arrivals</p>
            <p>Bestsellers</p>
            <p>Genres</p>
            <p>Book Clubs</p>
          </div>

          <div className='footer-box'>
            <p>Explore Our Webpage</p>
            <p>New Arrivals</p>
            <p>Bestsellers</p>
            <p>Genres</p>
            <p>Book Clubs</p>
          </div>

          <div className='footer-box'>
            <p>Explore Our Webpage</p>
            <p>New Arrivals</p>
            <p>Bestsellers</p>
            <p>Genres</p>
            <p>Book Clubs</p>
          </div>

          <div className='footer-box'>
            <p>Contact us</p>
            <p>xyz streel , no 123 , india</p>
            <p>info.novelnest@gmail.com</p>
            <p>632 - 521 - 4585</p>
          </div>

        </div>
        <hr />
        <div className='text-center'>
          <p>All © Copyright Aquired | design and created by sagar magare</p>
        </div>

      </footer>
    </>
  )
}

export default Footer;