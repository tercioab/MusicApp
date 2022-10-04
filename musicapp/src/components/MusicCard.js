import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export default function MusicCard({ music, change, title, checked}) {
	return (
		<>
			<h3>{title}</h3>
			<audio controls>
				<source src={music} type='audio/mpeg' />
				<button onClick={change}>favoritar</button>
			</audio>
			<Checkbox
				value={music}
                name={title}
                checked={checked}
                onClick={change}
				icon={<FavoriteBorder />}
				checkedIcon={<Favorite />}
			/>
		</>
	);
}
