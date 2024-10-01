import React, { useRef } from "react";
import Offer from "./Offer.jsx";
import "./OfferSection.css";
import { useSlideRightAnimation, useSlideLeftAnimation } from "../hooks/gsapAnimation.jsx";

const OfferSection = () => {
    const offerRefs = useRef([]);
    const addToOfferRefs = (el) => {
        if (el && !offerRefs.current.includes(el)) {
            offerRefs.current.push(el);
        }
    }
    useSlideRightAnimation(offerRefs);

    const offerRefs2 = useRef([]);
    const addToOfferRefs2 = (el) => {
        if (el && !offerRefs2.current.includes(el)) {
            offerRefs2.current.push(el);
        }
    }
    useSlideLeftAnimation(offerRefs2);

    return (
        <section className="offer-section">
            <Offer 
                title="The Essence of Timeless Elegance" 
                content="At Artisan Fragrance, we believe that fragrance is more than just a scent—it's a reflection of who you are. Founded on a passion for sophistication and self-expression, we’ve curated a collection of exclusive fragrances that cater to a wide range of preferences, from sweet and subtle to bold and luxurious." 
                imgUrl="https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                linkUrl="/"
                linkText="Learn more"
                ref={addToOfferRefs}
            />
            <Offer 
                title="Sweet Fragrances That Last All Day!" 
                content="Searching for a signature scent that’s both sweet and powerful? Look no further! Our expertly crafted perfumes are designed to captivate those around you, lasting up to 12 hours with incredible sillage that ensures you’ll never go unnoticed. Whether you're facing the heat or enjoying a cool night out, our fragrances adapt to your environment." 
                imgUrl="https://images.pexels.com/photos/7405394/pexels-photo-7405394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                linkUrl="/"
                linkText="Shop now"
                ref={addToOfferRefs2}
            />
        </section>
    )
}

export default OfferSection;