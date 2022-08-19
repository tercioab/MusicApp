import React from "react";
import { Link } from "react-router-dom";
import searchAlbumsAPI from "../services/searchAlbumsAPI";

class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			loading: '',
            disabled: true,
			artista: "",
			albuns: [],
		};
	}

	handleArtistChange = ({ target }) => {
		const number = 2;
        const { name } = target;
        
		(target.value.length >= number) && 
			this.setState({
				disabled: false
			});
		
		this.setState({ [name]: target.value });
    };
    
	pesquisa = (e) => {
		e.preventDefault();
		const { artista } = this.state;
		this.setState(
			{
				loading: true,
				artista: "",
			},
			async () => {
				this.setState({
					albuns: await searchAlbumsAPI(artista),
					loading: false,
				});
			},
		);
    };
 
	render() {
		const { albuns, artista, disabled, loading } = this.state;
		return (
			<div data-testid="header-component">
				<form>
					<label htmlFor="artista">
						procurar album
						<input
							id="artista"
							value={artista}
							data-testid="search-artist-input"
							name="artista"
							type="text"
							onChange={this.handleArtistChange}
						/>
					</label>
					<button
						onClick={this.pesquisa}
						type="submit"
						data-testid="search-artist-button"
						disabled={disabled}
					>
						pesquisa
					</button>
				</form>
				<div>
					{ loading ? <h1>LOADING...</h1> : (albuns.map((album) => (
                        <div key={album.collectionId}>
							<Link
								to={`/album/${album.collectionId}`}
								data-testid={`link-to-album-${album.collectionId}`}
                            >	artista </Link>
								<p>{album.collectionId}</p>
								<h3>{album.artistName}</h3>
								<p>{album.collectionName}</p>
								<img src={album.artworkUrl100} alt={album.artistId} />
								<p>{album.trackCount}</p>
						
						</div>)
                    ))}
				</div>
			</div>
		);
	}
}

export default Home;
