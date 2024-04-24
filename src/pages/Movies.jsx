import React from 'react'
import List from '../components/movie/List'
const categ = [
    {
        type: "top_rated",
        name: "Top Rated"
    },
    {
        type: "popular",
        name: "Popular"
    },
    {
        type: "upcoming",
        name: "Upcoming"
    },
]

const Movies = () => {
    return (
        <div>
            {
                categ.map((pee) => {
                    return (
                    <div className="center">
                        <List key={pee.type} type={pee.type} name={pee.name}  />
                    </div>)
                    
                })
            }

        </div>
    )
}

export default Movies