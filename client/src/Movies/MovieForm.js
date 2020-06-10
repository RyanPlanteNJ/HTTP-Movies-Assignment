import React, { useState } from 'react';

export default function MovieForm(props) {
    const [movie, setMovie] = useState(props.location.movie);


    const handleChange =(e) => {
        setMovie({
        ...movie, [e.target.value]: e.target.name})
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <div>
           <form onSubmit={e=>handleSubmit(e)}>
                <input
                type="text"
                name="title"
                onChange={e=>handleChange(e)}
                placeholder="Movie Title"
                value={props.title}
                />
                <input
                type="text"
                name="director"
                onChange={e=>handleChange(e)}
                placeholder="Director"
                value={props.director}
                />
                <input
                type="number"
                name="metascore"
                onChange={e=>handleChange(e)}
                placeholder="Metascore"
                value={props.metascore}
                />
                <input
                type="text"
                name="stars"
                onChange={e=>handleChange(e)}
                placeholder="Stars"
                value={props.stars}
                />
                <input type="submit" />
            </form>
            : <h1>Add your movie</h1>

        </div>
    )
}