import { Typography } from "@mui/material";
import React from "react";

class Header extends React.Component {
	render() {
		return (
			<header>
				<Typography variant='h1' component='h2'>
					Music App
				</Typography>
			</header>
		);
	}
}

export default Header;
