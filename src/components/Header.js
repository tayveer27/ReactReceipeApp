import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div className="bg-cone">
            <div className="container">
                <h1 className="grad-text">Healthy Recipe</h1>
                <h4 className="desc-text">There are many variations of an Ingredient  available for a perfect Healthy Recipe. But the majority have suffered finding it.</h4>
                <div className="slide-btn">
                <Link to="/contact" className="bg-link demoBtn">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
