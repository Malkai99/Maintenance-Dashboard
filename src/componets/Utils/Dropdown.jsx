import React, { useState, useRef, useEffect, useCallback } from 'react';
import Arrow from '../Utils/Icons/Arrow'

const Dropdown = ({ options, isFilterEnable }) => {
    const [selectedOption, setSelectedOption] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownButtonRef = useRef(null);
    const dropdownMenuRef = useRef(null);
    const searchInputRef = useRef(null);
    
    const styles = {
        fontStyles: 'font-roboto font-bold text-dark-charcoal text-sm sm:text-xl',
        buttonStyles: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 hover:border-blue-500'
    }

    const getDefaultOption = () => {
        if (options) {
            const defaultOption = options.find((option) => option.isSelected);
            setSelectedOption(defaultOption || null);
          }
    }

    useEffect(() => {
        if (options && Array.isArray(options))
            getDefaultOption();
    }, [options]);

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

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChanged = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        resetScrollPosition();
        clearSearchTerm();
        handleButtonClick();
    };

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

    const getOptionsFilter = useCallback(
        () => {
            if(!Array.isArray(options)) return []
            if(isFilterEnable ){
                return options.filter((option) =>
                    option.text.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }
            return options
            
        },
        [searchTerm, isFilterEnable],
    );
    
    
    return (
        <div className={`relative group w-[100%] h-[100%] ${styles.fontStyles}`}>
            <button
                ref={dropdownButtonRef}
                onClick={handleButtonClick}
                readOnly
                className={`relative h-full flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-xl shadow-cardShadow hover:border-blue-button ${styles.buttonStyles}`}
            >
                <span className={`mr-2 ${styles.fontStyles} `}>{selectedOption.text}</span>
                <Arrow className='absolute right-[10%]' />
            </button>
            <div
                ref={dropdownMenuRef}
                className={`${
                isOpen ? '' : 'hidden'
                } absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-10 w-full max-h-[200px] overflow-y-auto ${styles.fontStyles} `}
            >
                {
                    isFilterEnable && 
                    <input
                        ref={searchInputRef}
                        className={`block w-full px-4 py-2 text-gray-800 font-normal focus:outline-none ${isFilterEnable ? 'active' : 'hidden'}`}
                        type="text"
                        placeholder="Buscar..."
                        autoComplete="on"
                        onChange={handleInputChanged}
                    />
                }
                {
                    options && getOptionsFilter().map((option, index) => (
                        <option
                            key={index}
                            value={option.value}
                            onClick={() => handleOptionClick(option)}
                            className={`font-normal block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md`}
                        >
                            {option.text}
                        </option>
                    ))
                }
                
                
            </div>
        </div>
    );
};

export default Dropdown;
