import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Album from "./pages/album";
import Favorit from "./pages/favorites";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/album/:id' render={props => <Album {...props} />} />
					<Route path='/favorite' component={Favorit} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
