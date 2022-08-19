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

	componentDidMount = async () => {
		const { id } = this.props.match.params;
    this.setState({
      loading: true,
    
    }, async () => {
      this.setState({
        loading: false,
        albumArray: await getMusics(id),
      });
    })
	};
  

	render() {
		const { loading, albumArray } = this.state;
		return (
      <div>
        { loading ?  <h1>CARREGANDO...</h1>: (	<div>
        {albumArray.map(({ trackName, previewUrl }) => (
          <div>
          <p>{trackName}</p>
					<audio data-testid="audio-component" src={previewUrl} controls>
						<track kind="captions" />O seu navegador não suporta o elemento{" "}
						<code>audio</code>.
            </audio>
            </div>
				))}
			</div>)}
    </div>
		);
	}
}

export default Album;
