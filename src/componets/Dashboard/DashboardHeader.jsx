import React, { useState } from 'react'
import { format, getHours  } from 'date-fns';
import esLocale from 'date-fns/locale/es';  
import Dropdown from '../Utils/Dropdown';
import DatePicker from 'react-datepicker';
import { useMediaQuery } from 'react-responsive';
import 'react-datepicker/dist/react-datepicker.css';



const DashboardHeader = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const isMobileScreen = useMediaQuery({ maxWidth: 720 });
    const styles = {
        cardStyles: 'flex items-center justify-center bg-white rounded-xl shadow-cardShadow px-0 sm:px-5 py-5 ',
        buttonStyles: 'flex items-center justify-center bg-transparent  w-[200px] h-[50px]',
        fontStyles: 'font-roboto font-bold text-dark-charcoal text-sm sm:text-xl'
    }

    function getShift() {
        const currentTime = new Date();
        const hour = getHours(currentTime);
        
        if (hour >= 7 && hour < 15) {
            return 'Turno 1';
        } else if (hour >= 15 && hour < 23) {
            return 'Turno 2';
        } else {
            return 'Turno 3';
        }
          
    }

    // function capitalizeFirstLetter(inputString) {
    //     return inputString
    //       .split(' ')
    //       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    //       .join(' ');
    // }

    // function getCurrentFormattedDateTime(version) {
    //     const currentDate = new Date();
    //     let formattedDateTime = format(currentDate, "do MMMM",{ locale: esLocale });
        
    //     if(version == 'large'){
    //         formattedDateTime = format(currentDate, "EEEE do, MMMM yyyy",{ locale: esLocale });
    //         // formattedDateTime = format(currentDate, "HH:mm EEEE do, MMMM yyyy",{ locale: esLocale });
    //     }
    //     formattedDateTime = capitalizeFirstLetter(formattedDateTime);
    //     return formattedDateTime;
    // }

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    const options = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Morado', 'Naranja', 'Rosa', 'Negro', 'Blanco', 'Gris'];

  return (
    <div className='relative flex justify-center w-full h-auto mt-[30px]' >

        <div className='w-1/3 h-full flex justify-start' >
            <div className={`${styles.fontStyles} ${styles.buttonStyles} `}>
                <Dropdown options={options} />
            </div>
        </div>
        <div className='w-1/3 h-full flex justify-center mx-2 md:mx-0' >
            <div className={`${styles.cardStyles} ${styles.fontStyles} w-[200px] h-[50px]`}>
                <p>{getShift()}</p>
            </div>
        </div>
        <div className='w-1/3 h-full flex justify-end' >
            <div className={`${styles.cardStyles} ${styles.fontStyles} w-[100%] xl:w-[80%] h-[50px]`}>
                <DatePicker
                    selected={(selectedDate)}
                    onChange={handleDateChange}
                    dateFormat={isMobileScreen ? 'Do MMMM' :  'EEEE Do MMMM yyyy'}
                    locale={esLocale}
                    className='datepicker-input text-center w'
                />
                {/* <p className='hidden lg:block' >{getCurrentFormattedDateTime('large')}</p>
                <p className='block lg:hidden' >{getCurrentFormattedDateTime('short')}</p> */}
            </div>
        </div>
        
    </div>
  )
};

export default DashboardHeader