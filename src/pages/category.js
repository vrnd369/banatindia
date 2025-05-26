import React from 'react';
import './category.css';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.avif';

const Category = () => {
  const categories = [
    { title: 'Child', image: pic1 },
    { title: 'Adult', image: pic2 },
    { title: 'Old', image: pic3 }
  ];

  return (
    <section className="category-carousel-section">
      <h2 className="category-carousel-title">Categories</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <img src={cat.image} alt={cat.title} className="category-image" />
            <div className="category-info">
              <h3>{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
