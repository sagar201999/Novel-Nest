import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


const Description = () => {

  const { comicsID } = useParams();

  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch(`https://apigenerator.dronahq.com/api/roEYsGNJ/popular/${comicsID}`)       //fetch api data
      .then(res => res.json())
      .then((book) => setBooks(book));
  }, [comicsID]);

  if (!books) {
    return <div className="loader"></div>;
  }

  return (
    <>

      <div className='text-light bg-navy py-5'>
        <section className='container des-section-1 d-flex justify-content-evenly flex-wrap'>
          <img src={books.image} alt='' />
          <main className='des-wrapper-sec1'>
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

        <section className='des-section-2 mt-5'>
          <div className='about-author'>
            <p className='my-3'>About the Author</p>
            <div className='d-flex'>
              <img src='' alt='' className='' />
              <p>author name</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Numquam ut aperiam dolor. Eos est consectetur. nulla, eum dolorum provident aperiam eos modi harum.
              Eos est consectetur. nulla, eum dolorum provident aperiam eos modi harum.
            </p>
            <hr className='my-5' />
            <div className='d-flex justify-content-between'>
              <Link to=''>Others Books</Link>
              <Link to=''>View All</Link>
            </div>
          </div>
          <div className='author-description'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo tenetur minima,
              fuga, eaque totam obcaecati placeat nulla, eum dolorum provident aperiam eos modi harum. Fugit quisquam
              mollitia corrupti dolor cumque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae saepe debitis et ratione quam repellendus facere, enim reiciendis provident amet, iste laudantium nostrum ut repellat eos quo maiores deserunt voluptas!
              Aliquid, culpa sint! Suscipit, accusamus vero. Modi error repellat temporibus similique exercitationem 
              eveniet iste adipisci, culpa aspernatur accusantium. Quaerat minima sed labore nostrum excepturi asperiores rerum amet,
               corrupti iure ipsum?
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto alias in, temporibus beatae, voluptatibus aliquam facilis perferendis, illo modi aperiam ad amet nostrum nobis voluptas nesciunt quos necessitatibus odit libero!
               Corporis consectetur quod voluptates animi fugiat pariatur molestias sit expedita eligendi est iusto, esse modi ducimus fuga aspernatur architecto sed quaerat saepe suscipit officiis, necessitatibus molestiae. Quae magni quidem consectetur.
               Qui illo fuga cum aliquam pariatur, eius numquam assumenda. Numquam alias doloremque earum nostrum id dicta tenetur praesentium debitis quae, minus molestias soluta. Temporibus molestias laborum tenetur ullam sapiente maxime.</p>
          </div>

        </section>


      </div>
    </>
  )
}

export default Description;