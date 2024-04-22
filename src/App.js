
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import SveRecenzije from './components/SveRecenzije';


function App() {




  const [reviews, setReviews] = useState([])


  useEffect(() => {
    let recenzije = JSON.parse(localStorage.getItem('reviews')) || []
    if (recenzije) {
      setReviews(recenzije)
    }
  }, [])




  const handleFormSubmit = (recenzija, ocjena, datum) => {
    const newReview = [...reviews, { recenzija: recenzija, ocjena: ocjena, datum: datum, favorit: false }]
    localStorage.setItem("reviews", JSON.stringify(newReview))
    setReviews(newReview)

  }

  const handleFavoriteClick = (index) => {
    const updatedReviewsList = [...reviews];
    updatedReviewsList[index].favorit = !updatedReviewsList[index].favorit;
    setReviews(updatedReviewsList);
    localStorage.setItem("reviews", JSON.stringify(updatedReviewsList))
  };
  const handleRemoveReview = (index) => {
    const updatedReviewsList = [...reviews];
    updatedReviewsList.splice(index, 1)
    setReviews(updatedReviewsList)
    localStorage.setItem("reviews", JSON.stringify(updatedReviewsList))
  }
  return (
    <div className="App">

      <main>
        <Form
          handleFormSubmit={handleFormSubmit} />
        {reviews && reviews.length > 0 &&
          <SveRecenzije
            reviews={reviews}
            handleFavoriteClick={handleFavoriteClick}
            handleRemoveReview={handleRemoveReview}
          />}
      </main>

      <footer>Made by Christian</footer>
    </div>
  );
}

export default App;
