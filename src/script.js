import React, { useState } from "react";
import './style.css';

function App() {
	const arrQuote=["I am Iron Man.",
		"Our prime purpose in this life is to help others. And if you can’t help them, at least don’t hurt them.",
		"Life is a series of natural and spontaneous changes. Don’t resist them—that only creates sorrow. Let reality be reality. Let things flow naturally forward however they like.",
		"He who has a why to live can bear almost any how.", 
		"Life consists not in holding good cards but in playing those you hold well.",
		"The best gift anyone can give, I believe, is the gift of sharing themselves.",
		"The greatest glory in living lies not in never falling, but in rising every time we fall.",
		"The way to get started is to quit talking and begin doing.",
		"Your time is limited, so don't waste it living someone else's life.",
	];
	const arrAuthor=["Tony Stark","Dalai Lama","Lao Tzu","Friedrich Nietzsche","Josh Billings","Oprah",
		"Nelson Mandela",
		"Walt Disney",
		"Steve Jobs",]
	const [currentIndex, setCurrentIndex] = useState(() =>
		Math.floor(Math.random() * arrQuote.length)
	);
	
	const handleNewQuote = () => {
		let newIndex;
		do {
		newIndex = Math.floor(Math.random() * arrQuote.length);
		} while (newIndex === currentIndex);
		setCurrentIndex(newIndex);
	};
	return (
		<div id="quote-box">
			<span id="text">"{arrQuote[currentIndex]}"</span>
			<span id="author">- {arrAuthor[currentIndex]}</span>
			<div id="ctn-btn">
				{/* <button>test1</button> */}
				<a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">Tweet</a>
				<button id="new-quote" onClick={handleNewQuote}>New quote</button>
			</div>
		</div>
	);
}

export default App;
