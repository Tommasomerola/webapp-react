import FilmCard from "../components/FilmCard"

const HomePage = () => {
    return (
        <>
            <h1>Films</h1>
            <h2><i>Community nerd di film</i></h2>
            <div className="container-homepage">
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
            </div>
        </>
    )
}

export default HomePage