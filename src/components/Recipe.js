import React, { useEffect, useState } from 'react'
import getData from '../directory/axiosGetReq';

function Recipe() {

    const [Recipe, setRecipe] = useState([])
    const [searchFor, setsearchFor] = useState("Chicken")

    useEffect(async () => {
        const res = await getData('chiken');
        setRecipe(res);
    }, [])

    const getRecipe = async e => {
        e.preventDefault();
        const res = await getData(searchFor);
        setRecipe(res);
    }

    const search = e => {
        e.preventDefault()
        setsearchFor(e.target.value)
    }

    return (
        <div className="container">
            <div className="mb-3 mt-3">
                <form onSubmit={getRecipe}>
                    <input type="text" onChange={search} placeholder="Search From Ingredient" className="form-control w-50 d-inline" name="search" />
                    <button type="submit" className="sub-btn d-inline ml-3">Search</button>
                </form>

            </div>
            <div className="row row-eq-height">
                {
                    (Recipe) &&
                    Recipe.map((reci, i) => (
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <img className="card-img-top" src={reci.recipe.image} />
                                <div className="card-body text-left">
                                    <h5 className="card-title"><b>Label</b>: {reci.recipe.label}</h5>
                                    <p className="card-text"><b>Cuisine Type</b>: {reci.recipe.cuisineType}</p>
                                    <p><b>Diet Lable</b> : {reci.recipe.dietLabels}</p>
                                </div>
                            </div>
                        </div>
                    ))

                }
            </div>

        </div>
    )
}

export default Recipe
