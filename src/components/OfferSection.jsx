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
        <section>
            <Offer 
                title="Offer 1" 
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, itaque, eveniet iste, laborum corrupti veritatis aliquam excepturi dolores illo consectetur obcaecati similique labore eos voluptas quos necessitatibus eaque repellat molestiae." 
                imgUrl="https://picsum.photos/200" 
                ref={addToOfferRefs}
            />
            <Offer 
                title="Offer 2" 
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, itaque, eveniet iste, laborum corrupti veritatis aliquam excepturi dolores illo consectetur obcaecati similique labore eos voluptas quos necessitatibus eaque repellat molestiae." 
                imgUrl="https://picsum.photos/200" 
                ref={addToOfferRefs2}
            />
        </section>
    )
}

export default OfferSection;