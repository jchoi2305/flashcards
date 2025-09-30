import { useState } from 'react';
import './App.css';

const App = () => {
  // flashcards
  const flashcardsLst = [ 
    { question: "An intergalactic terrorist seeks revenge by hitchhiking a ride with a religious fanatic and a smuggler", answer: "Star Wars: A New Hope" },
    { question: "Children risk life and limb to harness the fury of wild beasts, in the hopes of attaining fame (or at least some shiny pins)", answer: "Pokemon" },
    { question: "A boy whose only friend is an eccentric neighbor must shun his mother’s affection or he will cease to exist", answer: "Back To The Future" },
    { question: "A ragtag team of misfits takes a very long walk to destroy a piece of jewelry.", answer: "The Lord of the Rings Trilogy" },
    { question: "Reptiles young and old work together to shut down a tropical island resort.", answer: "Jurassic Park" }

  ]

  // useStates
  const [currFlashcardIndex, setFlashcard] = useState(0);
  const [showAnswer, setFlip] = useState(false);

  // handling the next button for flashcards
  const handleNext = () => {
    if (currFlashcardIndex < flashcardsLst.length - 1) {
      setFlashcard(currFlashcardIndex + 1)
    } else {
      setFlashcard(0)
    }
    setFlip(false)

  }
  const currFlashcard = flashcardsLst[currFlashcardIndex]; // setting the current flashcard set

  // checking if the flashcard is flipped or not
  const checkIfFlipped = () => {
    setFlip(prev => !prev)
  }

  return (
    <div className="App">
      {/* -------- the header -------- */}
      <div className="header">
        <h1>Guess The Movie</h1>
        <p>Level: poor descriptions! Guess what movie it is based on some funky, vague (but still valid!) movie descriptions.</p>
        <p>You have {flashcardsLst.length} total cards and you guessed {currFlashcardIndex + 1} cards!</p>
      </div>

      {/* -------- content -------- */}
      {/* from w3schools */}
      <div className="flashcard" onClick={checkIfFlipped}>
        <div className="flashcard-inner">

          {/* FRONT OF CARD */}
          <div className="flashcard-front">
            {/* https://react.dev/learn/conditional-rendering#conditional-ternary-operator-- */}
            <p className='content'>
              {showAnswer ? (
                <b>{currFlashcard.answer}</b>
              ) : (
                <b>{currFlashcard.question}</b>
              )}
            </p>
            <p className='footer'><i>Credits go to SideShow</i></p>
          </div>

        </div>
      </div>

      <div className='next'>
        <button onClick={handleNext}> Next </button>
      </div>

      {/* -------- footer -------- */}
      <div className="footer-div">
        <p>Trivia and description credits go to: https://www.sideshow.com/blog/can-you-guess-these-movies-from-misleading-plot-descriptions</p>
      </div>

    </div>
  )
}

export default App