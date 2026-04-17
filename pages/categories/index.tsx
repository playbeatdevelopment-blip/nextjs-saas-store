import React from 'react';
import './Categories.module.css';

const categories = [
    { name: 'Category 1', description: 'Description for category 1' },
    { name: 'Category 2', description: 'Description for category 2' },
    { name: 'Category 3', description: 'Description for category 3' },
    { name: 'Category 4', description: 'Description for category 4' },
];

const Categories = () => {
    return (
        <div className="categories-container">
            <h1>Categories</h1>
            <div className="categories-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <h2>{category.name}</h2>
                        <p>{category.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;