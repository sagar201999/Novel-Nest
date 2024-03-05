import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';


const Description = () => {

  const { comicsID } = useParams();

  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch(`https://apigenerator.dronahq.com/api/I99wj9Gr/comics/${comicsID}`)       //fetch api data
      .then(res => res.json())
      .then((book) => setBooks(book));
  }, [comicsID]);

  if (!books) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <Navbar />

      <div className='container text-light mt-5'>
        <section className='section-1 d-flex justify-content-evenly flex-wrap'>
          <img src={books.image} alt='' />
          <main className='w-50 des-wrapper-sec1'>
            <div className='p-4'>
              <h3>{books.title}</h3>
              <p><span>by</span> {books.author} <span>| date</span></p>
              <p>{books.rating}</p>
              <div className='my-3'>
                <button className='button1'>genre 1</button>
                <button className='button1 mx-3'>genre 2</button>
                <button className='button1'>genre 3</button>
              </div>
              <p>{books.description}</p>
            </div>
            <div className='des-options'>
              <div className='des-option-btn'>
                <img src='../../assets/icons8-bookmark.svg' alt='bookmark' />
                <button> Save</button>
              </div>
              <div className='des-option-btn'>
                <img src='../../assets/icons8-hide-100.png' alt='bookmark' />
                <button>Hide</button>
              </div>
              <div className='des-option-btn'>
                <img src='../../assets/icons8-read-100.png' alt='bookmark' />
                <button>Mark Read</button>
              </div>
              <div className='read_now'>
                <button>Read Now</button>
              </div>
            </div>
          </main>
        </section>


      </div>
    </>
  )
}

export default Description;