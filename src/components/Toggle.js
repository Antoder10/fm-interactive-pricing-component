import React from 'react';

const Toggle = ({setIsYearlyBilling, isYearlyBilling}) => {
  return (
    <div className="flex flex-row items-center">
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 mx-4 bg-light-grayish-blue ${!isYearlyBilling && "bg-grayish-blue"}`}
        onClick={() => setIsYearlyBilling(!isYearlyBilling)}
      >
        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-500 ease-in-out ${!isYearlyBilling && "translate-x-6"}`} />
      </div>
    </div>
  )
}

export default Toggle;