import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './images/Courses.webp';
import tradingImage from './images/Trading.webp';
import blockchainFundamentalsImage from './images/Blockchain Fundamentals.webp';
import cryptoTradingImage from './images/Introduction to Cryptocurrency Trading.webp';
import blockchainPracticeImage from './images/Blockchain in Practice with XRPL.webp';

const courses = [
    {
        id: 1,
        title: "Blockchain Fundamentals",
        description: "Understand the basic concepts of blockchain, its history, and its importance.",
        duration: "5 weeks (3 hours per week)",
        prerequisites: "None. Perfect for beginners.",
        price: "$45.00 (10% XRP Discount)",
        originalPrice: "$50.00",
        image: blockchainFundamentalsImage,
    },
    {
        id: 2,
        title: "Blockchain in Practice with XRPL",
        description: "Learn to create wallets, execute transactions, and issue tokens using XRPL.",
        duration: "4 weeks (4 hours per week)",
        prerequisites: "Basic understanding of blockchain.",
        price: "$72.00 (10% XRP Discount)",
        originalPrice: "$80.00",
        image: blockchainPracticeImage,
    },
    {
        id: 3,
        title: "Introduction to Cryptocurrency Trading",
        description: "Understand trading concepts, analyze charts, and manage risks in crypto markets.",
        duration: "6 weeks (3 hours per week)",
        prerequisites: "Basic knowledge of financial markets and spreadsheets.",
        price: "$90.00 (10% XRP Discount)",
        originalPrice: "$100.00",
        image: cryptoTradingImage,
    },
    {
        id: 4,
        title: "Trading on Blockchain with XRPL",
        description: "Use XRPL for decentralized trading and develop trading strategies.",
        duration: "5 weeks (4 hours per week)",
        prerequisites: "Understanding of blockchain and trading.",
        price: "$108.00 (10% XRP Discount)",
        originalPrice: "$120.00",
        image: tradingImage,
    },
];

const Courses = () => {
    return (
        <section
            id="courses"
            className="relative bg-cover bg-center text-white text-center min-h-screen py-8"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-300">Our Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* Course Image */}
                            {course.image ? (
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="h-48 w-full object-cover"
                                />
                            ) : (
                                <div className="h-48 bg-gray-600 flex justify-center items-center">
                                    <span className="text-gray-400">Course Image Here</span>
                                </div>
                            )}

                            {/* Course Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-3 text-blue-300">
                                    {course.title}
                                </h3>
                                <p className="text-gray-300 mb-2">{course.description}</p>
                                <p className="text-sm text-gray-400 mb-2">
                                    <strong>Duration:</strong> {course.duration}
                                </p>
                                <p className="text-sm text-gray-400 mb-2">
                                    <strong>Prerequisites:</strong> {course.prerequisites}
                                </p>
                                {/* Price */}
                                <p className="text-lg font-semibold text-green-400 mb-1">
                                    Price: {course.price}
                                </p>
                                <p className="text-sm text-gray-400 mb-4">
                                    <span className="line-through">{course.originalPrice}</span> (Original Price)
                                </p>
                                <Link
                                    to="/chatbot"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg inline-block text-center"
                                >
                                    Enroll Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
