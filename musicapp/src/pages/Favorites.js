import MusicCard from "../components/MusicCard"

export default function Favorites() {
    const teste = JSON.parse(localStorage.getItem("favorites"))
    return (
    <>
        {teste.map(({ value, name, artworkUrl30 }, index) => value && <MusicCard music={value} key={index}
            title={name} image={artworkUrl30} />)}
            </>
    )
}