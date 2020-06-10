import React, { useState } from "react";
import axios from 'axios';


export default function UpdateForm (props) {
    const [movie, setMovie] = useState(props.location.movie);

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
        .then(res=>{
            console.log(res)
            window.location = "/"
            })
        .catch(err=>
            console.error(
                "UpdateForm.js: handleSubmit",
                err.message,
                err.response
            )
        );
    };

    const handleChange = (e) => {
        setMovie({...movie, [e.target.name]: e.target.value})
    }

    return(
        <div>
            {props.location.movie !== undefined ?
             <form onSubmit={e=>handleSubmit(e)}>
                <input
                type="text"
                name="title"
                onChange={e=>handleChange(e)}
                placeholder="Movie Title"
                value={movie.title}
                />
                <input
                type="text"
                name="director"
                onChange={e=>handleChange(e)}
                placeholder="Director"
                value={movie.director}
                />
                <input
                type="number"
                name="metascore"
                onChange={e=>handleChange(e)}
                placeholder="Metascore"
                value={movie.metascore}
                />
                <input
                type="text"
                name="stars"
                onChange={e=>handleChange(e)}
                placeholder="Stars"
                value={movie.stars}
                />
                <input className="save-button" type="submit" />
            </form>
            : <h1>Choose your movie</h1>}
        </div>
    );

};