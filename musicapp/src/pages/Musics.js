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
        }
        getMusicList()
    }, [id, listOfFavorites])

    
    useEffect(() => {
        const setLocalStorage = async () => {
            await GetMusics()
            localStorage.setItem("favorites", JSON.stringify(listOfFavorites))
        }
        setLocalStorage()
    }, [listOfFavorites])


    useEffect(() => {
        const data = localStorage.getItem("favorites");
        if (data) {
            SetListOfFavorites(JSON.parse(data));
            console.log("efc3")
        }
    }, [])


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

    


    
    return (
        <section>
            {musicApi?  musicApi.map(({ previewUrl, trackName }, index) => 
                previewUrl && <MusicCard key={index} music={previewUrl} title={trackName} change={fav}
                    checked={listOfFavorites.checked}
                />) : "carregando..."}
   </section>
    )
}