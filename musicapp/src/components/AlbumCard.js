export default function MusicCard({image, title, id, artist}) {
    return (
        <section className="album-section" >
           
            <a  className="album" href={`/musics/${id}`}> <img src={image} alt={title} />
                <h3>{title}</h3>
                <h4>{artist}</h4>
            </a>
            
        </section>
    )
}