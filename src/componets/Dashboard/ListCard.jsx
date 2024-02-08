import { useState, Fragment } from 'react'
import Carousel from '../Utils/Carousel'
import { FaInfoCircle } from 'react-icons/fa';
import Modal from '../Utils/Modal';
import Tooltip from '../Utils/Tooltip';

const ListCard = ( { machines } ) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);

    const getColorStatus = (isActive) => {
        if(isActive) return 'text-green-success';
        return 'text-red-alert';
    };

    const getStatusDef = (isActive) => {
        const status ={
            "true" : "Activo",
            "false": "Inactivo"
        }
        return status[isActive]
    };

    const handleMachineClick = (machine) => {
        if(machine.isActive) return;
        setModalOpen(true);
        setSelectedMachine(machine.requests)
    };
    
    const closeModal = () => {
        setModalOpen(false);
        setSelectedMachine(null);
    };

    const getMachines = () => {
        return (selectedMachine.map( (request,index) => {
            return (
                <Fragment key={index}>
                    <p>Folio: {request.folio}</p>
                    <p>Status: {request.status}</p>
                    <p>Departamento: {request.department}</p>
                    <p>Tiempo transcurrido: {request.elapsedTime}</p>
                </Fragment>
            )
        }))
    }

    return (
        <div className='font-roboto 2xl:max--[100%] lg:max-w-[100%] lg:max-h-[350px] h-[350px] card__container block w-full pl-8 py-5 max-w-full max-h-80 2xl:max-h-96 bg-white rounded-2xl shadow-cardShadow '>
            <h3 className='font-roboto font-bold w-full text-2xl md:text-3xl xl:text-4xl text-grey-text flex ' >
                <p className='select-none' >Maquinas</p>
                <Tooltip text={"Haz clic en la máquina 'Inactiva' para más detalles."}>
                    <FaInfoCircle
                    style={{ marginLeft: '5px', cursor: 'pointer', width: '20px' }}
                    title="Más información"
                    />
                </Tooltip>
                
            </h3>
            <ul className='h-[80%] flex flex-col overflow-y-auto pr-5 sm:pr-[10%] mt-3' >
                {
                    machines.map((machine,index) => {
                        return (
                            <li key={index} className='relative flex justify-between items-center flex-wrap h-auto w-full my-5'>
                                <p className='cursor-default select-none' >{machine.name}</p>
                                <p onClick={() => handleMachineClick(machine)} className={`${(machine && machine.isActive == false) ? 'cursor-pointer' : 'cursor-default' } select-none ${getColorStatus(machine.isActive)} `} >{getStatusDef(machine.isActive)}</p>
                            </li>
                        );
                    })
                }
            </ul>
            {modalOpen && selectedMachine && (
                <Modal title={"Información de la máquina"} closeModal={closeModal} >
                    <Carousel>
                        {getMachines()}
                    </Carousel>
                </Modal>
            )}

        </div>
    )
}

export default ListCard     