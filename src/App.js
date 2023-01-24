import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

export default function App() {
  return (
    <>
      <nav>
        <h2 className="subtitle"> Math magician </h2>
        <ul>
          <li className="navLink"><Link to="./">home</Link></li>
          <li className="navLink"><Link to="/Calculator">Calculator</Link></li>
          <li className="navLink"><Link to="/Quote"> Quote </Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </>
  );
}
