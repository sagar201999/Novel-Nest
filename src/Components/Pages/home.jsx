import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import Slider from '../MiniComponents/slider';
import Loaders from '../../Components/MiniComponents/loaders'

const Home = () => {

  const [comics, setComics] = useState([]);    // store the data fetch from api

  useEffect(() => {
    try {
      fetch('https://apigenerator.dronahq.com/api/roEYsGNJ/popular')       //fetch api data
        .then(res => res.json())
        .then((comics) => setComics(comics));           //store inside comics
    } catch (error) {
      console.error(error);            // for error in case fail to fetch api
    }
  }, []);

  return (
    <>

      <section className='bg-navy' id='hero'>
        <Slider />
        <div className="container-fluid">
          <div className="text-center mt-4 mb-3">
            <h1>Popular Books</h1>
          </div>
          <div className='d-flex flex-wrap justify-content-around'>
            {(comics.length === 0) ? (
              <div className=''><Loaders /></div>
            ) : (
              comics.map((obj) => (
                <div className="book m-3" key={obj.id}>
                  <div className='book-info '>
                    <Link to={`/comics/${obj.id}`}>
                      <p>{obj.title}</p>
                    </Link>
                    <p>{obj.author}</p>
                    <p>{obj.genre}</p>
                  </div>
                  <div className="cover">
                    <img src={obj.image} alt='cover' className='w-100' />
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="d-flex justify-content-center py-5">
            <Link to='/home/popularBooks' className='button1'>Show More</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;