import React, { useState } from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img1_1 from '../assets/img1.1.png';
import img2_1 from '../assets/img2.1.png';
import img3_1 from '../assets/img3.1.png';
import Navbar from './Navbar';
import logo from '../assets/logo.png';


const HomePage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      id: 1,
      defaultImg: img1,
      hoverImg: img1_1,
    },
    {
      id: 2,
      defaultImg: img2,
      hoverImg: img2_1,
    },
    {
      id: 3,
      defaultImg: img3,
      hoverImg: img3_1,
    },
  ];

  return (
    <div className="page-wrapper home-wrapper">
      <Navbar />

      {/* === WHY HIREVERSE SECTION === */}
      <section className="hero-section text-center px-4 py-10">
        {/* Logo centered above the title */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="HIREVERSE Logo"
            className="w-60 h-40 object-contain"
          />
        </div>

        <h1 className="home-title text-4xl font-bold mb-4">
          Why <span className="highlight text-[#00d9ff]">HIREVERSE</span>?
        </h1>

        <p className="home-text text-lg max-w-2xl mx-auto text-gray-700">
          According to surveys, <strong>63%</strong> of young professionals
          don't do mock interviews. With{' '}
          <span className="highlight text-[#00d9ff] font-semibold">HIREVERSE</span>, gain the practice and
          confidence you need to stand out.
        </p>
      </section>

      {/* === WHAT WE OFFER SECTION === */}
      <section className="offer-section">
        <h2 className="offer-title">What We Offer</h2>
        <div className="offer-cards">
          {services.map((service) => (
            <div
              key={service.id}
              className={`offer-card ${
                activeCard && activeCard !== service.id ? 'hidden' : ''
              }`}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-image-container">
                <img
                  src={
                    activeCard === service.id
                      ? service.hoverImg
                      : service.defaultImg
                  }
                  alt={service.title}
                  className="card-img"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
