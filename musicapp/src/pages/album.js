import React from "react";
import getMusics from "../services/getMusics";

class Album extends React.Component {
	constructor() {
		super();

		this.state = {
			albumArray: [],
			loading: false,
		};
	}

	teste = () => {
		console.log(this.props);
	};

	componentDidMount = async () => {
		const { id } = this.props.match.params;
		this.setState(
			{
				loading: true,
			},
			async () => {
				this.setState({
					loading: false,
					albumArray: await getMusics(id),
				});
			},
		);
	};

	render() {
		const { loading, albumArray } = this.state;
		return (
			<div>
				{loading ? (
					<h1>CARREGANDO...</h1>
				) : ( 
					albumArray.map(({ trackName, previewUrl }) => ( (previewUrl) &&
						(<div>
							<h3>{trackName}</h3>
							<audio controls>
							<source src={previewUrl} type="audio/ogg"/>
							</audio>

						</div>)
					))
				)}
			</div>
		);
	}
}

export default Album;
