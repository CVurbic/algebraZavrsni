import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import SveRecenzije from './components/SveRecenzije';

// Funkcionalna komponenta koja predstavlja glavnu aplikaciju
function App() {
  // State za pohranu recenzija
  const [reviews, setReviews] = useState([]);

  // Koristi se useEffect hook za inicijalizaciju recenzija iz lokalnog skladišta
  useEffect(() => {
    // Dohvaćanje recenzija iz localStorage-a, ako postoje
    let recenzije = JSON.parse(localStorage.getItem('reviews')) || [];
    if (recenzije) {
      setReviews(recenzije);
    }
  }, []);

  // Funkcija koja se poziva pri podnošenju obrasca za dodavanje nove recenzije
  const handleFormSubmit = (recenzija, ocjena, datum) => {
    // Stvaranje nove recenzije i dodavanje u postojeću listu recenzija
    const newReview = [...reviews, { recenzija: recenzija, ocjena: ocjena, datum: datum, favorit: false }];
    // Pohrana recenzija u localStorage
    localStorage.setItem("reviews", JSON.stringify(newReview));
    setReviews(newReview);
  };

  // Funkcija koja se poziva prilikom klika na ikonu "Dodaj u favorite" ili "Ukloni iz favorita"
  const handleFavoriteClick = (index) => {
    // Kopiranje trenutne liste recenzija radi ažuriranja
    const updatedReviewsList = [...reviews];
    // Promjena statusa favorita za odabranu recenziju
    updatedReviewsList[index].favorit = !updatedReviewsList[index].favorit;
    // Ažuriranje stanja recenzija i pohrana u localStorage
    setReviews(updatedReviewsList);
    localStorage.setItem("reviews", JSON.stringify(updatedReviewsList));
  };

  // Funkcija za uklanjanje recenzije iz liste
  const handleRemoveReview = (index) => {
    // Kopiranje trenutne liste recenzija radi ažuriranja
    const updatedReviewsList = [...reviews];
    // Uklanjanje odabrane recenzije iz liste
    updatedReviewsList.splice(index, 1);
    // Ažuriranje stanja recenzija i pohrana u localStorage
    setReviews(updatedReviewsList);
    localStorage.setItem("reviews", JSON.stringify(updatedReviewsList));
  };

  // Renderiranje komponente
  return (
    <div className="App">
      <main>
        {/* Komponenta za unos nove recenzije */}
        <Form
          handleFormSubmit={handleFormSubmit} />
        {/* Komponenta za prikaz svih recenzija */}
        {reviews && reviews.length > 0 &&
          <SveRecenzije
            reviews={reviews}
            handleFavoriteClick={handleFavoriteClick}
            handleRemoveReview={handleRemoveReview}
          />}
      </main>
      {/* Footer */}
      <footer>Made by Christian</footer>
    </div>
  );
}

export default App;
