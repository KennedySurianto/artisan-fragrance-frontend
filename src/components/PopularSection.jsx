import React, { useRef } from "react";
import "./PopularSection.css";
import ProductCard from "./ProductCard";
import { useRevealAnimation } from "../hooks/gsapAnimation";

const PopularSection = () => {
    const revealRef = useRef([]);
    const addToRevealRefs = (el) => {
        if (el && !revealRef.current.includes(el)) {
            revealRef.current.push(el);
        }
    };
    useRevealAnimation(revealRef);

    return (
        <section className="popular-section" ref={addToRevealRefs}>
            <h1>Popular Fragrances</h1>
            <div className="card-container">
                <ProductCard 
                imgUrl="https://i0.wp.com/www.lascento.co.za/wp-content/uploads/2023/07/o.Oj4DOpfF3VH.jpg?fit=1440%2C1440&ssl=1" 
                name="Mancera French Riviera"
                price="220"/>
                <ProductCard 
                imgUrl="https://i0.wp.com/www.lascento.co.za/wp-content/uploads/2023/07/o.Oj4DOpfF3VH.jpg?fit=1440%2C1440&ssl=1" 
                name="Mancera French Riviera"
                price="220"/>
                <ProductCard 
                imgUrl="https://i0.wp.com/www.lascento.co.za/wp-content/uploads/2023/07/o.Oj4DOpfF3VH.jpg?fit=1440%2C1440&ssl=1" 
                name="Mancera French Riviera"
                price="220"/>
            </div>
            <a href="">View All</a>
        </section>
    )
}

export default PopularSection;