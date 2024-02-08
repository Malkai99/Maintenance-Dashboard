import React from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen select-none">
    <div className="animate-spin rounded-full border-t-2 border-blue-500 border-t-blue-500 h-12 w-12"></div>
    <span className="ml-4 text-blue-500 font-semibold text-xl">Cargando...</span>
  </div>
);

export default LoadingSpinner;
