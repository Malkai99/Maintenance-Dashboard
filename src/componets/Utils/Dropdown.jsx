import React, { useState, useRef, useEffect } from 'react';
import Arrow from '../Utils/Icons/Arrow'

const Dropdown = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownButtonRef = useRef(null);
    const dropdownMenuRef = useRef(null);
    const searchInputRef = useRef(null);
    
    const styles = {
        fontStyles: 'font-roboto font-bold text-dark-charcoal text-sm sm:text-xl'
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (dropdownButtonRef.current && dropdownMenuRef.current &&
            !dropdownButtonRef.current.contains(e.target) &&
            !dropdownMenuRef.current.contains(e.target)) 
            {
                clearSearchTerm();
                setIsOpen(false);
                resetScrollPosition();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        resetScrollPosition();
        clearSearchTerm();
        toggleDropdown();
    };

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const resetScrollPosition = () => {
        if (dropdownMenuRef.current) {
            dropdownMenuRef.current.scrollTop = 0;
        }
    };

    const clearSearchTerm = () => {
        setSearchTerm('');
        if (searchInputRef.current) {
          searchInputRef.current.value = '';
        }
      };


    return (
        <div className={`relative group w-[100%] h-[100%] ${styles.fontStyles}`}>
            <button
                ref={dropdownButtonRef}
                onClick={toggleDropdown}
                className="relative h-full flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-xl shadow-cardShadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            >
                <span className={`mr-2 ${styles.fontStyles} `}>{selectedOption}</span>
                <Arrow className='absolute right-[10%]' />
            </button>
            <div
                ref={dropdownMenuRef}
                className={`${
                isOpen ? '' : 'hidden'
                } absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-10 max-h-[200px] overflow-y-auto max-h-48 ${styles.fontStyles} `}
            >
                <input
                ref={searchInputRef}
                className="block w-full px-4 py-2 text-gray-800 font-normal focus:outline-none"
                type="text"
                placeholder="Buscar..."
                autoComplete="on"
                onChange={handleInputChange}
                />
                
                {filteredOptions.map((option, index) => (
                <div
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`font-normal block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md`}
                >
                    {option}
                </div>
                ))}
                
                
            </div>
        </div>
    );
};

export default Dropdown;
