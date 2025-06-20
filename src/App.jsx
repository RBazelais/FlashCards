import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
	const cardSet = {
		title: "Data Structures",
		description: "Common data structures and their use cases",
		cards: [
			{
				difficulty: "Easy",
				question: "When should you use an array?",
				answer: "Use an array when you need to store a collection of items in a specific order and access them by index.",
			},
			{
				difficulty: "Medium",
				question: "When should you use a hash table?",
				answer: "Use a hash table when you need fast lookups, insertions, and deletions based on unique keys.",
			},
			{
				difficulty: "Hard",
				question: "When should you use a linked list?",
				answer: "Use a linked list when you need efficient insertions and deletions at arbitrary positions and don't require random access.",
			},
			{
				difficulty: "Medium",
				question: "When should you use a stack?",
				answer: "Use a stack when you need to manage data in a Last-In-First-Out (LIFO) order, such as for undo functionality or parsing expressions.",
			},
			{
				difficulty: "Medium",
				question: "When should you use a queue?",
				answer: "Use a queue when you need to manage data in a First-In-First-Out (FIFO) order, such as for task scheduling or breadth-first search.",
			},
			{
				difficulty: "Hard",
				question: "When should you use a binary search tree?",
				answer: "Use a binary search tree when you need to maintain a sorted collection of items and perform efficient range queries or lookups.",
			},
			{
				difficulty: "Hard",
				question: "When should you use a graph?",
				answer: "Use a graph when you need to represent relationships or connections between entities, such as in social networks or pathfinding algorithms.",
			},
			{
				difficulty: "Easy",
				question: "When should you use a set?",
				answer: "Use a set when you need to store unique items and perform operations like union, intersection, or difference.",
			},
			{
				difficulty: "Medium",
				question: "When should you use a doubly linked list?",
				answer: "Use a doubly linked list when you need to traverse data in both directions and perform efficient insertions and deletions.",
			},
		],
	};

	const [reviewCards, setReviewCards] = useState(cardSet.cards);
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [ShowFront, setShowFront] = useState(true);

	const handleNextCard = () => {
		setCurrentCardIndex((prevIndex) =>
			prevIndex >= reviewCards.length - 1 ? 0 : prevIndex + 1
		);
		setShowFront(true);
	};

	const handleReviewChange = (needsReview) => {
		if (!needsReview) {
			// Remove the card from the review list if marked as known
			setReviewCards((prevCards) =>
				prevCards.filter((_, i) => i !== currentCardIndex)
			);
			// Adjust index if we're at the end of the array
			if (currentCardIndex >= reviewCards.length - 1) {
				setCurrentCardIndex(0);
			} else {
				handleNextCard();
			}
		} else {
			// Just move to next card if marked as needs review
			handleNextCard();
		}
	};

	const resetDeck = () => {
		setReviewCards(cardSet.cards);
		setCurrentCardIndex(0);
		setShowFront(true);
	};

	return (
		<div className="app">
			<header>
				<h1>{cardSet.title}</h1>
				<p>{cardSet.description}</p>
				<p>Total cards: {reviewCards.length}</p>
			</header>

			{reviewCards.length > 0 ? (
				<>
					<div className="progress-indicator">
						Card {currentCardIndex + 1} of {reviewCards.length}
					</div>

					<Card
						{...reviewCards[currentCardIndex]}
						onReviewChange={handleReviewChange}
						ShowFront={ShowFront}
						setShowFront={setShowFront}
					/>

					<button className="next-button" onClick={handleNextCard}>
						Next Card
					</button>
				</>
			) : (
				<div className="completion-message">
					<p>You've reviewed all the cards!</p>
					<button className="reset-button" onClick={resetDeck}>
						Reset Deck
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
