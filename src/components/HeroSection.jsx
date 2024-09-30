// src/pages/Homepage.js
import React, { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRevealAnimation, useSlideRightAnimation } from "../hooks/gsapAnimation.jsx";
import './HeroSection.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const revealRef = useRef([]);
    const addToRevealRefs = (el) => {
        if (el && !revealRef.current.includes(el)) {
            revealRef.current.push(el);
        }
    }
    useRevealAnimation(revealRef);
    
    const imageRef = useRef([]);
    const addToImageRefs = (el) => {
        if (el && !imageRef.current.includes(el)) {
            imageRef.current.push(el);
        }
    }
    useSlideRightAnimation(imageRef);
    
    return (
        <div className='container'>
            <div className='heading'>
                <div className='sub-container'>
                    <div className='sub-heading revealUp' ref={addToRevealRefs}>
                        <h1>Artisan</h1>
                        <img className='image' src='https://images.pexels.com/photos/7453323/pexels-photo-7453323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='perfume' />
                    </div>
                    <div className='sub-heading revealUp' ref={addToRevealRefs}>
                        <img className='image' src='https://images.pexels.com/photos/21926655/pexels-photo-21926655/free-photo-of-bottle-of-coco-noir-perfume.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='perfume' />
                        <h1>Fragrance</h1>
                    </div>
                    <p className='reveal'>Experience <b>perfumes</b> that transform your essence and leave a lasting impression, curated for those who appreciate the <b>finer things in life</b>.</p>
                </div>
            </div>
            <img 
                className='big-image' 
                ref={addToImageRefs}
                src='https://images.pexels.com/photos/7487834/pexels-photo-7487834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='perfume'
                />
        </div>
    );
};

export default HeroSection;
