import React, { useState } from 'react'
import './SearchModel.scss';
import { Search, X } from 'lucide-react';

const SearchModel = ({ isOpen, onClose }) => {

    const renderContent = () => {
        const [searchQuery, setSearchQuery] = useState('');

        const handleSearch = (e) => {
            e.preventDefault();
            onClose();
            // console.log('Searching for:', searchQuery);
        };

        const handleInputChange = (e) => {
            setSearchQuery(e.target.value);
        };

        if (!isOpen) return null;

        return (
            <div className="absolute w-[105rem] top-32 bg-[#f7f7f8] shadow-2xl py-3 px-5 flex justify-between rounded-md animate-in z-[100]"
                onMouseLeave={onClose}
            >
                <div className="search-overlay">
                    <div className="search-overlay__content">
                        <div className="search-overlay__header">
                            <h2 className="search-overlay__title">Search optigoapps.com</h2>
                            <button
                                className="search-overlay__close"
                                onClick={onClose}
                                aria-label="Close search"
                            >
                                <X className="search-overlay__close-icon" />
                            </button>
                        </div>

                        <form className="search-overlay__form" onSubmit={handleSearch}>
                            <div className="search-overlay__input-wrapper">
                                <Search className="search-overlay__search-icon" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={handleInputChange}
                                    className="search-overlay__input"
                                    autoFocus
                                />
                            </div>
                            <button
                                type="submit"
                                className="search-overlay__submit-btn"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        renderContent()
    )
}

export default SearchModel;
