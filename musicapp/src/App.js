import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Musics from "./pages/Musics";
import Albums from "./pages/Albums";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Link to="/" >Login</Link>
				{' '}
				<Link to="/musics" >Musics</Link>
				{' '}
				<Link to="/albums" >Albums</Link>
				{' '}
				<Link to="/favorites" >Favorite</Link>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route path='/musics/:id' render={props => <Musics {...props} />} />
					<Route path='/albums' render={props => <Albums {...props} />} />
					<Route path='/favorites' component={Favorites} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
