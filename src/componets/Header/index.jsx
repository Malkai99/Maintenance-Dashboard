import React from 'react'
import { BurgerMenu } from '../Utils/BurgerMenu'

const Header = () => {

  const styles = {
    title:`text-white font-bold hidden sm:block md:text-md lg:text-xl`,
  }

  function getAcronym(name) {
    const regular_ex=/\b(\w)/g;
    let matches = name.match(regular_ex);
    let acronym = matches.join('');
    return <span class="font-medium text-gray-600 dark:text-gray-300">{acronym}</span>
  }

  // GET Avatar img 
  // function getAvatar(imgUrl) {
  //   return <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={imgUrl} alt="Bordered avatar" />
  // }

  return (
    <div className=" flex items-center justify-between mx-auto h-14 	
    bg-blue-aqua px-5">
      <BurgerMenu />
      <h2 className={`${styles.title}`} >Maintenance Equipment Dashboard</h2>
      <div className="userLogIn flex items-center space-x-2 ">
        <p className="text-white font-bold">Admin</p>
        <div className="user__image justify-end items-center">            
          <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            {getAcronym('Admin')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header