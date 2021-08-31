import React from 'react'
import './Card.css';

function Card({src, title, desc, price}) {
    return (
        <div className="card">
           <img src={src} alt="card"></img>
           
           <div className="card-info">
               <h3>{title}</h3>
               <p>{desc}</p>
               <h3>{price}</h3>
           </div>
            
        </div>
    )
}

export default Card
