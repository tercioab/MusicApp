import { Typography } from "@mui/material";
import React from "react"

class Favorite extends React.Component {
    render() {
        const result = localStorage.getItem('key');
		const result1 = JSON.parse(result);
		
        return (
        <>
            {
                result1.map(({ trackName, value }, index) => <div key={index}>
                <Typography variant='h6' component='h6'>
                    {trackName}
                </Typography>
                <audio controls>
                    <source src={value} type='audio/ogg' />
                </audio>
            </div> )
                }
                </>
        )
    }
}



export default Favorite;
