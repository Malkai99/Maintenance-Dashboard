import { useState } from 'react'

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
        setSelectedMachine(machine.requests[0]);
    };
    
    const closeModal = () => {
        setModalOpen(false);
        setSelectedMachine(null);
    };

    return (
        <div className='font-roboto 2xl:max--[100%] lg:max-w-[600px] lg:max-h-[350px] h-[350px] card__container block w-full pl-8 py-5 max-w-full max-h-80 2xl:max-h-96 bg-white rounded-2xl shadow-cardShadow '>
            <h3 className='font-roboto font-bold w-full text-2xl md:text-3xl xl:text-4xl text-grey-text ' >Maquinas</h3>
            <ul className='h-[80%] flex flex-col overflow-y-auto pr-5 sm:pr-[10%] mt-3' >
                {
                    machines.map((machine,index) => {
                        return (
                            <li key={index} className='relative flex justify-between items-center flex-wrap h-auto w-full my-5'>
                                <p>{machine.name}</p>
                                <p onClick={() => handleMachineClick(machine)} className={`cursor-pointer select-none ${getColorStatus(machine.isActive)} `} >{getStatusDef(machine.isActive)}</p>
                            </li>
                        );
                    })
                }
            </ul>
            {modalOpen && selectedMachine && (
                <div className='fixed inset-0 flex items-center justify-center z-10'>
                <div className='absolute inset-0 bg-black  opacity-50' onClick={closeModal}></div>
                <div className='z-20 bg-white p-8 max-w-[500px] rounded-lg shadow-cardShadow flex flex-col'>
                    <h3 className='text-xl font-semibold mb-4'>Información de la máquina</h3>
                    <p>Folio: {selectedMachine.folio}</p>
                    <p>Status: {selectedMachine.status}</p>
                    <p>Departamento: {selectedMachine.department}</p>
                    <p>Tiempo transcurrido: {selectedMachine.elapsedTime}</p>
                    <button className={`mt-4 ${styles.buttonStyles} ${styles.transitionStyle}`} onClick={closeModal}>
                        Cerrar
                    </button>
                </div>
                </div>
            )}
        </div>
    )
}

export default ListCard     