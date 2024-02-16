import React from 'react'

const Modal = ({ closeModal, title, children }) => {
    const styles = {
        buttonStyles: 'focus:outline-0  text-blue-button border-blue-button hover:border-blue-button border bg-transparent border-opacity-40 hover:border-opacity-100 hover:bg-blue-button hover:bg-opacity-[.05]',
        transitionStyle: 'transition-bg button-ease duration-200'
    };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-10'>
        <div className='absolute inset-0 bg-black  opacity-50' onClick={closeModal}></div>
        <div className='z-20 bg-white p-8 w-[90%] max-w-[500px] rounded-lg shadow-cardShadow flex flex-col'>
            {title && <h3 className='text-xl font-semibold mb-4'>{title}</h3>}
            { children }
            {closeModal && (
                <button className={`mt-8 ${styles.buttonStyles} ${styles.transitionStyle}`} onClick={closeModal}>
                    Cerrar
                </button>
            )}
        </div>
    </div>
  )
}

export default Modal