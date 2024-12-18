import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Chatbot from './pages/Chatbot';
import Payment from './pages/Payment';

const App = () => (
    <Router>
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/chatbot" element={<Chatbot />} />
                    <Route path="/payment" element={<Payment />} />
                </Routes>
            </main>
            <Footer />
        </div>
    </Router>
);

export default App;
