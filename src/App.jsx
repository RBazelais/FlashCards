import "./App.css";
import Card from "./components/Card";
const cardData = [
	{
		difficulty: "Easy",
		front: "What can you do for plants to improve their ability to photosynthesize?",
		back: "Dust or clean off the leaves",
	},
];

function App() {
	return (
		<div className="app">
			{cardData.map((card, index) => (
				<Card key={index} {...card} />
			))}
		</div>
	);
}

export default App;
