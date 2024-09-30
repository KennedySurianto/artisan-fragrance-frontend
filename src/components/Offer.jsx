import React, { forwardRef } from "react";
import "./Offer.css";

const Offer = forwardRef(({title, content, imgUrl}, ref) => {
    return (
        <div className="offer-container" ref={ref}>
            <div className="offer-text-container">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            <div className="offer-img-container">
                <img src={imgUrl} alt="random" />
            </div>
        </div>
    )
});

export default Offer;