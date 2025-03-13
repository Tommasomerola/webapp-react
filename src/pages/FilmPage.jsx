import { Link } from "react-router-dom"

import ReviewCard from "../components/ReviewCard"


const FilmPage = ()=> {
    return (
        <>
        <header>
            <div>
                <img 
                src="http://localhost:3000/img/films/titatic.jpg" 
                alt="" />
            
                <div>
                    <h1>Titolo film</h1>

                    <h3>
                    <i>
                        directed by director
                    </i>
                    </h3>
                    <p>
                        abstract
                    </p>
                </div>
            </div>
        </header>
        <section id="reviews">
            <div>
                <h4>our community reviews</h4>
            </div>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            </section>
            <footer>
                <Link className="btn" to="/">Back to Home</Link>
            </footer>
            
       
        </>
    )
}

export default FilmPage