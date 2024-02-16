import React, { forwardRef, useState } from 'react'
import esLocale from 'date-fns/locale/es';  
import DatePicker from 'react-datepicker';
import { useMediaQuery } from 'react-responsive';
import 'react-datepicker/dist/react-datepicker.css';
import useGetShifts from '@hooks/useGetShifts';
import useGetCells from '@hooks/useGetCells';
import { useGlobalState } from '@hooks/useGlobalState';
import { format } from 'date-fns';
import { Dropdown } from '@utils/index'

const DashboardHeader = () => {
    const { setShift, setCell, setDate, } = useGlobalState()
    const [dateValue, setdateValue] = useState(new Date());
    const isMobileScreen = useMediaQuery({ maxWidth: 768 });
    const { data: shifts } = useGetShifts()
    const { data: cells } = useGetCells()

    const styles = {
        cardStyles: 'flex items-center justify-center bg-white rounded-xl shadow-cardShadow ',
        buttonStyles: 'flex items-center justify-center bg-transparent  w-[200px] h-[50px]',
        fontStyles: 'font-roboto font-bold text-dark-charcoal text-sm sm:text-xl md:text-base lg:text-xl',
        marginStyles: 'px-0 sm:px-5 py-5 ',
        dateStyles: 'select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-button hover:border-blue-button hover:border'

    }

    function handleDateChange(date) {
        setdateValue(date);
        setDate(format(date, "MM/dd/yyyy"))
    }


    const CustomDateBtn = forwardRef(({ value, onClick }, ref) => (
        <button className={`w-full h-full bg-white rounded-xl datepicker-input text-center cursor-pointer ${styles.dateStyles}`} onClick={onClick} ref={ref} readOnly>
          {value}
        </button>
    ));

  return (
    <div className='relative flex justify-center w-full h-auto mt-[30px]' >

        <div className='w-1/3 h-full flex justify-start' >
            <div className={`${styles.fontStyles} ${styles.buttonStyles} `}>
                <Dropdown options={cells} isFilterEnable={true} changeGlobalState={setCell} />
            </div>
        </div>
        <div className='w-1/3 h-full flex justify-center mx-2 md:mx-0' >
            <div className={` ${styles.fontStyles} w-[200px] h-[50px]`}>
                <Dropdown options={shifts} isFilterEnable={false} changeGlobalState={setShift} />
            </div>
        </div>
        <div className='w-1/3 h-full flex justify-end' >
            <div className={`datepicker-container ${styles.cardStyles} ${styles.fontStyles} p-0 w-[100%] xl:w-[80%] h-[50px]`}>
                <DatePicker
                    selected={(dateValue)}
                    onChange={handleDateChange}
                    dateFormat={isMobileScreen ? 'dd MMMM' :  'EEEE dd MMMM yyyy'}
                    locale={esLocale}
                    maxDate={new Date()}
                    customInput={<CustomDateBtn />}
                />
            </div>
        </div>
        
    </div>
  )
};

export default DashboardHeader