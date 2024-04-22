import React from 'react';

function SveRecenzije({ reviews, handleFavoriteClick, handleRemoveReview }) {


    return (
        <div className='sveRecenzijeContainer'>
            {reviews.map((review, index) => (
                <div key={index} className='recenzijaContainer'>
                    <p className='pRecenzija'>{review.recenzija}</p>
                    <p className='pDatum'>{review.datum}</p>
                    <span className={review.favorit ? "spanDaFavorit" : "spanNeFavorit"} onClick={() => handleFavoriteClick(index)}>
                        {review.favorit ? "Ukloni iz favorita" : "Dodaj u favorite"}
                    </span>
                    <span className='spanObrisi' onClick={() => handleRemoveReview(index)} >Obriši</span>
                </div>
            ))}
        </div>
    );
}

export default SveRecenzije;
