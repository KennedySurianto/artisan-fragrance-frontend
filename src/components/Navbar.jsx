import React, { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import "./Navbar.css";

const Navbar = (props) => {
    const { currentPath, onLogout } = props;
    const [isSearchModalOpen, setSearchModalOpen] = useState(false);
    const [isCartModalOpen, setCartModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userRole, setUserRole] = useState(null);

    // Function to open/close search modal
    const toggleSearchModal = () => {
        setSearchModalOpen(!isSearchModalOpen);
    };

    // Function to open/close cart modal
    const toggleCartModal = () => {
        setCartModalOpen(!isCartModalOpen);
    };

    // Close modal when clicking outside of modal content
    const handleModalBackgroundClick = (e) => {
        if (e.target.classList.contains('modal')) {
            setSearchModalOpen(false);
            setCartModalOpen(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isAuth = () => {
        const token = localStorage.getItem('authToken');
        return !!token;
    }

    const isAdmin = () => {
        return userRole === 'admin';
    }

    useEffect(() => {
        // Fetch or decode the user role, e.g., from a token or API
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token); // Assuming jwtDecode() is available
            setUserRole(decoded.role);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        onLogout();
        window.location.href = '/login'; // or use react-router's history.push('/login');
    };
    
    return (
        <>
            <nav className="navbar">
                <a href="/" className="nav-logo">
                    <span>Artisan</span>
                    <span>Fragrance</span>
                </a>
                <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    &#9776; {/* Hamburger icon */}
                </div>
                <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a className={ currentPath === "/" && "link-active"} href="/">Home</a></li>
                        <li><a className={ currentPath === "/shop" && "link-active"} href="/shop">Shop</a></li>
                    {isAuth() ? (
                        isAdmin() ? (
                            <>
                                {/* Render admin-specific content here */}
                            </>
                        ) : (
                            <>
                                <li>
                                    <a className={currentPath === "/profile" ? "link-active" : ""} href="/profile">Profile</a>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        )
                    ) : (
                        <>
                            <li>
                                <a className={currentPath === "/login" ? "link-active" : ""} href="/login">Login</a>
                            </li>
                            <li>
                                <a className={currentPath === "/register" ? "link-active" : ""} href="/register">Register</a>
                            </li>
                        </>
                    )}

                    </ul>
                    <div className="nav-extra">
                        <button onClick={toggleSearchModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                            Search
                        </button>
                        <button onClick={toggleCartModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                            (0)
                        </button>
                    </div>
                </div>
            </nav>

            {/* Search Modal */}
            {isSearchModalOpen && (
                <div className={`modal ${isSearchModalOpen ? "show" : ""}`} onClick={handleModalBackgroundClick}>
                    <div className={`modal-content ${isSearchModalOpen ? "show" : ""}`}>
                        <div className="modal-heading">
                            <h2>Search</h2>
                            <span className="close" onClick={toggleSearchModal}>&times;</span>
                        </div>
                        <div className="input-search">
                            <input type="text" placeholder="Search..." />
                            <button onClick={toggleSearchModal}>Submit</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Cart Modal */}
            {isCartModalOpen && (
                <div className={`modal ${isCartModalOpen ? "show" : ""}`} onClick={handleModalBackgroundClick}>
                    <div className={`modal-content ${isCartModalOpen ? "show" : ""}`}>
                        <div className="modal-heading">
                            <h2>Cart</h2>
                            <span className="close" onClick={toggleCartModal}>&times;</span>
                        </div>
                        <p>Your cart is empty.</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
