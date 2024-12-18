import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './images/design.webp';

const Home = () => (
    <section
        id="home"
        className="relative bg-cover bg-center text-white text-center min-h-screen"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 px-4 md:px-6 max-w-3xl mx-auto flex flex-col items-center justify-center h-[85vh]">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight break-words">
                Unlock the Power of <span className="block text-blue-400">Blockchain Technology</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
                Enroll in cutting-edge courses to master blockchain fundamentals, XRPL tools, and cryptocurrency trading.
                Build your skills and lead the decentralized future.
            </p>

            {/* Buttons */}
            <div className="flex justify-center space-x-6 mb-12">
                <Link
                    to="/courses"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                    Explore Courses
                </Link>
                <Link
                    to="/chatbot"
                    className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                    Contact Us
                </Link>
            </div>
        </div>

        {/* Promotional Section */}
        <div className="relative z-10 bg-gray-900 bg-opacity-75 py-12 px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">
                Why Choose Our Courses?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
                Our courses are designed with a hands-on approach, enabling you to learn by doing. Whether you're new to blockchain or looking to enhance your trading skills, our expert-led content ensures you stay ahead in the decentralized economy.
            </p>
            <ul className="list-none text-gray-300 space-y-4 text-left max-w-2xl mx-auto">
                <li>✔ Practical, project-based learning</li>
                <li>✔ Expert guidance from industry professionals</li>
                <li>✔ Flexible schedules to fit your lifestyle</li>
                <li>✔ Access to real-world tools like XRPL</li>
                <li>✔ Lifetime access to course materials</li>
            </ul>
            <div className="mt-8">
                <Link
                    to="/courses"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                    Start Your Journey Today
                </Link>
            </div>
        </div>
    </section>
);

export default Home;
