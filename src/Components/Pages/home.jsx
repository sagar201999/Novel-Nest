import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import Carousel from '../MiniComponents/carousel';
import Loaders from '../../Components/MiniComponents/loaders'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  }, []);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };

  return (
    <>

      <section className='bg-navy' id='hero'>
        <Carousel />
        <div className='ms-5 me-4'>
          <div className='mt-5'>
            <h3>New Realease</h3>
          </div>
          <div className=''>
            <Slider {...settings}>
              {(comics.length === 0) ?
                <div className='d-flex justify-content-center align-items-center'><Loaders /></div>
                : comics.map((obj) => (
                  <div class="book">
                    <div className='book-info'>
                      <Link to={`/comics/${obj.id}`}>
                        <p>{obj.title}</p>
                      </Link>
                      <p>{obj.author}</p>
                      <p>{obj.genre}</p>
                    </div>
                    <div key={obj.id} className="cover">
                      <img src={obj.image} alt='cover' style={{ width: '98%', height: '98%' }} />
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>



      </section>
    </>
  )
}

export default Home;