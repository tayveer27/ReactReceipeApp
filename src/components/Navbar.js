import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {


    const navListArray = [
        {
            name: 'Home',
            routeTo: '/'
        },
        {
            name: 'Recipes',
            routeTo: '/recipe'
        },
        {
            name: 'Contact',
            routeTo: '/contact'
        }
    ]


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        {
                            navListArray.map((item, i) => (
                                <li className="nav-item mr-3" key={i}>
                                    <NavLink activeClassName="active" className="nav-link" exact to={`${item.routeTo}`}>{item.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
