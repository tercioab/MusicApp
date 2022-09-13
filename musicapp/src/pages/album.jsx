import { Checkbox, CircularProgress, Typography } from "@mui/material";
import React from "react";
import getMusics from "../services/getMusics";
import Header from "../components/header";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

class Album extends React.Component {
	constructor() {
		super();

		this.state = {
			musicArray: [],
			favorite: [],
			loading: false,
		};
	}

	componentDidMount = async () => {
		const { id } = this.props.match.params;
		this.setState(
			{
				loading: true,
			},
			async () => {
				this.setState({
					loading: false,
					musicArray: await getMusics(id),
				});
			},
		);
	};

	favorites = ({ target }) => {
		const { value, name, checked } = target;
		const { favorite } = this.state;
		const obj = { value: value, trackName: name };
		checked
			? this.setState(prevstate => ({
					favorite: [...prevstate.favorite, obj],
			  }))
			: this.setState(prevstate => ({
					favorite: favorite.filter(({ value }) => value !== obj.value),
			}));
		
		
		
	};

	render() {
		const { loading, musicArray, favorite } = this.state;
		const array = JSON.stringify(favorite)
		localStorage.setItem('key', array)
	
		
	
		return (
		
			<div>
				<Header />
				{loading ? (
					<CircularProgress />
				) : (
					musicArray.map(
						({ trackName, previewUrl }, index) =>
							previewUrl && (
								<div key={index}>
									<Typography variant='h6' component='h6'>
										{trackName}
									</Typography>
									<audio controls>
										<source src={previewUrl} type='audio/ogg' />
									</audio>
									<Checkbox
										value={previewUrl}
										name={trackName}
										onChange={this.favorites}
										icon={<FavoriteBorder />}
										checkedIcon={<Favorite />}
									/>
								</div>
							),
					)
				)}
				
				</div>
				
		);
	}
}

export default Album;
