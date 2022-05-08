import React from 'react';
import BasicSelect from "./Input";

const InputContainer = ({sort, handleSort}) => {
    return (
        <div className='bg-white p-4  rounded bg-indigo-50 grid grid-cols-2 md:grid-cols-[1fr_auto] gap-8'>
            <BasicSelect sort={sort} setSort={handleSort}/>
            <button onClick={() => handleSort('clear')}
                    className='border-2 border-b-blue-200 px-4 hover:bg-violet-400 hover:text-white rounded-2xl font-medium'>Clear
                Sort
            </button>
        </div>
    );
};

export default InputContainer;