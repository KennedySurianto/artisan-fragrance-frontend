import React, { useRef, useState, useEffect } from "react";
import "./PopularSection.css";
import ProductCard from "./ProductCard";
import { useRevealAnimation } from "../hooks/gsapAnimation";
import axios from "axios";

const PopularSection = () => {
    const [fragrances, setFragrances] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");

    const revealRef = useRef([]);
    const addToRevealRefs = (el) => {
        if (el && !revealRef.current.includes(el)) {
            revealRef.current.push(el);
        }
    };
    useRevealAnimation(revealRef);

    useEffect(() => {
        const fetchTopFragrances = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/fragrances/3'); // Fetch top 3 fragrances
                setFragrances(response.data); // Set the fetched top fragrances
            } catch (err) {
                // setError('Failed to fetch fragrances'); // Set error message
                console.error(err);
            } 
            // finally {
                // setLoading(false); // Set loading to false when done
            // }
        };

        fetchTopFragrances(); // Call the fetch function
    }, []); // Empty dependency array means it runs once when the component mounts

    // if (loading) return <div>Loading...</div>; // Show loading message
    // if (error) return <div>{error}</div>; // Show error message if any

    return (
        <section className="popular-section" ref={addToRevealRefs}>
            <h1>Popular Fragrances</h1>
            <div className="card-container">
                {fragrances.map(fragrance => (
                    <ProductCard 
                    key={fragrance._id}
                    imgUrl="https://i0.wp.com/www.lascento.co.za/wp-content/uploads/2023/07/o.Oj4DOpfF3VH.jpg?fit=1440%2C1440&ssl=1" 
                    name={fragrance.name}
                    price={fragrance.price}/>
                ))}
            </div>
            <a href="/shop">View All</a>
        </section>
    )
}

export default PopularSection;