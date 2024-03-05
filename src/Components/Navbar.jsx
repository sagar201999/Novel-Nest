import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src='../../assets/logo.png' alt='logo' className='logo' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active nav-text" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/genre" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Genre
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/action">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/fiction">Fiction</Link></li>
                                    <li><Link className="dropdown-item" to="/MysThri">Mystery/Thriller</Link></li>
                                    <li><Link className="dropdown-item" to="/scifi">Science Fiction</Link></li>
                                    <li><Link className="dropdown-item" to="/fantasy">Fantasy</Link></li>
                                    <li><Link className="dropdown-item" to="/romance">Romance</Link></li>
                                    <li><Link className="dropdown-item" to="/biography">Biography</Link></li>
                                    <li><Link className="dropdown-item" to="/manga">Manga</Link></li>
                                    <li><Link className="dropdown-item" to="/adult">Adult</Link></li>
                                    <li><Link className="dropdown-item" to="/comdey">Comedy</Link></li>
                                    <li><Link className="dropdown-item" to="/horror">Horror</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/best_seller">Best Seller</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/new_release">New Realease</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/membership">Membership</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/language">Language</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="button1" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;