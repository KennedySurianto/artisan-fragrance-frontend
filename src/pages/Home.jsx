// src/pages/Homepage.js
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
    const revealRef = useRef([]);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            { x: -300, autoAlpha: 0 }, // Start 200px to the right and invisible
            { x: 0, autoAlpha: 1, duration: 1.2, ease: "power2.out" } // Animate to the left and fade in
        );
    }, []);

    useEffect(() => {
      // Loop over all reveal elements and create the GSAP ScrollTrigger animation
        revealRef.current.forEach((elem) => {
            ScrollTrigger.create({
            trigger: elem,
            start: "top 80%",
            end: "bottom 20%",
            markers: false,
            onEnter: () => {
                gsap.fromTo(
                elem,
                { y: 100, autoAlpha: 0 },
                {
                    duration: 1.5,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto",
                }
                );
            },
            onLeave: () => {
                gsap.fromTo(
                elem,
                { autoAlpha: 1 },
                { autoAlpha: 0, overwrite: "auto" }
                );
            },
            onEnterBack: () => {
                gsap.fromTo(
                elem,
                { y: -100, autoAlpha: 0 },
                {
                    duration: 1.5,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto",
                }
                );
            },
            onLeaveBack: () => {
                gsap.fromTo(
                elem,
                { autoAlpha: 1 },
                { autoAlpha: 0, overwrite: "auto" }
                );
            },
            });
        });
    }, []);

    return (
        <div className='container'>
            <div className='heading'>
                <div className='sub-container'>
                    <div className='sub-heading revealUp' ref={(el) => (revealRef.current[0] = el)}>
                        <h1 >Artisan</h1>
                        <img className='image' src='https://images.pexels.com/photos/7453323/pexels-photo-7453323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </div>
                    <div className='sub-heading revealUp' ref={(el) => (revealRef.current[1] = el)}>
                        <img className='image' src='https://images.pexels.com/photos/21926655/pexels-photo-21926655/free-photo-of-bottle-of-coco-noir-perfume.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                        <h1>Fragrance</h1>
                    </div>
                    <p className='reveal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit officiis necessitatibus explicabo facilis odit accusamus nobis ullam cumque ab. Aut nulla architecto quam corrupti voluptate nam nihil suscipit eaque soluta.</p>
                </div>
            </div>
            <img 
                className='big-image' 
                ref={imageRef}
                src='https://images.pexels.com/photos/7487834/pexels-photo-7487834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                />
        </div>
    );
};

export default Homepage;
