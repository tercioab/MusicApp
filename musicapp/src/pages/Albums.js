import { useEffect, useState } from "react";
import AlbumCard from "../components/AlbumCard"
import searchAlbumsAPI from "../services/searchAlbumsAPI";

export default function Albums() {
    const [inputAlbum, setInputAlbum] = useState({
        albums:'',
    });
	const [albumApi, setAlbumApi] = useState([]);

	const onChangeAlbumSearch = ({ target }) => {
		const { name, value } = target;
		setInputAlbum( ({
			[name]: value,
        }));
            
	};

	const onClickSearch = async e => {
		e.preventDefault();
		const { albums } = inputAlbum;
		const resultsAlbum = await searchAlbumsAPI(albums);
        setAlbumApi(resultsAlbum);
        setInputAlbum({albums: ''})
		console.log(resultsAlbum);
    };
    
    const { albums } = inputAlbum
    
	return (
		<div>
			<form>
				<input value={albums} name='albums' type='text' onChange={onChangeAlbumSearch} />
				<button onClick={onClickSearch}>search</button>
			</form>
			<section className="album-section">
				{albumApi.map(({ collectionName, artworkUrl100, collectionId, artistName }) => (
					<AlbumCard key={collectionId} image={artworkUrl100} title={collectionName} id={collectionId} artist={artistName} />
				))}
			</section>
		</div>
	);
}
