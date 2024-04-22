import React from 'react';

// Funkcionalna komponenta za prikaz svih recenzija
function SveRecenzije({ reviews, handleFavoriteClick, handleRemoveReview }) {
    return (
        <div className='sveRecenzijeContainer'>
            {reviews.map((review, index) => (
                <div key={index} className='recenzijaContainer'>
                    {/* Prikaz recenzije */}
                    <p className='pRecenzija'>{review.recenzija}</p>
                    {/* Prikaz datuma */}
                    <p className='pDatum'>{review.datum}</p>
                    {/* Prikaz ikone za dodavanje/uklanjanje iz favorita */}
                    <span className={review.favorit ? "spanDaFavorit" : "spanNeFavorit"} onClick={() => handleFavoriteClick(index)}>
                        {review.favorit ? "Ukloni iz favorita" : "Dodaj u favorite"}
                    </span>
                    {/* Prikaz ikone za brisanje recenzije */}
                    <span className='spanObrisi' onClick={() => handleRemoveReview(index)} >Obriši</span>
                </div>
            ))}
        </div>
    );
}

export default SveRecenzije;
