import React from 'react';

function Card({ item }) {
  return (
    <div className='card text-center col-3 mx-2'>
      <div className='container p-3 '>
        {item?.image === '' ? (
          <div className='container bg-danger rounded-5 col-7 p-4 '>
            {item?.name.charAt(0).toUpperCase()}
          </div>
        ) : (
          <img className='card-img-top' src={item?.image} alt='' />
        )}
      </div>
      <div className='card-body'>
        <h4 className='card-title'>{item?.name}</h4>
        <p className='card-text'>{item?.description}</p>
      </div>
    </div>
  );
}

export default Card;
