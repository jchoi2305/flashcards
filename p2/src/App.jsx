import { useState } from 'react';
import './App.css';

const App = () => {
  // flashcards
  const flashcardsLst = [ // CHANGE
    { index: 1, question: "What is React?", answer: "A JavaScript library for building user interfaces." },
    { index: 2, question: "What is a component?", answer: "A reusable piece of UI." },
    { index: 3, question: "What is useState?", answer: "A Hook to add state to function components." }
  ]

  // useStates
  const [currFlashcardIndex, setFlashcard] = useState(0);
  const [showAnswer, setFlip] = useState(false);

  // handling the next button for flashcards
  const handleNext = () => {
    setFlashcard(currFlashcardIndex + 1)
    setFlip(false)
  }
  const currFlashcard = flashcardsLst[currFlashcardIndex]; // setting the current flashcard set

  // checking if the flashcard is flipped or not
  const checkIfFlipped = () => {
    setFlip(true) // !prev
  }

  const flashcardState = ({ currCard, isFlipped }) => {
    return (
      <p className='content'>
        {isFlipped ? (
          currCard.question
        ) : (
          currCard.answer
        )}
      </p>
    );
  }

  return (
    <div className="App">
      {/* -------- the header -------- */}
      <div className="header">
        <h1>Guess The Movie</h1>
        <p>Level: poor descriptions! Guess what movie it is based on some funky, vague (but still valid!) movie descriptions.</p>
      </div>

      {/* -------- content -------- */}
      {/* from w3schools */}
      <div class="flashcard" onClick={checkIfFlipped}>
        <div class="flashcard-inner">
          {/* FRONT OF CARD */}
          <div class="flashcard-front">
            {/* <p>{currFlashcard.question}</p> */}
            {flashcardState({ currCard: currFlashcard, isFlipped: showAnswer })}
          </div>

        </div>
        <button onClick={handleNext}> Next </button>
      </div>

      {/* -------- footer -------- */}
      <div className="footer">
        <p>Trivia and description credits go to: https://www.sideshow.com/blog/can-you-guess-these-movies-from-misleading-plot-descriptions</p>
      </div>

    </div>
  )
}

export default App