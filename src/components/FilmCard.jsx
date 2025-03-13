import {Link} from "react-router-dom"


const FilmCard = () => {
    return (
        <>
        <div className="card">
            <img className="card-img"
            src="http://localhost:3000/img/films/titatic.jpg"
             alt="" />
             <div className="card-body">
                <h4 className="card-title">
                    Titolo film 
                </h4>
                <address><i>
                   director </i></address>

                   <h6>
                    genre
                   </h6>
                   <p>
                    abstract
                   </p>
                   <Link to="films/2" className="btn">See more</Link>
             </div>
        </div>
        </>
    )
}

export default FilmCard