import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

const Shop = () => {
    const [fragrances, setFragrances] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTopFragrances = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/fragrances');                setFragrances(response.data);
            } catch (err) {
                setError("Failed to fetch fragrances");
                console.error("Failed to fetch fragrances: ", err);
            } 
            finally {
                setLoading(false); // Set loading to false when done
            }
        };

        fetchTopFragrances(); // Call the fetch function
    }, []); // Empty dependency array means it runs once when the component mounts

    
    if (loading) return <div>Loading...</div>; // Show loading message
    if (error) return <div>{error}</div>; // Show error message if any

    return (
        <div className="shop-container">
            <form action="">
                <input type="text" name="search" id="" />
                <button type="submit">Search</button>
            </form>
            <div className="product-container">
                {fragrances.map(fragrance => {
                    return (
                        <ProductCard 
                        key={fragrance._id}
                        name={fragrance.name}
                        price={fragrance.price}
                        imgUrl="https://i0.wp.com/www.lascento.co.za/wp-content/uploads/2023/07/o.Oj4DOpfF3VH.jpg?fit=1440%2C1440&ssl=1"
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Shop;