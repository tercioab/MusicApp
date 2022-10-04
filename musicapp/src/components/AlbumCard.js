export default function MusicCard({image, title, id}) {
    return (
        <section className="album-section" >
           
            <a  className="album" href={`/musics/${id}`}> <img src={image} alt={title} />
            <h3>{title}</h3></a>
        </section>
    )
}