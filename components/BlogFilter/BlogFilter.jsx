'use client';

import React, { useState } from 'react'
import './BlogFilter.scss';

const BlogFilter = () => {

    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');

    const industries = ['Jewelry', 'Automotive', 'Healthcare'];
    const products = ['Rings', 'Earrings', 'Necklaces'];
    const regions = ['North America', 'Europe', 'Asia'];
    const subjects = ['Design', 'Manufacturing', 'Retail'];

    return (
        <div className="filter-bar">
            <span className="filter-bar__label">Filter By:</span>

            <select
                className="filter-bar__select"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
            >
                {industries.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>

            <select
                className="filter-bar__select"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
            >
                {products.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>

            <select
                className="filter-bar__select"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
            >
                {regions.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>

            <select
                className="filter-bar__select"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
            >
                {subjects.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default BlogFilter
