import { useState } from "react";

const Card = ({ front, back }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleFlip = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<div className="card" onClick={handleFlip}>
			{isFlipped ? (
				<div>{back}</div>
			) : (
				<div className="card-front">{front}</div>
			)}
		</div>
	);
};

export default Card;
