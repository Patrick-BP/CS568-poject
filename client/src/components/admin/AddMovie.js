import "../../App.css";

import { useContext, useState } from "react";
import axios from "axios";
axios.defaults.baseURL ="http://localhost:3001"
function AddMovie() {
  const [movie, setMovie] = useState({
    title: "",
    overview: "",
    popularity: 0,
    releaseDate:"",
    genre: "",
    language: "",
    director: "",
    type: "",
    country: "",
    
  
  });
  const [file, setfile] =useState(null)

  function handleChanges(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  }
  
  async function submit(e) {
    e.preventDefault()
    const newMovie ={
        title:movie.title,
        overview:movie.overview,
        popularity:movie.popularity,
        releaseDate:movie.releaseDate,
        genre:movie.genre,
        language:movie.language,
        director:movie.director,
        type:movie.type,
        country:movie.country,
    }
    if(file){
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.name =filename;
        data.file = file;
        newMovie.smallimg = filename;

try{
    await axios.post("/img/upload", data);
}catch(e){
    console.log(e);
}
    }
    


    try{
       const response = await axios.post("/movies", newMovie);
    }catch(e){}

  }


  return (
    <div className="card card-addmovie">
      <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
        <h4 className="card-title mt-3 text-center">Add New Movie</h4>

        <form  encType="multipart/form-data">
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-video"></i>{" "}
              </span>
            </div>
            <input
              name="title"
              className="form-control"
              placeholder="Movie tilte"
              type="text"
              value={movie.title}
              onChange={handleChanges}
              required
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-pen"></i>{" "}
              </span>
            </div>
            <textarea
              name="overview"
              value={movie.overview}
              className="form-control"
              placeholder="Overview"
              type="text"
              onChange={handleChanges}
              required
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-">popularity :</i>{" "}
              </span>
            </div>
            <input
              name="popularity"
              value={movie.popularity}
              className="form-control"
              placeholder="popularity"
              type="range"
              min="1"
              max="10"
              onChange={handleChanges}
              required
            />
            <span className="input-group-text">
              {" "}
              <i className="fa ">{movie.popularity}</i>{" "}
            </span>
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-date">release-Date</i>{" "}
              </span>
            </div>
            <input
              name="releaseDate"
              value={movie.releaseDate}
              className="form-control"
              placeholder="releaseDate"
              type="date"
              onChange={handleChanges}
              required
            />
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-film"></i>{" "}
              </span>
            </div>
            

            <select className="custom-select" name="genre" onChange={handleChanges} value={movie.genre} required>
              <option value="">Movie Genre</option>
              <option value="Action">Action</option>
              <option value="Horror">Horror</option>
              <option value="Animation">Animation</option>
              <option value="Romance">Romance</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Familly">Familly</option>
              <option value="Crime">Crime</option>
              
              
            </select>
          

          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-microphone"></i>{" "}
              </span>
            </div>
            <select className="custom-select" name="language" onChange={handleChanges} value={movie.language} required>
              <option value="">Movie language</option>
              <option value="English">English</option>
              <option value="French">French</option>
              
            </select>
          </div>
          

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-users"></i>{" "}
              </span>
            </div>
            <input
              name="director"
              value={movie.director}
              className="form-control"
              placeholder="director"
              type="text"
              onChange={handleChanges}
              required
            />
          </div>
          

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-film"></i>{" "}
              </span>
            </div>
            <select className="custom-select" value={movie.type} name="type" onChange={handleChanges} required>
              <option value="">Movie Type</option>
              <option value="Movie">Movie</option>
              <option value="Tv-Show">Tv-Show</option>
              <option value="Documentary">Documentary</option>
              
            </select>
          </div>
          
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-globe"></i>{" "}
              </span>
            </div>
            <select className="custom-select" value={movie.country} name="country" onChange={handleChanges} required>
              <option value="">Country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="CHINA">CHINA</option>
              <option value="KOREA">KOREA</option>
              <option value="FRANCE">FRANCE</option>
              
            </select>
          </div>
          

         
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-file-image-o"></i>{" "}
              </span>
            </div>
            <input
              className="form-control"
              placeholder="Thumbnail"
              type="file"
              onChange={(e)=>setfile(e.target.files[0])}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-picture-o"></i>{" "}
              </span>
            </div>
            <input
              className="form-control"
              placeholder="movie"
              type="file"
              name="videourl"
              value={movie.videourl} 
              onChange={handleChanges}
            />
          </div>
          <div className="form-group">
            <button type="submit" onClick={submit} className="btn btn-primary btn-block">
              {" "}
              Save{" "}
            </button>
          </div>
          <p className="text-center text-success">
            Successfully added!!
          </p>
        </form>
      </article>
    </div>
  );
}

export default AddMovie;
