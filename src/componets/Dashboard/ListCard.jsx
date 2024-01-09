import React from 'react'

const ListCard = ( { machines } ) => {

    const getColorStatus = (isActive) => {
        if(isActive) return 'text-green-success';
        return 'text-red-alert';
    }

    const getStatusDef = (isActive) => {
        const status ={
            "true" : "Active",
            "false": "Inactive"
        }
        return status[isActive]
    }


    return (
        <div className='font-roboto lg:max-w-[600px] lg:max-h-[350px] h-[350px] card__container block w-full pl-8 py-5 max-w-full max-h-80 2xl:max-h-96 bg-white rounded-2xl shadow-cardShadow '>
            <h3 className='font-roboto font-bold w-full text-2xl md:text-3xl xl:text-4xl text-grey-text ' >Maquinas</h3>
            <ul className='h-[80%] flex flex-col overflow-y-auto pr-5 sm:pr-[10%] mt-3' >
                {
                    machines.map((machine,index) => {
                        return (
                            <li key={index} className='relative flex justify-between items-center flex-wrap h-auto w-full my-5'>
                                <p>{machine.name}</p>
                                <p className={`${getColorStatus(machine.isActive)} `} >{getStatusDef(machine.isActive)}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default ListCard