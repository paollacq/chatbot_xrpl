import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
        <h1 className="text-xl font-bold">Blockchain Courses</h1>
        <div className="flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/courses" className="hover:underline">Courses</Link>
            <Link to="/chatbot" className="hover:underline">Chatbot</Link>
            <Link to="/payment" className="hover:underline">Payment</Link>
        </div>
    </nav>
);

export default Navbar;
