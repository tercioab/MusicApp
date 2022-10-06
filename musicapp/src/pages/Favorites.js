import MusicCard from "../components/MusicCard";

export default function Favorites() {


    return (
        <>
            <h3>favoritos</h3>
        {JSON.parse(localStorage.getItem("favorites")).map(({ value, name, artworkUrl30 }, index) => value && <MusicCard music={value} key={index} 
            title={name} image={artworkUrl30} />)}
            </>
    )
}