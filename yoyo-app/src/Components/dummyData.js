import React from "react";
// const React = require('react')
const dummyData = ({movie}) => {
    return (
        
           <div className="card" style={{ width: "18rem" }}>
                {/* <img src={movie.posterUrl} className="card-img-top" alt="..." style={{ height: "300px" }} /> */}
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text desc" >{movie.description}</p>
                    <span className="card-span">Id: {movie.id}</span>
                </div>
        </div>
    )
}

export default dummyData