import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import searchAlbumsAPI from "../services/searchAlbumsAPI";
import Header from "./header";

class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			artista: "",
			albuns: [],
			disabled: true,
			loading: false,
		};
	}

	handleArtistChange = ({ target }) => {
		const number = 2;
		const { name } = target;

		target.value.length >= number &&
			this.setState({
				disabled: false,
			});

		this.setState({ [name]: target.value });
	};

	pesquisa = e => {
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
			<div data-testid='header-component'>
				<Header />
				<form>
					<TextField
						size='small'
						id='outlined-basic'
						label='Procurar Album'
						variant='outlined'
						value={artista}
						data-testid='search-artist-input'
						name='artista'
						type='text'
						onChange={this.handleArtistChange}
					/>
					<Button
						size='medium'
						onClick={this.pesquisa}
						color='success'
						type='submit'
						data-testid='search-artist-button'
						disabled={disabled}
						variant='contained'
					>
						pesquisa
					</Button>
				</form>
				<div>
					{loading ? (
						<CircularProgress />
					) : (
						albuns.map(
							({ collectionId, artworkUrl100, artistId, artistName, collectionName }) => (
								<div key={collectionId}>
									<Link
										to={`/album/${collectionId}`}
										data-testid={`link-to-album-${collectionId}`}
									>
										<img src={artworkUrl100} alt={artistId} />
										<Typography variant='h6' component='h6'>
											{artistName}
										</Typography>
										<Typography variant='body2' component='body2'>
											{collectionName}
										</Typography>
									</Link>
								</div>
							),
						)
					)}
				</div>
			</div>
		);
	}
}

export default Home;
