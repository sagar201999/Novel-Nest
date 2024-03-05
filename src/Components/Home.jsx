import React, { useEffect, useState } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'

const Home = () => {

  const [comics, setComics] = useState([]);    // store the data fetch from api

  useEffect(() => {
    try {
      fetch('https://apigenerator.dronahq.com/api/I99wj9Gr/comics')       //fetch api data
        .then(res => res.json())
        .then((comics) => setComics(comics));           //store inside comics
    } catch (error) {
      console.error(error);            // for error in case fail to fetch api
    }

  });


  return (
    <>
      <Navbar />

      <section className='bg-navy' id='hero'>

        <Carousel />

        <div className='text-center mt-5'>
          <h1>New Realease</h1>
        </div>

        {/* <main className='wrapper container mt-5 d-flex flex-wrap justify-content-between'>
          {comics.map((obj) => (
            <Link to={`/comics/${obj.id}`}>
              <div key={obj.id} className='books-info'>
                <img src={obj.image} alt='book img' className='book_template' />
                <div className='text_info'>
                  <p>{obj.title}</p>
                  <p>{obj.author}</p>
                  <p>{obj.genre}</p>
                  <p>{obj.author}</p>
                </div>
              </div>
            </Link>

          ))}
        </main> */}

        <main className='wrapper container mt-5 d-flex flex-wrap justify-content-between'>
          {comics.map((obj) => (
            <Link to={`/comics/${obj.id}`}>
              <div class="book">
                <p>{obj.title}</p>
                <p>{obj.author}</p>
                <p>{obj.genre}</p>
                <div key={obj.id} className="cover">
                  <img src={obj.image} alt='cover' className='w-100' />
                </div>
              </div>
            </Link>
          ))}

        </main>




      </section>
    </>
  )
}

export default Home;