import { useState } from 'react'
import Carousel from '../Utils/Carousel'

const ListCard = ( { machines } ) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);
    const styles = {
        buttonStyles: 'focus:outline-0  text-blue-button border-blue-button hover:border-blue-button border bg-transparent border-opacity-40 hover:border-opacity-100 hover:bg-blue-button hover:bg-opacity-[.05]',
        transitionStyle: 'transition-bg button-ease duration-200'
    };

    const getColorStatus = (isActive) => {
        if(isActive) return 'text-green-success';
        return 'text-red-alert';
    };

    const getStatusDef = (isActive) => {
        const status ={
            "true" : "Active",
            "false": "Inactive"
        }
        return status[isActive]
    };

    const handleMachineClick = (machine) => {
        setModalOpen(true);
        console.log(machine.requests)
        if(machine.requests.length == 0 ){
            setSelectedMachine(machine.requests[0]);
        }else{
            setSelectedMachine(machine.requests);
        }
    };
    
    const closeModal = () => {
        setModalOpen(false);
        setSelectedMachine(null);
    };

    const getMachines = () => {
        return (selectedMachine.map( (request) => {
            return (
                <>
                    <p>Folio: {request.folio}</p>
                    <p>Status: {request.status}</p>
                    <p>Departamento: {request.department}</p>
                    <p>Tiempo transcurrido: {request.elapsedTime}</p>
                </>
            )
        }))
    } 

    return (
        <div className='font-roboto 2xl:max--[100%] lg:max-w-[100%] lg:max-h-[350px] h-[350px] card__container block w-full pl-8 py-5 max-w-full max-h-80 2xl:max-h-96 bg-white rounded-2xl shadow-cardShadow '>
            <h3 className='font-roboto font-bold w-full text-2xl md:text-3xl xl:text-4xl text-grey-text ' >Maquinas</h3>
            <ul className='h-[80%] flex flex-col overflow-y-auto pr-5 sm:pr-[10%] mt-3' >
                {
                    machines.map((machine,index) => {
                        return (
                            <li key={index} className='relative flex justify-between items-center flex-wrap h-auto w-full my-5'>
                                <p>{machine.name}</p>
                                <p onClick={() => handleMachineClick(machine)} className={`${!machine.isActive ? 'cursor-pointer' : 'cursor-default' } select-none ${getColorStatus(machine.isActive)} `} >{getStatusDef(machine.isActive)}</p>
                            </li>
                        );
                    })
                }
            </ul>
            {modalOpen && selectedMachine && (
                <div className='fixed inset-0 flex items-center justify-center z-10'>
                <div className='absolute inset-0 bg-black  opacity-50' onClick={closeModal}></div>
                <div className='z-20 bg-white p-8 w-[90%] max-w-[500px] rounded-lg shadow-cardShadow flex flex-col'>
                    <h3 className='text-xl font-semibold mb-4'>Información de la máquina</h3>
                    <Carousel>
                        {getMachines()}
                    </Carousel>
                    <button className={`mt-8 ${styles.buttonStyles} ${styles.transitionStyle}`} onClick={closeModal}>
                        Cerrar
                    </button>
                </div>
                </div>
            )}
        </div>
    )
}

export default ListCard     