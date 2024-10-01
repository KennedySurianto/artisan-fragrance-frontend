// useRevealAnimation.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const useRevealAnimation = (revealRefs) => {
    useEffect(() => {
    revealRefs.current.forEach((elem) => {
        if (elem) {
            gsap.set(elem, { y: 100, autoAlpha: 0 });

            ScrollTrigger.create({
            trigger: elem,
            start: "top 90%",
            end: "bottom 10%",
            markers: false, // Set to true for debugging
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
                gsap.to(elem, { autoAlpha: 0, overwrite: "auto" });
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
                gsap.to(elem, { autoAlpha: 0, overwrite: "auto" });
            },
            });
        }
    });

    // Cleanup on unmount
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [revealRefs]); // Add revealRefs as a dependency
};

const useSlideRightAnimation = (slideRightRefs) => {
    useEffect(() => {
        // Set the initial state to autoAlpha: 0 and x: -300 before scroll animation
        slideRightRefs.current.forEach((elem) => {
            if (elem) {
                gsap.set(elem, { x: -300, autoAlpha: 0 });

                ScrollTrigger.create({
                    trigger: elem,
                    start: "top 80%",
                    end: "bottom 20%",
                    markers: false,
                    onEnter: () => {
                        gsap.fromTo(
                            elem, 
                            { x: -300, autoAlpha: 0 },
                            { x: 0, autoAlpha: 1, duration: 1.2, ease: "power2.out" }
                        );
                    },
                    onLeave: () => {
                        gsap.to(elem, { autoAlpha: 0, overwrite: "auto" });
                    },
                    onEnterBack: () => {
                        gsap.fromTo(
                            elem,
                            { x: -300, autoAlpha: 0 },
                            { x: 0, autoAlpha: 1, duration: 1.2, ease: "power2.out" }
                        );
                    },
                    onLeaveBack: () => {
                        gsap.to(elem, { autoAlpha: 0, overwrite: "auto" });
                    },
                });
            }   
        });

        return () => {
            // Cleanup the ScrollTriggers
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [slideRightRefs]); // Dependencies array
};

const useSlideLeftAnimation = (slideLeftRefs) => {
    useEffect(() => {
        // Set the initial state to autoAlpha: 0 and x: 300 before scroll animation
        slideLeftRefs.current.forEach((elem) => {
            if (elem) {
                gsap.set(elem, { x: 300, autoAlpha: 0 });

                ScrollTrigger.create({
                    trigger: elem,
                    start: "top 80%",
                    end: "bottom 20%",
                    markers: false,
                    onEnter: () => {
                        gsap.fromTo(
                            elem, 
                            { x: 300, autoAlpha: 0 },
                            { x: 0, autoAlpha: 1, duration: 1.2, ease: "power2.out" }
                        );
                    },
                    onLeave: () => {
                        gsap.to(elem, { autoAlpha: 0, overwrite: "auto" });
                    },
                    onEnterBack: () => {
                        gsap.fromTo(
                            elem,
                            { x: 300, autoAlpha: 0 },
                            { x: 0, autoAlpha: 1, duration: 1.2, ease: "power2.out" }
                        );
                    },
                    onLeaveBack: () => {
                        gsap.to(elem, { autoAlpha: 0, overwrite: "auto" });
                    },
                });
            }   
        });

        return () => {
            // Cleanup the ScrollTriggers
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [slideLeftRefs]); // Dependencies array
};


export { useRevealAnimation, useSlideRightAnimation, useSlideLeftAnimation };
