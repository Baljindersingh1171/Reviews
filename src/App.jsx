import { useState } from "react";
import Reviews from "./data";
const App = () => {
  const [reviews, setReviews] = useState(Reviews);
  console.log(reviews);
  const [index, setIndex] = useState(0);
  const current = reviews[index];
  function handleNext() {
    if (index < reviews.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    // setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }
  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(reviews.length - 1);
    }
  }
  function randomNumber() {
    const random = Math.floor(Math.random() * 4);
    console.log(random);
    return random;
  }
  function handleSup() {
    setIndex(randomNumber());
  }
  console.log(reviews[0]);
  return (
    <div className="main">
      <div className="container">
        <img src={current.image} />
        <h2>{current.name}</h2>
        <h4 id="job">{current.job}</h4>
        <p>{current.text}</p>
        <div className="buttons">
          <div onClick={handlePrev} className="btn">
            ⬅️
          </div>
          <div onClick={handleNext} className="btn">
            ➡️
          </div>
        </div>
        <button id="sup" onClick={handleSup}>
          Suprise me
        </button>
      </div>
    </div>
  );
};
export default App;
