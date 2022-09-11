import React from "react";
import "./Moviecard.css"
import { useDispatch } from 'react-redux';
import allActions from './Action/index';

const Moviecard = ({ movie }) => {

    const dispatch = useDispatch()

    const handleClick = event => {
        if(event.target.style.color == "black"){
            event.target.style.color = 'blue';
            dispatch(allActions.movieAction.likeMovie())
        } else {
            event.target.style.color = 'black';
            dispatch(allActions.movieAction.unLikeMovie())
        }
        
    };

    return (
        <div className="div-item">
            <div className="card" style={{ width: "18rem" }}>
                <img src={movie.posterUrl} className="card-img-top" alt="..." style={{ height: "300px" }} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text desc" title={movie.description}>{Truncate(movie.description, 100)}</p>
                    <span className="card-span">Rating: {movie.rating}</span>
                </div>
                <button 
                onClick={handleClick}
                style={{height: "50px", color: "black"}}
                >
                    <i className="fa-solid fa-thumbs-up"></i>
                    </button>

            </div>
        </div>

    )
};

const Truncate = (text, size) => {
    if(text.length > size) {
        text = text.slice(0, size)
        text+="..."
    }

    console.log(text);

    return text
}

export default Moviecard;
