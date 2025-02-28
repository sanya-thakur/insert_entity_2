import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './AddMovie.css';

const AddMovie=()=>{
    const navigate=useNavigate();
    const [formData, setFormData]=useState({
        title:'',
        director:'',
        genre:'',
        releaseYear:'',
        synopsis:'',
        posterImage:'',
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Movie added: ', formData)
        navigate('/')
    }
    const handleCancel=()=>{
        navigate('/');
    }

    return(
        <div className="add-movie-container">
            <h1>Add a new movie!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Movie Name" required/>
                <input type="text" name="director" placeholder="Director Name" required/>
                <input type="text" name="genre" placeholder="Genre" required/>
                <input type="number" name="releaseYear" placeholder="Year of Release" required/>
                <textarea name="synopsis" placeholder="Synopsis" required/>
                <input type="url" name="posterImage" placeholder="Poster Image Url"/>
                <button type="submit" className="submit-button">Submit</button>
                <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default AddMovie;