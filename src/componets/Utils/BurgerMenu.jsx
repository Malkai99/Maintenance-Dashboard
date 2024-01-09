import React from 'react'

export const BurgerMenu = () => {
  return (
    <div className='bugermenu-container'>
        <button className="navbar-burger flex items-center text-blue-600 p-3">
            <svg className="block h-6 w-6 fill-white stroke-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </button>
    </div>
  )
}
