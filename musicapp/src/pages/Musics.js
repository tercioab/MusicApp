import MusicCard from "../components/MusicCard"
import GetMusics from "../services/getMusics"
import { useEffect, useState } from "react";




export default function Musics(props) {
    const { id } = props.match.params
    const [musicApi, setMusicApi] = useState([]);
    const [listOfFavorites, SetListOfFavorites] = useState([]);

    useEffect(() => {
        const getMusicList = async () => {
            const musics = await GetMusics(id)
            setMusicApi(musics)
            localStorage.setItem("favorites", JSON.stringify(listOfFavorites))
        }
        getMusicList()
    }, [id, listOfFavorites])


    const fav = ({ target }) => {
        const { name, value, checked } = target;
        const obj = {
            name,
            value,
            checked,
        }
        checked && SetListOfFavorites((prev) => ([
            ...prev,
            obj,
        ]))
    };

    
    useEffect(() => {
        const data = localStorage.getItem("favorites");
        if (data) {
            SetListOfFavorites(JSON.parse(data));
        }
    }, [])

    
    return (
        <section>
            {musicApi?  musicApi.map(({ previewUrl, trackName }, index) => 
                previewUrl && <MusicCard key={index} music={previewUrl} title={trackName} change={fav}
                    checked={listOfFavorites.checked}
                />) : "carregando..."}
            <h1>favoritos</h1>
            {listOfFavorites.map(({ value, name, checked }, index) => value && <MusicCard music={value} key={index}
                checked={checked}
                title={name } />)}
   </section>
    )
}